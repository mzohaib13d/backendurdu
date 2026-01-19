// Week6Class2.jsx
import React, { useState } from 'react';
import { Copy, Check, Clock, Trash2, Mail, Database, Calendar, Bell, AlertCircle } from 'lucide-react';
import ScrollToTopButton from "../components/ScrollToTopButton";

const Week6Class2 = () => {
  const [copiedCode, setCopiedCode] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successPosition, setSuccessPosition] = useState({ top: 0, left: 0 });

  // کوڈ کاپی کرنے کا فنکشن
  const handleCopyCode = (code, section, event) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(section);
    
    // بٹن کی پوزیشن حاصل کریں
    const buttonRect = event.currentTarget.getBoundingClientRect();
    setSuccessPosition({
      top: buttonRect.top - 50,
      left: buttonRect.left + buttonRect.width / 2
    });
    
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
    
    setTimeout(() => {
      setCopiedCode(null);
    }, 3000);
  };

  // کرون جاب استعمالات
  const cronUseCases = [
    {
      icon: '📧',
      title: 'شیڈولڈ ای میلز بھیجنا',
      description: 'مخصوص وقت پر خودکار ای میلز'
    },
    {
      icon: '🗑️',
      title: 'ختم شدہ ٹوکنز صاف کرنا',
      description: 'پرانی یا استعمال شدہ ٹوکنز حذف کرنا'
    },
    {
      icon: '👤',
      title: 'غیر فعال صارفین حذف کرنا',
      description: 'طویل عرصے سے غیر فعال صارفین'
    },
    {
      icon: '📊',
      title: 'روزانہ رپورٹس چلانا',
      description: 'آٹومیٹک رپورٹ جنریشن'
    },
    {
      icon: '🧹',
      title: 'عارضی ڈیٹا صاف کرنا',
      description: 'ٹمپ فائلز اور ڈیٹا کلین اپ'
    },
    {
      icon: '🔔',
      title: 'یاد دہانی نوٹیفیکیشنز',
      description: 'آٹومیٹک ریمائنڈرز'
    }
  ];

  // کرون اسکیڈول مثالیں
  const cronExamples = [
    { schedule: 'ہر منٹ', expression: '* * * * *', icon: '⏱️' },
    { schedule: 'ہر دن رات 12 بجے', expression: '0 0 * * *', icon: '🌙' },
    { schedule: 'ہر گھنٹے', expression: '0 * * * *', icon: '🕐' },
    { schedule: 'ہر اتوار', expression: '0 0 * * 0', icon: '📅' },
    { schedule: 'صبح 9 بجے روزانہ', expression: '0 9 * * *', icon: '☀️' },
    { schedule: 'ہر 5 منٹ', expression: '*/5 * * * *', icon: '🔄' }
  ];

  // نمونہ کوڈ سیکشنز
  const codeSections = [
    {
      id: 'cron-installation',
      title: '📦 node-cron انسٹالیشن',
      code: `npm install node-cron`
    },
    {
      id: 'cron-syntax',
      title: '⏱️ کرون نحو (Cron Syntax)',
      code: `* * * * *
│ │ │ │ │
│ │ │ │ └── ہفتے کا دن (0 - 7)
│ │ │ │
│ │ │ └──── مہینہ (1 - 12)
│ │ │
│ │ └──────── مہینے کا دن (1 - 31)
│ │
│ └──────────── گھنٹہ (0 - 23)
│
└──────────────── منٹ (0 - 59)`
    },
    {
      id: 'project-structure',
      title: '🏗️ پراجیکٹ اسٹرکچر',
      code: `src/
 ├── cron/
 │    └── cleanup.cron.ts
 ├── models/
 ├── utils/
 ├── app.ts
 └── server.ts`
    },
    {
      id: 'cleanup-cron',
      title: '🧹 غیر مصدقہ صارفین حذف کرنا',
      code: `import cron from "node-cron";
import User from "../models/User";

cron.schedule("0 * * * *", async () => {
  console.log("کلین اپ کرون جاب چل رہی ہے...");

  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

  await User.deleteMany({
    isVerified: false,
    createdAt: { $lt: oneDayAgo },
  });

  console.log("غیر مصدقہ صارفین صاف ہو گئے");
});`
    },
    {
      id: 'email-reminder-cron',
      title: '📧 یاد دہانی ای میلز',
      code: `import cron from "node-cron";
import User from "../models/User";
import { transporter } from "../utils/mailer";

cron.schedule("0 9 * * *", async () => {
  console.log("تصدیقی یاد دہانیاں بھیجی جا رہی ہیں...");

  const users = await User.find({ isVerified: false });

  for (const user of users) {
    await transporter.sendMail({
      to: user.email,
      subject: "یاد دہانی: براہ کرم اپنی ای میل تصدیق کریں",
      html: \`<p>ہیلو \${user.name}, براہ کرم اپنی ای میل تصدیق کریں۔</p>\`,
    });
  }

  console.log("یاد دہانی ای میلز بھیج دی گئیں");
});`
    },
    {
      id: 'register-cron',
      title: '🔌 کرون جابز رجسٹر کرنا',
      code: `// سرور میں درآمد کریں
import "./cron/cleanup.cron";

// ڈیٹا بیس کنکشن کے بعد
mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("DB Connected");
    require("./cron/cleanup.cron");
  });`
    },
    {
      id: 'best-practices',
      title: '✅ بہترین طریقے',
      code: `// کرون جابز کے لیے تجاویز:
1. کرون جابز ہلکی پھلکی رکھیں
2. لاگز شامل کریں
3. غلطیوں کو مناسب طریقے سے ہینڈل کریں
4. ہر منٹ بھاری کام نہ چلائیں
5. ماحول پر مبنی شیڈول استعمال کریں (dev vs prod)
6. پیداوار کے لیے PM2 یا Docker استعمال کریں`
    }
  ];

  // پیداوار کے لیے نکات
  const productionTips = [
    { tip: 'کرون جابز صرف سرور چلنے پر کام کرتی ہیں', icon: '⚠️' },
    { tip: 'پیداوار کے لیے PM2 استعمال کریں', icon: '🚀' },
    { tip: 'ڈاکر میں کنٹینرائز کریں', icon: '🐳' },
    { tip: 'کلاؤڈ شیڈولرز استعمال کریں (AWS EventBridge)', icon: '☁️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 font-urdu">
        <ScrollToTopButton />
      {/* فلائینگ تصدیقی پیغام - دائیں طرف سے نمودار ہوتا ہے */}
      {showSuccess && (
        <div 
          className="fixed z-50 animate-slide-in-right"
          style={{
            top: `${successPosition.top}px`,
            left: `${successPosition.left}px`,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="relative top-[-30px] bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 whitespace-nowrap">
            <Check className="w-5 h-5" />
            <span className="font-semibold">کوڈ کاپی ہو گیا!</span>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* ہیڈر با نیا رنگین ٹائٹل */}
        <header className="mb-10 text-center">
          <div className="relative inline-block mb-2">
            <h1 className="py-6 px-6 text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 bg-clip-text text-transparent leading-relaxed">
              ⏰ کرون جابز (شیڈولڈ پس منظر کے کام)
            </h1>
            {/* اینیمیٹڈ پروگرس بار */}
            <div className="relative top-4 w-78 h-1.5 mx-auto rounded-full overflow-hidden">
              <div className="absolute h-full w-full bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 animate-progress-bar rounded-full"></div>
            </div>
            {/* انسٹرکٹر کا نام */}
            <p className="mt-6 text-lg text-gray-700 font-medium mt-2 mb-1" style={{ fontFamily: 'Verdana, sans-serif' }}>
              Instructor: Zohaib Farooq
            </p>
            
            {/* چاپٹر کا نام */}
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-800 rounded-full font-semibold text-sm border border-teal-200">
              ہفتہ 6 - کلاس 2: شیڈولڈ پس منظر کے کام
            </div>
            
            
          </div>
        </header>

        {/* تعارف */}
        <section className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
          <div className="flex items-start gap-3 mb-6">
            <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-3 rounded-xl">
              <Clock className="w-6 h-6 text-teal-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-3 leading-relaxed" dir="rtl">حقیقی دنیا کی ایپلی کیشنز میں</h2>
              <p className="text-gray-700 leading-relaxed" dir="rtl">
                کچھ کام خودکار طور پر شیڈول پر چلنے چاہئیں، بغیر صافر کے تعامل کے۔ یہ کام کرون جابز کے ذریعے ہینڈل کیے جاتے ہیں۔
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2" dir="rtl">
              <Calendar className="w-5 h-5 text-teal-600" />
              عام استعمالات
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" dir="rtl">
              {cronUseCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-1">{useCase.icon}</span>
                    <div>
                      <h4 className="font-bold text-teal-800 mb-1">{useCase.title}</h4>
                      <p className="text-gray-700 text-sm">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* کرون جاب کیا ہے؟ */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-xl p-8 mb-8 border border-emerald-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2" dir="rtl">
            <Clock className="w-6 h-6 text-emerald-600" />
            🧠 کرون جاب کیا ہے؟
          </h2>
          
          <div className="bg-white rounded-xl p-5 mb-6 border border-emerald-300">
            <p className="text-gray-700 text-lg mb-4" dir="rtl">
              کرون جاب ایک کام ہے جو مخصوص وقت یا وقفے پر خودکار طور پر چلتا ہے۔
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg p-4">
                <h4 className="font-bold text-emerald-800 mb-2">مثالیں:</h4>
                <ul className="space-y-2" dir="rtl">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>ہر دن رات 12 بجے</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>ہر 5 منٹ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>ہر اتوار</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600">•</span>
                    <span>ہر گھنٹے</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-teal-100 to-emerald-100 rounded-lg p-4">
                <h4 className="font-bold text-teal-800 mb-2">Node.js میں:</h4>
                <div className="bg-gray-900 rounded-lg p-3">
                  <p className="text-emerald-300 font-mono text-center font-bold">
                    👉 node-cron
                  </p>
                </div>
                <p className="text-gray-700 text-sm mt-2" dir="rtl">
                  سب سے مقبول لائبریری کرون جابز کے لیے
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* کرون شیڈول مثالیں */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            ⏱️ کرون اسکیڈول مثالیں
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-50 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-teal-600 to-emerald-500 text-white">
                <tr>
                  <th className="py-4 px-6 text-right font-bold text-lg">شیڈول</th>
                  <th className="py-4 px-6 text-right font-bold text-lg">ایکسپریشن</th>
                  <th className="py-4 px-6 text-center font-bold text-lg">آئیکن</th>
                </tr>
              </thead>
              <tbody>
                {cronExamples.map((example, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-6 font-medium text-gray-800">{example.schedule}</td>
                    <td className="py-3 px-6">
                      <div className="bg-gray-900 rounded-lg p-2">
                        <code className="text-emerald-300 font-mono font-bold">{example.expression}</code>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center text-2xl">{example.icon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* کوڈ نمونے */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent">
            💻 کوڈ نمونے اور نفاذ
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {codeSections.map((section) => (
              <div key={section.id} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:border-emerald-500 transition-all relative">
                <div className="bg-gradient-to-r from-teal-700 to-emerald-600 px-6 py-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  <button
                    onClick={(e) => handleCopyCode(section.code, section.id, e)}
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg transition-all relative ${
                      copiedCode === section.id 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {copiedCode === section.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>کاپی ہو گیا</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>کوڈ کاپی کریں</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-6">
                  <pre className="text-gray-300 font-mono text-sm leading-relaxed overflow-x-auto">
                    {section.code}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* پیداوار کے لیے نکات */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8 mb-8 border border-amber-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2" dir="rtl">
            <AlertCircle className="w-6 h-6 text-amber-600" />
            ⚠️ پیداوار کے لیے اہم نکات
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-4 text-lg" dir="rtl">ضروری معلومات:</h3>
              <div className="space-y-4">
                {productionTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-amber-300">
                    <span className="text-xl">{tip.icon}</span>
                    <p className="text-gray-700">{tip.tip}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-5 border border-amber-300">
              <h3 className="font-bold text-gray-800 mb-3 text-lg leading-relaxed md:leading-[1.9]  sm:leading-[2.2]" dir="rtl">کرون جابز کے فوائد:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2" dir="rtl">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">خودکار طریقے سے کام کرتی ہیں</span>
                </li>
                <li className="flex items-start gap-2" dir="rtl">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">وقت کی بچت</span>
                </li>
                <li className="flex items-start gap-2" dir="rtl">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">دورانِ نظام صاف ستھرائی</span>
                </li>
                <li className="flex items-start gap-2" dir="rtl">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">مستقل نوٹیفیکیشنز</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* خلاصہ */}
        <section className="bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl shadow-xl p-8 mb-8 border border-teal-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            🏁 کرون جابز خلاصہ
          </h2>
          
          <p className="text-gray-700 mb-6 text-center text-lg">
            اس حصے میں شامل ہیں:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              'کرون جابز کیا ہیں',
              'node-cron سیٹ اپ',
              'حقیقی دنیا کی مثالیں',
              'MongoDB کلین اپ کام',
              'ای میل آٹومیشن',
              'صحیح پراجیکٹ اسٹرکچر',
              'پیداوار کی تیاری'
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-3 border border-teal-200 text-center hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                  ✓
                </div>
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-5 bg-white rounded-xl border border-emerald-300">
            <h4 className="font-bold text-gray-800 mb-3 leading-relaxed" dir="rtl">کرون جابز ضروری ہیں اسکیل ایبل، پیداوار-گریڈ ایپلی کیشنز کے لیے:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'SaaS پلیٹ فارمز',
                'ایڈمن ڈیش بورڈز',
                'نوٹیفیکیشن سسٹمز',
                'پس منظر کی دیکھ بھال کے کام'
              ].map((app, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-600" />
                  <span className="text-gray-700">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* فوٹر */}
        <footer className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-600 bg-white rounded-2xl shadow-xl p-8">
          <p className="mb-2">
            <span className="font-semibold bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent">
              کلاس 6 ہفتہ 2
            </span> | کرون جابز (شیڈولڈ پس منظر کے کام)
          </p>
          <p className="text-sm">
            تمام کوڈ نمونے پروڈکشن ریڈی ہیں اور براہ راست استعمال کیے جا سکتے ہیں
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <div className="text-xs text-gray-500">
              کوڈ کاپی کرنے پر تصدیقی پیغام دائیں طرف سے نمودار ہوتا ہے
            </div>
          </div>
        </footer>
      </div>

      {/* اینیمیشن سٹائلز */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap');
        
        .font-urdu {
          font-family: 'Noto Nastaliq Urdu', serif;
        }
        
        @keyframes slide-in-right {
          0% {
            transform: translateX(100%) translateX(-50%);
            opacity: 0;
          }
          20% {
            transform: translateX(0) translateX(-50%);
            opacity: 1;
          }
          80% {
            transform: translateX(0) translateX(-50%);
            opacity: 1;
          }
          100% {
            transform: translateX(100%) translateX(-50%);
            opacity: 0;
          }
        }
        
        @keyframes progress-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 2s ease-out forwards;
        }
        
        .animate-progress-bar {
          animation: progress-bar 2s linear infinite;
        }
        
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        
        table td, table th {
          text-align: right;
        }
      `}</style>
    </div>
  );
};

export default Week6Class2;