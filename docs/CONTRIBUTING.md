# 🤝 Hướng dẫn Đóng Góp cho VoiceCord

Cảm ơn bạn đã quan tâm đến dự án **VoiceCord**! Chúng tôi luôn hoan nghênh mọi đóng góp từ cộng đồng nhằm cải thiện và mở rộng tính năng cho bot. Dù bạn là người mới học lập trình hay là developer có kinh nghiệm, bạn đều có thể tham gia!

---

## 📌 Những gì bạn có thể đóng góp

### 1. Báo cáo lỗi (Bug Reports)
- Mở Issue trên GitHub với tiêu đề rõ ràng
- Mô tả chi tiết lỗi, cách tái hiện, log nếu có, hệ điều hành và phiên bản Node/Python

### 2. Đề xuất tính năng (Feature Requests)
- Trình bày ý tưởng rõ ràng
- Nêu lý do tại sao tính năng đó cần thiết hoặc hữu ích

### 3. Gửi Pull Request
- Sửa lỗi, thêm tính năng, tối ưu hiệu suất hoặc cải thiện tài liệu

### 4. Dịch thuật
- Đóng góp bản dịch tài liệu sang ngôn ngữ khác

---

## ⚙️ Quy trình gửi Pull Request

1. **Fork** repository về tài khoản cá nhân
2. **Tạo branch mới**:
   ```bash
   git checkout -b feature/ten-tinh-nang
   ```
3. **Thực hiện thay đổi** và commit:
   ```bash
   git commit -m "✨ feat: Thêm tính năng chuyển văn bản thành giọng nói"
   ```
4. **Push lên GitHub**:
   ```bash
   git push origin feature/ten-tinh-nang
   ```
5. **Tạo Pull Request**, mô tả thay đổi và lý do

> Lưu ý: PR có thể được review trong vòng 1–3 ngày. Nếu có thay đổi yêu cầu chỉnh sửa, bạn sẽ được thông báo.

---

## 🧪 Quy ước viết mã

### 1. Tên commit (theo Conventional Commits):
| Loại     | Ý nghĩa                         |
|----------|----------------------------------|
| `feat`   | Tính năng mới                   |
| `fix`    | Sửa lỗi                         |
| `docs`   | Cập nhật tài liệu               |
| `style`  | Định dạng (không ảnh hưởng logic) |
| `refactor`| Cải tiến code không thay đổi logic |
| `perf`   | Tối ưu hiệu suất               |
| `test`   | Thêm/chỉnh sửa test case       |
| `chore`  | Việc phụ trợ như cấu hình, CI/CD |

### 2. Code style
- **Python**: Tuân thủ PEP8, dùng `black` và `flake8`
- **JavaScript**: Tuân thủ ESLint (đã cấu hình trong repo)

---

## 📦 Thiết lập môi trường phát triển

### Yêu cầu:
- Node.js >= 18.x
- Python >= 3.10
- FFmpeg (có trong biến môi trường PATH)

### Gợi ý:
- Dùng VSCode với extensions: ESLint, Python, Prettier
- Tạo `.env` cho token bot, ví dụ:
```env
DISCORD_TOKEN=your_token_here
```

---

## 💡 Gợi ý đóng góp cho người mới bắt đầu

Bạn có thể bắt đầu từ các phần nhỏ:
- Sửa lỗi chính tả trong tài liệu
- Viết README tiếng Việt/tiếng Anh
- Refactor code cũ
- Cập nhật changelog trong `README.md`

---

## 📬 Liên hệ

- Email: kaiyodev.sec@gmail.com
- GitHub: [KaiyoDev](https://github.com/KaiyoDev)

Chúng tôi rất mong được hợp tác cùng bạn để xây dựng VoiceCord ngày càng tốt hơn! 💙

