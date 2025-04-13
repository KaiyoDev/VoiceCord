
# 🛠️ Hướng dẫn cài đặt VoiceCord

### 📋 Yêu cầu hệ thống
- [Node.js](https://nodejs.org/) **v16 trở lên**
- [Python](https://www.python.org/) **v3.8 trở lên**
- [FFmpeg](https://ffmpeg.org/) (cần có trong biến môi trường `PATH`)
- Token bot Discord

---

### 🧩 Cài đặt Node.js (Bot Discord)
1. Mở Terminal hoặc CMD:
```bash
cd node-bot
```

2. Cài đặt các thư viện cần thiết:
```bash
npm install
```

3. Tạo file `.env` trong thư mục `node-bot` và thêm nội dung:
```env
DISCORD_TOKEN=your_bot_token_here
PYTHON_API_URL=http://localhost:5000
```

---

### 🧠 Cài đặt Python (Xử lý backend & AI)

1. Mở Terminal hoặc CMD:
```bash
cd python-backend
```

2. Tạo môi trường ảo:
```bash
python -m venv venv
```

3. Kích hoạt môi trường ảo:
- Windows:
```bash
.\venv\Scripts\activate
```
- macOS/Linux:
```bash
source venv/bin/activate
```

4. Cài đặt các thư viện cần thiết:
```bash
pip install -r requirements.txt
```

---

### 🚀 Chạy dự án

**Chạy backend (Python):**
```bash
cd python-backend
.\venv\Scripts\activate  # hoặc source venv/bin/activate trên macOS/Linux
python src/app.py
```

**Chạy frontend bot (Node.js):**
```bash
cd node-bot
npm start
```

---

### ⚠️ Lỗi thường gặp và cách khắc phục

1. **Lỗi khi cài đặt Node.js (npm install)**
   - **Lỗi**: `npm ERR! code EACCES`
   - **Nguyên nhân**: Quyền truy cập bị hạn chế khi cài đặt gói npm.
   - **Cách khắc phục**: Chạy lệnh với quyền quản trị:
     ```bash
     sudo npm install
     ```
   - Hoặc thay đổi quyền thư mục npm cache:
     ```bash
     sudo chown -R $USER:$(id -gn $USER) ~/.npm
     ```

2. **Lỗi `ModuleNotFoundError` khi chạy Python**
   - **Lỗi**: `ModuleNotFoundError: No module named 'flask'`
   - **Nguyên nhân**: Thiếu thư viện cần thiết trong môi trường ảo Python.
   - **Cách khắc phục**: Đảm bảo đã kích hoạt môi trường ảo và cài đặt các thư viện cần thiết:
     ```bash
     cd python-backend
     .\venv\Scripts\activate  # Windows
     source venv/bin/activate  # macOS/Linux
     pip install -r requirements.txt
     ```

3. **Lỗi kết nối giữa Node.js và Python**
   - **Lỗi**: `Error: connect ECONNREFUSED 127.0.0.1:5000`
   - **Nguyên nhân**: Python backend chưa được chạy hoặc không nghe trên cổng 5000.
   - **Cách khắc phục**:
     - Đảm bảo Python backend đang chạy:
     ```bash
     cd python-backend
     .\venv\Scripts\activate  # Windows
     source venv/bin/activate  # macOS/Linux
     python src/app.py
     ```
     - Kiểm tra cổng 5000 có mở và không bị chặn tường lửa.

4. **Lỗi FFmpeg không tìm thấy**
   - **Lỗi**: `bash: ffmpeg: command not found`
   - **Nguyên nhân**: FFmpeg không được cài đặt hoặc không có trong biến môi trường `PATH`.
   - **Cách khắc phục**:
     - Cài đặt FFmpeg:
       - [Windows](https://ffmpeg.org/download.html)
       - [macOS](https://ffmpeg.org/download.html)
       - [Linux](https://ffmpeg.org/download.html)
     - Thêm FFmpeg vào `PATH`.

5. **Lỗi Discord Bot không nhận token**
   - **Lỗi**: `Error: Invalid token provided`
   - **Nguyên nhân**: Token bot Discord không hợp lệ hoặc bị sai.
   - **Cách khắc phục**:
     - Kiểm tra token trong file `.env` của `node-bot`:
     ```env
     DISCORD_TOKEN=your_bot_token_here
     ```
     - Đảm bảo rằng token trong Discord Developer Portal là chính xác và không bị thay đổi.

6. **Lỗi cổng không mở khi chạy Python backend**
   - **Lỗi**: `Error: listen EADDRINUSE`
   - **Nguyên nhân**: Cổng 5000 đã được sử dụng bởi một ứng dụng khác.
   - **Cách khắc phục**:
     - Đảm bảo không có ứng dụng nào khác sử dụng cổng 5000.
     - Thử thay đổi cổng trong `app.py` của Python backend.
     ```python
     app.run(host='0.0.0.0', port=5001)
     ```

7. **Lỗi không thể nghe âm thanh từ Discord**
   - **Lỗi**: Không nghe được âm thanh từ voice channel hoặc không phản hồi.
   - **Nguyên nhân**: Thiếu quyền truy cập vào voice channel hoặc vấn đề với thư viện xử lý âm thanh.
   - **Cách khắc phục**:
     - Đảm bảo bot có quyền kết nối và nói chuyện trong voice channel.
     - Kiểm tra lại cấu hình FFmpeg và các thư viện như `discord.py` và `discord.js`.

---

Chúc bạn thành công trong việc cài đặt và sử dụng **VoiceCord**! Nếu gặp khó khăn, đừng ngần ngại liên hệ để được hỗ trợ.

---
