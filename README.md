# CoCoMee
web+AI(after)
```declarative
cocomee-app/
├── src/
│   ├── controllers/       # 라우터 핸들러 (ex: authController, characterController)
│   ├── routes/            # 라우터 설정 (ex: authRoutes.ts, characterRoutes.ts)
│   ├── models/            # Mongoose 스키마 (User.ts, Character.ts, Part.ts)
│   ├── services/          # 비즈니스 로직 (ex: characterService.ts)
│   ├── middlewares/       # 인증 체크, 에러 처리 등 미들웨어
│   ├── utils/             # 공통 유틸 함수, JWT, OAuth 헬퍼 등
│   ├── config/            # 환경 변수 설정, DB 연결 등
│   ├── app.ts             # Express 앱 설정
│   └── server.ts          # 서버 실행 엔트리 포인트
│
├── public/                # 정적 파일 (캐릭터 이미지, CSS 등)
│
├── .env                   # 환경 변수 파일
├── Dockerfile             # Express 앱 Dockerfile
├── docker-compose.yml     # MongoDB 포함 구성
├── package.json
├── tsconfig.json          # TypeScript 설정
└── README.md
```
📌 주요 폴더 설명

|제목|내용|
|-----|---|
|src/controllers/|각 도메인별 API 핸들러 (ex: 로그인 처리, 캐릭터 저장)|
|src/routes/|라우터 정의 (Express Router)|
|src/models/|Mongoose를 이용한 DB 모델 정의|
|src/services/|컨트롤러에서 분리된 비즈니스 로직|
|src/middlewares/|인증 미들웨어, 에러 처리 등 공통 로직|
|src/utils/|JWT 발급, 구글 OAuth 헬퍼, 공통 유틸 등|
|src/config/|.env 로부터 설정 읽기, DB 연결|
|app.ts|미들웨어 설정 및 라우터 등록|
|server.ts|서버 실행 스크립트 (app.listen)|

	
	
	
	

	
	
	