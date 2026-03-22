// إخفاء شاشة التحميل بعد انتهاء التحميل
window.onload = () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 500);
};

// وظيفة التنقل بين الصفحات مع التمرير للأعلى
function show(id) {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');

    pages.forEach(p => p.classList.remove('active'));
    navLinks.forEach(l => l.classList.remove('active'));

    document.getElementById(id).classList.add('active');
    
    // ربط القائمة العلوية
    event.currentTarget.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// الفلترة الذكية للخدمات
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // تغيير شكل الأزرار
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // تنفيذ الفلترة
        document.querySelectorAll('.service-card').forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// إرسال الطلبات للواتساب بتنسيق احترافي
function order(item) {
    const phone = "21627049943";
    const timestamp = new Date().toLocaleString('ar-TN');
    const text = `*طلب جديد من موقع Kriaa360*%0A--------------------------%0A📦 الخدمة: ${item}%0A⏰ التوقيت: ${timestamp}%0A✅ أريد تأكيد الدفع والبدء الآن.`;
    
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
}

function whatsapp() {
    window.open("https://wa.me/21627049943?text=مرحباً كريعة، أريد استشارة بخصوص تطوير حساباتي.", "_blank");
}

// التحكم بالأسئلة الشائعة
function toggleFaq(element) {
    element.classList.toggle('open');
    const icon = element.querySelector('i');
    icon.classList.toggle('fa-chevron-up');
    icon.classList.toggle('fa-chevron-down');
}

// إضافة تأثير الاهتزاز عند اللمس للهواتف
if ('vibrate' in navigator) {
    document.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', () => navigator.vibrate(10));
    });
}
