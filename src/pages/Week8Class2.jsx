import { useState } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import {
  Rocket,
  Server,
  Database,
  Cloud,
  Shield,
  Cpu,
  Globe,
  Settings,
  Code,
  Upload,
  Wifi,
  Lock,
  CheckCircle,
  Zap,
  Layers,
} from "lucide-react";

export default function Week8Class2() {
  const sections = [
    { id: "introduction", label: "🚀 تعارف - ایپ ڈپلائمنٹ", icon: Rocket },
    { id: "deployment", label: "🌐 ڈپلائمنٹ کیا ہے؟", icon: Globe },
    { id: "environments", label: "💻 لوکل بمقابلہ پروڈکشن", icon: Server },
    { id: "envVariables", label: "⚙️ ماحولیاتی متغیرات", icon: Settings },
    { id: "hosting", label: "☁️ مفت ہوسٹنگ آپشنز", icon: Cloud },
    { id: "mongodb", label: "🗄️ MongoDB Atlas", icon: Database },
    { id: "bestPractices", label: "✅ بہترین طریقے", icon: CheckCircle },
    { id: "summary", label: "🏁 خلاصہ", icon: Shield },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const currentIndex = sections.findIndex(
    (section) => section.id === activeSection
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4 md:p-6">
      <ScrollToTopButton />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 md:mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-10 h-10 text-orange-600" />
            <h1 className=" py-5 md:py-6 text-2xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent" dir="rtl">
              Backend Applications کی ڈپلائمنٹ (بنیادی)
            </h1>
          </div>
          <p className="text-gray-600 text-base md:text-xl px-2" dir="rtl">
            اپنی API کو آن لائن لائیں تاکہ ہر کوئی استعمال کر سکے
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Sidebar - Navigation */}
          <nav className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 sticky top-6">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5" />
                ڈپلائمنٹ کے مراحل
              </h2>
              <ul className="space-y-1 md:space-y-2">
                {sections.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveSection(item.id)}
                      className={`cursor-pointer w-full text-left px-3 py-2 md:px-4 md:py-3 rounded-xl transition-all flex items-center gap-2 md:gap-3 text-sm md:text-base ${
                        activeSection === item.id
                          ? "bg-orange-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-orange-50"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
              {/* Progress Bar */}
              <div className="mb-4 md:mb-6">
                <div className="flex justify-between items-center mb-1 md:mb-2">
                  <span className="text-xs md:text-sm text-gray-600">
                    {currentIndex + 1} / {sections.length}
                  </span>
                  <span className="text-xs md:text-sm font-medium text-orange-600">
                    {sections[currentIndex].label}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                  <div
                    className="bg-orange-600 h-1.5 md:h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentIndex + 1) / sections.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* 🚀 تعارف - ایپ ڈپلائمنٹ */}
              {activeSection === "introduction" && (
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6" dir="rtl">
                    <Rocket className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800 text-right" dir="rtl">
                      🚀 تعارف - ایپ ڈپلائمنٹ
                    </h2>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 md:p-6 mb-4 md:mb-6 border-l-4 border-orange-500">
                    <p className="text-base md:text-lg text-gray-700 mb-3" dir="rtl">
                      <strong>ڈپلائمنٹ</strong> وہ عمل ہے جس کے ذریعے آپ اپنی
                      ایپلیکیشن کو آن لائن لاتے ہیں تاکہ صارفین انٹرنیٹ پر اسے
                      استعمال کر سکیں۔
                    </p>
                    <p className="text-base md:text-lg text-gray-700" dir="rtl">
                      بیک اینڈ ڈویلپر کے طور پر، آپ کو معلوم ہونا چاہیے:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow border border-gray-200">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-blue-600" />
                        لوکل پروجیکٹ رن کرنا
                      </h3>
                      <ul className="space-y-2 text-sm md:text-base text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="text-green-600 mt-1">•</div>
                          <span>npm start یا nodemon کا استعمال</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="text-green-600 mt-1">•</div>
                          <span>لوکل ڈیٹا بیس کنکشن</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="text-green-600 mt-1">•</div>
                          <span>ٹیسٹنگ اور ڈیبگنگ</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 md:p-6 rounded-xl shadow border border-gray-200">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Settings className="w-5 h-5 text-purple-600" />
                        پروڈکشن کنفیگریشن
                      </h3>
                      <ul className="space-y-2 text-sm md:text-base text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="text-green-600 mt-1">•</div>
                          <span>ماحولیاتی متغیرات کا سیٹ اپ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="text-green-600 mt-1">•</div>
                          <span>سیکورٹی سیٹنگز</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="text-green-600 mt-1">•</div>
                          <span>کارکردگی کی بہتری</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 md:p-6 rounded-xl">
                    <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-3">
                      📚 اس سبق میں شامل ہے
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "ڈپلائمنٹ کیا ہے؟",
                        "لوکل بمقابلہ پروڈکشن",
                        "ماحولیاتی متغیرات",
                        "مفت ہوسٹنگ آپشنز",
                        "MongoDB Atlas کا استعمال",
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-2 md:p-3 rounded-lg flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm md:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 🌐 ڈپلائمنٹ کیا ہے؟ */}
              {activeSection === "deployment" && (
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6" dir="rtl">
                    <Globe className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800" dir="rtl">
                      🌐 ڈپلائمنٹ کیا ہے؟
                    </h2>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4 md:p-6 mb-4 md:mb-6">
                    <p className="text-base md:text-lg text-gray-700" dir="rtl">
                      <strong>ڈپلائمنٹ</strong> آپ کی ایپ کو لوکل مشین سے سرور
                      پر منتقل کرنے کا عمل ہے تاکہ یہ عوامی طور پر قابل رسائی ہو
                      سکے۔
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-b from-green-50 to-emerald-50 p-4 md:p-6 rounded-xl">
                      <h3 className="text-lg md:text-xl font-bold text-green-800 mb-3">
                        💻 لوکل (مقامی)
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            💻
                          </div>
                          <span className="text-sm md:text-base">
                            آپ کے کمپیوٹر پر ترقی اور ٹیسٹنگ
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            🛠️
                          </div>
                          <span className="text-sm md:text-base">
                            صرف ڈویلپرز تک رسائی
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-b from-orange-50 to-red-50 p-4 md:p-6 rounded-xl">
                      <h3 className="text-lg md:text-xl font-bold text-orange-800 mb-3">
                        🚀 پروڈکشن (لائیو)
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                            🌐
                          </div>
                          <span className="text-sm md:text-base">
                            لائیو ایپلیکیشن جس تک کوئی بھی پہنچ سکتا ہے
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                            👥
                          </div>
                          <span className="text-sm md:text-base">
                            تمام صارفین کے لیے قابل رسائی
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 md:p-6 rounded-xl">
                    <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-3" dir="rtl">
                      ⭐ ڈپلائمنٹ کی اہمیت
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" dir="rtl">
                      {[
                        {
                          icon: "👥",
                          text: "صارفین کہیں سے بھی رسائی حاصل کر سکتے ہیں",
                        },
                        {
                          icon: "🔌",
                          text: "بیک اینڈ APIs حقیقی فرنٹ اینڈ ایپس کو سروس دیتی ہیں",
                        },
                        {
                          icon: "🌍",
                          text: "حقیقی دنیا کے منصوبوں کے لیے ضروری",
                        },
                        {
                          icon: "📱",
                          text: "موبائل ایپس اور تھرڈ پارٹی انٹیگریشنز",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-3 rounded-lg flex items-start gap-2"
                        >
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-sm md:text-base">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 💻 لوکل بمقابلہ پروڈکشن */}
              {activeSection === "environments" && (
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6" dir="rtl">
                    <Server className="w-6 h-6 md:w-8 md:h-8 text-gray-600" />
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800" dir="rtl">
                      💻 لوکل بمقابلہ پروڈکشن
                    </h2>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 md:px-4 md:py-3 text-right text-xs md:text-sm font-semibold text-gray-700">
                            پہلو
                          </th>
                          <th className="px-3 py-2 md:px-4 md:py-3 text-right text-xs md:text-sm font-semibold text-gray-700">
                            لوکل (ڈویلپمنٹ)
                          </th>
                          <th className="px-3 py-2 md:px-4 md:py-3 text-right text-xs md:text-sm font-semibold text-gray-700">
                            پروڈکشن (لائیو)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          {
                            aspect: "سرور",
                            local: "localhost",
                            production: "کلاؤڈ سرور / ہوسٹنگ پلیٹ فارم",
                          },
                          {
                            aspect: "ڈیٹا بیس",
                            local: "لوکل MongoDB / ٹیسٹ ڈیٹا بیس",
                            production: "MongoDB Atlas / پروڈکشن ڈیٹا بیس",
                          },
                          {
                            aspect: "ڈیبگنگ",
                            local: "مکمل لاگز، ہاٹ-ریلوڈ",
                            production: "کم لاگز، ایرر ٹریکنگ",
                          },
                          {
                            aspect: "کارکردگی",
                            local: "آپٹیمائزڈ نہیں",
                            production: "کارکردگی اور اسکیل کے لیے آپٹیمائزڈ",
                          },
                          {
                            aspect: "سیکورٹی",
                            local: "کم سخت",
                            production: "HTTPS، env متغیرات، auth ضروری",
                          },
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-3 py-2 md:px-4 md:py-3 whitespace-nowrap">
                              <span className="font-semibold text-blue-700">
                                {row.aspect}
                              </span>
                            </td>
                            <td className="px-3 py-2 md:px-4 md:py-3">
                              <span className="text-gray-700">{row.local}</span>
                            </td>
                            <td className="px-3 py-2 md:px-4 md:py-3">
                              <span className="text-gray-700">
                                {row.production}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 p-4 md:p-6 rounded-xl">
                    <h3 className="text-lg md:text-xl font-bold text-yellow-800 mb-3">
                      🎯 کلیدی فرق
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-3 md:p-4 rounded-lg">
                        <h4 className="font-bold text-green-600 mb-2">
                          لوکل ڈویلپمنٹ
                        </h4>
                        <ul className="space-y-1 text-sm md:text-base">
                          <li>• تیز ڈیولپمنٹ سائیکل</li>
                          <li>• آسان ڈیبگنگ</li>
                          <li>• ٹیسٹ ڈیٹا کا استعمال</li>
                        </ul>
                      </div>
                      <div className="bg-white p-3 md:p-4 rounded-lg">
                        <h4 className="font-bold text-red-600 mb-2">
                          پروڈکشن
                        </h4>
                        <ul className="space-y-1 text-sm md:text-base">
                          <li>• ہائی سیکورٹی</li>
                          <li>• بہتر کارکردگی</li>
                          <li>• 24/7 دستیابی</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ⚙️ ماحولیاتی متغیرات */}
              {activeSection === "envVariables" && (
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <Settings className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                      ⚙️ ماحولیاتی متغیرات
                    </h2>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4 md:p-6 mb-4 md:mb-6">
                    <p className="text-base md:text-lg text-gray-700" dir="rtl">
                      ماحولیاتی متغیرات API keys اور ڈیٹا بیس credentials جیسے
                      حساس ڈیٹا کو کوڈ میں ظاہر کیے بغیر محفوظ کرنے میں مدد
                      کرتے ہیں۔
                    </p>
                  </div>

                  <div className="bg-gray-900 text-gray-100 p-4 md:p-6 rounded-xl overflow-x-auto">
                    <h3 className="text-lg md:text-xl font-bold mb-3">
                      📁 فائل: .env
                    </h3>
                    <pre className="text-xs md:text-sm">
                      {`PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/myDatabase
JWT_SECRET=mySecretKey
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=emailpassword`}
                    </pre>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 md:p-6 rounded-xl">
                      <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-3" dir="rtl">
                        ✅ فوائد
                      </h3>
                      <ul className="space-y-2 text-sm md:text-base" dir="rtl">
                        <li className="flex items-start gap-2">
                          <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span>Credentials محفوظ رکھتا ہے</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Settings className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span>ڈویلپمنٹ اور پروڈکشن کے لیے مختلف سیٹنگز</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Code className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span>سورس کوڈ میں تبدیلی کے بغیر آسانی سے تبدیل ہو
                            سکتا ہے</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 md:p-6 rounded-xl">
                      <h3 className="text-lg md:text-xl font-bold text-red-800 mb-3" dir="rtl">
                        ⚠️ اہم نوٹ
                      </h3>
                      <div className="bg-white p-3 md:p-4 rounded-lg">
                        <p className="font-bold text-red-600 mb-2" dir="rtl">
                          ہمیشہ .env کو .gitignore میں شامل کریں
                        </p>
                        <code className="block bg-gray-100 p-2 rounded text-sm font-mono" dir="rtl">
                          # .gitignore میں شامل کریں
                          <br />
                          .env
                          <br />
                          node_modules/
                        </code>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 md:p-6 rounded-xl">
                    <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-3">
                      🛠️ Node.js میں استعمال
                    </h3>
                    <div className="bg-gray-900 text-gray-100 p-3 md:p-4 rounded-lg overflow-x-auto">
                      <pre className="text-xs md:text-sm">
                        {`// package.json میں شامل کریں
npm install dotenv

// server.js کی ابتدا میں
require('dotenv').config();

// استعمال کریں
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* ☁️ مفت ہوسٹنگ آپشنز */}
              {activeSection === "hosting" && (
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <Cloud className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                      ☁️ مفت ہوسٹنگ آپشنز برائے بیک اینڈ
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {/* Render */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 md:p-6 rounded-xl border border-green-200" dir="rtl">
                      <div className="flex items-center gap-2 md:gap-3 mb-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center text-right" dir="ltr">
                          <span className="font-bold text-green-600">1️⃣</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-green-800" dir="rtl">
                          Render
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 mb-3">
                        Node.js, Python وغیرہ کے لیے مفت بیک اینڈ ہوسٹنگ
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2" dir="rtl">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm md:text-base">
                            GitHub سے آٹو ڈپلائمنٹ کی حمایت
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm md:text-base">
                            ماحولیاتی متغیرات کی حمایت
                          </span>
                        </div>
                      </div>
                      <div className="mt-4" dir="rtl">
                        <h4 className="font-bold text-gray-800 mb-2" dir="rtl">
                          📋 مراحل:
                        </h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm md:text-base">
                          <li>https://render.com پر جائیں</li>
                          <li>مفت اکاؤنٹ بنائیں</li>
                          <li>اپنا GitHub repository کنیکٹ کریں</li>
                          <li>ماحولیاتی متغیرات سیٹ کریں</li>
                          <li>ڈپلائ کریں</li>
                        </ol>
                      </div>
                    </div>

                    {/* Railway */}
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 md:p-6 rounded-xl border border-orange-200" dir="rtl">
                      <div className="flex items-center gap-2 md:gap-3 mb-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-lg flex items-center justify-center" dir="ltr">
                          <span className="font-bold text-orange-600">2️⃣</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-orange-800">
                          Railway
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 mb-3">
                        بیک اینڈ APIs اور ڈیٹا بیسز کے لیے ایک اور مفت ہوسٹنگ
                        پلیٹ فارم
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-600" />
                          <span className="text-sm md:text-base">
                            GitHub سے سادہ ڈپلائمنٹ
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-600" />
                          <span className="text-sm md:text-base">
                            ماحولیاتی متغیرات کی حمایت
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          📋 مراحل:
                        </h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm md:text-base">
                          <li>https://railway.app پر جائیں</li>
                          <li>سائن اپ / لاگ ان کریں</li>
                          <li>نیا پراجیکٹ بنائیں</li>
                          <li>GitHub repo کنیکٹ کریں یا دستی طور پر ڈپلائ کریں</li>
                          <li>ماحولیاتی متغیرات شامل کریں</li>
                          <li>ڈپلائ کریں</li>
                        </ol>
                      </div>
                    </div>

                    {/* Vercel */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 md:p-6 rounded-xl border border-purple-200" dir="rtl">
                      <div className="flex items-center gap-2 md:gap-3 mb-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <span className="font-bold text-purple-600">3️⃣</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-purple-800">
                          Vercel (بیک اینڈ)
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 mb-3">
                        زیادہ تر فرنٹ اینڈ کے لیے، لیکن Node.js سرورلیس
                        فنکشنز کی حمایت کرتا ہے
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600" />
                          <span className="text-sm md:text-base">
                            سرورلیس فنکشنز کے ساتھ API endpoints کے لیے اچھا
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-bold text-gray-800 mb-2">
                          📋 مراحل:
                        </h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm md:text-base">
                          <li>https://vercel.com پر جائیں</li>
                          <li>اپنا GitHub repository کنیکٹ کریں</li>
                          <li>ڈیش بورڈ میں ماحولیاتی متغیرات سیٹ کریں</li>
                          <li>ڈپلائ کریں</li>
                          <li>بیک اینڈ فنکشنز کے لیے /api روٹس استعمال کریں</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 🗄️ MongoDB Atlas */}
              {activeSection === "mongodb" && (
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <Database className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                      🗄️ MongoDB Atlas
                    </h2>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4 md:p-6 mb-4 md:mb-6" dir="rtl">
                    <p className="text-base md:text-lg text-gray-700" dir="rtl">
                      پروڈکشن کے لیے، کلاؤڈ ہوسٹڈ MongoDB استعمال کریں:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" dir="rtl">
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow border">
                      <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-3">
                        ✅ فوائد
                      </h3>
                      <ul className="space-y-2 text-sm md:text-base">
                        <li className="flex items-start gap-2">
                          <div className="text-green-600 mt-1">•</div>
                          <span>فری-ٹائر کلوسٹر دستیاب</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="text-green-600 mt-1">•</div>
                          <span>Mongo URI کے ذریعے آپ کا بیک اینڈ کنیکٹ ہو سکتا
                            ہے</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="text-green-600 mt-1">•</div>
                          <span>یوزرنیم/پاس ورڈ اور IP وائٹ لسٹ کے ساتھ محفوظ</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 md:p-6 rounded-xl shadow border">
                      <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-3">
                        📋 مراحل
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 text-sm md:text-base">
                        <li>https://www.mongodb.com/cloud/atlas پر جائیں</li>
                        <li>فری کلوسٹر بنائیں</li>
                        <li>ریڈ/رائٹ permissions کے ساتھ ڈیٹا بیس یوزر شامل
                          کریں</li>
                        <li>نیٹ ورک رسائی کی اجازت دیں</li>
                        <li>کنیکشن سٹرنگ کو .env فائل میں کاپی کریں</li>
                      </ol>
                    </div>
                  </div>

                  <div className="bg-gray-900 text-gray-100 p-4 md:p-6 rounded-xl overflow-x-auto">
                    <h3 className="text-lg md:text-xl font-bold mb-3">
                      📝 .env میں مثال URI
                    </h3>
                    <pre className="text-xs md:text-sm whitespace-pre-wrap">
                      MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
                    </pre>
                  </div>

                  <div className="bg-yellow-50 p-4 md:p-6 rounded-xl">
                    <h3 className="text-lg md:text-xl font-bold text-yellow-800 mb-3">
                      🔧 کنفیگریشن مثال
                    </h3>
                    <div className="bg-gray-900 text-gray-100 p-3 md:p-4 rounded-lg overflow-x-auto">
                      <pre className="text-xs md:text-sm">
                        {`// server.js میں
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Atlas سے کنیکٹ ہو گیا'))
.catch(err => console.error('❌ MongoDB کنکشن خرابی:', err));`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* ✅ بہترین طریقے */}
              {activeSection === "bestPractices" && (
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                      ✅ ڈپلائمنٹ کے بہترین طریقے
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "ماحولیاتی متغیرات",
                        desc: "حساس ڈیٹا کے لیے ہمیشہ ماحولیاتی متغیرات استعمال کریں",
                        icon: "🔐",
                      },
                      {
                        title: "JWT tokens",
                        desc: "JWT tokens، API keys اور email credentials محفوظ کریں",
                        icon: "🛡️",
                      },
                      {
                        title: "HTTPS استعمال کریں",
                        desc: "پروڈکشن میں HTTPS استعمال کریں",
                        icon: "🔒",
                      },
                      {
                        title: "CORS سیٹ اپ",
                        desc: "فرنٹ اینڈ کے لیے CORS مناسب طریقے سے فعال کریں",
                        icon: "🌐",
                      },
                      {
                        title: "لاگنگ / مانیٹرنگ",
                        desc: "خرابیوں کے لیے لاگنگ / مانیٹرنگ فعال کریں",
                        icon: "📊",
                      },
                      {
                        title: "سیٹنگز الگ رکھیں",
                        desc: "ڈویلپمنٹ اور پروڈکشن کنفیگ الگ رکھیں",
                        icon: "📁",
                      },
                      {
                        title: "کلاؤڈ اسٹوریج",
                        desc: "لوکل اسٹوریج کے بجائے فائلوں کے لیے کلاؤڈ اسٹوریج استعمال کریں",
                        icon: "☁️",
                      },
                      {
                        title: "ریگولر بیک اپ",
                        desc: "ڈیٹا بیس کے باقاعدہ بیک اپ لیں",
                        icon: "💾",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3 md:p-4 rounded-xl shadow border hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-2 md:gap-3">
                          <div className="text-2xl">{item.icon}</div>
                          <div>
                            <h4 className="font-bold text-gray-800 text-sm md:text-base mb-1">
                              {item.title}
                            </h4>
                            <p className="text-xs md:text-sm text-gray-600">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 🏁 خلاصہ */}
              {activeSection === "summary" && (
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                      🏁 خلاصہ
                    </h2>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 md:p-6 mb-4 md:mb-6">
                    <p className="text-base md:text-lg text-gray-700 mb-3">
                      بیک اینڈ ایپ کو ڈپلائ کرنے کے لیے ضروری ہے:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "لوکل بمقابلہ پروڈکشن ماحول کو سمجھنا",
                        "ماحولیاتی متغیرات کو کنفیگر کرنا",
                        "مفت ہوسٹنگ آپشنز استعمال کرنا",
                        "MongoDB Atlas سے کنیکٹ ہونا",
                        "سیکورٹی بہترین طریقے لاگو کرنا",
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-2 md:p-3 rounded-lg flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm md:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 md:p-6 rounded-xl">
                    <h3 className="text-lg md:text-xl font-bold text-green-800 mb-3">
                      🎯 ڈپلائمنٹ کے بعد
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 mb-4" dir="rtl">
                      ایک بار ڈپلائ ہونے کے بعد، آپ کی API لائیو ہو جاتی ہے اور
                      درج ذیل کے لیے قابل رسائی ہوتی ہے:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { icon: "💻", label: "فرنٹ اینڈ ایپس" },
                        { icon: "📱", label: "موبائل ایپس" },
                        { icon: "🔌", label: "تھرڈ پارٹی انٹیگریشنز" },
                        { icon: "🤖", label: "APIs" },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-3 rounded-lg text-center"
                        >
                          <div className="text-2xl mb-1">{item.icon}</div>
                          <p className="text-xs md:text-sm font-medium">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 md:p-6 rounded-xl">
                    <h3 className="text-lg md:text-xl font-bold text-orange-800 mb-3">
                      🚀 اگلا قدم
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                          1
                        </div>
                        <span className="text-sm md:text-base">
                          اپنے پروجیکٹ میں ماحولیاتی متغیرات شامل کریں
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                          2
                        </div>
                        <span className="text-sm md:text-base">
                          MongoDB Atlas پر فری اکاؤنٹ بنائیں
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                          3
                        </div>
                        <span className="text-sm md:text-base">
                          Render یا Railway پر ڈپلائ کریں
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                          4
                        </div>
                        <span className="text-sm md:text-base">
                          اپنی لائیو API کو فرنٹ اینڈ سے کنیکٹ کریں
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200 flex justify-between">
                <button
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition flex items-center gap-1 md:gap-2 text-sm md:text-base ${
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
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition flex items-center gap-1 md:gap-2 text-sm md:text-base ${
                    currentIndex === sections.length - 1
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-orange-600 text-white hover:bg-orange-700 cursor-pointer"
                  }`}
                >
                  اگلا موضوع →
                </button>
              </div>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-6 md:mt-8 bg-white rounded-2xl shadow p-3 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-orange-600">
                8
              </div>
              <div className="text-xs md:text-sm text-gray-600">مراحل</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-green-600">
                3
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                مفت ہوسٹنگ آپشنز
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-blue-600">
                100%
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                عملی معلومات
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-purple-600">
                🚀
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                تیار ڈپلائمنٹ
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}