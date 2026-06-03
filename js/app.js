// --- Sinh Viên Quán - Unified High-Fidelity SPA Controller ---
// This file merges database, utilities, components, and routing to bypass CORS issues on local file:/// protocols.

// ==========================================
// 1. DATABASE STATE & SEED DATA
// ==========================================
const combos = [
    {
        id: "combo-1",
        name: "Combo Kịp Tiết",
        dishName: "Cơm Xá Xíu Chuẩn Vị + Trà Tắc Giải Nhiệt",
        price: 50000,
        time: "7 phút",
        status: "Sẵn sàng ngay",
        reason: "Ăn no chắc bụng, giải nhiệt tức thì, sẵn sàng cho buổi chiều năng động.",
        tags: ["Khỏi Nghĩ", "2 Phút Có Cơm"],
        image: "https://i.ibb.co/B5m2Hdrr/C-m-X-X-u-Chu-n-V.jpg",
        imageAlt: "Combo Cơm Xá Xíu Chuẩn Vị và Trà Tắc Giải Nhiệt mát lạnh."
    },
    {
        id: "combo-2",
        name: "Combo Chống Nghèo",
        dishName: "Bún Thịt Nướng Đầy Đủ + Sâm Lục Vị Mát Gan",
        price: 50000,
        time: "4 phút",
        status: "Nấu cấp tốc",
        reason: "Tô bún đầy đặn kèm nước sâm lục vị giải nhiệt mát lành, tiếp sức học tập cực tiết kiệm.",
        tags: ["Cứu Đói", "Siêu Rẻ"],
        image: "https://i.ibb.co/ycDfgkng/B-n-Th-t-N-ng-y.jpg",
        imageAlt: "Combo Bún Thịt Nướng Đầy Đủ và Sâm Lục Vị Mát Gan giải nhiệt."
    },
    {
        id: "combo-3",
        name: "Combo Bắt Trend",
        dishName: "Cơm Thịt Heo Chiên Xù + Smoothie Matcha Kem Phô Mai",
        price: 65000,
        time: "6 phút",
        status: "Giòn rụm béo ngậy",
        reason: "Thịt heo chiên xù giòn tan ăn cùng smoothie matcha phô mai mặn béo ngậy cực bắt trend.",
        tags: ["Ăn Vặt", "Độc Lạ"],
        image: "https://i.ibb.co/BHwysVs8/C-m-Th-t-Heo-Chi-n-Gi-n.jpg",
        imageAlt: "Combo Cơm Thịt Heo Chiên Xù và Smoothie Matcha Kem Phô Mai béo ngậy."
    },
    {
        id: "combo-4",
        name: "Combo Học Đêm",
        dishName: "Cơm Tấm Sườn Bì Chả + Trà Dâu Tằm",
        price: 60000,
        time: "8 phút",
        status: "Đầy năng lượng",
        reason: "Học đêm no căng với đĩa cơm tấm sườn nướng chất lượng cùng trà dâu tằm chua ngọt tỉnh người.",
        tags: ["Tập Trung", "Tỉnh Táo"],
        image: "https://i.ibb.co/V7c7Pzq/C-m-T-m-S-n-B-Ch.jpg",
        imageAlt: "Combo Cơm Tấm Sườn Bì Chả và Trà Dâu Tằm ngọt ngào."
    }
];

const singleItems = [
    {
        id: "food-1",
        name: "Bún Thịt Nướng Đầy Đủ",
        price: 40000,
        originalPrice: 45000,
        category: "food",
        image: "https://i.ibb.co/ycDfgkng/B-n-Th-t-N-ng-y.jpg"
    },
    {
        id: "food-2",
        name: "Cơm Tấm Sườn Bì Chả",
        price: 40000,
        originalPrice: 45000,
        category: "food",
        image: "https://i.ibb.co/V7c7Pzq/C-m-T-m-S-n-B-Ch.jpg"
    },
    {
        id: "food-3",
        name: "Cơm Xá Xíu Chuẩn Vị",
        price: 35000,
        originalPrice: 40000,
        category: "food",
        image: "https://i.ibb.co/B5m2Hdrr/C-m-X-X-u-Chu-n-V.jpg"
    },
    {
        id: "food-4",
        name: "Cơm Thịt Heo Chiên Xù",
        price: 35000,
        originalPrice: 40000,
        category: "food",
        image: "https://i.ibb.co/BHwysVs8/C-m-Th-t-Heo-Chi-n-Gi-n.jpg"
    },
    {
        id: "drink-1",
        name: "Trà Dâu Tằm",
        price: 30000,
        originalPrice: 35000,
        category: "drink",
        image: "https://i.ibb.co/zWj6d8fk/Tr-D-u-T-m.jpg"
    },
    {
        id: "drink-2",
        name: "Sâm Lục Vị Mát Gan",
        price: 20000,
        originalPrice: null,
        category: "drink",
        image: "https://i.ibb.co/67Q4HTGR/S-m-L-c-V-M-t-Gan.jpg"
    },
    {
        id: "drink-3",
        name: "Matcha Latte",
        price: 35000,
        originalPrice: null,
        category: "drink",
        image: "https://i.ibb.co/gFfdJRK3/Matcha-Latte.jpg"
    },
    {
        id: "drink-4",
        name: "Smoothie Matcha Kem Phô Mai",
        price: 40000,
        originalPrice: 45000,
        category: "drink",
        image: "https://i.ibb.co/wZvNDCmJ/Smoothie-Matcha-Kem-Ph-Mai.jpg"
    },
    {
        id: "drink-5",
        name: "Trà Tắc Giải Nhiệt",
        price: 25000,
        originalPrice: null,
        category: "drink",
        image: "https://i.ibb.co/G35GkzS4/Tr-T-c.jpg"
    }
];

const initialVouchers = [
    {
        id: "v1",
        title: "Giảm 5.000đ cho đơn tiếp theo",
        condition: "Đơn từ 35k",
        expiry: "30/05/2026",
        tag: "KHỎI NGHĨ",
        tagColor: "bg-status-yellow/20 text-status-brown border-status-yellow/30",
        valueText: "5K",
        type: "Giảm",
        icon: "savings",
        code: "KHOINGHI5K",
        category: "available",
        isNew: true
    },
    {
        id: "v2",
        title: "Trà tắc miễn phí",
        condition: "Đổi từ điểm",
        expiry: "31/05/2026",
        tag: "MÁT LẠNH",
        tagColor: "bg-status-green/20 text-status-green border-status-green/30",
        valueText: "FREE",
        type: "Tặng",
        icon: "local_bar",
        code: "TRATACFREE",
        category: "available",
        isNew: true
    },
    {
        id: "v3",
        title: "Voucher Giảm 50% Nước Cuối Tuần",
        condition: "Đơn từ 50k",
        expiry: "07/06/2026",
        tag: "CỰC CHÁY",
        tagColor: "bg-status-red/20 text-status-red border-status-red/30",
        valueText: "50%",
        type: "Giảm",
        icon: "confirmation_number",
        code: "CUOITUAN50",
        category: "available",
        isNew: false
    },
    {
        id: "v4",
        title: "Giảm 5.000đ cho đơn đầu tiên",
        condition: "Dành cho SV mới",
        useDetail: "Đã dùng cho đơn SVQ-024",
        usedDate: "15/02/2024",
        valueText: "5K",
        type: "Đã dùng",
        icon: "check_circle",
        code: "SVQNEW5",
        category: "used"
    }
];

const initialNotifications = [
    {
        id: "n1",
        title: "Món của bạn đã sẵn sàng",
        desc: "Đơn SVQ-024 đang chờ bạn tại quầy nhận món số 3.",
        time: "Vừa xong",
        type: "hoat-dong",
        icon: "restaurant",
        iconBg: "bg-primary-fixed",
        iconColor: "text-primary",
        actionText: "Xem đơn",
        actionHash: "#/orders",
        unread: true
    },
    {
        id: "n2",
        title: "Bạn có voucher mới",
        desc: "Mã giảm 5.000đ đã được thêm vào ví điểm thưởng của bạn.",
        time: "10:00",
        type: "hoat-dong",
        icon: "confirmation_number",
        iconBg: "bg-status-yellow/20",
        iconColor: "text-status-brown",
        actionText: "Xem voucher",
        actionHash: "#/vouchers",
        unread: true
    },
    {
        id: "n3",
        title: "Giờ vàng chống đói",
        desc: "Từ 14h–15h hôm nay, giảm giá trà tắc khổng lồ chỉ còn 9.000đ.",
        time: "Hôm nay",
        type: "hoat-dong",
        icon: "flash_on",
        iconBg: "bg-tertiary-fixed",
        iconColor: "text-tertiary",
        actionText: "Đặt ngay",
        actionHash: "#/menu",
        unread: false
    },
    {
        id: "n4",
        title: "Voucher Giảm 50% Cuối Tuần",
        desc: "Săn ngay mã \"CUOITUAN50\" giảm nửa giá cho tất cả các món nước. Áp dụng cho đơn từ 50k.",
        time: "2 giờ trước",
        type: "uu-dai",
        icon: "confirmation_number",
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=150",
        actionText: "Nhận voucher",
        unread: true
    },
    {
        id: "n5",
        title: "Khuyến mãi \"Đi Nhóm\"",
        desc: "Đi 4 tính tiền 3 khi gọi Combo Sinh Viên Đặc Biệt. Rủ ngay hội bạn thân qua Sinh Viên Quán nhé!",
        time: "Thứ 3",
        type: "uu-dai",
        icon: "confirmation_number",
        iconBg: "bg-status-yellow/20",
        iconColor: "text-status-brown",
        unread: false
    },
    {
        id: "n6",
        title: "Check-in Thứ 5: Nhận Flan Béo Ngậy",
        desc: "Nhận ngay bánh Flan trứng sữa thơm lừng khi check-in tại quán vào thứ 5 hàng tuần.",
        time: "2 ngày trước",
        type: "uu-dai",
        icon: "cake",
        iconBg: "bg-primary-fixed",
        iconColor: "text-primary",
        unread: false
    }
];

// ==========================================
// 2. STATE MANAGER
// ==========================================
const state = {
    theme: localStorage.getItem('theme') || 'light',
    currentRoute: window.location.hash || '#/home',
    vouchers: [...initialVouchers],
    notifications: [...initialNotifications],
    cart: {}, 
    orders: [
        {
            id: "SVQ-024",
            itemName: "Cơm xá xíu + Trà tắc giải nhiệt",
            price: 50000,
            time: "15:20 Hôm nay",
            status: "pending",
            step: 3
        },
        {
            id: "SVQ-023",
            itemName: "Bánh mì muối ớt + Trà sữa boba",
            price: 45000,
            time: "Hôm qua",
            status: "completed"
        }
    ],
    selectedCombo: combos[0], 
    isSpinning: false,
    appliedVoucherId: null,
    menuFilter: 'all',
    menuSearch: '',
    notificationTab: 'hoat-dong',
    dineOption: 'eat-in',
    cartNote: '',
    appliedVoucherCode: null,
    paymentMethod: 'cash',
    addedItemSheet: null,
    showAddAddressForm: false,
    addresses: [
        { id: "a1", label: "Ký túc xá Khu B ĐHQG", desc: "Tòa B3, Phòng 502, Phường Linh Trung, Thủ Đức", isDefault: true },
        { id: "a2", label: "Thư viện Trung tâm ĐHQG", desc: "Khu bàn tự học lầu 2, Kế cửa sổ hướng hồ đá", isDefault: false }
    ]
};

// ==========================================
// 2b. CART & VOUCHER HELPERS (single source of truth)
// ==========================================
const KNOWN_VOUCHER_CODES = ['GIAM10', 'SINHVIEN15', 'KHOINGHI5K', 'TRATACFREE', 'CUOITUAN50'];

const PAYMENT_QR_BRAND_LOGO = 'https://i.ibb.co/qF7nYZsg/ideogram-v3-0-typography-logo-design-By-Anon-modern-playful-font-slightly-quirky-letterforms-s-0.png';

const PAYMENT_QR = {
    momo: {
        image: 'https://i.ibb.co/fVrRf2kC/Momo-5k.jpg',
        title: 'Quét mã MoMo',
        hint: 'Mở MoMo → Quét mã → Chuyển đúng số tiền bên dưới'
    },
    zalopay: {
        image: 'https://i.ibb.co/fVrRf2kC/Momo-5k.jpg',
        title: 'Quét mã ZaloPay',
        hint: 'Mở ZaloPay → Quét mã → Chuyển đúng số tiền bên dưới'
    }
};

function renderPaymentQrPanel(method, amount) {
    const config = PAYMENT_QR[method];
    if (!config) return '';

    const amountFormatted = amount.toLocaleString('vi-VN') + 'đ';

    return `
        <div class="payment-qr-panel mt-3 p-4 bg-surface-container-lowest dark:bg-surface-dim rounded-2xl border border-primary/20 dark:border-primary-fixed-dim/30 shadow-sm animate-fade-in select-none">
            <div class="flex items-center gap-2 mb-3">
                <span class="material-symbols-outlined text-primary dark:text-primary-fixed-dim text-[20px]" style="font-variation-settings: 'FILL' 1;">qr_code_2</span>
                <div>
                    <p class="font-bold text-xs text-on-surface dark:text-white">${config.title}</p>
                    <p class="text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim">${config.hint}</p>
                </div>
            </div>
            <div class="payment-qr-frame bg-white p-4 rounded-xl shadow-inner border border-outline-variant/20 flex flex-col items-center w-full">
                <p class="text-[10px] text-on-surface-variant font-semibold uppercase tracking-wide text-center">Số tiền cần thanh toán</p>
                <p class="font-label-price text-2xl font-extrabold text-primary dark:text-primary-fixed-dim text-center mb-3">${amountFormatted}</p>
                <div class="payment-qr-wrap">
                    <img
                        class="payment-qr-img"
                        src="${config.image}"
                        alt="Mã QR thanh toán ${config.title}"
                        loading="lazy"
                        decoding="async"
                    >
                    <div class="payment-qr-logo" aria-hidden="true">
                        <img
                            src="${PAYMENT_QR_BRAND_LOGO}"
                            alt="Sinh Viên Quán"
                            loading="lazy"
                            decoding="async"
                        >
                    </div>
                </div>
                <p class="text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim text-center mt-3 leading-relaxed px-1">
                    Nội dung chuyển khoản: <span class="font-bold text-on-surface dark:text-white">SVQ + mã đơn</span> (hiển thị sau khi đặt)
                </p>
            </div>
            <p class="text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim text-center mt-3 leading-relaxed">
                Sau khi chuyển, bấm <span class="font-bold text-primary">Hoàn tất thanh toán</span> bên dưới.
            </p>
        </div>
    `;
}

function getProductById(itemId) {
    return combos.find(c => c.id === itemId) || singleItems.find(i => i.id === itemId);
}

function getCartSubtotal(cart) {
    let total = 0;
    Object.entries(cart || {}).forEach(([itemId, qty]) => {
        const product = getProductById(itemId);
        if (product) total += product.price * qty;
    });
    return total;
}

function calculateVoucherDiscount(subtotal, cart) {
    const code = (state.appliedVoucherCode || '').toUpperCase();
    if (!code) return { discount: 0, label: '', valid: true };

    switch (code) {
        case 'GIAM10':
            if (subtotal < 50000) {
                return { discount: 0, label: '', valid: false, reason: 'Đơn tối thiểu 50.000đ để dùng GIAM10' };
            }
            return { discount: 10000, label: '-10k (GIAM10)', valid: true };
        case 'SINHVIEN15':
            return { discount: Math.round(subtotal * 0.15), label: '-15% (SINHVIEN15)', valid: true };
        case 'KHOINGHI5K':
            if (subtotal < 35000) {
                return { discount: 0, label: '', valid: false, reason: 'Đơn tối thiểu 35.000đ để dùng mã KHOINGHI5K' };
            }
            return { discount: 5000, label: '-5k (KHOINGHI5K)', valid: true };
        case 'TRATACFREE': {
            const tratacQty = (cart && cart['drink-5']) || 0;
            if (tratacQty < 1) {
                return { discount: 0, label: '', valid: false, reason: 'Thêm Trà Tắc Giải Nhiệt vào giỏ để dùng voucher này' };
            }
            const tratac = getProductById('drink-5');
            return { discount: tratac ? tratac.price : 25000, label: 'Trà tắc FREE', valid: true };
        }
        case 'CUOITUAN50': {
            if (subtotal < 50000) {
                return { discount: 0, label: '', valid: false, reason: 'Đơn tối thiểu 50.000đ cho voucher cuối tuần' };
            }
            let drinkTotal = 0;
            Object.entries(cart || {}).forEach(([itemId, qty]) => {
                const product = getProductById(itemId);
                if (product && product.category === 'drink') {
                    drinkTotal += product.price * qty;
                }
            });
            if (drinkTotal === 0) {
                return { discount: 0, label: '', valid: false, reason: 'Thêm món nước vào giỏ để được giảm 50%' };
            }
            return { discount: Math.round(drinkTotal * 0.5), label: '-50% nước', valid: true };
        }
        default:
            return { discount: 0, label: '', valid: false, reason: `Mã ${code} không khả dụng` };
    }
}

function clearAppliedVoucher() {
    state.appliedVoucherId = null;
    state.appliedVoucherCode = null;
}

function getOrderTotals(cart) {
    const cartTotal = getCartSubtotal(cart);
    const prepFee = 3000;
    const voucher = calculateVoucherDiscount(cartTotal, cart);
    const finalTotal = Math.max(0, cartTotal + prepFee - voucher.discount);
    return { cartTotal, prepFee, voucher, finalTotal };
}

let renderScheduled = false;
function scheduleRenderApp() {
    if (renderScheduled) return;
    renderScheduled = true;
    requestAnimationFrame(() => {
        renderScheduled = false;
        renderApp();
    });
}

// ==========================================
// 3. UTILITIES ENGINE
// ==========================================
let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playClickSound() {
    try {
        const ctx = getAudioContext();
        if (ctx.state === 'suspended') ctx.resume();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.05);
        
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
        console.warn("Audio Context blocked or not supported", e);
    }
}

function playSuccessSound() {
    try {
        const ctx = getAudioContext();
        if (ctx.state === 'suspended') ctx.resume();
        
        const playNote = (freq, delay, duration) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
            gain.gain.setValueAtTime(0.08, ctx.currentTime + delay);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(ctx.currentTime + delay);
            osc.stop(ctx.currentTime + delay + duration);
        };
        
        playNote(523.25, 0, 0.15); 
        playNote(659.25, 0.08, 0.25); 
    } catch (e) {
        console.warn("Audio Context blocked", e);
    }
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-enter flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg text-sm font-semibold pointer-events-auto backdrop-blur-md transition-all duration-300`;
    
    if (type === 'success') {
        toast.className += ' bg-status-green/90 text-white border-status-green/20';
    } else if (type === 'info') {
        toast.className += ' bg-primary-container/90 text-white border-primary/20';
    } else {
        toast.className += ' bg-surface-container-high/90 text-on-surface border-outline-variant/30';
    }

    let iconName = 'check_circle';
    if (type === 'info') iconName = 'info';
    else if (type === 'warning') iconName = 'warning';

    toast.innerHTML = `
        <span class="material-symbols-outlined text-[20px] shrink-0">${iconName}</span>
        <span class="flex-grow text-xs">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('toast-enter');
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}

function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const appContainer = document.getElementById('app-container');
    if (!appContainer) return;
    canvas.width = appContainer.clientWidth;
    canvas.height = appContainer.clientHeight;

    playSuccessSound();

    const colors = ['#f46b2a', '#a53c00', '#FBBF24', '#10B981', '#00658c'];
    const particles = [];

    for (let i = 0; i < 60; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: -10 - Math.random() * 20,
            r: 4 + Math.random() * 6,
            d: Math.random() * canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5,
            tiltAngleIncremental: Math.random() * 0.07 + 0.02,
            tiltAngle: 0,
            w: 8 + Math.random() * 6,
            h: 4 + Math.random() * 4,
            speedY: 2 + Math.random() * 3,
            speedX: Math.random() * 2 - 1
        });
    }

    let animationFrameId;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let remaining = false;

        particles.forEach(p => {
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += p.speedY;
            p.x += p.speedX;
            p.tilt = Math.sin(p.tiltAngle) * 12;

            if (p.y < canvas.height) {
                remaining = true;
                ctx.beginPath();
                ctx.lineWidth = p.r;
                ctx.strokeStyle = p.color;
                ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
                ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
                ctx.stroke();
            }
        });

        if (remaining) {
            animationFrameId = requestAnimationFrame(draw);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cancelAnimationFrame(animationFrameId);
        }
    }

    draw();
}

// ==========================================
// 4. SCREEN COMPONENT RENDERERS
// ==========================================

function renderHeader(state) {
    const isMainPage = ['#/home', '#/vouchers', '#/menu', '#/orders', '#/profile'].includes(state.currentRoute) || !state.currentRoute || state.currentRoute === '#/';
    let headerHTML = '';

    if (isMainPage) {
        const unreadCount = state.notifications.filter(n => n.unread).length;
        const badgeHTML = unreadCount > 0 
            ? `<span class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-status-red rounded-full border border-surface badge-pulse"></span>` 
            : '';

        const cartCount = Object.values(state.cart).reduce((sum, q) => sum + q, 0);
        const cartBadgeHTML = cartCount > 0 
            ? `<span class="absolute -top-1 -right-1 bg-status-red text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm badge-pulse">${cartCount}</span>` 
            : '';

        headerHTML = `
            <header class="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile h-14 bg-surface-container-low dark:bg-surface-dim border-b border-outline-variant/10 shadow-sm transition-colors duration-300">
                <div class="flex items-center gap-2 cursor-pointer" onclick="window.location.hash = '#/home'">
                    <span class="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
                    <h1 class="font-hero-mobile text-[24px] leading-tight text-primary font-bold">Sinh Viên Quán</h1>
                </div>
                <div class="flex items-center gap-4">
                    <button class="relative material-symbols-outlined text-on-surface-variant hover:text-primary hover:scale-105 active:scale-95 transition-transform animate-fade-in" data-icon="shopping_cart" onclick="window.location.hash = '#/cart'">
                        shopping_cart
                        ${cartBadgeHTML}
                    </button>
                    <button class="relative material-symbols-outlined text-on-surface-variant hover:text-primary hover:scale-105 active:scale-95 transition-transform" data-icon="notifications" onclick="window.location.hash = '#/notifications'">
                        notifications
                        ${badgeHTML}
                    </button>
                    <button class="material-symbols-outlined text-on-surface-variant hover:text-primary hover:scale-105 active:scale-95 transition-transform" data-icon="menu" onclick="window.toggleDrawer()">
                        menu
                    </button>
                </div>
            </header>
        `;
    } else {
        let pageTitle = "Sinh Viên Quán";
        if (state.currentRoute === '#/notifications') pageTitle = "Thông báo";
        if (state.currentRoute === '#/decision') pageTitle = "Quán Chọn Giúp";
        if (state.currentRoute === '#/addresses') pageTitle = "Địa chỉ đã lưu";

        headerHTML = `
            <header class="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile h-14 bg-surface-container-low dark:bg-surface-dim border-b border-outline-variant/10 shadow-sm transition-colors duration-300">
                <div class="flex items-center gap-stack-sm">
                    <button class="active:scale-95 transition-transform text-on-surface hover:text-primary p-1 rounded-full hover:bg-surface-variant/30 flex items-center justify-center" onclick="window.history.back()">
                        <span class="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h1 class="font-section-title-mobile text-section-title-mobile text-primary font-extrabold text-[20px] ml-1">${pageTitle}</h1>
                </div>
                ${state.currentRoute === '#/notifications' ? `
                    <button class="active:scale-95 transition-transform text-on-surface hover:text-primary hover:opacity-80 p-1 rounded-full hover:bg-surface-variant/30 flex items-center justify-center" onclick="window.markAllNotificationsRead()" title="Đọc tất cả">
                        <span class="material-symbols-outlined">done_all</span>
                    </button>
                ` : '<div></div>'}
            </header>
        `;
    }

    return headerHTML;
}

function renderFooter(state) {
    const route = state.currentRoute || '#/home';
    
    if (route === '#/cart') {
        const { finalTotal } = getOrderTotals(state.cart);

        return `
            <div class="absolute bottom-0 left-0 w-full z-50 bg-surface dark:bg-inverse-surface px-margin-mobile py-4 border-t border-outline-variant/10 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] pb-safe transition-colors duration-300">
                <div class="max-w-md mx-auto flex gap-4 items-center justify-between select-none">
                    <div class="flex flex-col shrink-0">
                        <span class="text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim">Tổng thanh toán</span>
                        <span class="font-label-price text-lg font-extrabold text-primary dark:text-primary-fixed-dim">${finalTotal.toLocaleString('vi-VN')}đ</span>
                    </div>
                    <button class="flex-grow bg-primary-container hover:bg-primary text-white font-extrabold py-3.5 rounded-xl shadow-md text-xs flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all squishy-button" onclick="window.location.hash = '#/checkout'">
                        Tiếp tục thanh toán
                        <span class="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>
        `;
    }

    if (route === '#/checkout') {
        const { finalTotal } = getOrderTotals(state.cart);

        return `
            <div class="absolute bottom-0 left-0 w-full bg-surface dark:bg-inverse-surface shadow-lg z-50 border-t border-outline-variant/10 rounded-t-2xl pb-safe transition-colors duration-300">
                <div class="max-w-md mx-auto p-4 flex flex-col gap-3">
                    <div class="flex justify-between items-end mb-1 select-none">
                        <div class="text-on-surface-variant dark:text-secondary-fixed-dim">
                            <p class="text-[10px]">Tổng thanh toán</p>
                            <p class="font-label-price text-lg font-extrabold text-primary dark:text-primary-fixed-dim">${finalTotal.toLocaleString('vi-VN')}đ</p>
                        </div>
                        <p class="text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim text-right max-w-[180px] leading-snug">Bấm đặt món để xác nhận đơn hàng.</p>
                    </div>
                    <button class="w-full h-12 bg-primary hover:bg-primary-container text-white py-3 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 squishy-button"
                            onclick="window.checkoutCartFinal()">
                        Xác nhận đặt món ngay
                        <span class="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                </div>
            </div>
        `;
    }

    const tabs = [
        { id: 'home', hash: '#/home', label: 'Trang chủ', icon: 'home' },
        { id: 'menu', hash: '#/menu', label: 'Thực đơn', icon: 'restaurant_menu' },
        { id: 'orders', hash: '#/orders', label: 'Đơn hàng', icon: 'receipt_long' },
        { id: 'vouchers', hash: '#/vouchers', label: 'Ưu đãi', icon: 'confirmation_number' },
        { id: 'profile', hash: '#/profile', label: 'Cá nhân', icon: 'person' }
    ];

    const tabElements = tabs.map(tab => {
        const isActive = route === tab.hash || (tab.id === 'home' && (route === '#/' || !route));
        const activeClass = isActive 
            ? 'text-primary dark:text-primary-fixed-dim font-semibold scale-105' 
            : 'text-on-secondary-container dark:text-secondary-fixed-dim hover:text-primary';
        
        const fillSetting = isActive ? "style=\"font-variation-settings: 'FILL' 1;\"" : '';

        return `
            <a class="flex flex-col items-center justify-center gap-1 ${activeClass} transition-all duration-200 px-2 py-1 select-none" href="${tab.hash}">
                <span class="material-symbols-outlined text-[24px]" ${fillSetting}>${tab.icon}</span>
                <span class="font-label-sm text-[10px] whitespace-nowrap uppercase tracking-tighter">${tab.label}</span>
            </a>
        `;
    }).join('');

    return `
        <nav class="absolute bottom-0 left-0 w-full z-50 h-16 flex justify-around items-center bg-surface-container-lowest dark:bg-inverse-surface border-t border-surface-variant shadow-md px-1 pb-safe transition-colors duration-300">
            ${tabElements}
        </nav>
    `;
}

function renderDrawer(state) {
    const isDark = state.theme === 'dark';
    
    return `
        <div class="absolute inset-0 bg-black/50 z-[55] hidden transition-opacity duration-300" id="drawer-overlay" onclick="window.toggleDrawer()"></div>
        
        <aside class="absolute inset-y-0 left-0 z-[60] flex flex-col p-stack-lg bg-surface dark:bg-inverse-surface h-full w-80 rounded-r-xl shadow-2xl -translate-x-full transition-transform duration-300 border-r border-outline-variant/10" id="nav-drawer">
            <div class="flex flex-col gap-4 mb-8">
                <div class="flex items-center gap-4">
                    <div class="w-16 h-16 rounded-full overflow-hidden bg-primary-container border-2 border-primary shadow-sm shrink-0">
                        <img class="w-full h-full object-cover" alt="Student Profile Picture" src="https://i.ibb.co/whXgVxdz/nh-vest.png">
                    </div>
                    <div>
                        <h2 class="font-bold text-lg text-primary dark:text-primary-fixed-dim">Anh Quốc</h2>
                        <p class="text-sm text-on-surface-variant dark:text-secondary-fixed-dim">MSSV: 12345678</p>
                        <div class="flex gap-1.5 items-center mt-1">
                            <span class="inline-block px-2 py-0.5 bg-status-yellow text-on-primary-fixed text-xs font-bold rounded-full select-none shadow-sm">Hạng Vàng</span>
                            <span class="text-xs text-primary font-bold dark:text-primary-fixed-dim">🌟 50 Điểm</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <nav class="flex flex-col gap-2 flex-grow">
                <a class="flex items-center gap-4 p-3 rounded-lg text-on-surface-variant dark:text-secondary-fixed-dim hover:bg-surface-variant/30 active:opacity-70 transition-colors" href="#/orders" onclick="window.toggleDrawer()">
                    <span class="material-symbols-outlined" data-icon="history">history</span>
                    <span class="font-body-md text-sm">Lịch sử đặt quà</span>
                </a>
                <a class="flex items-center gap-4 p-3 rounded-lg text-on-surface-variant dark:text-secondary-fixed-dim hover:bg-surface-variant/30 active:opacity-70 transition-colors" href="#/profile" onclick="window.toggleDrawer()">
                    <span class="material-symbols-outlined" data-icon="stars">stars</span>
                    <span class="font-body-md text-sm">Ví điểm thưởng</span>
                </a>
                <a class="flex items-center gap-4 p-3 rounded-lg text-on-surface-variant dark:text-secondary-fixed-dim hover:bg-surface-variant/30 active:opacity-70 transition-colors" href="#/addresses" onclick="window.toggleDrawer()">
                    <span class="material-symbols-outlined" data-icon="map">map</span>
                    <span class="font-body-md text-sm">Địa chỉ đã lưu</span>
                </a>
                <a class="flex items-center gap-4 p-3 rounded-lg text-on-surface-variant dark:text-secondary-fixed-dim hover:bg-surface-variant/30 active:opacity-70 transition-colors" href="#/profile" onclick="window.toggleDrawer()">
                    <span class="material-symbols-outlined" data-icon="support_agent">support_agent</span>
                    <span class="font-body-md text-sm">Trung tâm hỗ trợ</span>
                </a>
                
                <div class="border-t border-outline-variant/30 dark:border-outline/30 mt-4 pt-4 flex flex-col gap-2">
                    <div class="flex items-center justify-between p-3 rounded-lg text-on-surface-variant dark:text-secondary-fixed-dim">
                        <div class="flex items-center gap-4">
                            <span class="material-symbols-outlined" id="theme-icon">${isDark ? 'dark_mode' : 'light_mode'}</span>
                            <span class="font-body-md text-sm select-none">Chế độ tối</span>
                        </div>
                        <button class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${isDark ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}" 
                                id="theme-switch" role="switch" aria-checked="${isDark}" onclick="window.toggleTheme()">
                            <span class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isDark ? 'translate-x-5' : 'translate-x-0'}"></span>
                        </button>
                    </div>

                    <a class="flex items-center gap-4 p-3 rounded-lg text-on-surface-variant dark:text-secondary-fixed-dim hover:bg-surface-variant/30 active:opacity-70 transition-colors" href="#/profile" onclick="window.toggleDrawer()">
                        <span class="material-symbols-outlined" data-icon="settings">settings</span>
                        <span class="font-body-md text-sm">Cài đặt</span>
                    </a>
                </div>

                <button class="flex items-center gap-4 p-3 rounded-lg text-error hover:bg-error-container/30 active:opacity-70 transition-colors mt-auto text-left w-full" onclick="window.handleLogout()">
                    <span class="material-symbols-outlined" data-icon="logout">logout</span>
                    <span class="font-body-md text-sm font-semibold">Đăng xuất</span>
                </button>
            </nav>
        </aside>
    `;
}

function renderHome(state) {
    const activeVouchers = state.vouchers.filter(v => v.category === 'available').slice(0, 2);

    return `
        <div class="space-y-6 pt-16 pb-12 animate-fade-in">
            <div class="bg-gradient-to-br from-primary to-primary-container text-white p-5 rounded-2xl shadow-md relative overflow-hidden select-none">
                <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
                <div class="absolute -left-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
                
                <div class="flex justify-between items-start mb-4 relative z-10">
                    <div>
                        <p class="text-white/80 font-label-sm text-[12px] uppercase tracking-wider">Thành viên ưu tú</p>
                        <h3 class="text-xl font-extrabold leading-tight">Sinh Viên Quán Card</h3>
                    </div>
                    <span class="px-2.5 py-0.5 bg-status-yellow text-on-primary-fixed text-[11px] font-bold rounded-full shadow-sm">HẠNG VÀNG</span>
                </div>
                
                <div class="mt-6 flex justify-between items-end relative z-10">
                    <div>
                        <p class="text-white/60 text-[11px]">Mã số sinh viên</p>
                        <p class="font-mono text-sm tracking-wider font-bold">12345678</p>
                    </div>
                    <div class="text-right">
                        <p class="text-white/60 text-[11px]">Điểm tích lũy</p>
                        <p class="text-2xl font-black">50 <span class="text-xs font-normal">pts</span></p>
                    </div>
                </div>
            </div>

            <div class="bg-gradient-to-r from-[#ffe9e2] to-[#fce3da] dark:from-[#3c2d28] dark:to-[#4e453b] p-5 rounded-2xl border border-outline-variant/30 dark:border-outline/20 relative overflow-hidden shadow-sm decision-engine-glow select-none">
                <div class="flex gap-4 items-center">
                    <div class="w-12 h-12 rounded-xl bg-primary-container text-white flex items-center justify-center shrink-0 shadow-md">
                        <span class="material-symbols-outlined text-2xl font-bold animate-bounce">psychology</span>
                    </div>
                    <div class="flex-1">
                        <h4 class="font-bold text-on-surface text-base dark:text-white">Hôm nay ăn gì?</h4>
                        <p class="text-xs text-on-surface-variant dark:text-secondary-fixed-dim mt-0.5">Tiết kiệm thời gian suy nghĩ, để quán chọn cho bạn!</p>
                    </div>
                </div>
                <button class="mt-4 w-full squishy-button bg-primary text-white font-bold py-3 rounded-xl shadow-md text-sm flex items-center justify-center gap-2 hover:bg-primary-container transition-all" onclick="window.location.hash = '#/decision'">
                    <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">bolt</span>
                    Quán Chọn Giúp Tôi (3 giây)
                </button>
            </div>

            <div class="grid grid-cols-3 gap-3 select-none">
                <button class="squishy-button flex flex-col items-center justify-center p-3.5 bg-surface-container-low dark:bg-surface-dim border border-outline-variant/20 rounded-xl hover:bg-surface-container transition-all" onclick="window.location.hash = '#/menu'">
                    <span class="material-symbols-outlined text-primary text-2xl mb-1.5" style="font-variation-settings: 'FILL' 1;">restaurant_menu</span>
                    <span class="font-label-sm text-[11px] text-on-surface">Gọi món</span>
                </button>
                <button class="squishy-button flex flex-col items-center justify-center p-3.5 bg-surface-container-low dark:bg-surface-dim border border-outline-variant/20 rounded-xl hover:bg-surface-container transition-all" onclick="window.location.hash = '#/vouchers'">
                    <span class="material-symbols-outlined text-primary text-2xl mb-1.5" style="font-variation-settings: 'FILL' 1;">confirmation_number</span>
                    <span class="font-label-sm text-[11px] text-on-surface">Voucher</span>
                </button>
                <button class="squishy-button flex flex-col items-center justify-center p-3.5 bg-surface-container-low dark:bg-surface-dim border border-outline-variant/20 rounded-xl hover:bg-surface-container transition-all" onclick="window.location.hash = '#/notifications'">
                    <span class="material-symbols-outlined text-primary text-2xl mb-1.5" style="font-variation-settings: 'FILL' 1;">notifications</span>
                    <span class="font-label-sm text-[11px] text-on-surface">Thông báo</span>
                </button>
            </div>

            <section class="space-y-3">
                <div class="flex items-center justify-between">
                    <h3 class="font-bold text-lg text-primary dark:text-primary-fixed-dim">Voucher của bạn</h3>
                    <a class="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors cursor-pointer" onclick="window.location.hash = '#/vouchers'">Xem tất cả</a>
                </div>
                
                <div class="grid gap-3">
                    ${activeVouchers.map(v => `
                        <div class="relative overflow-hidden flex bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 dark:border-outline/20 rounded-xl shadow-sm hover:shadow-md transition-all group select-none">
                            <div class="w-16 ${v.type === 'Giảm' ? 'bg-primary-container' : 'bg-tertiary-container'} flex flex-col items-center justify-center text-white p-1 shrink-0">
                                <span class="material-symbols-outlined text-2xl mb-0.5">${v.icon}</span>
                                <span class="text-[9px] font-bold uppercase">${v.type}</span>
                                <span class="text-sm font-black">${v.valueText}</span>
                            </div>
                            <div class="p-3 flex-1 flex flex-col justify-between">
                                <div>
                                    <h4 class="font-bold text-sm text-on-surface leading-snug dark:text-white">${v.title}</h4>
                                    <p class="text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim mt-0.5">${v.condition} • HSD: ${v.expiry}</p>
                                </div>
                                <button class="mt-2 self-end bg-primary-container hover:bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full active:scale-95 transition-transform" onclick="window.applyVoucher('${v.id}')">Dùng ngay</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="space-y-3">
                <h3 class="font-bold text-lg text-primary dark:text-primary-fixed-dim">Khuyến mãi cực hot</h3>
                <div class="relative overflow-hidden rounded-2xl bg-surface-container-high dark:bg-surface-dim border border-outline-variant/30 h-32 select-none cursor-pointer" onclick="window.location.hash = '#/menu'">
                    <img class="absolute inset-0 w-full h-full object-cover brightness-[0.7] hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80" alt="Hot deal background">
                    <div class="absolute inset-0 p-4 flex flex-col justify-between text-white pointer-events-none">
                        <span class="self-start bg-status-red text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-lg shadow-sm">Độc quyền</span>
                        <div>
                            <h4 class="font-black text-lg">Giờ Vàng Sinh Viên</h4>
                            <p class="text-[11px] text-white/80">Khung giờ 14h - 17h: Trà sữa giảm giá đồng loạt còn 15.000đ</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
}

function renderVouchers(state) {
    const availableVouchers = state.vouchers.filter(v => v.category === 'available');
    const usedVouchers = state.vouchers.filter(v => v.category === 'used');
    const newCount = availableVouchers.filter(v => v.isNew).length;

    return `
        <div class="pt-16 pb-12 animate-fade-in">
            <div class="mb-6 select-none">
                <h2 class="font-section-title-mobile text-section-title-mobile text-on-surface dark:text-white mb-1.5">Voucher của bạn</h2>
                <p class="font-body-md text-sm text-on-surface-variant dark:text-secondary-fixed-dim">Tiết kiệm hơn với các ưu đãi dành riêng cho sinh viên.</p>
            </div>

            <section class="mb-8">
                <div class="flex items-center justify-between mb-4 select-none">
                    <h3 class="font-bold text-[16px] text-primary dark:text-primary-fixed-dim">Voucher khả dụng</h3>
                    ${newCount > 0 ? `<span class="bg-primary-container text-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm badge-pulse">${newCount} Mới</span>` : ''}
                </div>
                
                <div class="grid gap-4">
                    ${availableVouchers.length === 0 ? `
                        <div class="p-6 border border-dashed border-outline-variant dark:border-outline/40 rounded-2xl flex flex-col items-center text-center opacity-70">
                            <span class="material-symbols-outlined text-4xl mb-2 text-outline">confirmation_number</span>
                            <p class="text-xs text-on-surface-variant dark:text-secondary-fixed-dim font-medium">Bạn đã dùng hết voucher khả dụng rồi!</p>
                        </div>
                    ` : availableVouchers.map(v => `
                        <div class="relative overflow-hidden flex bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 dark:border-outline/20 rounded-xl shadow-sm hover:shadow-md transition-all group select-none">
                            <div class="w-24 ${v.id === 'v2' ? 'bg-tertiary-container' : 'bg-primary-container'} flex flex-col items-center justify-center text-white p-2 shrink-0 relative">
                                <span class="material-symbols-outlined text-3xl mb-1">${v.icon}</span>
                                <span class="text-[10px] font-bold uppercase text-center">${v.type}</span>
                                <span class="text-lg font-black">${v.valueText}</span>
                            </div>
                            <div class="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h4 class="font-bold text-[15px] text-on-surface dark:text-white leading-snug mb-1">${v.title}</h4>
                                    <p class="text-[11px] text-on-surface-variant dark:text-secondary-fixed-dim mb-2">${v.condition} • HSD: ${v.expiry}</p>
                                    <span class="inline-block px-2 py-0.5 font-semibold text-[10px] rounded border ${v.tagColor}">${v.tag}</span>
                                </div>
                                <button class="mt-4 self-end bg-primary-container hover:bg-primary text-white px-5 py-1.5 rounded-full font-bold text-xs active:scale-95 transition-all shadow-sm squishy-button" onclick="window.applyVoucher('${v.id}')">Dùng ngay</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="mb-6">
                <h3 class="font-bold text-[16px] text-on-surface-variant dark:text-secondary-fixed-dim mb-4 opacity-75 select-none">Voucher đã dùng</h3>
                <div class="grid gap-4">
                    ${usedVouchers.map(v => `
                        <div class="relative overflow-hidden flex bg-surface-container-low dark:bg-surface-variant/10 border border-outline-variant/20 rounded-xl grayscale opacity-60 select-none">
                            <div class="w-24 bg-secondary flex flex-col items-center justify-center text-white p-2 shrink-0">
                                <span class="material-symbols-outlined text-3xl mb-1">${v.icon}</span>
                                <span class="text-[10px] font-bold uppercase">${v.type}</span>
                            </div>
                            <div class="p-4 flex-1">
                                <h4 class="font-bold text-[15px] text-on-surface dark:text-white leading-snug mb-1">${v.title}</h4>
                                <p class="text-[11px] text-on-surface-variant dark:text-secondary-fixed-dim mb-1">${v.useDetail}</p>
                                <p class="text-[10px] italic text-on-surface-variant/80 dark:text-secondary-fixed-dim/80">Ngày dùng: ${v.usedDate}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <div class="mt-8 p-6 border-2 border-dashed border-outline-variant dark:border-outline/30 rounded-3xl flex flex-col items-center text-center opacity-40 select-none">
                <span class="material-symbols-outlined text-5xl mb-3 text-outline">confirmation_number</span>
                <p class="font-body-md text-xs text-on-surface-variant dark:text-secondary-fixed-dim max-w-[200px] leading-relaxed">Đang săn thêm voucher hời cho bạn...</p>
            </div>
        </div>
    `;
}

function renderDecision(state) {
    const currentCombo = state.selectedCombo || combos[0];
    const isSpinning = state.isSpinning;
    let cardContent = '';

    if (isSpinning) {
        cardContent = `
            <div class="bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 rounded-xl overflow-hidden decision-engine-glow transition-all duration-300">
                <div class="slot-machine-container bg-surface-variant/30 dark:bg-black/20 flex flex-col justify-center items-center">
                    <div class="slot-machine-track" id="slot-track">
                        <div class="slot-item">
                            <span class="material-symbols-outlined text-5xl text-primary animate-spin mb-2">autorenew</span>
                            <span class="font-bold text-sm text-on-surface-variant">Đang kết nối ý chí chống đói...</span>
                        </div>
                    </div>
                </div>
                <div class="p-6 text-center">
                    <h3 class="font-bold text-lg text-primary animate-pulse">Quán đang chọn nhân duyên ẩm thực...</h3>
                    <p class="text-xs text-on-surface-variant dark:text-secondary-fixed-dim mt-1">Đảm bảo ngon, rẻ, siêu tốc!</p>
                </div>
            </div>
        `;
    } else {
        const priceFormatted = currentCombo.price.toLocaleString('vi-VN') + 'đ';
        const comboCart = { [currentCombo.id]: 1 };
        const voucherPreview = calculateVoucherDiscount(currentCombo.price, comboCart);
        const discountAmount = voucherPreview.discount;
        const hasAppliedVoucher = discountAmount > 0;
        const finalPrice = Math.max(0, currentCombo.price - discountAmount);
        const finalPriceFormatted = finalPrice.toLocaleString('vi-VN') + 'đ';

        cardContent = `
            <div class="bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 rounded-xl overflow-hidden decision-engine-glow transition-all duration-300 select-none">
                <div class="h-56 w-full relative overflow-hidden">
                    <img alt="${currentCombo.dishName}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="${currentCombo.image}">
                    <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                        ${currentCombo.tags.map(tag => `
                            <span class="bg-status-red text-white font-label-sm text-[10px] px-2.5 py-0.5 rounded-lg font-bold shadow-sm select-none">${tag}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="p-stack-md flex flex-col gap-4">
                    <div class="flex justify-between items-start">
                        <div class="flex-1 pr-2">
                            <h2 class="font-card-title text-base font-extrabold text-on-surface dark:text-white leading-tight">${currentCombo.dishName}</h2>
                            <div class="flex items-center gap-1 text-on-surface-variant dark:text-secondary-fixed-dim mt-1.5">
                                <span class="material-symbols-outlined text-[16px]">schedule</span>
                                <span class="font-body-md text-xs">${currentCombo.time} • ${currentCombo.status}</span>
                            </div>
                        </div>
                        <div class="text-right shrink-0">
                            ${hasAppliedVoucher ? `
                                <span class="text-xs line-through text-on-surface-variant block">${priceFormatted}</span>
                                <span class="font-label-price text-base font-extrabold text-status-red block">${finalPriceFormatted}</span>
                            ` : `
                                <span class="font-label-price text-base font-extrabold text-primary dark:text-primary-fixed-dim block">${priceFormatted}</span>
                            `}
                        </div>
                    </div>
                    
                    <div class="bg-primary-fixed dark:bg-surface-container p-3 rounded-lg border-l-4 border-primary">
                        <p class="font-body-md text-xs text-on-primary-fixed dark:text-on-primary-container italic font-medium">"${currentCombo.reason}"</p>
                    </div>
                    
                    <button class="squishy-button w-full bg-primary-container hover:bg-primary text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all" onclick="window.orderCombo('${currentCombo.id}')">
                        <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">shopping_cart</span>
                        Đặt combo này
                    </button>
                </div>
            </div>
        `;
    }

    return `
        <div class="pt-16 pb-12 max-w-md mx-auto animate-fade-in">
            <div class="mb-5 text-center select-none">
                <span class="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container dark:bg-surface-variant dark:text-primary-fixed-dim font-bold text-[10px] uppercase tracking-wider mb-2 shadow-sm">
                    Quyết định trong 3 giây
                </span>
                <h1 class="font-section-title-mobile text-xl font-black text-on-surface dark:text-white">
                    Quán chọn cho bạn:<br>
                    <span class="text-primary dark:text-primary-fixed-dim font-black text-2xl">${isSpinning ? '...' : currentCombo.name}</span>
                </h1>
            </div>

            <div class="relative group">
                ${cardContent}
            </div>

            <div class="mt-5 grid grid-cols-2 gap-3 select-none">
                <button class="squishy-button flex flex-col items-center justify-center p-3 border border-outline-variant/30 rounded-xl bg-surface-container-low dark:bg-surface-dim hover:bg-surface-container hover:text-primary dark:text-white transition-colors" 
                        onclick="window.spinDecisionEngine()" ${isSpinning ? 'disabled' : ''}>
                    <span class="material-symbols-outlined text-primary dark:text-primary-fixed-dim mb-1 ${isSpinning ? 'animate-spin' : ''}">refresh</span>
                    <span class="font-label-sm text-[11px] font-semibold">Gợi ý món khác</span>
                </button>
                <button class="squishy-button flex flex-col items-center justify-center p-3 border border-outline-variant/30 rounded-xl bg-surface-container-low dark:bg-surface-dim hover:bg-surface-container hover:text-primary dark:text-white transition-colors" 
                        onclick="window.location.hash = '#/menu'" ${isSpinning ? 'disabled' : ''}>
                    <span class="material-symbols-outlined text-primary dark:text-primary-fixed-dim mb-1">menu_book</span>
                    <span class="font-label-sm text-[11px] font-semibold">Xem toàn bộ menu</span>
                </button>
            </div>

            <div class="mt-6 p-4 rounded-xl border border-dashed border-outline-variant/40 dark:border-outline/30 bg-surface-container-highest dark:bg-surface-dim/40 select-none">
                <div class="flex gap-3">
                    <span class="material-symbols-outlined text-status-yellow shrink-0 text-xl" style="font-variation-settings: 'FILL' 1;">lightbulb</span>
                    <div>
                        <h4 class="font-label-sm text-xs font-bold text-on-surface dark:text-white">Mẹo nhỏ cho bạn</h4>
                        <p class="font-body-md text-[11px] text-on-surface-variant dark:text-secondary-fixed-dim mt-0.5 leading-relaxed">Đặt ngay bây giờ để nhận món tại quầy số 3 mà không cần xếp hàng chờ đợi!</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderNotifications(state) {
    const activeTab = state.notificationTab || 'hoat-dong';
    const notificationsList = state.notifications.filter(n => n.type === activeTab);

    return `
        <div class="pt-16 pb-12 animate-fade-in select-none">
            <div class="sticky top-14 -mx-margin-mobile z-40 bg-surface dark:bg-inverse-surface border-b border-outline-variant/30 dark:border-outline/20 transition-all duration-300">
                <div class="flex w-full">
                    <button class="flex-1 py-4 text-center font-bold text-sm transition-all relative ${activeTab === 'hoat-dong' ? 'text-primary dark:text-primary-fixed-dim' : 'text-on-surface-variant dark:text-secondary-fixed-dim'}" 
                            onclick="window.switchNotificationTab('hoat-dong')">
                        Hoạt động
                        <div class="absolute bottom-0 left-0 w-full h-1 rounded-t-full transition-all duration-300 ${activeTab === 'hoat-dong' ? 'bg-primary dark:bg-primary-fixed-dim' : 'bg-transparent'}"></div>
                    </button>
                    <button class="flex-1 py-4 text-center font-bold text-sm transition-all relative ${activeTab === 'uu-dai' ? 'text-primary dark:text-primary-fixed-dim' : 'text-on-surface-variant dark:text-secondary-fixed-dim'}" 
                            onclick="window.switchNotificationTab('uu-dai')">
                        Ưu đãi
                        <div class="absolute bottom-0 left-0 w-full h-1 rounded-t-full transition-all duration-300 ${activeTab === 'uu-dai' ? 'bg-primary dark:bg-primary-fixed-dim' : 'bg-transparent'}"></div>
                    </button>
                </div>
            </div>

            <div class="py-5 space-y-4" id="notification-list-container">
                ${notificationsList.length === 0 ? `
                    <div class="py-12 text-center opacity-60 flex flex-col items-center">
                        <span class="material-symbols-outlined text-5xl mb-3 text-outline">notifications_off</span>
                        <p class="text-xs text-on-surface-variant dark:text-secondary-fixed-dim">Không có thông báo nào trong hộp thư của bạn.</p>
                    </div>
                ` : notificationsList.map(n => {
                    const unreadClass = n.unread 
                        ? 'border-primary dark:border-primary-fixed-dim bg-primary-fixed/20 dark:bg-primary-fixed/5' 
                        : 'border-outline-variant/30 dark:border-outline/10 bg-surface-container-low dark:bg-surface-dim';
                    
                    return `
                        <div class="p-4 rounded-xl flex gap-4 border ${unreadClass} relative active:scale-[0.98] transition-all cursor-pointer shadow-sm animate-fade-in"
                             onclick="window.readNotification('${n.id}')">
                            
                            ${n.icon === 'coupon_image' ? `
                                <div class="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant/30">
                                    <img alt="Promo" class="w-full h-full object-cover" src="${n.image}">
                                </div>
                            ` : `
                                <div class="w-12 h-12 rounded-full ${n.iconBg || 'bg-primary-fixed'} flex items-center justify-center flex-shrink-0 text-2xl">
                                    <span class="material-symbols-outlined ${n.iconColor || 'text-primary'}" style="font-variation-settings: 'FILL' 1;">${n.icon}</span>
                                </div>
                            `}

                            <div class="flex-grow space-y-2">
                                <div class="flex justify-between items-start">
                                    <h3 class="font-bold text-sm text-on-surface dark:text-white leading-snug">${n.title}</h3>
                                    <span class="text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim shrink-0 ml-2 font-medium">${n.time}</span>
                                </div>
                                <p class="text-on-surface-variant dark:text-secondary-fixed-dim text-xs leading-relaxed">${n.desc}</p>
                                
                                ${n.actionText ? `
                                    <button class="px-3.5 py-1 text-[11px] font-bold border border-primary text-primary dark:border-primary-fixed-dim dark:text-primary-fixed-dim rounded-full hover:bg-primary/5 active:scale-95 transition-all mt-1"
                                            onclick="event.stopPropagation(); window.handleNotificationAction('${n.actionHash}', '${n.id}')">
                                        ${n.actionText}
                                    </button>
                                ` : ''}
                            </div>

                            ${n.unread ? `
                                <span class="absolute top-4 right-4 w-2 h-2 bg-status-red rounded-full shadow-sm badge-pulse"></span>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderMenu(state) {
    const activeCategory = state.menuFilter || 'all';
    const searchQuery = (state.menuSearch || '').toLowerCase().trim();

    let allItems = [];
    
    if (activeCategory === 'all' || activeCategory === 'combos') {
        combos.forEach(c => {
            allItems.push({
                id: c.id,
                name: c.name,
                subtitle: c.dishName,
                price: c.price,
                image: c.image,
                isCombo: true,
                category: 'combos'
            });
        });
    }

    singleItems.forEach(item => {
        if (activeCategory === 'all' || activeCategory === item.category) {
            allItems.push({
                id: item.id,
                name: item.name,
                subtitle: item.category === 'food' ? 'Món ăn chính' : 'Nước giải nhiệt',
                price: item.price,
                originalPrice: item.originalPrice,
                image: item.image,
                isCombo: false,
                category: item.category
            });
        }
    });

    if (searchQuery) {
        allItems = allItems.filter(item => 
            item.name.toLowerCase().includes(searchQuery) || 
            (item.subtitle && item.subtitle.toLowerCase().includes(searchQuery))
        );
    }

    const cartCount = Object.values(state.cart).reduce((sum, q) => sum + q, 0);
    const { cartTotal, voucher, finalTotal } = getOrderTotals(state.cart);
    const menuDisplayTotal = Math.max(0, cartTotal - voucher.discount);

    return `
        <div class="pt-16 pb-24 animate-fade-in select-none">
            <div class="mb-4 relative">
                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant dark:text-secondary-fixed-dim text-[20px]">search</span>
                <input class="w-full pl-10 pr-4 py-2.5 bg-surface-container-low dark:bg-surface-dim border border-outline-variant/30 dark:border-outline/10 rounded-xl text-sm focus:outline-none focus:border-primary text-on-surface dark:text-white" 
                       id="menu-search-input" placeholder="Tìm món ngon sinh viên..." value="${state.menuSearch || ''}"
                       oninput="window.handleMenuSearch(this.value)">
                ${state.menuSearch ? `
                    <button class="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-on-surface-variant" onclick="window.handleMenuSearch(''); document.getElementById('menu-search-input').value=''">close</button>
                ` : ''}
            </div>

            <div class="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-none">
                <button class="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border shrink-0 transition-all squishy-button ${activeCategory === 'all' ? 'bg-primary border-primary text-white shadow-sm' : 'bg-surface-container-low border-outline-variant/30 text-on-surface-variant dark:text-white'}" onclick="window.filterMenu('all')">Tất cả</button>
                <button class="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border shrink-0 transition-all squishy-button ${activeCategory === 'combos' ? 'bg-primary border-primary text-white shadow-sm' : 'bg-surface-container-low border-outline-variant/30 text-on-surface-variant dark:text-white'}" onclick="window.filterMenu('combos')">Combo Tiết Kiệm</button>
                <button class="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border shrink-0 transition-all squishy-button ${activeCategory === 'food' ? 'bg-primary border-primary text-white shadow-sm' : 'bg-surface-container-low border-outline-variant/30 text-on-surface-variant dark:text-white'}" onclick="window.filterMenu('food')">Món ăn chính</button>
                <button class="px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border shrink-0 transition-all squishy-button ${activeCategory === 'drink' ? 'bg-primary border-primary text-white shadow-sm' : 'bg-surface-container-low border-outline-variant/30 text-on-surface-variant dark:text-white'}" onclick="window.filterMenu('drink')">Nước uống</button>
            </div>

            <div class="mt-4 grid grid-cols-2 gap-3">
                ${allItems.length === 0 ? `
                    <div class="col-span-2 py-12 text-center opacity-60 flex flex-col items-center">
                        <span class="material-symbols-outlined text-4xl mb-2 text-outline">search_off</span>
                        <p class="text-xs text-on-surface-variant dark:text-secondary-fixed-dim">Không tìm thấy món ăn phù hợp với bộ lọc.</p>
                    </div>
                ` : allItems.map(item => {
                    const quantity = state.cart[item.id] || 0;
                    return `
                        <div class="bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/20 dark:border-outline/10 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group transition-all">
                            <div class="h-32 w-full relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <img alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="${item.image}">
                                ${item.isCombo ? `
                                    <span class="absolute top-2 left-2 bg-status-red text-white text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-sm">COMBO</span>
                                ` : ''}
                            </div>
                            
                            <div class="p-3 flex-1 flex flex-col justify-between">
                                <div class="mb-2">
                                    <h4 class="font-bold text-xs leading-snug text-on-surface dark:text-white line-clamp-1">${item.name}</h4>
                                    <p class="text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim line-clamp-1 mt-0.5">${item.subtitle}</p>
                                </div>
                                
                                <div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/10">
                                    <div class="flex flex-col items-start select-none">
                                        ${item.originalPrice ? `<span class="text-[9px] line-through text-on-surface-variant font-medium">${item.originalPrice.toLocaleString('vi-VN')}đ</span>` : ''}
                                        <span class="text-xs font-black text-primary dark:text-primary-fixed-dim">${item.price.toLocaleString('vi-VN')}đ</span>
                                    </div>
                                    
                                    ${quantity > 0 ? `
                                        <div class="flex items-center gap-2">
                                            <button class="w-6 h-6 rounded-full border border-primary text-primary flex items-center justify-center font-bold active:scale-90 transition-transform hover:bg-primary/5 shrink-0 select-none" onclick="window.updateCartQuantity('${item.id}', -1)">-</button>
                                            <span class="text-xs font-bold text-on-surface dark:text-white min-w-[12px] text-center select-none">${quantity}</span>
                                            <button class="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold active:scale-90 transition-transform hover:bg-primary-container shrink-0 select-none" onclick="window.updateCartQuantity('${item.id}', 1)">+</button>
                                        </div>
                                    ` : `
                                        <button class="squishy-button w-7 h-7 rounded-full bg-primary-container text-white flex items-center justify-center hover:bg-primary shadow-sm" onclick="window.updateCartQuantity('${item.id}', 1)">
                                            <span class="material-symbols-outlined text-[18px]">add</span>
                                        </button>
                                    `}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>

            ${cartCount > 0 ? `
                <div class="absolute bottom-16 left-0 w-full px-4 py-3 bg-surface-container-lowest/90 dark:bg-inverse-surface/95 backdrop-blur-md border-t border-outline-variant/30 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] z-40 transition-all select-none animate-slide-up">
                    <div class="max-w-md mx-auto flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="relative">
                                <span class="material-symbols-outlined text-primary text-3xl">shopping_bag</span>
                                <span class="absolute -top-1 -right-1 bg-status-red text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm badge-pulse">${cartCount}</span>
                            </div>
                            <div>
                                <p class="text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim">Tổng thanh toán</p>
                                <div class="flex items-center gap-1.5">
                                    <p class="text-base font-black text-primary dark:text-primary-fixed-dim">${menuDisplayTotal.toLocaleString('vi-VN')}đ</p>
                                    ${voucher.discount > 0 ? `
                                        <span class="px-1.5 py-0.5 bg-status-red/10 text-status-red rounded text-[9px] font-bold border border-status-red/20">${voucher.label || 'Giảm'}</span>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                        <button class="squishy-button bg-primary-container hover:bg-primary text-white font-extrabold px-6 py-2.5 rounded-xl shadow-md text-xs flex items-center gap-1.5" onclick="window.checkoutCart()">
                            Đặt Hàng Ngay
                            <span class="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

function renderOrders(state) {
    const activeOrders = state.orders.filter(o => o.status !== 'completed');
    const completedOrders = state.orders.filter(o => o.status === 'completed');

    return `
        <div class="pt-16 pb-12 animate-fade-in select-none">
            <div class="mb-6 select-none">
                <h2 class="font-section-title-mobile text-section-title-mobile text-on-surface dark:text-white mb-1.5">Đơn hàng của bạn</h2>
                <p class="font-body-md text-sm text-on-surface-variant dark:text-secondary-fixed-dim">Theo dõi tiến độ chuẩn bị món ăn tại quầy số 3.</p>
            </div>

            <section class="mb-8">
                <h3 class="font-bold text-[16px] text-primary dark:text-primary-fixed-dim mb-4 select-none">Đơn hàng đang chế biến</h3>
                
                <div class="grid gap-4">
                    ${activeOrders.length === 0 ? `
                        <div class="p-8 border border-dashed border-outline-variant dark:border-outline/30 rounded-2xl flex flex-col items-center text-center opacity-60">
                            <span class="material-symbols-outlined text-4xl mb-2 text-outline">receipt_long</span>
                            <p class="text-xs text-on-surface-variant dark:text-secondary-fixed-dim font-medium">Bạn không có đơn hàng nào đang chế biến.</p>
                            <button class="mt-4 bg-primary-container text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-primary transition-all squishy-button" onclick="window.location.hash = '#/menu'">Đặt món ngay</button>
                        </div>
                    ` : activeOrders.map(order => {
                        let statusColor = 'text-status-yellow';
                        let percentage = '30%';
                        let statusDesc = 'Đang chế biến';

                        if (order.step === 1) {
                            statusColor = 'text-status-yellow';
                            percentage = '15%';
                            statusDesc = 'Đang chuẩn bị nguyên liệu';
                        } else if (order.step === 2) {
                            statusColor = 'text-primary-container';
                            percentage = '60%';
                            statusDesc = 'Đang nấu trên bếp';
                        } else if (order.step === 3) {
                            statusColor = 'text-status-green';
                            percentage = '95%';
                            statusDesc = 'Đang chờ nhận tại Quầy số 3';
                        }

                        return `
                            <div class="bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 dark:border-outline/20 rounded-xl p-4 shadow-sm space-y-3">
                                <div class="flex justify-between items-start pb-2 border-b border-outline-variant/10">
                                    <div>
                                        <span class="text-xs font-mono font-bold text-on-surface-variant dark:text-secondary-fixed-dim">${order.id}</span>
                                        <h4 class="font-bold text-sm text-on-surface dark:text-white mt-1">${order.itemName}</h4>
                                    </div>
                                    <span class="text-xs font-bold ${statusColor}">${statusDesc}</span>
                                </div>
                                
                                <div class="space-y-1">
                                    <div class="flex justify-between text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim font-semibold">
                                        <span>Tiến độ món ăn</span>
                                        <span>${percentage}</span>
                                    </div>
                                    <div class="w-full bg-surface-container-low dark:bg-black/20 h-2 rounded-full overflow-hidden">
                                        <div class="bg-primary-container h-full rounded-full transition-all duration-1000" style="width: ${percentage}"></div>
                                    </div>
                                </div>
                                
                                <div class="flex justify-between items-center text-[11px] text-on-surface-variant dark:text-secondary-fixed-dim pt-2">
                                    <span>Thời gian đặt: ${order.time}</span>
                                    <span class="font-bold text-primary dark:text-primary-fixed-dim">${order.price.toLocaleString('vi-VN')}đ</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>

            <section class="mb-6">
                <h3 class="font-bold text-[16px] text-on-surface-variant dark:text-secondary-fixed-dim mb-4 opacity-75 select-none">Đơn hàng đã nhận</h3>
                
                <div class="grid gap-4 select-none">
                    ${completedOrders.map(order => `
                        <div class="bg-surface-container-low dark:bg-surface-variant/10 border border-outline-variant/20 rounded-xl p-4 flex justify-between items-center opacity-80 animate-fade-in">
                            <div>
                                <div class="flex items-center gap-2">
                                    <span class="text-xs font-mono font-semibold text-on-surface-variant">${order.id}</span>
                                    <span class="px-1.5 py-0.5 bg-status-green/10 text-status-green border border-status-green/20 rounded text-[9px] font-bold">Thành công</span>
                                </div>
                                <h4 class="font-bold text-sm text-on-surface dark:text-white mt-1.5">${order.itemName}</h4>
                                <p class="text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim mt-0.5">Thời gian: ${order.time}</p>
                            </div>
                            <div class="text-right">
                                <span class="font-black text-xs text-on-surface dark:text-white block">${order.price.toLocaleString('vi-VN')}đ</span>
                                <button class="mt-2 text-[10px] font-bold border border-primary text-primary dark:border-primary-fixed-dim dark:text-primary-fixed-dim px-2.5 py-1 rounded-full active:scale-95 transition-all squishy-button" onclick="window.reorderItem('${order.id}')">Đặt lại</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
}

function renderProfile(state) {
    const pointTransactions = [
        { desc: "Tích điểm đơn hàng SVQ-024", pts: "+50", date: "Vừa xong" },
        { desc: "Bình luận đánh giá Combo Kịp Tiết", pts: "+10", date: "Hôm qua" },
        { desc: "Thưởng sinh nhật Anh Quốc", pts: "+200", date: "15/05/2026" },
        { desc: "Tích điểm đơn hàng SVQ-023", pts: "+45", date: "12/05/2026" }
    ];


    return `
        <div class="pt-16 pb-12 animate-fade-in select-none">
            <div class="flex items-center gap-4 p-4 bg-surface-container-low dark:bg-surface-dim border border-outline-variant/30 rounded-2xl shadow-sm mb-6 select-none">
                <div class="w-16 h-16 rounded-full overflow-hidden bg-primary-container border-2 border-primary shadow-sm shrink-0">
                    <img class="w-full h-full object-cover" alt="Student Profile Picture" src="https://i.ibb.co/whXgVxdz/nh-vest.png">
                </div>
                <div>
                    <h2 class="font-bold text-lg text-primary dark:text-primary-fixed-dim">Anh Quốc</h2>
                    <p class="text-xs text-on-surface-variant dark:text-secondary-fixed-dim">MSSV: 12345678 • Trường Đại học Công Nghiệp - IUH</p>
                    <div class="flex gap-2 items-center mt-1">
                        <span class="px-2.5 py-0.5 bg-status-yellow text-on-primary-fixed text-[10px] font-black rounded-full shadow-sm">HẠNG VÀNG</span>
                        <span class="text-xs font-bold text-primary dark:text-primary-fixed-dim">50 PTS</span>
                    </div>
                </div>
            </div>

            <section class="mb-6 bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 dark:border-outline/20 rounded-2xl p-4 shadow-sm space-y-3 select-none">
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-on-surface dark:text-white">Thăng hạng Kim Cương</span>
                    <span class="text-on-surface-variant dark:text-secondary-fixed-dim font-bold">50 / 1500 PTS</span>
                </div>
                <div class="w-full bg-surface-container-low dark:bg-black/20 h-2 rounded-full overflow-hidden">
                    <div class="bg-gradient-to-r from-primary to-primary-container h-full rounded-full" style="width: 3.33%"></div>
                </div>
                <p class="text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim italic leading-relaxed">Đạt thêm 1450 PTS để thăng hạng Kim Cương và nhận voucher giảm giá 50% miễn phí hàng tháng!</p>
            </section>

            <section class="mb-6 select-none">
                <h3 class="font-bold text-[15px] text-primary dark:text-primary-fixed-dim mb-3">Lịch sử tích lũy</h3>
                <div class="bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 dark:border-outline/20 rounded-2xl p-3 divide-y divide-outline-variant/10">
                    ${pointTransactions.map(t => `
                        <div class="flex justify-between items-center py-2.5 first:pt-1 last:pb-1">
                            <div>
                                <h4 class="font-bold text-xs text-on-surface dark:text-white">${t.desc}</h4>
                                <p class="text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim mt-0.5">${t.date}</p>
                            </div>
                            <span class="text-xs font-black text-status-green">${t.pts} PTS</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="mb-6 select-none">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="font-bold text-[15px] text-primary dark:text-primary-fixed-dim">Địa chỉ đã lưu</h3>
                    <button class="text-xs font-bold text-primary hover:text-primary-container shrink-0 flex items-center gap-0.5" onclick="window.addMockAddress()">
                        <span class="material-symbols-outlined text-sm">add</span> Thêm
                    </button>
                </div>
                
                <div class="grid gap-3" id="address-list-root">
                    ${(state.addresses || []).map(a => `
                        <div class="p-3 border border-outline-variant/30 dark:border-outline/10 bg-surface-container-lowest dark:bg-surface-dim rounded-xl flex gap-3 shadow-sm select-none">
                            <span class="material-symbols-outlined text-primary text-xl shrink-0">location_on</span>
                            <div class="flex-grow space-y-1">
                                <div class="flex items-center gap-2">
                                    <h4 class="font-bold text-xs text-on-surface dark:text-white">${a.label}</h4>
                                    ${a.isDefault ? `<span class="px-1.5 py-0.5 bg-status-green/10 text-status-green border border-status-green/20 rounded text-[9px] font-bold shrink-0">Mặc định</span>` : ''}
                                </div>
                                <p class="text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim leading-relaxed">${a.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
}

function renderAddresses(state) {
    const isAdding = state.showAddAddressForm || false;
    const addList = state.addresses || [];

    return `
        <div class="pt-16 pb-12 animate-fade-in select-none">
            <!-- Header section -->
            <div class="mb-6 p-4 bg-gradient-to-br from-primary/10 to-primary-container/10 border border-primary/20 rounded-2xl shadow-sm">
                <h2 class="font-bold text-lg text-primary dark:text-primary-fixed-dim flex items-center gap-2">
                    <span class="material-symbols-outlined">map</span> Sổ địa chỉ
                </h2>
                <p class="text-xs text-on-surface-variant dark:text-secondary-fixed-dim mt-1">Lưu các địa điểm nhận hàng thường xuyên tại trường hoặc ký túc xá để đặt hàng nhanh chóng.</p>
            </div>

            <!-- Form to Add New Address -->
            ${isAdding ? `
                <div class="mb-6 p-4 bg-surface-container-lowest dark:bg-surface-dim border-2 border-primary/30 rounded-2xl shadow-md animate-fade-in">
                    <h3 class="font-bold text-sm text-primary dark:text-primary-fixed-dim mb-3 flex items-center gap-1.5">
                        <span class="material-symbols-outlined text-base">add_location_alt</span> Thêm địa chỉ mới
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-xs font-bold text-on-surface-variant dark:text-secondary-fixed-dim mb-1" for="addr-label">Tên địa điểm</label>
                            <input type="text" id="addr-label" placeholder="Ví dụ: Ký túc xá Khu B, Thư viện..." class="w-full text-xs p-2.5 rounded-xl border border-outline-variant/50 bg-surface dark:bg-inverse-surface dark:text-white focus:outline-none focus:border-primary">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-on-surface-variant dark:text-secondary-fixed-dim mb-1" for="addr-desc">Địa chỉ chi tiết</label>
                            <textarea id="addr-desc" placeholder="Tòa nhà, số phòng, số bàn, hướng đi..." rows="2" class="w-full text-xs p-2.5 rounded-xl border border-outline-variant/50 bg-surface dark:bg-inverse-surface dark:text-white focus:outline-none focus:border-primary"></textarea>
                        </div>
                        <div class="flex items-center gap-2">
                            <input type="checkbox" id="addr-default" class="rounded text-primary focus:ring-primary border-outline-variant/50">
                            <label for="addr-default" class="text-xs font-semibold text-on-surface-variant dark:text-secondary-fixed-dim select-none cursor-pointer">Đặt làm địa chỉ mặc định</label>
                        </div>
                        <div class="flex gap-2.5 pt-2">
                            <button onclick="window.saveAddress()" class="flex-grow bg-primary text-white text-xs font-bold py-2.5 rounded-xl shadow-sm hover:bg-primary-container transition-all active:scale-[0.98]">
                                Lưu địa chỉ
                            </button>
                            <button onclick="window.toggleAddAddressForm(false)" class="px-4 bg-surface-container-high dark:bg-surface-variant/40 text-on-surface-variant dark:text-white text-xs font-bold py-2.5 rounded-xl border border-outline-variant/30 hover:bg-surface-container-highest transition-all active:scale-[0.98]">
                                Hủy
                            </button>
                        </div>
                    </div>
                </div>
            ` : `
                <div class="mb-6 flex justify-between items-center">
                    <span class="text-xs text-on-surface-variant dark:text-secondary-fixed-dim font-bold">Danh sách địa chỉ (${addList.length})</span>
                    <button class="text-xs font-bold bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-xl hover:bg-primary/20 shrink-0 flex items-center gap-1 transition-all" onclick="window.toggleAddAddressForm(true)">
                        <span class="material-symbols-outlined text-sm">add</span> Thêm mới
                    </button>
                </div>
            `}

            <!-- Address List -->
            <div class="grid gap-3" id="addresses-page-list">
                ${addList.length === 0 ? `
                    <div class="p-8 text-center text-on-surface-variant dark:text-secondary-fixed-dim">
                        <span class="material-symbols-outlined text-4xl opacity-40">wrong_location</span>
                        <p class="text-xs mt-2">Chưa có địa chỉ nào được lưu.</p>
                    </div>
                ` : addList.map(a => `
                    <div class="p-4 border ${a.isDefault ? 'border-primary/40 bg-primary/5 dark:border-primary-fixed-dim/30 dark:bg-primary-fixed/5' : 'border-outline-variant/30 dark:border-outline/10 bg-surface-container-lowest dark:bg-surface-dim'} rounded-2xl flex gap-3 shadow-sm select-none transition-all hover:shadow-md relative group">
                        <span class="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">location_on</span>
                        <div class="flex-grow space-y-1.5 pr-8">
                            <div class="flex items-center gap-2 flex-wrap">
                                <h4 class="font-bold text-xs text-on-surface dark:text-white">${a.label}</h4>
                                ${a.isDefault ? `<span class="px-1.5 py-0.5 bg-status-green/10 text-status-green border border-status-green/20 rounded text-[9px] font-bold shrink-0">Mặc định</span>` : ''}
                            </div>
                            <p class="text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim leading-relaxed">${a.desc}</p>
                            
                            <!-- Action links -->
                            <div class="flex items-center gap-3 pt-1 select-none">
                                ${!a.isDefault ? `
                                    <button onclick="window.setDefaultAddress('${a.id}')" class="text-[10px] font-bold text-primary hover:underline flex items-center gap-0.5">
                                        Thiết lập mặc định
                                    </button>
                                ` : ''}
                                <button onclick="window.deleteAddress('${a.id}')" class="text-[10px] font-bold text-error hover:underline flex items-center gap-0.5">
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ==========================================
// 5. APPLICATION FLOW & RENDER LOOP
// ==========================================

// --- Screen 11: Added to Cart Successful Sheet ---
function renderAddToCartSheet(state) {
    if (!state.addedItemSheet) return '';
    
    const itemId = state.addedItemSheet;
    const item = combos.find(c => c.id === itemId) || singleItems.find(i => i.id === itemId);
    if (!item) return '';

    const cartCount = Object.values(state.cart).reduce((sum, q) => sum + q, 0);
    const quantity = state.cart[itemId] || 0;
    const priceFormatted = item.price.toLocaleString('vi-VN') + 'đ';

    return `
        <!-- Background Sematic Dark Overlay -->
        <div class="absolute inset-0 bg-on-surface/40 z-[90] backdrop-blur-sm transition-opacity duration-300" onclick="window.closeAddedSheet()"></div>
        
        <!-- Bottom Sheet -->
        <div class="absolute inset-x-0 bottom-0 z-[95] transform translate-y-0 transition-transform duration-500 ease-out bottom-sheet-animate">
            <div class="max-w-xl mx-auto bg-surface-container-lowest dark:bg-inverse-surface rounded-t-[32px] bottom-sheet-shadow overflow-hidden flex flex-col border-t border-outline-variant/20 pb-safe">
                <!-- Handle -->
                <div class="flex justify-center pt-3 pb-1">
                    <div class="w-10 h-1.5 bg-outline-variant rounded-full opacity-50"></div>
                </div>
                <!-- Header -->
                <div class="px-margin-mobile py-stack-sm flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <span class="text-secondary dark:text-secondary-fixed-dim flex items-center">
                            <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                        </span>
                        <span class="font-label-sm text-xs font-bold text-secondary dark:text-secondary-fixed-dim uppercase tracking-wider">✓ Đã thêm thành công</span>
                    </div>
                    <button class="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high dark:bg-surface-variant/30 active:scale-95 transition-transform" onclick="window.closeAddedSheet()">
                        <span class="material-symbols-outlined text-on-surface-variant dark:text-white text-[18px]">close</span>
                    </button>
                </div>
                <!-- Main Content Area -->
                <div class="px-margin-mobile pb-36 overflow-y-auto max-h-[50vh] space-y-6">
                    <!-- Added Item Card (Bento Style) -->
                    <div class="bg-surface-container-low dark:bg-surface-dim p-stack-md rounded-xl border border-outline-variant/30 flex gap-stack-md items-start mt-2">
                        <div class="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                            <img alt="${item.name || item.dishName}" class="w-full h-full object-cover" src="${item.image}">
                        </div>
                        <div class="flex-1 flex flex-col justify-between h-full">
                            <div>
                                <h3 class="font-bold text-sm text-on-surface dark:text-white leading-tight">${item.name || item.dishName}</h3>
                                <div class="flex flex-wrap gap-2 mt-1">
                                    <span class="bg-surface-container-highest dark:bg-surface-variant/40 px-2 py-0.5 rounded-full text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim font-medium">Mặc định</span>
                                </div>
                            </div>
                            <div class="flex items-center justify-between mt-3">
                                <span class="font-label-price text-xs font-extrabold text-primary dark:text-primary-fixed-dim">${priceFormatted}</span>
                                <div class="flex items-center bg-surface-container-highest dark:bg-surface-variant/50 rounded-lg px-2 py-1 gap-3">
                                    <span class="material-symbols-outlined text-[16px] text-on-surface-variant dark:text-white active:scale-90 transition-transform cursor-pointer" onclick="window.updateCartQuantity('${item.id}', -1)">remove</span>
                                    <span class="font-label-sm text-xs w-4 text-center dark:text-white">${quantity}</span>
                                    <span class="material-symbols-outlined text-[16px] text-primary dark:text-primary-fixed-dim active:scale-90 transition-transform cursor-pointer" onclick="window.updateCartQuantity('${item.id}', 1)">add</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Upsell Section -->
                    <div class="space-y-3">
                        <div class="flex items-center justify-between">
                            <h4 class="font-bold text-xs text-on-surface dark:text-white uppercase tracking-wider">Có thể bạn muốn thêm</h4>
                            <span class="text-primary dark:text-primary-fixed-dim text-xs font-bold hover:underline cursor-pointer" onclick="window.location.hash = '#/menu'; window.closeAddedSheet()">Xem tất cả</span>
                        </div>
                        <div class="bento-grid">
                            <!-- Recommendation 1: Trà tắc -->
                            <div class="bg-surface dark:bg-surface-dim p-3 rounded-xl border border-outline-variant/20 flex flex-col justify-between select-none">
                                <div>
                                    <div class="aspect-square rounded-lg overflow-hidden mb-2">
                                        <img alt="Trà Tắc" class="w-full h-full object-cover" src="https://i.ibb.co/G35GkzS4/Tr-T-c.jpg">
                                    </div>
                                    <h5 class="font-bold text-xs text-on-surface dark:text-white truncate">Trà Tắc Giải Nhiệt</h5>
                                </div>
                                <div class="flex items-center justify-between mt-2 pt-2 border-t border-outline-variant/10">
                                    <span class="text-xs font-extrabold text-primary dark:text-primary-fixed-dim">25.000đ</span>
                                    <button class="w-6 h-6 flex items-center justify-center rounded-full bg-primary hover:bg-primary-container text-white active:scale-95 transition-transform" onclick="window.addUpsellItem('drink-5', 'Trà Tắc Giải Nhiệt')">
                                        <span class="material-symbols-outlined text-[16px]">add</span>
                                    </button>
                                </div>
                            </div>
                            <!-- Recommendation 2: Sâm lục vị -->
                            <div class="bg-surface dark:bg-surface-dim p-3 rounded-xl border border-outline-variant/20 flex flex-col justify-between select-none">
                                <div>
                                    <div class="aspect-square rounded-lg overflow-hidden mb-2">
                                        <img alt="Sâm Lục Vị" class="w-full h-full object-cover" src="https://i.ibb.co/67Q4HTGR/S-m-L-c-V-M-t-Gan.jpg">
                                    </div>
                                    <h5 class="font-bold text-xs text-on-surface dark:text-white truncate">Sâm Lục Vị Mát Gan</h5>
                                </div>
                                <div class="flex items-center justify-between mt-2 pt-2 border-t border-outline-variant/10">
                                    <span class="text-xs font-extrabold text-primary dark:text-primary-fixed-dim">20.000đ</span>
                                    <button class="w-6 h-6 flex items-center justify-center rounded-full bg-primary hover:bg-primary-container text-white active:scale-95 transition-transform" onclick="window.addUpsellItem('drink-2', 'Sâm Lục Vị Mát Gan')">
                                        <span class="material-symbols-outlined text-[16px]">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Fixed Bottom Buttons -->
                <div class="absolute bottom-0 left-0 right-0 p-margin-mobile bg-surface-container-lowest/90 dark:bg-inverse-surface/95 backdrop-blur-md border-t border-outline-variant/10 flex flex-col gap-2.5">
                    <button class="w-full h-12 bg-primary hover:bg-primary-container text-white rounded-xl font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-md text-sm select-none" onclick="window.location.hash = '#/cart'; window.closeAddedSheet()">
                        Xem giỏ hàng
                        <span class="bg-white/20 px-2 py-0.5 rounded-lg text-xs font-bold">${cartCount}</span>
                    </button>
                    <button class="w-full h-12 border-2 border-primary text-primary dark:border-primary-fixed-dim dark:text-primary-fixed-dim rounded-xl font-bold flex items-center justify-center active:scale-[0.98] transition-all bg-transparent text-sm select-none" onclick="window.closeAddedSheet()">
                        Tiếp tục chọn món
                    </button>
                </div>
            </div>
        </div>
    `;
}

// --- Screen 12: Cart Page Renderer ---
function renderCartPage(state) {
    const cartEntries = Object.entries(state.cart);
    const cartCount = Object.values(state.cart).reduce((sum, q) => sum + q, 0);

    if (cartCount === 0) {
        return `
            <div class="pt-16 pb-12 text-center py-20 flex flex-col items-center justify-center animate-fade-in select-none">
                <span class="material-symbols-outlined text-6xl text-outline mb-4">shopping_cart_off</span>
                <h3 class="font-bold text-lg text-on-surface dark:text-white">Giỏ hàng của bạn đang trống!</h3>
                <p class="text-xs text-on-surface-variant dark:text-secondary-fixed-dim mt-1.5 max-w-[240px] leading-relaxed">Hãy quay lại trang Thực đơn để chọn những món ăn ngon sinh viên nhé.</p>
                <button class="mt-6 squishy-button bg-primary text-white font-bold px-6 py-2.5 rounded-xl shadow-md text-xs" onclick="window.location.hash = '#/menu'">
                    Gọi món ngay
                </button>
            </div>
        `;
    }

    let cartTotal = 0;
    const cartItemsHTML = cartEntries.map(([itemId, qty]) => {
        const item = combos.find(c => c.id === itemId) || singleItems.find(i => i.id === itemId);
        if (!item) return '';

        const itemTotal = item.price * qty;
        cartTotal += itemTotal;

        // Custom selections label mock
        const isDrink = item.category === 'drink' || (item.dishName && item.dishName.includes('Trà'));
        const optionsHTML = isDrink
            ? `<span class="inline-block bg-surface-container dark:bg-surface-variant/40 px-2 py-0.5 rounded text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim font-medium select-none">Mặc định</span>`
            : `
                <span class="inline-block bg-surface-container dark:bg-surface-variant/40 px-2 py-0.5 rounded text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim font-medium select-none">Thêm trứng +7.000đ</span>
                <span class="inline-block bg-surface-container dark:bg-surface-variant/40 px-2 py-0.5 rounded text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim font-medium select-none">Ít cay</span>
            `;

        return `
            <!-- Cart Item -->
            <div class="bg-surface-container-lowest dark:bg-surface-dim p-stack-md rounded-xl border border-outline-variant/20 dark:border-outline/10 shadow-sm flex gap-stack-md select-none animate-fade-in">
                <img alt="${item.name || item.dishName}" class="w-20 h-20 rounded-lg object-cover border border-outline-variant/10 shrink-0" src="${item.image}">
                <div class="flex-1 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start">
                            <h3 class="font-bold text-sm text-on-surface dark:text-white leading-tight line-clamp-1">${item.name || item.dishName}</h3>
                            <div class="flex gap-1 -mt-1 shrink-0">
                                <button class="p-1 hover:bg-surface-container-high rounded-full transition-colors active:scale-90" onclick="showToast('Tính năng tùy chỉnh món sẽ mở khi gọi món!', 'info')"><span class="material-symbols-outlined text-[16px] text-on-surface-variant dark:text-white">edit</span></button>
                                <button class="p-1 hover:bg-error-container/20 rounded-full transition-colors active:scale-90" onclick="window.updateCartQuantity('${item.id}', -${qty})"><span class="material-symbols-outlined text-[16px] text-status-red">delete</span></button>
                            </div>
                        </div>
                        <div class="space-y-1 mt-1 flex flex-wrap gap-1">
                            ${optionsHTML}
                        </div>
                    </div>
                    
                    <div class="flex justify-between items-end mt-3">
                        <span class="font-label-price text-sm font-extrabold text-primary dark:text-primary-fixed-dim">${item.price.toLocaleString('vi-VN')}đ</span>
                        <div class="flex items-center bg-surface-container dark:bg-surface-variant/50 px-3 py-1 rounded-full border border-outline-variant/20">
                            <button class="text-primary dark:text-primary-fixed-dim font-bold active:scale-90 transition-transform mr-2.5" onclick="window.updateCartQuantity('${item.id}', -1)">-</button>
                            <span class="font-bold text-on-surface dark:text-white text-xs">${qty}</span>
                            <button class="text-primary dark:text-primary-fixed-dim font-bold active:scale-90 transition-transform ml-2.5" onclick="window.updateCartQuantity('${item.id}', 1)">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const { prepFee, voucher, finalTotal } = getOrderTotals(state.cart);
    const discount = voucher.discount;
    let voucherLabelHTML = 'Chọn ưu đãi';
    if (state.appliedVoucherCode && discount > 0) {
        voucherLabelHTML = `<span class="bg-status-red/10 text-status-red border border-status-red/20 px-2 py-0.5 rounded text-[10px] font-bold">${voucher.label}</span>`;
    } else if (state.appliedVoucherCode && voucher.reason) {
        voucherLabelHTML = `<span class="text-[10px] text-status-brown font-semibold">Chưa đủ điều kiện</span>`;
    }

    return `
        <div class="pt-16 pb-32 animate-fade-in select-none">
            <!-- Branch Info banner -->
            <section class="bg-surface-container-low dark:bg-surface-dim p-4 rounded-xl flex items-start gap-stack-md border border-outline-variant/30 dark:border-outline/10 select-none">
                <span class="material-symbols-outlined text-primary dark:text-primary-fixed-dim mt-0.5">location_on</span>
                <div class="flex-grow">
                    <h3 class="font-bold text-xs text-on-surface dark:text-white">Sinh Viên Quán — Căn tin IUH</h3>
                    <p class="text-[10px] text-on-surface-variant dark:text-secondary-fixed-dim mt-0.5">Thời gian nhận hàng ước tính: 10–15 phút</p>
                </div>
                <button class="text-primary dark:text-primary-fixed-dim text-xs font-bold hover:underline" onclick="showToast('Đã tự động chọn Chi nhánh Căn tin Công nghiệp - IUH!', 'info')">Thay đổi</button>
            </section>

            <!-- DineOption switch tab -->
            <div class="bg-surface-container-high dark:bg-surface-variant/40 p-1 rounded-xl flex mt-4 select-none">
                <button class="flex-1 py-2 text-center rounded-lg text-xs font-bold transition-all duration-200 ${state.dineOption === 'eat-in' ? 'bg-primary-container text-white shadow-sm' : 'text-on-surface-variant dark:text-secondary-fixed-dim'}" 
                        onclick="window.setDineOption('eat-in')">Ăn tại quán</button>
                <button class="flex-1 py-2 text-center rounded-lg text-xs font-bold transition-all duration-200 ${state.dineOption === 'take-away' ? 'bg-primary-container text-white shadow-sm' : 'text-on-surface-variant dark:text-secondary-fixed-dim'}" 
                        onclick="window.setDineOption('take-away')">Mang đi</button>
            </div>

            <!-- Cart list -->
            <div class="mt-6 space-y-4">
                <div class="flex items-center justify-between select-none">
                    <h2 class="font-bold text-[15px] text-on-surface dark:text-white">Món đã chọn</h2>
                    <button class="text-primary dark:text-primary-fixed-dim text-xs font-bold flex items-center gap-1 hover:underline cursor-pointer" onclick="window.location.hash = '#/menu'">
                        <span class="material-symbols-outlined text-[16px]">add_circle</span>
                        Thêm món khác
                    </button>
                </div>
                
                <div class="space-y-3">
                    ${cartItemsHTML}
                </div>
            </div>

            <!-- Notes Section -->
            <section class="mt-6 space-y-2 select-none">
                <h2 class="font-bold text-[15px] text-on-surface dark:text-white px-1">Ghi chú cho bếp</h2>
                <div class="relative">
                    <textarea class="w-full bg-surface-container-low dark:bg-surface-dim border-none rounded-xl p-4 text-xs text-on-surface dark:text-white placeholder:text-on-surface-variant/60 focus:ring-1 focus:ring-primary h-20 transition-all outline-none" 
                              placeholder="Ghi chú thêm (Ví dụ: ít đường, nhiều trứng, không cay...)" 
                              oninput="window.setCartNote(this.value)">${state.cartNote || ''}</textarea>
                    <span class="material-symbols-outlined absolute right-3 bottom-3 text-on-surface-variant/40">edit_note</span>
                </div>
            </section>

            <!-- Pricing Summary Box -->
            <section class="bg-surface-container-lowest dark:bg-surface-dim p-4 rounded-xl border border-outline-variant/30 dark:border-outline/10 space-y-3 shadow-sm mt-6 select-none">
                <div class="flex justify-between text-xs text-on-surface-variant dark:text-secondary-fixed-dim">
                    <span>Tạm tính</span>
                    <span class="font-semibold text-on-surface dark:text-white">${cartTotal.toLocaleString('vi-VN')}đ</span>
                </div>
                <div class="flex justify-between text-xs text-on-surface-variant dark:text-secondary-fixed-dim">
                    <span>Phí chuẩn bị món</span>
                    <span class="font-semibold text-on-surface dark:text-white">${prepFee.toLocaleString('vi-VN')}đ</span>
                </div>
                <div class="flex justify-between text-xs items-center">
                    <div class="flex items-center gap-1 text-on-surface-variant dark:text-secondary-fixed-dim">
                        <span class="material-symbols-outlined text-primary dark:text-primary-fixed-dim text-[16px]">confirmation_number</span>
                        <span>Voucher sinh viên</span>
                    </div>
                    <button class="text-primary dark:text-primary-fixed-dim font-bold text-xs hover:underline cursor-pointer" onclick="window.location.hash = '#/checkout'">${voucherLabelHTML}</button>
                </div>
                
                <hr class="border-outline-variant/10 dark:border-outline/10">
                
                <div class="flex justify-between items-center pt-1 select-none">
                    <span class="font-bold text-on-surface dark:text-white text-base">Tổng cộng</span>
                    <span class="font-label-price text-xl font-extrabold text-primary dark:text-primary-fixed-dim">${finalTotal.toLocaleString('vi-VN')}đ</span>
                </div>
            </section>

        </div>
    `;
}

// --- Screen 13: Checkout & Voucher Screen ---
function renderCheckoutPage(state) {
    const { cartTotal, prepFee, voucher, finalTotal } = getOrderTotals(state.cart);
    const discount = voucher.discount;
    const payment = state.paymentMethod || 'cash';

    return `
        <div class="pt-16 pb-32 animate-fade-in select-none">
            <!-- Voucher Input Box -->
            <section class="space-y-3" id="voucher-section">
                <div class="flex items-center gap-2 select-none">
                    <span class="material-symbols-outlined text-primary dark:text-primary-fixed-dim" style="font-variation-settings: 'FILL' 1;">confirmation_number</span>
                    <h2 class="font-bold text-[15px] text-on-surface dark:text-white">Mã giảm giá khả dụng</h2>
                </div>
                
                <div class="flex gap-2">
                    <input class="flex-grow bg-surface-container-low dark:bg-surface-dim border border-outline-variant/30 dark:border-outline/10 rounded-xl px-4 py-2.5 text-xs outline-none text-on-surface dark:text-white placeholder:text-on-surface-variant/40" 
                           placeholder="Nhập mã ưu đãi khác..." type="text" id="voucher-code-input" value="${state.appliedVoucherCode || ''}">
                    <button class="bg-primary hover:bg-primary-container text-white px-5 rounded-xl text-xs font-bold active:scale-95 transition-all shadow-sm shrink-0 select-none squishy-button"
                            onclick="window.applyVoucherCode(document.getElementById('voucher-code-input').value)">
                        Áp dụng
                    </button>
                </div>

                <!-- Active success banner -->
                ${state.appliedVoucherCode ? `
                    <div class="bg-secondary-container/30 border border-outline/20 p-3 rounded-xl flex items-center justify-between animate-fade-in select-none">
                        <div class="flex items-center gap-2 text-on-surface dark:text-white">
                            <span class="material-symbols-outlined text-status-green" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                            <span class="text-xs font-bold">Voucher "${state.appliedVoucherCode}" đã được áp dụng</span>
                        </div>
                        <span class="text-xs font-black text-status-red">Tiết kiệm -${discount.toLocaleString('vi-VN')}đ</span>
                    </div>
                ` : ''}

                <!-- Clickable dashed vouchers -->
                <div class="grid grid-cols-2 gap-3 mt-2">
                    <!-- GIAM10 card -->
                    <div class="cursor-pointer group relative bg-surface-container-lowest dark:bg-surface-dim border-2 border-dashed ${state.appliedVoucherCode === 'GIAM10' ? 'border-primary dark:border-primary-fixed-dim bg-primary-fixed/10' : 'border-outline-variant/40 dark:border-outline/10'} p-3 rounded-xl flex items-center gap-3 hover:border-primary transition-colors select-none"
                         onclick="window.applyVoucherCode('GIAM10')">
                        <div class="bg-primary-container/10 p-2 rounded-lg text-primary dark:text-primary-fixed-dim">
                            <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">local_activity</span>
                        </div>
                        <div>
                            <p class="font-bold text-xs text-primary dark:text-primary-fixed-dim">GIAM10</p>
                            <p class="text-[9px] text-on-surface-variant dark:text-secondary-fixed-dim mt-0.5">Giảm 10k đơn từ 50k</p>
                        </div>
                    </div>
                    
                    <!-- SINHVIEN15 card -->
                    <div class="cursor-pointer group relative bg-surface-container-lowest dark:bg-surface-dim border-2 border-dashed ${state.appliedVoucherCode === 'SINHVIEN15' ? 'border-primary dark:border-primary-fixed-dim bg-primary-fixed/10' : 'border-outline-variant/40 dark:border-outline/10'} p-3 rounded-xl flex items-center gap-3 hover:border-primary transition-colors select-none"
                         onclick="window.applyVoucherCode('SINHVIEN15')">
                        <div class="bg-tertiary-container/10 p-2 rounded-lg text-tertiary">
                            <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">school</span>
                        </div>
                        <div>
                            <p class="font-bold text-xs text-tertiary">SINHVIEN15</p>
                            <p class="text-[9px] text-on-surface-variant dark:text-secondary-fixed-dim mt-0.5">Giảm 15% cho SV</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Payment Methods Radios -->
            <section class="mt-6 space-y-3">
                <div class="flex items-center gap-2 select-none">
                    <span class="material-symbols-outlined text-primary dark:text-primary-fixed-dim" style="font-variation-settings: 'FILL' 1;">account_balance_wallet</span>
                    <h2 class="font-bold text-[15px] text-on-surface dark:text-white">Phương thức thanh toán</h2>
                </div>
                
                <div class="grid grid-cols-1 gap-2.5">
                    <!-- Cash -->
                    <label class="relative flex items-center p-3 bg-surface-container-lowest dark:bg-surface-dim rounded-xl border ${payment === 'cash' ? 'border-primary dark:border-primary-fixed-dim bg-primary-fixed/10' : 'border-outline-variant/30 dark:border-outline/10'} cursor-pointer transition-all active:scale-[0.98]">
                        <input class="hidden" name="payment" type="radio" value="cash" ${payment === 'cash' ? 'checked' : ''} onclick="window.setPaymentMethod('cash')">
                        <div class="flex items-center gap-3 w-full">
                            <div class="w-8 h-8 rounded-full bg-surface-container-high dark:bg-surface-variant/40 flex items-center justify-center text-on-surface-variant dark:text-white">
                                <span class="material-symbols-outlined text-base">payments</span>
                            </div>
                            <span class="flex-grow font-bold text-xs text-on-surface dark:text-white">Tiền mặt</span>
                            <div class="w-4 h-4 rounded-full border-2 ${payment === 'cash' ? 'border-primary dark:border-primary-fixed-dim bg-primary' : 'border-outline-variant'} flex items-center justify-center">
                                ${payment === 'cash' ? '<div class="w-1.5 h-1.5 bg-white rounded-full"></div>' : ''}
                            </div>
                        </div>
                    </label>
                    
                    <!-- MoMo -->
                    <label class="relative flex items-center p-3 bg-surface-container-lowest dark:bg-surface-dim rounded-xl border ${payment === 'momo' ? 'border-primary dark:border-primary-fixed-dim bg-primary-fixed/10' : 'border-outline-variant/30 dark:border-outline/10'} cursor-pointer transition-all active:scale-[0.98]">
                        <input class="hidden" name="payment" type="radio" value="momo" ${payment === 'momo' ? 'checked' : ''} onclick="window.setPaymentMethod('momo')">
                        <div class="flex items-center gap-3 w-full">
                            <img class="w-8 h-8 rounded-lg object-cover" src="https://i.ibb.co/F4FnXJvJ/Logo-Mo-Mo-Square-300x300.png">
                            <span class="flex-grow font-bold text-xs text-on-surface dark:text-white">Ví MoMo</span>
                            <div class="w-4 h-4 rounded-full border-2 ${payment === 'momo' ? 'border-primary dark:border-primary-fixed-dim bg-primary' : 'border-outline-variant'} flex items-center justify-center">
                                ${payment === 'momo' ? '<div class="w-1.5 h-1.5 bg-white rounded-full"></div>' : ''}
                            </div>
                        </div>
                    </label>

                    <!-- ZaloPay -->
                    <label class="relative flex items-center p-3 bg-surface-container-lowest dark:bg-surface-dim rounded-xl border ${payment === 'zalopay' ? 'border-primary dark:border-primary-fixed-dim bg-primary-fixed/10' : 'border-outline-variant/30 dark:border-outline/10'} cursor-pointer transition-all active:scale-[0.98]">
                        <input class="hidden" name="payment" type="radio" value="zalopay" ${payment === 'zalopay' ? 'checked' : ''} onclick="window.setPaymentMethod('zalopay')">
                        <div class="flex items-center gap-3 w-full">
                            <img class="w-8 h-8 rounded-lg object-cover" src="https://i.ibb.co/QFbVbWrs/zalopay.jpg">
                            <span class="flex-grow font-bold text-xs text-on-surface dark:text-white">Ví ZaloPay</span>
                            <div class="w-4 h-4 rounded-full border-2 ${payment === 'zalopay' ? 'border-primary dark:border-primary-fixed-dim bg-primary' : 'border-outline-variant'} flex items-center justify-center">
                                ${payment === 'zalopay' ? '<div class="w-1.5 h-1.5 bg-white rounded-full"></div>' : ''}
                            </div>
                        </div>
                    </label>

                    ${(payment === 'momo' || payment === 'zalopay') ? renderPaymentQrPanel(payment, finalTotal) : ''}
                    
                    <!-- Bank card -->
                    <label class="relative flex items-center p-3 bg-surface-container-lowest dark:bg-surface-dim rounded-xl border ${payment === 'card' ? 'border-primary dark:border-primary-fixed-dim bg-primary-fixed/10' : 'border-outline-variant/30 dark:border-outline/10'} cursor-pointer transition-all active:scale-[0.98]">
                        <input class="hidden" name="payment" type="radio" value="card" ${payment === 'card' ? 'checked' : ''} onclick="window.setPaymentMethod('card')">
                        <div class="flex items-center gap-3 w-full">
                            <div class="w-8 h-8 rounded-full bg-surface-container-high dark:bg-surface-variant/40 flex items-center justify-center text-on-surface-variant dark:text-white">
                                <span class="material-symbols-outlined text-base">credit_card</span>
                            </div>
                            <span class="flex-grow font-bold text-xs text-on-surface dark:text-white">Thẻ ngân hàng (ATM/Visa)</span>
                            <div class="w-4 h-4 rounded-full border-2 ${payment === 'card' ? 'border-primary dark:border-primary-fixed-dim bg-primary' : 'border-outline-variant'} flex items-center justify-center">
                                ${payment === 'card' ? '<div class="w-1.5 h-1.5 bg-white rounded-full"></div>' : ''}
                            </div>
                        </div>
                    </label>
                </div>
            </section>

            <!-- Order Summary Section -->
            <section class="bg-surface-container-low dark:bg-surface-dim rounded-2xl p-4 space-y-3 shadow-sm border border-outline-variant/30 dark:border-outline/10 mt-6 select-none">
                <h2 class="font-bold text-on-surface dark:text-white border-b border-outline-variant/20 pb-2 text-[14px]">Tóm tắt đơn hàng</h2>
                <div class="space-y-2.5">
                    <div class="flex justify-between text-xs text-on-surface-variant dark:text-secondary-fixed-dim">
                        <span>Tạm tính</span>
                        <span class="font-bold text-on-surface dark:text-white">${cartTotal.toLocaleString('vi-VN')}đ</span>
                    </div>
                    ${state.appliedVoucherCode ? `
                        <div class="flex justify-between text-xs text-status-green font-semibold">
                            <span>Voucher giảm giá</span>
                            <span class="font-bold">-${discount.toLocaleString('vi-VN')}đ</span>
                        </div>
                    ` : ''}
                    <div class="flex justify-between text-xs text-on-surface-variant dark:text-secondary-fixed-dim">
                        <span>Phí chuẩn bị món</span>
                        <span class="font-bold text-on-surface dark:text-white">${prepFee.toLocaleString('vi-VN')}đ</span>
                    </div>
                    
                    <div class="pt-3 border-t border-dashed border-outline-variant/30 flex justify-between items-center select-none">
                        <span class="font-bold text-sm text-on-surface dark:text-white">Tổng thanh toán</span>
                        <span class="font-label-price text-lg font-extrabold text-primary dark:text-primary-fixed-dim">${finalTotal.toLocaleString('vi-VN')}đ</span>
                    </div>
                </div>
            </section>

        </div>
    `;
}

function renderApp() {
    // Dynamic theme class sync
    if (state.theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    const mainRoot = document.getElementById('main-root');
    const headerRoot = document.getElementById('header-root');
    const footerRoot = document.getElementById('footer-root');
    const drawerRoot = document.getElementById('drawer-root');

    if (!mainRoot) return;

    // Render Global Frame items
    headerRoot.innerHTML = renderHeader(state);
    footerRoot.innerHTML = renderFooter(state);
    drawerRoot.innerHTML = renderDrawer(state);

    // Render Bottom Sheet Modal for Screen 11 dynamically
    let addedSheetRoot = document.getElementById('added-sheet-root');
    if (!addedSheetRoot) {
        addedSheetRoot = document.createElement('div');
        addedSheetRoot.id = 'added-sheet-root';
        const appContainer = document.getElementById('app-container');
        if (appContainer) appContainer.appendChild(addedSheetRoot);
    }
    addedSheetRoot.innerHTML = renderAddToCartSheet(state);

    // Dynamic padding adjustments
    const cartCount = Object.values(state.cart).reduce((sum, q) => sum + q, 0);
    if ((state.currentRoute === '#/menu' && cartCount > 0) || state.currentRoute === '#/cart' || state.currentRoute === '#/checkout') {
        mainRoot.className = "flex-1 overflow-y-auto pb-32 pt-14 px-margin-mobile transition-all duration-300";
    } else {
        mainRoot.className = "flex-1 overflow-y-auto pb-24 pt-14 px-margin-mobile transition-all duration-300";
    }

    // Dynamic Route switching
    switch (state.currentRoute) {
        case '#/home':
        case '#/':
            mainRoot.innerHTML = renderHome(state);
            break;
        case '#/vouchers':
            mainRoot.innerHTML = renderVouchers(state);
            break;
        case '#/decision':
            mainRoot.innerHTML = renderDecision(state);
            break;
        case '#/notifications':
            mainRoot.innerHTML = renderNotifications(state);
            break;
        case '#/menu':
            mainRoot.innerHTML = renderMenu(state);
            break;
        case '#/orders':
            mainRoot.innerHTML = renderOrders(state);
            break;
        case '#/profile':
            mainRoot.innerHTML = renderProfile(state);
            break;
        case '#/addresses':
            mainRoot.innerHTML = renderAddresses(state);
            break;
        case '#/cart':
            mainRoot.innerHTML = renderCartPage(state);
            break;
        case '#/checkout':
            mainRoot.innerHTML = renderCheckoutPage(state);
            break;
        default:
            mainRoot.innerHTML = renderHome(state);
            break;
    }

}

let appInteractionsReady = false;
function setupAppInteractions() {
    if (appInteractionsReady) return;
    const appContainer = document.getElementById('app-container');
    if (!appContainer) return;
    appInteractionsReady = true;
    appContainer.addEventListener('click', (e) => {
        const target = e.target.closest('button, a[href^="#"]');
        if (target && !target.classList.contains('no-click-sound')) {
            playClickSound();
        }
    }, { passive: true });
}

// ==========================================
// 6. EVENT ROUTE BINDING
// ==========================================
window.addEventListener('hashchange', () => {
    state.currentRoute = window.location.hash;
    renderApp();
    const mainRoot = document.getElementById('main-root');
    if (mainRoot) mainRoot.scrollTop = 0;
});

// ==========================================
// 7. WINDOW ACTIONS BINDINGS
// ==========================================

window.toggleDrawer = () => {
    const drawer = document.getElementById('nav-drawer');
    const overlay = document.getElementById('drawer-overlay');
    if (!drawer) return;
    
    const isHidden = drawer.classList.contains('-translate-x-full');
    if (isHidden) {
        drawer.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        overlay.classList.add('opacity-100');
    } else {
        drawer.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        overlay.classList.remove('opacity-100');
    }
};

window.toggleTheme = () => {
    if (state.theme === 'light') {
        state.theme = 'dark';
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        showToast("Đã kích hoạt Chế độ Tối ấm áp!", "info");
    } else {
        state.theme = 'light';
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        showToast("Đã kích hoạt Chế độ Sáng rực rỡ!", "info");
    }
    scheduleRenderApp();
};

window.applyVoucher = (voucherId) => {
    const voucher = state.vouchers.find(v => v.id === voucherId);
    if (!voucher || voucher.category !== 'available') return;

    state.appliedVoucherId = voucherId;
    state.appliedVoucherCode = voucher.code;

    const subtotal = getCartSubtotal(state.cart);
    const result = calculateVoucherDiscount(subtotal, state.cart);

    navigator.clipboard.writeText(voucher.code).catch(() => {});

    if (subtotal > 0 && result.discount > 0) {
        triggerConfetti();
        showToast(`Đã áp dụng ${voucher.code} — tiết kiệm ${result.discount.toLocaleString('vi-VN')}đ!`, 'success');
    } else if (result.reason) {
        showToast(`Đã lưu mã ${voucher.code}. ${result.reason}`, 'info');
    } else {
        showToast(`Đã áp dụng ${voucher.title}!`, 'success');
    }

    const cartCount = Object.values(state.cart).reduce((sum, q) => sum + q, 0);
    scheduleRenderApp();
    setTimeout(() => {
        window.location.hash = cartCount > 0 ? '#/checkout' : '#/menu';
    }, 600);
};

window.spinDecisionEngine = () => {
    if (state.isSpinning) return;
    
    state.isSpinning = true;
    renderApp();

    let spins = 0;
    const maxSpins = 12;
    const intervalTime = 100;
    
    const spinInterval = setInterval(() => {
        const rollCombo = combos[spins % combos.length];
        const slotTrack = document.getElementById('slot-track');
        
        if (slotTrack) {
            slotTrack.innerHTML = `
                <div class="slot-item text-center">
                    <img class="w-24 h-24 rounded-full object-cover border-2 border-primary mx-auto animate-ping mb-2" src="${rollCombo.image}">
                    <h4 class="font-extrabold text-base text-primary">${rollCombo.name}</h4>
                    <p class="text-xs text-on-surface-variant font-bold">${rollCombo.price.toLocaleString('vi-VN')}đ</p>
                </div>
            `;
        }
        
        playClickSound();
        spins++;

        if (spins >= maxSpins) {
            clearInterval(spinInterval);
            
            const randomIndex = Math.floor(Math.random() * combos.length);
            state.selectedCombo = combos[randomIndex];
            state.isSpinning = false;
            
            renderApp();
            playSuccessSound();
            showToast(`Gợi ý thành công: ${state.selectedCombo.name}!`, "success");
            triggerConfetti();
        }
    }, intervalTime);
};

window.orderCombo = (comboId) => {
    const combo = combos.find(c => c.id === comboId);
    if (!combo) return;

    state.cart[comboId] = (state.cart[comboId] || 0) + 1;
    state.addedItemSheet = comboId;
    
    showToast(`Đã thêm ${combo.name} vào giỏ hàng!`, "success");
    scheduleRenderApp();
};

window.reorderItem = (orderId) => {
    const order = state.orders.find(o => o.id === orderId);
    if (!order) return;

    if (!order.cartItems || order.cartItems.length === 0) {
        showToast('Đơn cũ chưa lưu chi tiết món. Mời bạn chọn lại từ thực đơn!', 'info');
        window.location.hash = '#/menu';
        return;
    }

    order.cartItems.forEach(({ itemId, qty }) => {
        if (getProductById(itemId)) {
            state.cart[itemId] = (state.cart[itemId] || 0) + qty;
        }
    });

    showToast(`Đã thêm lại món của đơn ${orderId} vào giỏ!`, 'success');
    playSuccessSound();
    scheduleRenderApp();
    window.location.hash = '#/cart';
};

window.checkoutCart = () => {
    window.location.hash = '#/cart';
};

window.updateCartQuantity = (itemId, change) => {
    const currentQty = state.cart[itemId] || 0;
    const newQty = currentQty + change;
    
    if (newQty <= 0) {
        delete state.cart[itemId];
    } else {
        state.cart[itemId] = newQty;
    }
    
    if (change > 0 && state.currentRoute === '#/menu') {
        state.addedItemSheet = itemId;
    }
    
    scheduleRenderApp();
};

window.closeAddedSheet = () => {
    state.addedItemSheet = null;
    scheduleRenderApp();
};

window.addUpsellItem = (id, name) => {
    state.cart[id] = (state.cart[id] || 0) + 1;
    showToast(`Đã thêm ${name} thành công!`, "success");
    scheduleRenderApp();
};

window.setDineOption = (option) => {
    state.dineOption = option;
    scheduleRenderApp();
};

window.setCartNote = (value) => {
    state.cartNote = value;
};

window.applyVoucherCode = (code) => {
    const cleanCode = (code || '').trim().toUpperCase();
    if (!cleanCode) {
        clearAppliedVoucher();
        showToast('Đã hủy áp dụng mã giảm giá.', 'info');
        scheduleRenderApp();
        return;
    }

    const walletVoucher = state.vouchers.find(v => v.code === cleanCode && v.category === 'available');
    if (!KNOWN_VOUCHER_CODES.includes(cleanCode) && !walletVoucher) {
        showToast(`Mã ${cleanCode} không khả dụng!`, 'warning');
        return;
    }

    state.appliedVoucherCode = cleanCode;
    state.appliedVoucherId = walletVoucher ? walletVoucher.id : null;

    const subtotal = getCartSubtotal(state.cart);
    const result = calculateVoucherDiscount(subtotal, state.cart);

    if (subtotal > 0 && result.discount > 0) {
        triggerConfetti();
        showToast(`Áp dụng mã ${cleanCode} — tiết kiệm ${result.discount.toLocaleString('vi-VN')}đ!`, 'success');
    } else if (result.reason) {
        showToast(result.reason, 'info');
    } else {
        showToast(`Đã lưu mã ${cleanCode}!`, 'success');
    }
    scheduleRenderApp();
};

window.setPaymentMethod = (method) => {
    state.paymentMethod = method;
    scheduleRenderApp();
};

window.checkoutCartFinal = () => {
    const cartEntries = Object.entries(state.cart);
    const cartCount = Object.values(state.cart).reduce((sum, q) => sum + q, 0);
    if (cartCount === 0) {
        showToast("Giỏ hàng của bạn đang trống!", "warning");
        return;
    }

    const orderId = `SVQ-${Math.floor(100 + Math.random() * 900)}`;
    const now = new Date();
    const timeFormatted = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} Hôm nay`;

    let total = 0;
    let itemsNames = [];
    
    cartEntries.forEach(([itemId, qty]) => {
        const product = combos.find(c => c.id === itemId) || singleItems.find(i => i.id === itemId);
        if (product) {
            total += product.price * qty;
            itemsNames.push(`${product.name || product.dishName} x${qty}`);
        }
    });

    const { prepFee, voucher, finalTotal } = getOrderTotals(state.cart);

    const newOrder = {
        id: orderId,
        itemName: itemsNames.join(', '),
        price: finalTotal,
        time: timeFormatted,
        status: 'preparing',
        step: 1,
        lastProgressAt: Date.now(),
        cartItems: cartEntries.map(([itemId, qty]) => ({ itemId, qty })),
        appliedVoucherCode: state.appliedVoucherCode,
        discount: voucher.discount
    };

    state.orders.unshift(newOrder);
    state.cart = {};
    clearAppliedVoucher();
    state.cartNote = '';

    triggerConfetti();
    showToast(`Đặt đơn ${orderId} thành công!`, "success");

    state.notifications.unshift({
        id: `n-${Date.now()}`,
        title: "Đơn hàng đang chuẩn bị",
        desc: `Đơn ${orderId} đang được đầu bếp chế biến cấp tốc.`,
        time: "Vừa xong",
        type: "hoat-dong",
        icon: "restaurant",
        iconBg: "bg-primary-fixed",
        iconColor: "text-primary",
        actionText: "Xem đơn",
        actionHash: "#/orders",
        unread: true
    });

    setTimeout(() => {
        window.location.hash = '#/orders';
    }, 1000);
};

window.filterMenu = (category) => {
    state.menuFilter = category;
    scheduleRenderApp();
};

window.handleMenuSearch = (query) => {
    state.menuSearch = query;
    scheduleRenderApp();
};

window.switchNotificationTab = (tab) => {
    state.notificationTab = tab;
    scheduleRenderApp();
};

window.readNotification = (notifId) => {
    const notif = state.notifications.find(n => n.id === notifId);
    if (notif && notif.unread) {
        notif.unread = false;
        scheduleRenderApp();
    }
};

window.handleNotificationAction = (hash, notifId) => {
    window.readNotification(notifId);
    if (hash) window.location.hash = hash;
};

window.markAllNotificationsRead = () => {
    state.notifications.forEach(n => n.unread = false);
    playSuccessSound();
    showToast("Đã đánh dấu đọc tất cả thông báo!", "success");
    scheduleRenderApp();
};

window.handleLogout = () => {
    showToast("Đăng xuất thành công! Đang tải lại...", "info");
    setTimeout(() => {
        localStorage.clear();
        window.location.reload();
    }, 1500);
};

window.addMockAddress = () => {
    state.showAddAddressForm = true;
    window.location.hash = '#/addresses';
};

window.toggleAddAddressForm = (show) => {
    state.showAddAddressForm = show;
    scheduleRenderApp();
};

window.setDefaultAddress = (id) => {
    if (!state.addresses) return;
    state.addresses.forEach(a => {
        a.isDefault = (a.id === id);
    });
    showToast("Đã thiết lập địa chỉ mặc định!", "success");
    scheduleRenderApp();
};

window.deleteAddress = (id) => {
    if (!state.addresses) return;
    const index = state.addresses.findIndex(a => a.id === id);
    if (index === -1) return;
    const wasDefault = state.addresses[index].isDefault;
    state.addresses.splice(index, 1);
    if (wasDefault && state.addresses.length > 0) {
        state.addresses[0].isDefault = true;
    }
    showToast("Đã xóa địa chỉ thành công!", "success");
    scheduleRenderApp();
};

window.saveAddress = () => {
    const labelInput = document.getElementById('addr-label');
    const descInput = document.getElementById('addr-desc');
    const defaultCheckbox = document.getElementById('addr-default');
    
    if (!labelInput || !descInput) return;
    
    const label = labelInput.value.trim();
    const desc = descInput.value.trim();
    const isDefault = defaultCheckbox ? defaultCheckbox.checked : false;
    
    if (!label || !desc) {
        showToast("Vui lòng nhập đầy đủ thông tin!", "warning");
        return;
    }
    
    if (!state.addresses) state.addresses = [];
    
    if (isDefault || state.addresses.length === 0) {
        state.addresses.forEach(a => a.isDefault = false);
    }
    
    state.addresses.push({
        id: 'addr-' + Date.now(),
        label: label,
        desc: desc,
        isDefault: isDefault || state.addresses.length === 0
    });
    
    state.showAddAddressForm = false;
    showToast("Đã thêm địa chỉ mới thành công!", "success");
    scheduleRenderApp();
};

// --- Mock Live Preparation Progress (per-order throttle) ---
setInterval(() => {
    let stateChanged = false;
    const now = Date.now();

    state.orders.forEach(order => {
        if (order.status === 'preparing') {
            if (!order.lastProgressAt) order.lastProgressAt = now;
            if (now - order.lastProgressAt < 8000) return;

            if (order.step < 3) {
                order.step += 1;
                order.lastProgressAt = now;
                stateChanged = true;
                
                if (order.step === 2) {
                    state.notifications.unshift({
                        id: `n-step2-${Date.now()}`,
                        title: "Món ăn đang nấu chín",
                        desc: `Đơn ${order.id} đang được chế biến trên bếp. Sắp có rồi bạn ơi!`,
                        time: "Vừa xong",
                        type: "hoat-dong",
                        icon: "skillet",
                        iconBg: "bg-tertiary-fixed",
                        iconColor: "text-tertiary",
                        actionText: "Xem đơn",
                        actionHash: "#/orders",
                        unread: true
                    });
                } else if (order.step === 3) {
                    order.status = 'pending'; 
                    
                    state.notifications.unshift({
                        id: `n-step3-${Date.now()}`,
                        title: "Món ăn đã sẵn sàng!",
                        desc: `Đơn ${order.id} đang chờ bạn tại Quầy nhận món số 3. Mời bạn qua lấy!`,
                        time: "Vừa xong",
                        type: "hoat-dong",
                        icon: "restaurant",
                        iconBg: "bg-primary-fixed",
                        iconColor: "text-primary",
                        actionText: "Xem đơn",
                        actionHash: "#/orders",
                        unread: true
                    });
                    
                    showToast(`Món của đơn ${order.id} đã nấu xong! Mời bạn nhận món tại quầy số 3.`, "success");
                    playSuccessSound();
                }
            }
        }
    });

    if (stateChanged) {
        scheduleRenderApp();
    }
}, 8000);

// --- Bootstrapper (single init) ---
const INTRO_DURATION_MS = 3000;

function bootstrapApp() {
    if (!document.getElementById('main-root')) return;
    setupAppInteractions();
    if (state.theme === 'dark') {
        document.documentElement.classList.add('dark');
    }
    renderApp();
}

function runIntroThenBootstrap() {
    const intro = document.getElementById('app-intro');
    const container = document.getElementById('app-container');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (state.theme === 'dark') {
        document.documentElement.classList.add('dark');
    }

    if (!intro) {
        bootstrapApp();
        return;
    }

    if (prefersReducedMotion) {
        intro.remove();
        bootstrapApp();
        return;
    }

    container?.classList.add('app-intro-pending');

    let finished = false;
    const finishIntro = () => {
        if (finished) return;
        finished = true;
        intro.classList.add('app-intro--hide');
        window.setTimeout(() => {
            intro.remove();
            container?.classList.remove('app-intro-pending');
            bootstrapApp();
        }, 520);
    };

    window.setTimeout(finishIntro, INTRO_DURATION_MS);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runIntroThenBootstrap, { once: true });
} else {
    runIntroThenBootstrap();
}
