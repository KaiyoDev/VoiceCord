# 🎹 VoiceCord

**VoiceCord** là một Discord bot hỗ trợ **giao tiếp thông minh bằng giọng nói** trong các kênh thoại.  
Bot có thể **nghe lệnh từ người dùng qua micro**, **xử lý bằng AI/backend Python**, và **phản hồi tự động**.  

> 🧠 Dự án kết hợp giữa **Node.js (frontend Discord bot)** và **Python (backend logic & AI)** nhằm tạo ra một trải nghiệm tương tác linh hoạt và mạnh mẽ.

---

## 🧱 Cấu trúc dự án

```
VoiceCord/
├── node-bot/         # Bot Discord chạy bằng Node.js, tiếp nhận âm thanh người dùng
├── python-backend/   # Xử lý giọng nói, AI, logic phía server
├── docs/             # Tài liệu hướng dẫn cài đặt & triển khai
└── README.md
```

---

## 🚀 Cách chạy

1. **Cài đặt yêu cầu:**
   - [Node.js](https://nodejs.org/)
   - [Python 3.10+](https://www.python.org/)
   - [FFmpeg](https://ffmpeg.org/)

2. **Tạo bot trên Discord Developer Portal và lấy token**

3. **Chạy backend (Python):**
```bash
cd python-backend
python -m venv venv
.\venv\Scripts\activate  # hoặc source venv/bin/activate trên macOS/Linux
pip install -r requirements.txt
python src/app.py
```

4. **Chạy bot (Node.js):**
```bash
cd node-bot
npm install
npm start
```

---

## ✨ Tính năng hiện tại

| Ngày cập nhật | Tính năng                                                                 |
|---------------|--------------------------------------------------------------------------|
| 2025-04-10    | `!listen` - Tham gia voice channel, bắt đầu nghe giọng nói người dùng    |
| 2025-04-10    | Gửi dữ liệu âm thanh tới Python backend để xử lý                        |
| 2025-04-11    | Phản hồi văn bản thông minh dựa trên nội dung nói                      |
| 2025-04-12    | Phát âm phản hồi (Text-to-Speech) vào kênh voice                        |
| 2025-04-13    | Ghi log các cuộc hội thoại vào file                                      |

---

## 🛠️ Tính năng sắp ra mắt

- 🔊 Chuyển giọng nói thành văn bản (Speech-to-Text)
- 🤖 Tích hợp AI trả lời thông minh (ChatGPT, RAG, v.v.)
- 🎵 Phát nhạc từ YouTube/Spotify
- 📋 Giao diện điều khiển web đơn giản (Node.js + Express)

---

## 📄 License

Phát hành dưới [MIT License](LICENSE)

---

## 🤝 Đóng góp

Chào mừng mọi đóng góp!  
Bạn có thể:
- Mở issue để thảo luận
- Gửi pull request
- Cải tiến tính năng hoặc tài liệu

> Xem thêm tại [CONTRIBUTING.md](https://github.com/KaiyoDev/VoiceCord/blob/main/docs/CONTRIBUTING.md)

---

## 📬 Liên hệ

📧 Sadboydev06@gmail.com  
🛠️ GitHub: [KaiyoDev](https://github.com/KaiyoDev)

