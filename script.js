// تم تحديد المسار من مجلد img الخاص بكِ تلقائياً
const clickSound = new Audio('img/click.mp3'); 

function playClick() {
    clickSound.currentTime = 0; // لإعادة الصوت للبداية لو تم النقر بسرعة
    clickSound.play().catch(err => console.log("الصوت يحتاج تفاعل أولاً"));
}

// دالة تشغيل وتبديل الوضع الداكن وحفظه
function toggleDark(){
    playClick(); // تشغيل صوت النقر فوراً
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    updateDarkButtons();
}

// مصفوفة الترجمة للنصوص الثابتة في الموقع
const translations = {
    ar: {
        // الروابط والقوائم
        home: "الرئيسية",
        products: "منتجات",
        gifts: "الهدايا",
        offers: "عروض",
        faq: "أسئلة شائعة",
        about: "من نحن",
        contact: "تواصل",
        footer: "© موسيقاتي",

        // الصفحة الرئيسية
        title_welcome: "موسيقاتي.. حيث تنبض الآلات بالحياة 🎵",
        desc_welcome: "أهلاً بك في عالمك الموسيقي الخاص. في متجر 'موسيقاتي'، نحن لا نبيع مجرد آلات؛ نحن نوفر لك الأداة التي سترافقك في رحلتك الإبداعية. نحن نجمع بين جودة الآلات العالمية وخبرة فنية لا تضاهى في مجال الصيانة والضبط.",
        feat1_title: "🛠️ صيانة خبيرة",
        feat1_desc: "فنيون مختصون لضبط وإصلاح كافة الآلات الموسيقية.",
        feat2_title: "🛡️ ضمان حقيقي",
        feat2_desc: "نقدم ضماناً لمدة عام كامل على كافة الآلات الجديدة.",
        feat3_title: "🚚 توصيل آمن",
        feat3_desc: "خدمة توصيل سريعة وموثوقة لجميع المحافظات.",

        // صفحة من نحن (AR)
        about_p1: "مرحبًا بك في متجر موسيقاتي، وجهتك الأولى لعالم الآلات الموسيقية في الأردن 🇯🇴",
        about_p2: "نحن متجر متخصص في بيع الآلات الموسيقية عالية الجودة مع خدمات صيانة احترافية على يد خبراء في المجال.",
        about_p3: "هدفنا هو دعم الموسيقيين والهواة وتوفير أفضل تجربة شراء وخدمة مميزة تساعدك على تطوير موهبتك الموسيقية.",
        about_p4: "📍 موقعنا: عمان – المملكة الأردنية الهاشمية",
        about_p5: "🎵 في موسيقاتي نحن لا نبيع آلات فقط، بل نصنع تجربة موسيقية متكاملة.",

        // بقية الصفحات
        title_about: "من نحن",
        desc_about: "نحن متجر موسيقاتي متخصص بالآلات الموسيقية والصيانة.",

        title_gifts: "الهدايا",
        gift1: "أكواب موسيقية",
        gift2: "بطاقات هدايا",
        gift3: "ميداليات",

        title_offers: "العروض الخاصة",
        off1: "خصم 20% على الجيتار",
        off2: "صيانة مجانية مع البيانو",
        off3: "هدية مع كل شراء",

        title_products: "المنتجات",
        title_video: "فيديو إعلاني عن المتجر 🎵",
        buy_btn: "شراء الآن",
        close_btn: "إغلاق",
        success_msg: "تم الشراء بنجاح! 🎉 شكراً لثقتكم بموسيقاتي.",

        p1_title: "عود شرقي فاخر",
        p1_price: "300 د.أ",
        p2_title: "جيتار كلاسيك",
        p2_price: "250 د.أ",
        p3_title: "بيانو رقمي محترف",
        p3_price: "1200 د.أ",
        p4_title: "طقم درمز كامل",
        p4_price: "850 د.أ",
        p5_title: "طبلة شرقية احترافية",
        p5_price: "90 د.أ",
        p6_title: "باقة معدات استوديو منزلي",
        p6_price: "450 د.أ",

        title_contact: "تواصل معنا",
        btn_send: "إرسال",
        ph_name: "الاسم",
        ph_email: "الإيميل",
        ph_msg: "رسالتك",

        // الأسئلة الشائعة
        faq_title: "الأسئلة الشائعة",
        q1: "س1: هل تتوفر خدمة الصيانة؟",
        a1: "نعم، نحن متخصصون في صيانة جميع الآلات الموسيقية في ورشتنا الخاصة.",
        q2: "س2: هل يوجد ضمان على الآلات؟",
        a2: "نعم، نقدم ضماناً لمدة عام كامل على كافة الآلات الموسيقية الجديدة.",
        q3: "س3: هل توفرون خدمة التوصيل؟",
        a3: "بالتأكيد، نقوم بالتوصيل إلى كافة محافظات المملكة خلال 48 ساعة.",
        q4: "س4: ما هي طرق الدفع المتاحة؟",
        a4: "نقبل الدفع النقدي عند الاستلام، والتحويل البنكي، وبطاقات الائتمان.",
        q5: "س5: هل يمكنني استبدال الآلة؟",
        a5: "يمكنك استبدال الآلة خلال 3 أيام من تاريخ الشراء بشرط عدم فتح تغليفها الأصلي."
    },

    en: {
        // الروابط والقوائم
        home: "Home",
        products: "Products",
        gifts: "Gifts",
        offers: "Offers",
        faq: "FAQ",
        about: "About Us",
        contact: "Contact",
        footer: "© Museqati",

        // الصفحة الرئيسية
        title_welcome: "Museqati.. Where Instruments Come to Life 🎵",
        desc_welcome: "Welcome to your musical world. At 'Museqati', we don't just sell instruments; we provide the tool for your creative journey. We combine global quality with unmatched local expertise.",
        feat1_title: "🛠️ Expert Maintenance",
        feat1_desc: "Specialized technicians for all musical instruments.",
        feat2_title: "🛡️ Real Warranty",
        feat2_desc: "One-year warranty on all new instruments.",
        feat3_title: "🚚 Safe Delivery",
        feat3_desc: "Fast and reliable delivery to all governorates.",

        // صفحة من نحن (EN)
        about_p1: "Welcome to Museqati, your first destination for musical instruments in Jordan 🇯🇴",
        about_p2: "We specialize in high-quality musical instruments with professional maintenance services by experts.",
        about_p3: "Our goal is to support musicians and beginners and provide the best buying experience.",
        about_p4: "📍 Location: Amman – Hashemite Kingdom of Jordan",
        about_p5: "🎵 At Museqati we don't just sell instruments, we create a full musical experience.",

        // بقية الصفحات
        title_about: "About Us",
        desc_about: "We are Museqati store, specialized in musical instruments and maintenance.",

        title_gifts: "Gifts",
        gift1: "Musical Mugs",
        gift2: "Gift Cards",
        gift3: "Medals",

        title_offers: "Special Offers",
        off1: "20% off on Guitars",
        off2: "Free maintenance with Piano",
        off3: "A gift with every purchase",

        title_products: "Products",
        title_video: "Store Promotional Video 🎵",
        buy_btn: "Buy Now",
        close_btn: "Close",
        success_msg: "Purchase successful! 🎉 Thank you for choosing Museqati.",

        p1_title: "Premium Oriental Oud",
        p1_price: "300 JOD",
        p2_title: "Classic Guitar",
        p2_price: "250 JOD",
        p3_title: "Professional Digital Piano",
        p3_price: "1200 JOD",
        p4_title: "Full Drum Kit",
        p4_price: "850 JOD",
        p5_title: "Professional Oriental Tabla",
        p5_price: "90 JOD",
        p6_title: "Home Studio Equipment Bundle",
        p6_price: "450 JOD",

        title_contact: "Contact Us",
        btn_send: "Send",
        ph_name: "Name",
        ph_email: "Email",
        ph_msg: "Your Message",

        // الأسئلة الشائعة
        faq_title: "FAQ",
        q1: "Q1: Is maintenance service available?",
        a1: "Yes, we specialize in maintenance for all musical instruments in our workshop.",
        q2: "Q2: Is there a warranty on products?",
        a2: "Yes, we provide a one-year warranty on all new instruments.",
        q3: "Q3: Do you offer delivery service?",
        a3: "Yes, we deliver to all governorates within 48 hours.",
        q4: "Q4: What are the available payment methods?",
        a4: "We accept cash on delivery, bank transfers, and credit cards.",
        q5: "Q5: Can I exchange the instrument?",
        a5: "You can exchange the instrument within 3 days of purchase, provided it is unopened."
    }
};

// دالة تظهر تنبيه إتمام الشراء المخصص والمترجم
function handleBuy() {
    playClick(); // تشغيل صوت النقر
    let currentLang = localStorage.getItem("lang") || "ar";
    
    // تحديث النص داخل الكرت المخصص حسب اللغة الحالية
    let alertText = document.getElementById("custom-alert-text");
    if(alertText) { alertText.innerHTML = translations[currentLang].success_msg; }
    
    let closeBtn = document.querySelector(".alert-close-btn");
    if(closeBtn) { closeBtn.innerHTML = translations[currentLang].close_btn; }

    // إظهار النافذة المخصصة
    let overlay = document.getElementById("custom-alert-overlay");
    if(overlay) { overlay.classList.add("active"); }
}

// دالة لإغلاق كرت التنبيه
function closeAlert() {
    playClick(); 
    let overlay = document.getElementById("custom-alert-overlay");
    if(overlay) { overlay.classList.remove("active"); }
}

// دالة تغيير اللغة وحفظها
function toggleLang(){
    playClick(); 
    let currentLang = localStorage.getItem("lang") === "en" ? "ar" : "en";
    localStorage.setItem("lang", currentLang);
    applyLanguage(currentLang);
}

// دالة تطبيق اللغة على عناصر الصفحة واكتشاف الصفحة الحالية تلقائياً
function applyLanguage(lang) {
    document.documentElement.lang = lang;
    
    let langBtns = document.querySelectorAll(".lang-btn");
    langBtns.forEach(btn => {
        btn.innerHTML = lang === "en" ? "EN" : "AR";
    });

    let navLinks = document.querySelectorAll("nav a span");
   if(navLinks.length >= 7) {
    navLinks[0].innerHTML = translations[lang].home;
    navLinks[1].innerHTML = translations[lang].products;
    navLinks[2].innerHTML = translations[lang].gifts;
    navLinks[3].innerHTML = translations[lang].offers;
    navLinks[4].innerHTML = translations[lang].about;
    navLinks[5].innerHTML = translations[lang].contact;
    navLinks[6].innerHTML = translations[lang].faq;
}

    let footer = document.querySelector("footer");
    if(footer) { footer.innerHTML = lang === "en" ? "© Museqati" : "© موسيقاتي"; }

    let headerTitle = document.querySelector("header h1");
    let cardTitle = document.querySelector(".card h2");
    let cardText = document.querySelector(".card p");

    if(window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/")) {
        if(headerTitle) headerTitle.innerHTML = lang === "en" ? "Museqati" : "موسيقاتي";
        if(cardTitle) cardTitle.innerHTML = translations[lang].title_home;
        if(cardText) cardText.innerHTML = translations[lang].desc_home;
    }
 else if(window.location.pathname.includes("about.html")) {
    let card = document.querySelectorAll(".card p");

    if(card.length >= 5) {
        card[0].innerHTML = translations[lang].about_p1;
        card[1].innerHTML = translations[lang].about_p2;
        card[2].innerHTML = translations[lang].about_p3;
        card[3].innerHTML = translations[lang].about_p4;
        card[4].innerHTML = translations[lang].about_p5;
    }
}
    else if(window.location.pathname.includes("gifts.html")) {
        if(headerTitle) headerTitle.innerHTML = translations[lang].title_gifts;
        let lis = document.querySelectorAll(".card ul li");
        if(lis.length >= 3) {
            lis[0].innerHTML = translations[lang].gift1; lis[1].innerHTML = translations[lang].gift2; lis[2].innerHTML = translations[lang].gift3;
        }
    }
    else if(window.location.pathname.includes("offers.html")) {
        if(headerTitle) headerTitle.innerHTML = translations[lang].title_offers;
        let cards = document.querySelectorAll("section .card");
        if(cards.length >= 3) {
            cards[0].innerHTML = translations[lang].off1; cards[1].innerHTML = translations[lang].off2; cards[2].innerHTML = translations[lang].off3;
        }
    }
   
    else if(window.location.pathname.includes("products.html")) {
        if(headerTitle) headerTitle.innerHTML = translations[lang].title_products;
        let videoTitle = document.getElementById("video-title");
        if(videoTitle) videoTitle.innerHTML = translations[lang].title_video;
        let titles = document.querySelectorAll(".prod-title");
        let prices = document.querySelectorAll(".prod-price");
        let buyBtns = document.querySelectorAll(".buy-btn");
        if(titles.length >= 6 && prices.length >= 6) {
            titles[0].innerHTML = translations[lang].p1_title; prices[0].innerHTML = translations[lang].p1_price;
            titles[1].innerHTML = translations[lang].p2_title; prices[1].innerHTML = translations[lang].p2_price;
            titles[2].innerHTML = translations[lang].p3_title; prices[2].innerHTML = translations[lang].p3_price;
            titles[3].innerHTML = translations[lang].p4_title; prices[3].innerHTML = translations[lang].p4_price;
            titles[4].innerHTML = translations[lang].p5_title; prices[4].innerHTML = translations[lang].p5_price;
            titles[5].innerHTML = translations[lang].p6_title; prices[5].innerHTML = translations[lang].p6_price;
        }
        buyBtns.forEach(btn => { btn.innerHTML = translations[lang].buy_btn; });
    }
    else if(window.location.pathname.includes("contact.html")) {
        if(headerTitle) headerTitle.innerHTML = translations[lang].title_contact;
        let inputName = document.querySelector("form input:nth-child(1)");
        let inputEmail = document.querySelector("form input:nth-child(2)");
        let txtArea = document.querySelector("form textarea");
        let btnForm = document.querySelector("form button");
        if(inputName) inputName.placeholder = translations[lang].ph_name;
        if(inputEmail) inputEmail.placeholder = translations[lang].ph_email;
        if(txtArea) txtArea.placeholder = translations[lang].ph_msg;
        if(btnForm) btnForm.innerHTML = translations[lang].btn_send;
    }
    if(window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    // تحديث العنوان والوصف
    let cardTitle = document.querySelector(".card h2");
    let cardText = document.querySelector(".card p");
    if(cardTitle) cardTitle.innerHTML = translations[lang].title_welcome;
    if(cardText) cardText.innerHTML = translations[lang].desc_welcome;

    // تحديث المميزات الثلاث
    let featTitles = document.querySelectorAll(".features h3");
    let featDescs = document.querySelectorAll(".features p");
    
    featTitles[0].innerHTML = translations[lang].feat1_title; featDescs[0].innerHTML = translations[lang].feat1_desc;
    featTitles[1].innerHTML = translations[lang].feat2_title; featDescs[1].innerHTML = translations[lang].feat2_desc;
    featTitles[2].innerHTML = translations[lang].feat3_title; featDescs[2].innerHTML = translations[lang].feat3_desc;
}
// إضافة للترجمة داخل دالة applyLanguage
else if(window.location.pathname.includes("faq.html")) {
    document.querySelector("h1").innerHTML = translations[lang].faq_title;
    
    let questions = document.querySelectorAll(".q");
    let answers = document.querySelectorAll(".a");
    
    questions[0].innerHTML = translations[lang].q1; answers[0].innerHTML = translations[lang].a1;
    questions[1].innerHTML = translations[lang].q2; answers[1].innerHTML = translations[lang].a2;
    questions[2].innerHTML = translations[lang].q3; answers[2].innerHTML = translations[lang].a3;
    questions[3].innerHTML = translations[lang].q4; answers[3].innerHTML = translations[lang].a4;
    questions[4].innerHTML = translations[lang].q5; answers[4].innerHTML = translations[lang].a5;
}
document.querySelectorAll("[data-key]").forEach(el => {
    let key = el.getAttribute("data-key");
    if (key && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
    }
});
}

// دالة تحديث شكل أزرار الدارك مود
function updateDarkButtons() {
    let btns = document.querySelectorAll(".dark-btn");
    btns.forEach(btn => {
        if(document.body.classList.contains("dark")){ btn.innerHTML = "☀️";
        } else { btn.innerHTML = "🌙"; }
    });
}

// تشغيل الإعدادات المحفوظة تلقائياً
document.addEventListener("DOMContentLoaded", function() {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") { document.body.classList.add("dark"); }
    updateDarkButtons();
    let savedLang = localStorage.getItem("lang") || "ar";
    applyLanguage(savedLang);

    // روابط التنقل
    let navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); playClick(); 
            let targetUrl = this.href;
            setTimeout(function() { window.location.href = targetUrl; }, 150); 
        });
    });
    
    // ربط أزرار الشراء بنظام التنبيه المخصص النظيف
    let buyButtons = document.querySelectorAll(".buy-btn");
    buyButtons.forEach(btn => {
        btn.addEventListener("click", handleBuy);
    });

    let formBtn = document.querySelector("form button");
    if(formBtn) { formBtn.addEventListener("click", playClick); }
});
