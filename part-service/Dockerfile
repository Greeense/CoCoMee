# Node 18 이미지 사용
FROM node:18

# 앱 작업 디렉토리 설정
WORKDIR /app

# 패키지 복사 및 설치
COPY package*.json ./
RUN npm install

# 전체 소스 코드 복사
COPY . .

# 개발용 실행 (ts-node-dev 사용 시)
CMD ["npx", "ts-node-dev", "src/index.ts"]