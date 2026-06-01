# Sinh Viên Quán

Ứng dụng web **mobile-first** đặt món tại Căn tin IUH — giao diện theo brand Sinh Viên Quán (tông cam `#a53c00`, typography Be Vietnam Pro / Anton).

## Cấu trúc dự án

```
sinh-vien-quan-release/
├── index.html          # Entry point
├── vercel.json         # Cấu hình Vercel (static)
├── package.json        # Scripts dev / build tùy chọn
├── build-standalone.mjs
├── css/
│   └── app.css
└── js/
    ├── app.js          # SPA chính (runtime)
    ├── database.js     # Dữ liệu tham chiếu (module, không load trực tiếp)
    ├── utils.js
    └── components/     # Component tách file (tham chiếu / refactor sau)
```

**Runtime:** trình duyệt chỉ load `index.html` → `css/app.css` → `js/app.js`.

## Chạy local

### Cách 1 — Static server (khuyến nghị)

```bash
cd sinh-vien-quan-release
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

Hoặc không cần npm:

```bash
npx serve . -l 3000
```

### Cách 2 — VS Code Live Server

Mở `index.html` bằng extension **Live Server** (tránh mở trực tiếp `file://` nếu cần clipboard / một số API).

## Triển khai Vercel

1. Đẩy repo lên GitHub (xem mục dưới).
2. Vào [vercel.com](https://vercel.com) → **Add New Project** → Import repository.
3. Cấu hình:
   - **Framework Preset:** Other
   - **Build Command:** *(để trống)*
   - **Output Directory:** `.` (root)
   - **Install Command:** *(để trống)*
4. Deploy.

Ứng dụng dùng **hash routing** (`#/home`, `#/menu`, …) nên không cần cấu hình rewrite phức tạp.

### Build một file (tùy chọn)

```bash
npm run build
```

Tạo `dist/index.html` (CSS + JS gộp). Deploy thư mục `dist` nếu muốn bản single-file.

## Đẩy lên GitHub

```bash
cd sinh-vien-quan-release
git init
git add .
git commit -m "Initial release: Sinh Viên Quán SPA"
git branch -M main
git remote add origin https://github.com/<username>/sinh-vien-quan.git
git push -u origin main
```

## Tính năng chính

- Trang chủ, thực đơn, voucher, quyết định 3 giây, đơn hàng, thông báo, hồ sơ
- Giỏ hàng & thanh toán (mock)
- Voucher thống nhất: `KHOINGHI5K`, `TRATACFREE`, `CUOITUAN50`, `GIAM10`, `SINHVIEN15`
- Dark mode, toast, confetti, âm thanh tương tác
- Tối ưu mobile: safe-area, touch, `requestAnimationFrame` render

## Phụ thuộc CDN (cần internet)

- [Tailwind CSS CDN](https://cdn.tailwindcss.com)
- Google Fonts (Anton, Be Vietnam Pro, Inter)
- Material Symbols Outlined
- Ảnh món: `i.ibb.co`

## License

Dự án demo / nội bộ thương hiệu Sinh Viên Quán. Liên hệ chủ sở hữu trước khi phân phối thương mại.
