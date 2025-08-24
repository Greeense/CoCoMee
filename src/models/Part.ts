import mongoose from 'mongoose';

const partSchema = new mongoose.Schema({
  partId: {
    type: String,
    required: true,
    unique: true
  },
  group: {
    type: String,
    required: true,
    enum: ['머리', '얼굴', '옷']  // 원하는 그룹 추가 가능
  },
  type: {
    type: String,
    required: true,
    enum: [
      '앞머리', '뒷머리', '귀', '눈썹', '눈 라인', '눈알',
      '코', '입', '상의', '하의', '장갑', '신발'
    ]
  },
  filename: {
    type: String,
    required: true
  },
  filepath: {
    type: String,
    required: true
  },
}, {
  timestamps: true  // createdAt, updatedAt 자동 추가
});

const Part = mongoose.model('Part', partSchema);
export default Part;

/*
 {
   "partId": "P001",
   "group": "머리",
   "type": "앞머리",
   "filename": "bangs_01.png",
   "filepath": "/assets/parts/hair/bangs_01.png",
   "createdAt": "2025-08-24T09:00:00Z"
 }
 */