# VoiceCord

Bot Discord giao tiếp qua kênh thoại, hỗ trợ nhận lệnh giọng nói và trả lời thông minh. Dự án kết hợp Node.js (frontend) và Python (backend).

## Cấu trúc
- `node-bot/`: Bot Discord, giao tiếp với người dùng.
- `python-backend/`: Xử lý lệnh, giọng nói, và logic phức tạp.
- `docs/`: Hướng dẫn cài đặt và triển khai.

## Cách chạy
1. Cài Node.js, Python, FFmpeg.
2. Thiết lập bot Discord và lấy token.
3. Chạy `python-backend`: `cd python-backend && .\venv\Scripts\activate && python src/app.py`
4. Chạy `node-bot`: `cd node-bot && npm start`

## Tính năng
- Nhận lệnh `!listen` để tham gia kênh thoại và trả lời.
- Dự kiến: Speech-to-Text, phát nhạc, tích hợp AI.