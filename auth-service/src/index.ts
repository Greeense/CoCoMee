//여기가 진입점!
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import authRoutes from './routes/auth';

// .env 파일의 환경변수로드
dotenv.config();

const app = express();

// CORS 허용
app.use(cors());

// JSON 파싱 미들웨어
app.use(express.json());

// /auth 경로 하위 라우터 연결
app.use('/auth', authRoutes);

const PORT = press.env.PORT || 3001;

// DB 연결 후 서버 실행
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Auth service running on port ${PORT}`);
    });
});