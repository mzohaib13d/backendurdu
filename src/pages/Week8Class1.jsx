import { useState } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import {
  Shield,
  CheckSquare,
  Database,
  Lock,
  Globe,
  Zap,
  AlertTriangle,
  FileText,
  Settings,
  Cpu,
  Layers,
  Code,
  Wifi,
} from "lucide-react";

export default function Week8Class1() {
  const sections = [
    { id: "introduction", label: "🔍 تعارف اور اہمیت", icon: Shield },
    { id: "validation", label: "📝 ان پٹ کی توثیق", icon: CheckSquare },
    { id: "injection", label: "🛡️ SQL/NoSQL انجیکشن", icon: Database },
    { id: "helmet", label: "⛑️ Helmet سیٹ اپ", icon: Lock },
    { id: "ratelimit", label: "⏱️ ریٹ لیمٹنگ", icon: Zap },
    { id: "cors", label: "🌐 CORS کنفیگریشن", icon: Globe },
    { id: "xss", label: "💻 XSS تحفظ", icon: AlertTriangle },
    { id: "summary", label: "🏁 خلاصہ", icon: FileText },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const currentIndex = sections.findIndex(
    (section) => section.id === activeSection,
  );

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-6">
      <ScrollToTopButton />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 md:mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-green-600" />
            <h1
              className="py-5 md:py-6 text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
              dir="rtl"
            >
              Backend APIs کی توثیق اور سیکورٹی
            </h1>
          </div>
          <p className="text-gray-600 text-lg md:text-xl" dir="rtl">
            محفوظ اور مضبوط APIs بنانے کے لیے بنیادی تصورات
          </p>
          <p className="mt-4 text-lg text-gray-700 font-medium md:text-2xl mt-2 mb-1" style={{ fontFamily: 'Calibri, sans-serif' }}>Instructor : Zohaib Farooq</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Sidebar - Navigation */}
          <nav className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 sticky top-6">
              <h2
                className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2"
                dir="rtl"
              >
                <Layers className="w-5 h-5" />
                سیکورٹی کے موضوعات
              </h2>
              <ul className="space-y-2">
                {sections.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveSection(item.id)}
                      className={`cursor-pointer w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                        activeSection === item.id
                          ? "bg-green-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-green-50"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm md:text-base">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">
                    {currentIndex + 1} / {sections.length}
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    {sections[currentIndex].label}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentIndex + 1) / sections.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* 🔍 تعارف اور اہمیت */}
              {activeSection === "introduction" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-8 h-8 text-green-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      🔍 تعارف اور اہمیت
                    </h2>
                  </div>

                  <div
                    className="bg-green-50 rounded-xl p-6 mb-6 border-l-4 border-green-500"
                    dir="rtl"
                  >
                    <p
                      className="text-xl md:text-2xl font-semibold text-green-700 mb-4"
                      dir="rtl"
                    >
                      سیکورٹی اور توثیق ہر Backend API کے لیے انتہائی اہم ہیں۔
                    </p>
                    <p className="text-lg text-gray-700">
                      ہر ایپلیکیشن کو ضرور:
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="text-green-600 mt-1">✓</div>
                        <span>آنے والے ڈیٹا کی توثیق کریں</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="text-green-600 mt-1">✓</div>
                        <span>مضر حملوں سے تحفظ کریں</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="text-green-600 mt-1">✓</div>
                        <span>محفوظ مواصلات کو یقینی بنائیں</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-800 mb-4">
                        🎯 اس ریڈمی میں شامل ہیں
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "ان پٹ کی توثیق (Joi / Zod)",
                          "SQL/NoSQL انجیکشن سے تحفظ",
                          "Helmet کے ذریعے HTTP ہیڈرز",
                          "درخواستوں کی حد بندی",
                          "CORS کنفیگریشن",
                          "بنیادی XSS تحفظ",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="bg-blue-100 p-1 rounded">
                              <CheckSquare className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-800 mb-4">
                        ⚠️ سیکورٹی کے بغیر خطرات
                      </h3>
                      <div className="space-y-3">
                        {[
                          { icon: "💀", text: "ڈیٹا چوری" },
                          { icon: "🔓", text: "غیر مجاز رسائی" },
                          { icon: "💸", text: "مالی نقصان" },
                          { icon: "📉", text: "سروس کا انقطاع" },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 bg-white rounded-lg"
                          >
                            <span className="text-2xl">{item.icon}</span>
                            <span className="font-medium">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 📝 ان پٹ کی توثیق */}
              {activeSection === "validation" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6 text-right" dir="rtl">
                    <CheckSquare className="w-8 h-8 text-blue-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800" dir="rtl">
                      📝 ان پٹ کی توثیق
                    </h2>
                  </div> 

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-lg text-gray-700 mb-4" dir="rtl">
                      آنے والے ڈیٹا کی توثیق یہ یقینی بناتی ہے کہ صارف ناجائز یا
                      نقصان دہ ڈیٹا نہیں بھیجتا۔
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                      <h3 className="text-xl font-bold text-yellow-800 mb-4">
                        📦 Joi کا استعمال
                      </h3>
                      <div className="space-y-4">
                        <code className="block bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm">
                          npm install joi
                        </code>
                        <div className="bg-white p-4 rounded-lg">
                          <h4 className="font-bold text-gray-800 mb-2">
                            مثال: صارف کی رجسٹریشن
                          </h4>
                          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
                            {`import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});`}
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-800 mb-4">
                        🛠️ Middleware برائے توثیق
                      </h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`import { Request, Response, NextFunction } from "express";

export const validateRequest = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ 
        message: error.details[0].message 
      });
    }
    next();
  };
};`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">
                      🔄 روٹ میں استعمال
                    </h3>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      {`import express from "express";
import { validateRequest } from "../middlewares/validate.middleware";
import { registerSchema } from "../schemas/user.schema";

const router = express.Router();

router.post(
  "/register", 
  validateRequest(registerSchema), 
  registerUser
);`}
                    </pre>
                    <div className="mt-4 p-3 bg-green-100 rounded-lg">
                      <p className="text-green-800 font-semibold">
                        ✅ صرف درست ڈیٹا ہی ڈیٹا بیس میں داخل ہوگا
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-orange-800 mb-4">
                      🎯 Zod (متبادل)
                    </h3>
                    <div className="space-y-3">
                      <code className="block bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm">
                        npm install zod
                      </code>
                      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* 🛡️ SQL/NoSQL انجیکشن */}
              {activeSection === "injection" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Database className="w-8 h-8 text-red-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      🛡️ SQL/NoSQL انجیکشن
                    </h2>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 mb-6 border-l-4 border-red-500">
                    <p className="text-lg text-gray-700" dir="rtl">
                      MongoDB queries خطرناک ہو سکتی ہیں اگر صارف کا ان پٹ براہ
                      راست استعمال کیا جائے۔
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-100 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-red-800 mb-4">
                        ❌ برا مثال (خطرے میں)
                      </h3>
                      <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                        <code className="text-red-300 font-mono whitespace-pre">
                          {`const user = await User.findOne({ email: req.body.email });`}
                        </code>
                      </div>
                      <p className="mt-3 text-gray-700" dir="rtl">
                        صارف براہ راست ان پٹ دے سکتا ہے جو خطرناک کوڈ ہو سکتا
                        ہے۔
                      </p>
                    </div>

                    <div className="bg-green-100 p-6 rounded-xl">
                      <h3
                        className="text-xl font-bold text-green-800 mb-4"
                        dir="rtl"
                      >
                        ✅ تحفظ کے طریقے
                      </h3>
                      <ul className="space-y-3" dir="rtl">
                        <li className="flex items-start gap-2">
                          <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                          <span>ہمیشہ Mongoose / ODM طریقے استعمال کریں</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                          <span>Joi / Zod کے ذریعے ان پٹ کی توثیق کریں</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                          <span>$where یا raw queries سے گریز کریں</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                          <span>
                            ضرورت پڑنے پر صارف کے ان پٹ کو escape کریں
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* ⛑️ Helmet سیٹ اپ */}
              {activeSection === "helmet" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Lock className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      ⛑️ Helmet – محفوظ HTTP ہیڈرز
                    </h2>
                  </div>

                  <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                    <p className="text-lg text-gray-700" dir="rtl">
                      Helmet مختلف HTTP ہیڈرز سیٹ کرتا ہے تاکہ سیکورٹی بہتر ہو۔
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow border">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        📥 انسٹالیشن
                      </h3>
                      <code className="block bg-gray-900 text-gray-100 p-3 rounded-lg font-mono">
                        npm install helmet
                      </code>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow border">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        🚀 استعمال
                      </h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        {`import helmet from "helmet";
app.use(helmet());`}
                      </pre>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-yellow-800 mb-4">
                        🛡️ تحفظ فراہم کرتا ہے
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Clickjacking کے خلاف",
                          "MIME sniffing کے خلاف",
                          "ہیڈرز کے ذریعے XSS کے خلاف",
                          "Content Security Policy",
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-3 rounded-lg flex items-center gap-2"
                          >
                            <Shield className="w-4 h-4 text-green-600" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ⏱️ ریٹ لیمٹنگ */}
              {activeSection === "ratelimit" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-8 h-8 text-orange-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      ⏱️ درخواستوں کی حد بندی
                    </h2>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6 mb-6">
                    <p className="text-lg text-gray-700" dir="rtl">
                      اپنی API کو brute force یا DDoS حملوں سے بچائیں۔
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow border">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        📥 انسٹالیشن
                      </h3>
                      <code className="block bg-gray-900 text-gray-100 p-3 rounded-lg font-mono">
                        npm install express-rate-limit
                      </code>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow border">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        📝 مثال
                      </h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 منٹ
  max: 100, // ہر IP کو 100 درخواستوں کی حد
  message: "بہت زیادہ درخواستیں، بعد میں کوشش کریں۔",
});

app.use(limiter);`}
                      </pre>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-blue-800 mb-3" dir="rtl">
                        🎯 فوائد
                      </h3>
                      <ul className="space-y-2" dir="rtl">
                        <li className="flex items-start gap-2">
                          <div className="bg-blue-100 p-1 rounded">
                            <CheckSquare className="w-4 h-4 text-blue-600" />
                          </div>
                          <span>API کے غلط استعمال کو روکتا ہے</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="bg-blue-100 p-1 rounded">
                            <CheckSquare className="w-4 h-4 text-blue-600" />
                          </div>
                          <span>سرور کو اوورلوڈ ہونے سے بچاتا ہے</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="bg-blue-100 p-1 rounded">
                            <CheckSquare className="w-4 h-4 text-blue-600" />
                          </div>
                          <span>صارف کے تجربے کو بہتر بناتا ہے</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* 🌐 CORS کنفیگریشن */}
              {activeSection === "cors" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-8 h-8 text-teal-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      🌐 CORS (کراس-اوریجن ریسورس شیرنگ)
                    </h2>
                  </div>

                  <div className="bg-teal-50 rounded-xl p-6 mb-6">
                    <p className="text-lg text-gray-700" dir="rtl">
                      CORS مختلف origins سے آنے والی فرنٹ اینڈ ایپس کو آپ کی API
                      تک رسائی کی اجازت دیتا ہے۔
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow border">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        📥 انسٹالیشن
                      </h3>
                      <code className="block bg-gray-900 text-gray-100 p-3 rounded-lg font-mono">
                        npm install cors
                      </code>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow border">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        🚀 استعمال
                      </h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`import cors from "cors";

app.use(
  cors({
    origin: ["http://localhost:3000", "https://myapp.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);`}
                      </pre>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-green-800 mb-3">
                        ⚙️ سیٹنگز
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { setting: "origin", desc: "اجازت شدہ domains" },
                          { setting: "methods", desc: "اجازت شدہ HTTP طریقے" },
                          { setting: "credentials", desc: "کوکیز کی اجازت" },
                          {
                            setting: "optionsSuccessStatus",
                            desc: "OPTIONS request کا status",
                          },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-3 rounded-lg border"
                          >
                            <span className="font-bold text-blue-600">
                              {item.setting}
                            </span>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 💻 XSS تحفظ */}
              {activeSection === "xss" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      💻 XSS (کراس-سائٹ اسکرپٹنگ)
                    </h2>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 mb-6">
                    <p className="text-lg text-gray-700" dir="rtl">
                      XSS اس وقت ہوتا ہے جب صارف کا ان پٹ sanitization کے بغیر
                      render کیا جاتا ہے۔
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-yellow-800 mb-4 text-right" dir="rtl">
                        🛡️ تحفظ کے طریقے
                      </h3>
                      <ul className="space-y-3" dir="rtl">
                        <li className="flex items-start gap-2">
                          <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                          <span>Joi / Zod کے ذریعے ان پٹ کی توثیق</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                          <span>فرنٹ اینڈ پر آؤٹ پٹ کو escape کریں</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                          <span>Helmet ہیڈرز استعمال کریں</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-blue-800 mb-4">
                        🔧 عملی عمل
                      </h3>
                      <div className="space-y-3">
                        <code className="block bg-gray-900 text-gray-100 p-3 rounded-lg font-mono text-sm">
                          npm install xss-clean
                        </code>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                          {`import xss from "xss-clean";
app.use(xss());`}
                        </pre>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                          {`// Helmet کے ساتھ
app.use(helmet.xssFilter());`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-green-800 mb-3">
                      📝 مثال: XSS حملہ
                    </h3>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-2" dir="rtl">
                        صارف درج ذیل ڈیٹا داخل کر سکتا ہے:
                      </p>
                      <code className="block bg-gray-100 p-2 rounded font-mono text-sm text-right">
                        &lt;script&gt;alert('XSS')&lt;/script&gt;
                      </code>
                      <p className="mt-3 text-gray-700" dir="rtl">
                        صحیح sanitization کے بغیر، یہ اسکرپٹ execute ہو جائے گا۔
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 🏁 خلاصہ */}
              {activeSection === "summary" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-8 h-8 text-purple-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      🏁 خلاصہ
                    </h2>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-purple-800 mb-4 text-right" dir="rtl">
                      ✅ بہترین طریقے
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" dir="rtl">
                      {[
                        "آنے والی درخواستوں کی ہمیشہ توثیق کریں",
                        "تیار شدہ statements / Mongoose طریقے استعمال کریں",
                        "ریٹ لیمٹنگ کے ذریعے درخواستوں کو محدود کریں",
                        "Helmet کے ذریعے HTTP ہیڈرز محفوظ کریں",
                        "CORS کو مناسب طریقے سے کنفیگر کریں",
                        "XSS سے بچنے کے لیے ان پٹس کو sanitize کریں",
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-3 rounded-lg flex items-start gap-2"
                        >
                          <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-blue-800 mb-4" dir="rtl">
                      🎯 ان اقدامات کے فوائد
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        {
                          icon: "🛡️",
                          title: "API محفوظ ہوتی ہے",
                          desc: "مضر حملوں سے بچاؤ",
                        },
                        {
                          icon: "💾",
                          title: "ڈیٹا کی سالمیت",
                          desc: "ڈیٹا کی درستگی برقرار",
                        },
                        {
                          icon: "🚀",
                          title: "بہتر کارکردگی",
                          desc: "بہتر صارف کا تجربہ",
                        },
                        {
                          icon: "🔒",
                          title: "اعتماد",
                          desc: "صارفین کا اعتماد بڑھتا ہے",
                        },
                        {
                          icon: "⚖️",
                          title: "قانونی پابندیاں",
                          desc: "GDPR/قوانین کی پاسداری",
                        },
                        {
                          icon: "📈",
                          title: "کاروباری تحفظ",
                          desc: "مالی نقصان سے بچاؤ",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-4 rounded-xl text-center"
                        >
                          <div className="text-3xl mb-2">{item.icon}</div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-800 mb-3" dir="rtl">
                      🎓 نتیجہ
                    </h3>
                    <p className="text-lg text-gray-700" dir="rtl">
                      ان توثیق اور سیکیورٹی کے اقدامات کو لاگو کر کے:
                    </p>
                    <ul className="mt-3 space-y-2 text-gray-700" dir="rtl">
                      <li className="flex items-start gap-2">
                        <div className="text-green-600 mt-1">•</div>
                        <span>APIs مضر حملوں سے محفوظ رہتی ہیں</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="text-green-600 mt-1">•</div>
                        <span>ڈیٹا کی سالمیت برقرار رہتی ہے</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="text-green-600 mt-1">•</div>
                        <span>
                          صارفین کو محفوظ اور قابل اعتماد ایپس ملتی ہیں
                        </span>
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-green-100 rounded-lg">
                      <p className="font-bold text-green-800" dir="rtl">
                        یہ backend beginners اور production-ready APIs کے لیے
                        لازمی ہے۔
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between">
                <button
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${
                    currentIndex === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                  }`}
                >
                  ← پچھلا موضوع
                </button>

                <button
                  onClick={goToNext}
                  disabled={currentIndex === sections.length - 1}
                  className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${
                    currentIndex === sections.length - 1
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
                  }`}
                >
                  اگلا موضوع →
                </button>
              </div>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-8 bg-white rounded-2xl shadow p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">8</div>
              <div className="text-sm text-gray-600">اہم سیکورٹی موضوعات</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">6+</div>
              <div className="text-sm text-gray-600">تحفظ کے طریقے</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">10+</div>
              <div className="text-sm text-gray-600">عملی مثالیں</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">100%</div>
              <div className="text-sm text-gray-600">محفوظ APIs</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
