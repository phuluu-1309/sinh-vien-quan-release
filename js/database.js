// Mock database for Sinh Viên Quán app
// NOTE: Runtime data lives in js/app.js (monolith for file://). Keep this file in sync when editing menu/vouchers.

export const initialVouchers = [
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

export const combos = [
    {
        id: "combo-1",
        name: "Combo Kịp Tiết",
        dishName: "Cơm xá xíu + Trà tắc giải nhiệt",
        price: 50000,
        time: "7 phút",
        status: "Sẵn sàng ngay",
        reason: "Ăn no chắc bụng, giải nhiệt tức thì, sẵn sàng cho buổi chiều năng động.",
        tags: ["Khỏi Nghĩ", "2 Phút Có Cơm"],
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
        imageAlt: "POV: A bowl of Vietnamese braised pork char siu over hot rice, with fresh herbs, served alongside an ice-cold sweet kumquat tea."
    },
    {
        id: "combo-2",
        name: "Combo Chống Nghèo",
        dishName: "Mì tôm 2 trứng lòng đào + Trà đá mát lạnh",
        price: 25000,
        time: "4 phút",
        status: "Nấu cấp tốc",
        reason: "Giải pháp cứu cánh hoàn hảo cho những ngày ví xẹp cuối tháng, vừa ấm bụng vừa cực kỳ tiết kiệm.",
        tags: ["Cứu Đói", "Siêu Rẻ"],
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80",
        imageAlt: "Hot spicy instant noodles topped with two gooey soft-boiled eggs, green onions, and red chili, with a tall glass of iced tea."
    },
    {
        id: "combo-3",
        name: "Combo Bắt Trend",
        dishName: "Bánh mì muối ớt giòn + Trà sữa trân châu lớn",
        price: 45000,
        time: "6 phút",
        status: "Chuẩn vị giòn cay",
        reason: "Sự kết hợp bùng nổ giữa vị giòn cay của bánh mì nướng muối ớt và vị ngọt ngào của trà sữa béo ngậy.",
        tags: ["Ăn Vặt", "Độc Lạ"],
        image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=600&auto=format&fit=crop&q=80",
        imageAlt: "Vietnamese grilled spicy baguette sliced, topped with quail eggs, green onion oil, chili sauce, next to a large milk tea with boba."
    },
    {
        id: "combo-4",
        name: "Combo Học Đêm",
        dishName: "Cơm đùi gà sốt mật ong + Cà phê sữa đá tỉnh táo",
        price: 55000,
        time: "8 phút",
        status: "Đầy năng lượng",
        reason: "Thức đêm ôn thi không còn mệt mỏi! Đùi gà rán giòn rụm óng ánh sốt mật ong cùng ly cà phê đậm đặc thức tỉnh tinh thần.",
        tags: ["Tập Trung", "Tỉnh Táo"],
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop&q=80",
        imageAlt: "Crispy fried chicken leg glazed in sweet golden honey sauce over fried rice, served with a strong traditional Vietnamese iced milk coffee."
    }
];

export const singleItems = [
    {
        id: "food-1",
        name: "Cơm xá xíu chuẩn vị",
        price: 38000,
        category: "food",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300"
    },
    {
        id: "food-2",
        name: "Mì xào bò rau cải",
        price: 32000,
        category: "food",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300"
    },
    {
        id: "food-3",
        name: "Bánh mì muối ớt nướng",
        price: 20000,
        category: "food",
        image: "https://images.unsplash.com/photo-1600490036275-35f5f1656891?w=300"
    },
    {
        id: "food-4",
        name: "Cơm tấm sườn nướng",
        price: 35000,
        category: "food",
        image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=300"
    },
    {
        id: "drink-1",
        name: "Trà tắc mật ong khổng lồ",
        price: 12000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300"
    },
    {
        id: "drink-2",
        name: "Trà sữa trân châu đường đen",
        price: 25000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=300"
    },
    {
        id: "drink-3",
        name: "Cà phê sữa đá truyền thống",
        price: 15000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300"
    },
    {
        id: "drink-4",
        name: "Trà đào chanh sả",
        price: 20000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=300"
    }
];

export const initialNotifications = [
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
        icon: "coupon_image", // Handled with image render
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
        title: "Check-in Thứ 5: Nhận Flang Béo Ngậy",
        desc: "Nhận ngay bánh Flan trứng sữa thơm lừng khi check-in tại quán vào thứ 5 hàng tuần.",
        time: "2 ngày trước",
        type: "uu-dai",
        icon: "cake",
        iconBg: "bg-primary-fixed",
        iconColor: "text-primary",
        unread: false
    }
];
