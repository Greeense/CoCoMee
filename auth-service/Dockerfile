FROM node:18

WORKDIR /app

# package.json, package-lock.json 복사 후 의존성 설치
COPY package*.json ./
RUN npm install

# 나머지 소스 복사
COPY . .

# 개발용 서버 실행
CMD ["npx", "ts-node-dev", "src/index.ts"]