//express 라우터, 외부 요청용 axios, JWT, User 모델 불러오기
import express from 'express';
import axios from  'axios';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

const router = express.Router();

// GET : 구글 로그인 후 리다이렉트 될 때 호출되는 라우터
router.get('/google/callback', async(req, res) => {
    const code = req.query.code as string; //code -> 구글에서 보낸 인가 코드
    if (!code)
        return res.status(400).json({ message : 'Missing Code'});

    try{
        //1. 구글에 access_token 요청(인가코드를 통해 토큰 발급 요청)
        const tokenRes = await axios.post('https://oauth2.googleapis.com/token', {
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_url : process.env.GOOGLE_REDIRECT_URI,
            grant_type: 'authorization_code'
        });

        const accessToken = tokenRes.data.access_token; //발급된 access_token

        //2. access_token을 이용해 사용자 정보 요청
        const userInfoRes = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo',{
            headers : {
                Authorization : `Bearer ${accessToken}`,
            },
        });

        const googleId = userInfoRes.data.id;

        //3. 사용자 DB 조회(없으면 새로 생성)
        let user = await User.findOne({ googleId});
        if( !user ){
            user = await User.create({googleId});
        }

        // JWT 발급 (userId를 payload에 담고 하루 유효)
        const token = jwt.sign(
            { userId : user._id },
            process.env.JWT_SECRET as string,
            { expiresIn : '1d'}
        );

        //JWT와 사용자 ID 반환
        res.json({ token, userId : user._id});
    }catch(err){
        console.error(err);
        res.status(500).json({ message : 'OAuth Error', error: err});
    }
});

export default router;