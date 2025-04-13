# Hướng dẫn cài đặt VoiceCord

## Yêu cầu
- Node.js (v16+)
- Python (3.8+)
- FFmpeg
- Discord bot token

## Cài đặt Node.js
1. cd node-bot
2. npm install
3. Cấu hình .env (DISCORD_TOKEN, PYTHON_API_URL)

## Cài đặt Python
1. cd python-backend
2. python -m venv venv
3. .\venv\Scripts\activate
4. pip install -r requirements.txt

## Chạy
- Python: cd python-backend && .\venv\Scripts\activate && python src/app.py
- Node.js: cd node-bot && npm start