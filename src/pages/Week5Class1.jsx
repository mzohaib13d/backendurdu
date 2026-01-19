// Week5Class1.jsx
import React, { useState } from 'react';
import { Copy, Check, AlertCircle } from 'lucide-react';
import ScrollToTopButton from "../components/ScrollToTopButton";

const Week5Class1 = () => {
  const [copiedCode, setCopiedCode] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // کوڈ کاپی کرنے کا فنکشن
  const handleCopyCode = (code, section) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(section);
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
    
    setTimeout(() => {
      setCopiedCode(null);
    }, 3000);
  };

  // نمونہ کوڈ سیکشنز
  const codeSections = [
    {
      id: 'installation',
      title: '📦 انسٹالیشن',
      code: `npm install zod`
    },
    {
      id: 'basic-schema',
      title: '🧱 بنیادی Zod سکیما',
      code: `import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  age: z.number()
});

// ڈیٹا کی تصدیق
const user = userSchema.parse({
  name: "رانا",
  age: 22
});`
    },
    {
      id: 'safe-parsing',
      title: '🔍 محفوظ پارسنگ (تجویز کردہ)',
      code: `const result = userSchema.safeParse(req.body);

if (!result.success) {
  return res.status(400).json({
    errors: result.error.errors
  });
}

const validatedData = result.data;`
    },
    {
      id: 'registration-schema',
      title: '🧪 نمونہ: صارف رجسٹریشن سکیما',
      code: `const registerSchema = z.object({
  name: z.string().min(2, "نام بہت چھوٹا ہے"),
  email: z.string().email("غلط ای میل"),
  password: z.string().min(6),
  age: z.number().min(18),
  skills: z.array(z.string()).optional()
});`
    },
    {
      id: 'express-example',
      title: '🔗 Express.js کے ساتھ استعمال',
      code: `app.post("/register", (req, res) => {
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "تصدیق ناکام ہوئی",
      errors: result.error.errors
    });
  }

  res.status(201).json({
    message: "صارف رجسٹر ہو گیا",
    data: result.data
  });
});`
    },
    {
      id: 'refinement',
      title: '🔀 ریفائنمنٹ (اعلی درجے کی تصدیق)',
      code: `const schema = z.object({
  password: z.string(),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "پاس ورڈ مماثل نہیں ہیں",
  path: ["confirmPassword"]
});`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 font-urdu">
       <ScrollToTopButton />
      {/* فلائینگ تصدیقی پیغام */}
      {showSuccess && (
        <div className="fixed top-4 right-20 animate-fly-in">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span className="font-semibold">کوڈ کاپی ہو گیا!</span>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* ہیڈر */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            📌 زوڈ کے ساتھ ان پٹ تصدیق
          </h1>
            {/* اینیمیٹڈ پروگرس بار */}
  <div className="relative top-5 w-80 h-2 bg-gray-200 mx-auto rounded-full overflow-hidden">
    <div className="absolute h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-full animate-progress"></div>
  </div>
  <br />
  <p className="text-lg text-gray-700 font-medium" style={{ fontFamily: 'Calibari, sans-serif' }}>
                Instructor: Zohaib Farooq
              </p>
              <div className="mt-4 inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold" style={{ fontFamily: 'Arial, sans-serif' }}>
                Week 5 - Class 1: Zod in Express.js</div>
        </header>
        <style jsx>{`
@keyframes progress {
  0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0%;
    left: 100%;
  }
}

.animate-progress {
  animation: progress 3s ease-in-out infinite;
}
`}</style>

        {/* تعارف */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2" dir="rtl">
            📖 تعارف
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4" dir="rtl">
            ان پٹ تصدیق یقینی بناتی ہے کہ صارفین سے آنے والا ڈیٹا (درخواست کا باڈی، کوئری پیرامیٹرز، URL پیرامیٹرز، فارمز، APIs) درست، محفوظ اور متوقع ہو۔
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-red-700">❌ تصدیق کے بغیر</h3>
              </div>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>ایپ کریش ہو سکتی ہے</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>غلط ڈیٹا ڈیٹابیس میں محفوظ ہو سکتا ہے</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>سیکورٹی خطرات</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>ڈیبگ کرنا مشکل ہوتا ہے</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Check className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-700">✅ تصدیق کے ساتھ</h3>
              </div>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>صاف اور قابل اعتماد ڈیٹا</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>بہتر ایرر میسجز</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>محفوظ APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>پروڈکشن ریڈی بیک اینڈ</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* زوڈ کا تعارف */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            🚀 زوڈ کیوں استعمال کریں؟
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-50 rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-right font-semibold">خصوصیت</th>
                  <th className="py-3 px-4 text-right font-semibold">فائدہ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'TypeScript-first', benefit: 'خودکار قسم کی انفرینس' },
                  { feature: 'رن ٹائم تصدیق', benefit: 'غلط ڈیٹا سے بچاؤ' },
                  { feature: 'آسان نحو', benefit: 'قابل پڑھائی اور برقرار رہنے والا' },
                  { feature: 'کسٹم ایررز', benefit: 'بہتر UX' },
                  { feature: 'Express / Next.js / tRPC کے ساتھ کام کرتا ہے', benefit: 'انڈسٹری سٹینڈرڈ' }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 text-gray-800 font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-gray-700">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* کوڈ نمونے */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            💻 کوڈ نمونے
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {codeSections.map((section) => (
              <div key={section.id} className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-800">
                <div className="bg-gray-800 px-6 py-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  <button
                    onClick={() => handleCopyCode(section.code, section.id)}
                    className={`flex items-center justify-center gap-1 bg-blue-600  text-white 
             px-2 py-1 rounded-lg transition-colors text-xs
             sm:gap-2 sm:px-3 sm:py-1 sm:text-sm cursor-pointer     rounded-lg transition-all ${
                      copiedCode === section.id 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
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

        {/* عمومی ڈیٹا اقسام */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            📚 عمومی زوڈ ڈیٹا اقسام
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'سٹرنگ', code: 'z.string()', examples: ['z.string().min(3)', 'z.string().email()'] },
              { title: 'نمبر', code: 'z.number()', examples: ['z.number().min(1)', 'z.number().int()'] },
              { title: 'بولین', code: 'z.boolean()', examples: [] },
              { title: 'ایری', code: 'z.array(z.string())', examples: [] },
              { title: 'اختیاری اور nullable', code: 'z.string().optional()', examples: ['z.string().nullable()'] },
              { title: 'کسٹم ایرر میسجز', code: 'z.string({\n  required_error: "نام ضروری ہے"\n})', examples: [] }
            ].map((type, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-blue-800 mb-3">{type.title}</h4>
                <div className="bg-blue-100 rounded-lg p-3 mb-3">
                  <code className="text-blue-800 font-mono text-sm">{type.code}</code>
                </div>
                {type.examples.length > 0 && (
                  <div className="space-y-2">
                    {type.examples.map((example, i) => (
                      <div key={i} className="bg-blue-100 rounded-lg p-2">
                        <code className="text-blue-700 font-mono text-sm">{example}</code>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* بہترین طریقے */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl shadow-xl p-8 mb-8 border border-purple-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            🏆 بہترین طریقے
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                'ہمیشہ safeParse() استعمال کریں',
                'ڈیٹابیس سیو سے پہلے تصدیق کریں',
                'سکیما /validators فولڈر میں رکھیں',
                'فرنٹ اینڈ اور بیک اینڈ کے لیے سکیما دوبارہ استعمال کریں',
                'Mongoose تصدیق کے ساتھ ملا کر استعمال کریں'
              ].map((practice, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-700">{practice}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-xl p-5 border border-purple-200">
              <h4 className="text-lg font-bold text-purple-800 mb-3">ایرر فارمیٹ نمونہ</h4>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-purple-300 font-mono text-sm">
{`[
  {
    "path": ["email"],
    "message": "غلط ای میل"
  }
]`}
                </pre>
              </div>
              <p className="text-gray-600 mt-3 text-sm">
                فرنٹ اینڈ فارمز کے لیے بہترین
              </p>
            </div>
          </div>
        </section>

        {/* نتیجہ */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2 text-right" dir="rtl">
            🔚 نتیجہ
          </h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed" dir="rtl">
            زوڈ ہے:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { title: '✅ سادہ', color: 'from-blue-100 to-blue-200' },
              { title: '✅ طاقتور', color: 'from-purple-100 to-purple-200' },
              { title: '✅ قسم محفوظ', color: 'from-green-100 to-green-200' },
              { title: '✅ پروڈکشن ریڈی', color: 'from-orange-100 to-orange-200' }
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-r ${item.color} rounded-xl p-4 text-center shadow-sm`}>
                <p className="font-bold text-gray-800">{item.title}</p>
              </div>
            ))}
          </div>
          
          <p className="text-gray-700 mb-6 text-right leading-relaxed" dir="rtl">
            اگر آپ APIs، SaaS ایپس، ڈیش بورڈز، یا فل اسٹیک پروجیکٹس بنا رہے ہیں، تو زوڈ آپ کی ڈیفالٹ تصدیق لائبریری ہونی چاہیے۔
          </p>
          
          <div className="bg-white rounded-xl p-5 border border-green-300">
            <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
              📚 سرکاری دستاویزات
            </h4>
            <a 
              href="https://zod.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors"
            >
              👉 https://zod.dev
              <span className="text-sm">(نئی ونڈو میں کھلے گا)</span>
            </a>
          </div>
        </section>

        {/* فوٹر */}
        <footer className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-600">
          <p className="mb-2">
            <span className="font-semibold">کلاس 5 ہفتہ 1</span> | زوڈ ان پٹ تصدیق گائیڈ
          </p>
          <p className="text-sm">
            تمام کوڈ نمونے کاپی کے لیے تیار ہیں اور براہ راست استعمال کیے جا سکتے ہیں
          </p>
        </footer>
      </div>

      {/* اینیمیشن سٹائلز */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap');
        
        .font-urdu {
          font-family: 'Noto Nastaliq Urdu', serif;
        }
        
        @keyframes fly-in {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-fly-in {
          animation: fly-in 0.3s ease-out;
        }
        
        table td, table th {
          text-align: right;
          padding: 12px 16px;
        }
        
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </div>
  );
};

export default Week5Class1;