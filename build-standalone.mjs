/**
 * Optional: build single-file index.html into dist/ for offline / minimal hosting.
 * Default Vercel deploy uses index.html + css/ + js/ (no build step).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(fileURLToPath(import.meta.url));
const css = fs.readFileSync(path.join(root, 'css', 'app.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
const oldIndex = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const tailwindMatch = oldIndex.match(/<script id="tailwind-config">([\s\S]*?)<\/script>/);
const tailwind = tailwindMatch ? tailwindMatch[1] : '';

const html = `<!DOCTYPE html>
<html class="light" lang="vi">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0, viewport-fit=cover" name="viewport">
    <meta name="theme-color" content="#a53c00">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="description" content="Sinh Viên Quán - Ăn ngon, tiết kiệm, nhanh chóng. Căn tin IUH dành cho sinh viên.">
    <title>Sinh Viên Quán - Tiết kiệm & Năng động</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍜</text></svg>">
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Be+Vietnam+Pro:wght@400;600;700;800&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
    <style>
${css}
    </style>
    <script id="tailwind-config">${tailwind}
    </script>
</head>
<body class="bg-gray-100 dark:bg-dark-black text-on-surface min-h-screen flex items-center justify-center transition-colors duration-300">
    <div id="app-container" class="relative max-w-md w-full min-h-screen md:min-h-[850px] md:max-h-[900px] md:rounded-[40px] md:shadow-[0_25px_60px_-15px_rgba(165,60,0,0.25)] bg-surface dark:bg-inverse-surface overflow-hidden flex flex-col md:border-8 md:border-dark-black dark:md:border-gray-800 transition-all duration-300">
        <div id="app-intro" class="app-intro" role="dialog" aria-label="Giới thiệu Sinh Viên Quán" aria-modal="true">
            <div class="app-intro__glow app-intro__glow--1" aria-hidden="true"></div>
            <div class="app-intro__glow app-intro__glow--2" aria-hidden="true"></div>
            <div class="app-intro__content">
                <span class="app-intro__badge">Căn tin IUH</span>
                <div class="app-intro__logo-wrap">
                    <img class="app-intro__logo" src="https://i.ibb.co/qF7nYZsg/ideogram-v3-0-typography-logo-design-By-Anon-modern-playful-font-slightly-quirky-letterforms-s-0.png" alt="Sinh Viên Quán" width="96" height="96" decoding="async">
                </div>
                <h1 class="app-intro__brand">Sinh Viên Quán</h1>
                <div class="app-intro__tagline" aria-live="polite">
                    <span class="app-intro__tagline-line">KHÔNG CẦN NGHĨ</span>
                    <span class="app-intro__tagline-accent">CHỌN MÓN NGAY</span>
                </div>
                <p class="app-intro__sub">Ăn ngon · Tiết kiệm · Siêu tốc</p>
            </div>
            <div class="app-intro__progress" aria-hidden="true"><div class="app-intro__progress-bar"></div></div>
        </div>
        <div class="hidden md:flex justify-between items-center px-6 py-2 bg-surface-container-low dark:bg-surface-dim text-on-surface-variant font-label-sm text-[11px] select-none border-b border-outline-variant/10 shrink-0">
            <span class="font-semibold" id="mock-time">12:00</span>
            <div class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[12px] font-bold">signal_cellular_4_bar</span>
                <span class="material-symbols-outlined text-[12px] font-bold">wifi</span>
                <span class="material-symbols-outlined text-[14px]">battery_5_bar</span>
            </div>
        </div>
        <div id="header-root" class="shrink-0"></div>
        <div id="drawer-root"></div>
        <main id="main-root" class="flex-1 overflow-y-auto pb-24 pt-14 px-margin-mobile transition-all duration-300"></main>
        <div id="footer-root" class="shrink-0"></div>
        <div id="toast-container" class="absolute bottom-20 left-1/2 -translate-x-1/2 w-[90%] max-w-[340px] z-[100] flex flex-col gap-2 pointer-events-none"></div>
        <canvas id="confetti-canvas" class="absolute inset-0 w-full h-full pointer-events-none z-[99]"></canvas>
    </div>
    <script>
${js}

        function updateMockClock() {
            const timeSpan = document.getElementById('mock-time');
            if (timeSpan) {
                const now = new Date();
                timeSpan.textContent = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
            }
        }
        setInterval(updateMockClock, 1000);
        updateMockClock();
    </script>
</body>
</html>
`;

const distDir = path.join(root, 'dist');
fs.mkdirSync(distDir, { recursive: true });
const outPath = path.join(distDir, 'index.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('Built', outPath, '(' + Math.round(html.length / 1024) + ' KB)');
