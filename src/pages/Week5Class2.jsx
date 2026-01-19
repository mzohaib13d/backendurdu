// Week5Class2.jsx
import React, { useState } from "react";
import oneimg from "../assets/images/1img.png";
import twoimg from "../assets/images/2img.gif";
import {
  Copy,
  Check,
  Lock,
  Shield,
  Key,
  Fingerprint,
  Smartphone,
  AlertTriangle,
} from "lucide-react";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Week5Class2 = () => {
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
      id: "bcrypt-installation",
      title: "📦 bcrypt انسٹالیشن",
      code: `npm install bcrypt
npm install --save-dev @types/bcrypt`,
    },
    {
      id: "password-hashing",
      title: "🔐 پاس ورڈ ہیشنگ (رجسٹریشن)",
      code: `import bcrypt from "bcrypt";

const saltRounds = 10;

const hashedPassword = await bcrypt.hash(password, saltRounds);`,
    },
    {
      id: "password-verification",
      title: "🔍 پاس ورڈ تصدیق (لاگ ان)",
      code: `const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
  throw new Error("غلط کریڈنشلز");
}`,
    },
    {
      id: "jwt-installation",
      title: "📦 JWT انسٹالیشن",
      code: `npm install jsonwebtoken
npm install --save-dev @types/jsonwebtoken`,
    },
    {
      id: "generate-jwt",
      title: "🔐 JWT جنریشن (لاگ ان)",
      code: `import jwt from "jsonwebtoken";

const accessToken = jwt.sign(
  { id: user._id, role: user.role },
  process.env.JWT_SECRET as string,
  { expiresIn: "15m" }
);`,
    },
    {
      id: "verify-jwt",
      title: "🔍 JWT تصدیق (مڈل ویئر)",
      code: `const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ message: "ٹوکن فراہم نہیں کیا گیا" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ message: "غلط یا ختم ہونے والا ٹوکن" });
  }
};`,
    },
    {
      id: "refresh-token",
      title: "🔄 ریفریش ٹوکن جنریشن",
      code: `const refreshToken = jwt.sign(
  { id: user._id },
  process.env.REFRESH_SECRET as string,
  { expiresIn: "7d" }
);`,
    },
    {
      id: "store-refresh-token",
      title: "🍪 ریفریش ٹوکن محفوظ کرنا",
      code: `res.cookie("refreshToken", refreshToken, {
  httpOnly: true,
  secure: true,
  sameSite: "strict"
});`,
    },
    {
      id: "refresh-endpoint",
      title: "🔄 ریفریش ٹوکن اینڈ پوائنٹ",
      code: `app.post("/refresh", (req, res) => {
  const token = req.cookies.refreshToken;

  if (!token)
    return res.status(401).json({ message: "ریفریش ٹوکن نہیں ہے" });

  jwt.verify(token, process.env.REFRESH_SECRET as string, (err, decoded) => {
    if (err) return res.status(403).json({ message: "غلط ریفریش ٹوکن" });

    const newAccessToken = jwt.sign(
      { id: decoded.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "15m" }
    );

    res.json({ accessToken: newAccessToken });
  });
});`,
    },
    {
      id: "role-based-auth",
      title: "🔐 رول پر مبنی اتھارٹی",
      code: `if (user.role !== "admin") {
  return res.status(403).json({ message: "اجازت نہیں ہے" });
}`,
    },
  ];

  // Authentication طریقے
  const authMethods = [
    {
      id: 1,
      title: "📝 صارف نام اور پاس ورڈ",
      description: "سب سے عام طریقہ",
      features: [
        "پاس ورڈ ہیش شدہ محفوظ ہوتا ہے",
        "مثال: bcrypt, argon2",
        "bcrypt.compare() کا استعمال",
      ],
    },
    {
      id: 2,
      title: "🔵 OAuth (Google, GitHub)",
      description: "تیسرے فریق کا لاگ ان",
      features: [
        "صارف Google پر اعتماد کرتا ہے",
        "ایپ پاس ورڈ نہیں دیکھتی",
        "محفوظ، تیز، پیمانہ پذیر",
      ],
    },
    {
      id: 3,
      title: "📱 OTP (ایک بار کا پاس ورڈ)",
      description: "SMS / ای میل کے ذریعے بھیجا جاتا ہے",
      features: ["مختصر مدت", "بینکنگ ایپس میں استعمال", "وقت کی حد کے ساتھ"],
    },
    {
      id: 4,
      title: "🎫 ٹوکن پر مبنی تصدیق",
      description: "JWT کا استعمال",
      features: ["ایکسس ٹوکن", "ریفریش ٹوکن", "Stateless authentication"],
    },
  ];

  // سیکورٹی خطرات
  const securityThreats = [
    { threat: "XSS", prevention: "httpOnly cookies", icon: "🛡️" },
    { threat: "CSRF", prevention: "sameSite cookies", icon: "🔒" },
    { threat: "ٹوکن چوری", prevention: "مختصر میعاد", icon: "⚡" },
    { threat: "بریٹ فورس حملہ", prevention: "ریٹ لیمٹنگ", icon: "🚫" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 font-urdu">
      <ScrollToTopButton />
      {/* فلائینگ تصدیقی پیغام */}
      {showSuccess && (
        <div className="fixed top-4 right-20 animate-fly-in z-50">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span className="font-semibold">کوڈ کاپی ہو گیا!</span>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* max-w-6xl mx-auto */}

        <header className="mb-10 text-center">
          <div className="relative mb-6">
            <div className="pb-2">
              <h1 className="leading-relaxed md:leading-[1.8] text-3xl md:text-3.5xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-red-700 bg-clip-text text-transparent py-1">
                🔐 تصدیق اور اجازت (مکمل گائیڈ) - Authentication & Authorization
              </h1>
              {/* اینیمیٹڈ پروگرس بار */}
              <div className="relative top-4 w-80 h-2 mx-auto rounded-full overflow-hidden">
                <div className="absolute h-full bg-gradient-to-r from-red-500 via-orange-400 to-red-600 animate-progress-bar rounded-full"></div>
              </div>
              <br />
              <p
                className="text-lg text-gray-700 font-medium"
                style={{ fontFamily: "Calibari, sans-serif" }}
              >
                Instructor: Zohaib Farooq
              </p>
              <div
                className="mt-4 inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Week 5 - Class 2: Authentication & Authorization
              </div>
            </div>
          </div>
        </header>

        {/* بنیادی تصورات */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Authentication */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-6 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1 text-right leading-normal" dir="rtl">
                  1. Authentication کیا ہے؟
                </h3>
                <p className="text-gray-600">
                  Authentication وہ عمل ہے جو یہ تصدیق کرتا ہے کہ صارف کون ہے۔
                </p>
              </div>
            </div>

            <div className="bg-blue-100 border border-blue-200 rounded-xl p-4 mb-4">
              <p className="text-blue-800 font-semibold text-lg">
                ❓ "کیا آپ واقعی وہی ہیں جس کا دعویٰ کرتے ہیں؟"
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-gray-700">مثالیں:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  <span>ای میل اور پاس ورڈ سے لاگ ان</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Google / GitHub سے لاگ ان</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  <span>OTP کا استعمال</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  <span>بایومیٹرکس کا استعمال</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 p-3 bg-white rounded-lg border border-blue-300 leading-relaxed">
              <p className="text-gray-700">
                <span className="font-bold"><p className="text-right" dir="rtl">حقیقی زندگی کی مثال:</p></span><p dir="rtl"> اپنی
                شناخت ثابت کرنے کے لیے اپنا شناختی کارڈ دکھانا۔</p>
              </p>
            </div>
          </div>

          {/* Authorization */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-6 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1 text-right leading-normal" dir="rtl">
                  📌 2. اجازت کیا ہے؟
                </h2>
                <p className="text-gray-600" dir="rtl">
                  Authorization وہ عمل ہے جو فیصلہ کرتا ہے کہ صارف کس تک رسائی
                  حاصل کر سکتا ہے۔
                </p>
              </div>
            </div>

            <div className="bg-purple-100 border border-purple-200 rounded-xl p-4 mb-4">
              <p className="text-purple-800 font-semibold text-lg">
                ❓ "آپ کیا کر سکتے ہیں؟"
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-gray-700">مثالیں:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">•</span>
                  <span>ایڈمن صارفین کو حذف کر سکتا ہے</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">•</span>
                  <span>صارف صرف پروفائل دیکھ سکتا ہے</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">•</span>
                  <span>ٹیچر مواد اپ لوڈ کر سکتا ہے</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">•</span>
                  <span>طالب علم صرف مواد دیکھ سکتا ہے</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 p-3 bg-white rounded-lg border border-purple-300">
              <p className="text-gray-700" dir="rtl">
                <span className="font-bold"><p className="text-right" dir="rtl">حقیقی زندگی کی مثال:</p></span> آپ عمارت
                میں داخل ہو سکتے ہیں (تصدیق شدہ)، لیکن صرف کچھ کمرے اجازت شدہ
                ہیں (مجاز)۔
              </p>
            </div>
          </div>
        </section>

        {/* موازنہ ٹیبل */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-10 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2" dir="rtl">
            🔁 تصدیق بمقابلہ اجازت
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-50 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-red-600 to-orange-500 text-white">
                <tr>
                  <th className="py-4 px-6 text-right font-bold text-lg">
                    خصوصیت
                  </th>
                  <th className="py-4 px-6 text-right font-bold text-lg">
                    تصدیق
                  </th>
                  <th className="py-4 px-6 text-right font-bold text-lg">
                    اجازت
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "مقصد",
                    authn: "آپ کون ہیں؟",
                    authz: "آپ کیا کر سکتے ہیں؟",
                  },
                  {
                    feature: "مقصد",
                    authn: "آپ کون ہیں؟",
                    authz: "آپ کیا کر سکتے ہیں؟",
                  },
                  {
                    feature: "مقصد",
                    authn: "آپ کون ہیں؟",
                    authz: "آپ کیا کر سکتے ہیں؟",
                  },
                  {
                    feature: "مقصد",
                    authn: "آپ کون ہیں؟",
                    authz: "آپ کیا کر سکتے ہیں؟",
                  },
                  {
                    feature: "مقصد",
                    authn: "آپ کون ہیں؟",
                    authz: "آپ کیا کر سکتے ہیں؟",
                  },
                  {
                    feature: "مقصد",
                    authn: "آپ کون ہیں؟",
                    authz: "آپ کیا کر سکتے ہیں؟",
                  },
                  {
                    feature: "مقصد",
                    authn: "آپ کون ہیں؟",
                    authz: "آپ کیا کر سکتے ہیں؟",
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="py-3 px-6 font-medium text-gray-800">
                      {row.feature}
                    </td>
                    <td className="py-3 px-6 text-blue-700">{row.authn}</td>
                    <td className="py-3 px-6 text-purple-700">{row.authz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <img
            src={oneimg}
            alt="oneimg"
            className="w-full mt-4 shadow-xl rounded-lg md:rounded-xl 
             transform transition-transform duration-300 
             hover:shadow-2xl hover:scale-[1.01] 
             max-w-full mx-auto"
          />
        </section>

        {/* Authentication طریقے */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent leading-relaxed" dir="rtl">
            🔑 تصدیق کے طریقے (اقسام)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {authMethods.map((method) => (
              <div
                key={method.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-red-100 to-orange-100 p-3 rounded-xl">
                    {method.id === 1 && (
                      <Key className="w-8 h-8 text-red-600" />
                    )}
                    {method.id === 2 && (
                      <Shield className="w-8 h-8 text-blue-600" />
                    )}
                    {method.id === 3 && (
                      <Smartphone className="w-8 h-8 text-green-600" />
                    )}
                    {method.id === 4 && (
                      <Fingerprint className="w-8 h-8 text-purple-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{method.description}</p>
                    <ul className="space-y-2">
                      {method.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* کوڈ نمونے */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent" dir="rtl"> 
            💻 کوڈ نمونے اور نفاذ
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {codeSections.map((section) => (
              <div
                key={section.id}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:border-red-500 transition-all"
              >
                <div className="bg-gradient-to-r from-red-700 to-orange-600 px-6 py-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white leading-relaxed">
                    {section.title}
                  </h3>
                  <button
                    onClick={() => handleCopyCode(section.code, section.id)}
                    className={`flex items-center gap-1 rounded-lg transition-all flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white 
             px-2 py-1 rounded-lg transition-colors text-xs
             sm:gap-2 sm:px-3 sm:py-1 sm:text-sm cursor-pointer ${
               copiedCode === section.id
                 ? "bg-green-600 text-white"
                 : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
             }`}
                  >
                    {copiedCode === section.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>کاپی ہو گیا</span>
                      </>
                    ) : (
                      <>
                        <Copy
                          className="h-3  
              rounded-lg transition-colors text-xs
             sm:gap-2 sm:px-3 sm:py-1 sm:text-sm cursor-pointer"
                        />
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

        {/* سیکورٹی خطرات */}
        <section className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-xl p-8 mb-10 border border-red-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2" dir="rtl">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            🔥 عام سیکورٹی خطرات
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityThreats.map((threat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 border border-red-300 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{threat.icon}</span>
                  <h4 className="font-bold text-red-700 text-lg">
                    {threat.threat}
                  </h4>
                </div>
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <p className="text-red-800 font-medium">
                    {threat.prevention}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-white rounded-xl border border-orange-300">
            <h4 className="font-bold text-gray-800 mb-3 text-lg">
              🔥 عام سیکورٹی بہترین طریقے
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "HTTPS استعمال کریں",
                "پاس ورڈز ہیش کریں",
                "httpOnly cookies استعمال کریں",
                "مختصر ٹوکن میعاد",
                "ریفریش ٹوکن روٹیشن",
                "ریٹ لیمٹنگ",
                "ان پٹ تصدیق (Zod)",
                "اسٹیک ٹریسز ظاہر نہ کریں",
              ].map((practice, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">{practice}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <img
          src={twoimg}
          alt="twoimg"
          className="w-full mt-4 shadow-xl rounded-lg md:rounded-xl 
             transform transition-transform duration-300 
             hover:shadow-2xl hover:scale-[1.01] 
             max-w-full mx-auto mt-4 mb-4"
        />
        {/* سمری ٹیبل */}
        <section className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <h2 className="leading-relaxed text-2xl font-bold mb-6 text-center bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent" dir="rtl">
            🧾 خلاصہ جدول
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-red-700 to-orange-600">
                  <th className="py-4 px-6 text-right font-bold">خصوصیت</th>
                  <th className="py-4 px-6 text-right font-bold">مقصد</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "bcrypt", purpose: "محفوظ پاس ورڈ ہیشنگ" },
                  { feature: "JWT", purpose: "Stateless تصدیق" },
                  { feature: "ریفریش ٹوکن", purpose: "طویل مدتی لاگ ان" },
                  { feature: "مڈل ویئر", purpose: "تصدیق اور اجازت" },
                  { feature: "ایرر ہینڈلر", purpose: "مرکزی ایررز" },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
                  >
                    <td className="py-3 px-6 font-medium text-red-300">
                      {row.feature}
                    </td>
                    <td className="py-3 px-6 text-gray-300">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Express میں تصدیق کا جائزہ */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8 border border-blue-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4" dir="rtl">
            🔐 Express میں تصدیق اور سیکورٹی
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            یہ گائیڈ کا احاطہ کرتی ہے:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "bcrypt کے ساتھ پاس ورڈ ہیشنگ",
              "سیکورٹی بہترین طریقے",
              "TypeScript کے ساتھ JWT جنریشن و تصدیق",
              "ریفریش ٹوکن نفاذ",
              "Express میں تصدیق اور اجازت",
              "ایرر ہینڈلنگ اور مڈل ویئر چیننگ",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border border-blue-200 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 p-1 rounded">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* فوٹر */}
        <footer className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-600">
          <p className="mb-2">
            <span className="font-semibold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              کلاس 5 ہفتہ 2
            </span>{" "}
            | تصدیق اور اجازت مکمل گائیڈ
          </p>
          <p className="text-sm">
            تمام کوڈ نمونے پروڈکشن ریڈی ہیں اور براہ راست استعمال کیے جا سکتے
            ہیں
          </p>
        </footer>
      </div>

      {/* اینیمیشن سٹائلز */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap");

        .font-urdu {
          font-family: "Noto Nastaliq Urdu", serif;
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

        @keyframes progress-bar {
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

        .animate-fly-in {
          animation: fly-in 0.3s ease-out;
        }

        .animate-progress-bar {
          animation: progress-bar 3s ease-in-out infinite;
        }

        table td,
        table th {
          text-align: right;
        }

        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </div>
  );
};

export default Week5Class2;
