import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// CORS 설정
app.use(cors());

// json 요청 처리
app.use(express.json());

// /auth/* auth-service 프록시 연결
app.use('/auth', createProxyMiddleware({
    target : process.env.AUTH_SERVICE_URL,
    changeOrigin: true,
    pathRewrite:{
        '^/auth': '',
    },
}));

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});