// Chapter7Class1.jsx
import React, { useState } from 'react';
import { Copy, Check, Upload, Image, File, Shield, Cloud, Database, Server, Lock } from 'lucide-react';
import ScrollToTopButton from "../components/ScrollToTopButton";

const Chapter7Class1 = () => {
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

  // فائل اپ لوڈ استعمالات
  const fileUploadUses = [
    {
      icon: '👤',
      title: 'پروفائل تصاویر',
      description: 'صارف کی پروفائل پکچر'
    },
    {
      icon: '🛍️',
      title: 'پروڈکٹ تصاویر',
      description: 'ای کامرس پروڈکٹ امیجز'
    },
    {
      icon: '📄',
      title: 'دستاویزات',
      description: 'PDFs، ریزیومیز، CVs'
    },
    {
      icon: '🏆',
      title: 'سرٹیفکیٹس',
      description: 'تعلیمی اور پیشہ ورانہ'
    },
    {
      icon: '📝',
      title: 'بلاگ تصاویر',
      description: 'بلاگ پوسٹس کی تصاویر'
    },
    {
      icon: '🎬',
      title: 'ویڈیوز',
      description: 'مولٹی میڈیا مواد'
    }
  ];

  // نمونہ کوڈ سیکشنز
  const codeSections = [
    {
      id: 'multer-installation',
      title: '📦 Multer انسٹالیشن',
      code: `npm install multer`
    },
    {
      id: 'multer-config',
      title: '⚙️ Multer بنیادی کنفیگریشن',
      code: `import multer from "multer";
import path from "path";

// لوکل اسٹوریج کنفیگریشن
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = 
      Date.now() + "-" + Math.round(Math.random() * 1e9);
    
    cb(null, uniqueName + path.extname(file.originalname));
  },
});`
    },
    {
      id: 'file-validation',
      title: '📏 فائل سائز اور قسم کی تصدیق',
      code: `const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    
    if (!allowedTypes.includes(file.mimetype)) {
      cb(new Error("صرف تصاویر کی اجازت ہے"), false);
    }
    
    cb(null, true);
  },
});

export { upload };`
    },
    {
      id: 'upload-route',
      title: '🚏 اپ لوڈ روٹ',
      code: `import express from "express";
import { upload } from "../middlewares/upload.middleware";
import { uploadImage } from "../controllers/upload.controller";

const router = express.Router();

router.post(
  "/upload",
  upload.single("image"), // "image" = فیلڈ نام
  uploadImage
);

export default router;`
    },
    {
      id: 'upload-controller',
      title: '🎯 اپ لوڈ کنٹرولر',
      code: `export const uploadImage = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({
      message: "کوئی فائل اپ لوڈ نہیں ہوئی",
    });
  }

  res.status(200).json({
    message: "فائل کامیابی سے اپ لوڈ ہو گئی",
    file: {
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
    },
  });
};`
    },
    {
      id: 'secure-upload',
      title: '🔐 محفوظ فائل اپ لوڈ',
      code: `import { authenticate } from "../middlewares/auth.middleware";

router.post(
  "/upload",
  authenticate, // صرف لاگ ان شدہ صارفین
  upload.single("image"),
  uploadImage
);

// فوائد:
// 1. غیر مجاز صارفین کو روکتا ہے
// 2. پیداواری ایپس میں سیکورٹی یقینی بناتا ہے`
    },
    {
      id: 'multiple-upload',
      title: '📂 متعدد فائل اپ لوڈ',
      code: `router.post(
  "/upload-multiple",
  upload.array("images", 5), // زیادہ سے زیادہ 5 فائلز
  async (req, res) => {
    if (!req.files) {
      return res.status(400).json({ 
        message: "کوئی فائل اپ لوڈ نہیں ہوئی" 
      });
    }

    const fileInfos = (req.files as Express.Multer.File[]).map(
      (file) => ({
        filename: file.filename,
        path: file.path,
        size: file.size,
      })
    );

    res.json({ 
      message: "فائلز اپ لوڈ ہو گئیں", 
      files: fileInfos 
    });
  }
);`
    },
    {
      id: 'cloudinary-setup',
      title: '☁️ Cloudinary سیٹ اپ',
      code: `npm install cloudinary

// .env فائل
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_secret

// utils/cloudinary.ts
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export default cloudinary;`
    },
    {
      id: 'cloudinary-upload',
      title: '☁️ Cloudinary پر اپ لوڈ',
      code: `export const uploadImage = async (
  req: Request,
  res: Response
) => {
  if (!req.file) {
    return res.status(400).json({ 
      message: "کوئی فائل اپ لوڈ نہیں ہوئی" 
    });
  }

  const result = await cloudinary.uploader.upload(
    req.file.path,
    { folder: "uploads" }
  );

  res.json({
    message: "کلاؤڈ پر اپ لوڈ ہو گئی",
    imageUrl: result.secure_url,
  });
};`
    }
  ];

  // بہترین طریقے
  const bestPractices = [
    { practice: 'ہمیشہ فائل قسم کی تصدیق کریں', icon: '✅' },
    { practice: 'فائل سائز کو محدود کریں', icon: '📏' },
    { practice: 'صارف کے فائل ناموں پر اعتماد نہ کریں', icon: '⚠️' },
    { practice: 'پیداوار میں کلاؤڈ اسٹوریج استعمال کریں', icon: '☁️' },
    { practice: 'اپ لوڈ روٹس کو تصدیق سے محفوظ کریں', icon: '🔐' },
    { practice: 'فائلز کو منفرد نام دیں', icon: '🏷️' }
  ];

  // Postman ٹیسٹنگ
  const postmanTesting = [
    { step: 'طریقہ (Method)', value: 'POST', icon: '📤' },
    { step: 'URL', value: '/upload', icon: '🔗' },
    { step: 'باڈی (Body)', value: 'form-data', icon: '📦' },
    { step: 'کلید (Key)', value: 'image (type = File)', icon: '🔑' },
    { step: 'فائل منتخب کریں', value: 'تصویر منتخب کریں', icon: '🖼️' },
    { step: 'درخواست بھیجیں', value: 'Send request', icon: '🚀' }
  ];

  // مقامی بمقابلہ کلاؤڈ اسٹوریج
  const storageComparison = [
    { 
      type: 'مقامی اسٹوریج ❌', 
      issues: ['سرور کریش → فائلز ضائع ہوں گی', 'پیمانہ بندی کے مسائل', 'کارکردگی کے مسائل'],
      icon: '💾'
    },
    { 
      type: 'کلاؤڈ اسٹوریج ✅', 
      benefits: ['خودکار بیک اپ', 'آسان پیمانہ بندی', 'تیز رسائی', 'سی ڈی این ڈیلیوری'],
      icon: '☁️'
    }
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
          <div className="relative top-[-30px] bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 whitespace-nowrap">
            <Check className="w-5 h-5" />
            <span className="font-semibold">کوڈ کاپی ہو گیا!</span>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* ہیڈر با فیروزی رنگین ٹائٹل */}
        <header className="mb-10 text-center">
          <div className="relative inline-block mb-6">
  {/* ہیڈنگ کا کنٹینر */}
  <div className="mb-2">
    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent pb-2 leading-[1.9] font-urdu px-2">
      📤 بیک اینڈ میں فائل اپ لوڈز
    </h1>
  </div>
  
  {/* اینیمیٹڈ پروگرس بار */}
  <div className="relative w-78 h-1.5 mx-auto rounded-full overflow-hidden mb-4">
    <div className="absolute h-full w-full bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-400 animate-progress-bar rounded-full"></div>
  </div>
  
  {/* انسٹرکٹر کا نام */}
  <p className="text-lg text-gray-700 font-medium mb-3 mt-4 py-4" style={{ fontFamily: 'Verdana, sans-serif' }}>
    Instructor: Zohaib Farooq
  </p>
  
  {/* چاپٹر کا نام */}
  <div className="inline-block px-5 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 rounded-full font-semibold text-base border border-teal-200 font-urdu leading-[1.8]">
    چاپٹر 7 - کلاس 1: فائل اپ لوڈز
  </div>
</div>

<style jsx>{`
@import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap');

.font-urdu {
  font-family: 'Noto Nastaliq Urdu', serif;
  line-height: 1.9;
  letter-spacing: 0.01em;
}

.leading-\[1\.9\] {
  line-height: 1.9;
}

@keyframes progress-bar {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-progress-bar {
  animation: progress-bar 2s linear infinite;
}
`}</style>
        </header>

        {/* تعارف */}
        <section className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
          <div className="flex items-start gap-3 mb-6">
            <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-3 rounded-xl">
              <Upload className="w-6 h-6 text-teal-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">🧠 تعارف</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                فائل اپ لوڈنگ ایک بہت اہم بیک اینڈ خصوصیت ہے۔ تقریباً ہر حقیقی دنیا کی ایپلی کیشن کو فائل اپ لوڈز کی ضرورت ہوتی ہے، جیسے:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fileUploadUses.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow">
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
          
          <div className="mt-6 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl p-5 border border-teal-300">
            <h3 className="font-bold text-gray-800 mb-3">اس گائیڈ میں شامل ہیں:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'Multipart فارم ڈیٹا',
                'Multer کی بنیادی باتیں',
                'تصویر اپ لوڈ',
                'فائل سائز اور قسم کی تصدیق',
                'مقامی اسٹوریج',
                'Cloudinary انضمام',
                'پیداوار کے بہترین طریقے'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Multipart Form Data */}
        <section className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl shadow-xl p-8 mb-8 border border-cyan-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Database className="w-6 h-6 text-cyan-600" />
            🌐 Multipart Form Data کیا ہے؟
          </h2>
          
          <div className="bg-white rounded-xl p-5 mb-6 border border-cyan-300">
            <p className="text-gray-700 text-lg mb-4">
              عام طور پر، APIs JSON ڈیٹا قبول کرتی ہیں۔ تاہم، جب ہم فائلز + ٹیکسٹ ڈیٹا بھیجنا چاہتے ہیں، تو ہم استعمال کرتے ہیں:
            </p>
            
            <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-4 rounded-lg text-center font-bold text-xl mb-4">
              👉 multipart/form-data
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cyan-100 rounded-lg p-4">
                <h4 className="font-bold text-cyan-800 mb-2">مثال (فرنٹ اینڈ → بیک اینڈ)</h4>
                <div className="bg-gray-900 rounded p-3">
                  <code className="text-cyan-300 font-mono">
                    name = "علی"<br />
                    email = "ali@gmail.com"<br />
                    profileImage = image.jpg
                  </code>
                </div>
              </div>
              
              <div className="bg-teal-100 rounded-lg p-4">
                <h4 className="font-bold text-teal-800 mb-2">کیوں Multipart کہتے ہیں؟</h4>
                <p className="text-gray-700">
                  یہ ڈیٹا متعدد حصوں میں تقسیم ہوتا ہے، اس لیے اسے multipart کہا جاتا ہے۔
                </p>
                <div className="mt-3 bg-gray-900 rounded p-3">
                  <code className="text-teal-300 font-mono font-bold">
                    📌 Multer بیک اینڈ میں اس multipart ڈیٹا کو ہینڈل کرتا ہے۔
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multer انٹروڈکشن */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Upload className="w-6 h-6 text-teal-600" />
            📦 Multer – فائل اپ لوڈ مڈل ویئر
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-5 border border-teal-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Server className="w-5 h-5 text-teal-600" />
                </div>
                <h4 className="font-bold text-teal-800">ہینڈل کرتا ہے</h4>
              </div>
              <p className="text-gray-700">multipart/form-data کو پروسیس کرتا ہے</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-5 border border-cyan-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <File className="w-5 h-5 text-cyan-600" />
                </div>
                <h4 className="font-bold text-cyan-800">محفوظ کرتا ہے</h4>
              </div>
              <p className="text-gray-700">فائلز کو سرور پر سیو کرتا ہے</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-5 border border-teal-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Image className="w-5 h-5 text-teal-600" />
                </div>
                <h4 className="font-bold text-teal-800">معلومات فراہم کرتا ہے</h4>
              </div>
              <p className="text-gray-700">فائل کی معلومات مہیا کرتا ہے</p>
            </div>
          </div>
        </section>

        {/* کوڈ نمونے */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
            💻 کوڈ نمونے اور نفاذ
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {codeSections.map((section) => (
              <div key={section.id} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all relative">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  <button
                    onClick={(e) => handleCopyCode(section.code, section.id, e)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all relative ${
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

        {/* Postman ٹیسٹنگ */}
        <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 mb-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Cloud className="w-6 h-6 text-blue-600" />
            🧪 Postman کے ساتھ ٹیسٹنگ
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                <tr>
                  <th className="py-4 px-6 text-right font-bold text-lg">مرحلہ</th>
                  <th className="py-4 px-6 text-right font-bold text-lg">قیمت</th>
                  <th className="py-4 px-6 text-center font-bold text-lg">آئیکن</th>
                </tr>
              </thead>
              <tbody>
                {postmanTesting.map((step, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                    <td className="py-3 px-6 font-medium text-gray-800">{step.step}</td>
                    <td className="py-3 px-6">
                      <div className="bg-blue-100 rounded-lg p-2">
                        <span className="text-blue-800 font-medium">{step.value}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center text-2xl">{step.icon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-5 border border-green-300">
            <p className="text-gray-800 text-center font-bold">
              ✔ تصویر کامیابی سے اپ لوڈ ہو جائے گی
            </p>
          </div>
        </section>

        {/* کلاؤڈ اسٹوریج */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 mb-8 border border-purple-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Cloud className="w-6 h-6 text-purple-600" />
            ☁️ کلاؤڈ اسٹوریج (کیوں ضروری ہے؟)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {storageComparison.map((storage, index) => (
              <div key={index} className={`rounded-xl p-5 ${index === 0 ? 'bg-gradient-to-br from-red-50 to-pink-50 border border-red-200' : 'bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{storage.icon}</span>
                  <h3 className="font-bold text-lg">{storage.type}</h3>
                </div>
                
                {storage.issues && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-red-700 mb-2">مسائل:</h4>
                    {storage.issues.map((issue, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-gray-700">{issue}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {storage.benefits && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-green-700 mb-2">فوائد:</h4>
                    {storage.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-5 border border-purple-300">
            <div className="flex items-start gap-3">
              <div className="bg-purple-500 text-white p-3 rounded-lg">
                👉
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">حل: کلاؤڈ اسٹوریج</h4>
                <p className="text-gray-700">
                  پیداوار کے لیے مقامی اسٹوریج تجویز نہیں ہے۔ Cloudinary یا AWS S3 استعمال کریں۔
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* بہترین طریقے */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8 mb-8 border border-amber-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-amber-600" />
            🔐 سیکورٹی کے بہترین طریقے
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-amber-300 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{practice.icon}</span>
                  <p className="text-gray-700 font-medium">{practice.practice}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-5 border border-amber-400">
            <h3 className="font-bold text-gray-800 mb-3">حقیقی دنیا کے استعمالات:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'صارف پروفائل تصاویر',
                'پروڈکٹ امیج اپ لوڈز',
                'ریزیوم اپ لوڈز',
                'سرٹیفکیٹس',
                'بلاگ تھمب نیلز',
                'ویڈیو مواد'
              ].map((use, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <File className="w-4 h-4 text-amber-600" />
                  <span className="text-gray-700">{use}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* خلاصہ */}
        <section className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl shadow-xl p-8 mb-8 border border-teal-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            🏁 خلاصہ
          </h2>
          
          <p className="text-gray-700 mb-6 text-center text-lg">
            یہ گائیڈ کا احاطہ کرتی ہے:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'Multipart فارم ڈیٹا',
              'Multer کی بنیادی باتیں',
              'تصویر اپ لوڈ',
              'فائل سائز تصدیق',
              'فائل قسم تصدیق',
              'مقامی اسٹوریج',
              'Cloudinary انضمام',
              'پیداوار بہترین طریقے'
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-3 border border-teal-200 text-center hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                  ✓
                </div>
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-5 bg-white rounded-xl border border-cyan-300">
            <h4 className="font-bold text-gray-800 mb-3">یہ موضوع ہر بیک اینڈ beginner کے لیے لازمی ہے اور وسیع پیمانے پر استعمال ہوتا ہے:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                {['سوشل میڈیا ایپس', 'ای کامرس پلیٹ فارمز'].map((app, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Upload className="w-4 h-4 text-cyan-600" />
                    <span className="text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {['ایڈمن ڈیش بورڈز', 'SaaS سسٹمز'].map((app, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-teal-600" />
                    <span className="text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* فوٹر */}
        <footer className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-600 bg-white rounded-2xl shadow-xl p-8">
          <p className="mb-2">
            <span className="font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              چاپٹر 7 کلاس 1
            </span> | بیک اینڈ میں فائل اپ لوڈز
          </p>
          <p className="text-sm">
            تمام کوڈ نمونے پروڈکشن ریڈی ہیں اور براہ راست استعمال کیے جا سکتے ہیں
          </p>
          <div className="mt-4 flex justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
              <span>فیروزی رنگوں کا گرےڈیئنٹ</span>
            </div>
            <div className="flex items-center gap-1">
              <Copy className="w-3 h-3" />
              <span>کوڈ کاپی بٹنز</span>
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

export default Chapter7Class1;