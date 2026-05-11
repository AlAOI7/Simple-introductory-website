// تنبيه ترحيبي
alert("مرحباً بك في موقع أحمد علي - مطور مواقع ويب");

// تعريف المتغيرات
let siteOwner = "أحمد علي";
const siteYear = 2025;

// إظهار رسالة في وحدة التحكم
console.log("تم تحميل موقع " + siteOwner + " بنجاح");

// التعامل مع نموذج الاتصال
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // جلب قيم الحقول
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let service = document.getElementById("service").value;
    let message = document.getElementById("message").value;
    let feedback = document.getElementById("formFeedback");
    
    // التحقق من صحة المدخلات باستخدام if-else
    if (name === "" || email === "" || message === "") {
        feedback.innerHTML = "خطأ: الرجاء ملء جميع الحقول المطلوبة";
        feedback.style.backgroundColor = "#FEE2E2";
        feedback.style.color = "#991B1B";
        feedback.style.border = "1px solid #FCA5A5";
    } 
    else if (service === "") {
        feedback.innerHTML = "تنبيه: الرجاء اختيار نوع الخدمة";
        feedback.style.backgroundColor = "#FEF3C7";
        feedback.style.color = "#92400E";
        feedback.style.border = "1px solid #FCD34D";
    }
    else {
        // في حال نجاح الإرسال
        feedback.innerHTML = "تم إرسال رسالتك بنجاح. سأتواصل معك قريباً يا " + name;
        feedback.style.backgroundColor = "#D1FAE5";
        feedback.style.color = "#065F46";
        feedback.style.border = "1px solid #6EE7B7";
        
        // إعادة تعيين النموذج
        this.reset();
        
        // استخدام حلقة for لتسجيل العملية
        for (let i = 1; i <= 3; i++) {
            console.log("تم تسجيل الطلب - محاولة رقم " + i);
        }
    }
    
    // إخفاء رسالة الخطأ بعد 5 ثوانٍ
    setTimeout(function() {
        feedback.innerHTML = "";
        feedback.style.backgroundColor = "";
        feedback.style.color = "";
        feedback.style.border = "";
    }, 5000);
});

// استخدام حلقة while لعرض رسائل في وحدة التحكم
let counter = 1;
while (counter <= 5) {
    console.log("تم فتح الموقع - الزيارة رقم " + counter);
    counter++;
}

// عملية حسابية بسيطة
let projectsCount = 12;
let happyClients = 9;
let averageRating = (happyClients / projectsCount) * 5;
console.log("متوسط تقييم المشاريع: " + averageRating.toFixed(1) + " من 5");

// دالة للتمرير السلس عند النقر على الروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});