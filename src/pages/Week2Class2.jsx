import { useState } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import {
  Code,
  Cpu,
  Shield,
  Zap,
  Layers,
  Wifi,
  FileCode,
  Database,
  Settings,
  AlertCircle,
  FileText,
  CheckCircle,
} from "lucide-react";
import img4img from "../assets/images/img4.jpg";
import middleimg from "../assets/images/middleware1.png";
import img3img from "../assets/images/img3.png";
// import img3img from "../assets/images/img3.jpg";

export default function Week2Class2() {
  const sections = [
    { id: "middleware", label: "📘 Middleware کیا ہے؟", icon: Cpu },
    { id: "visual", label: "🧠 بصری مثالیں", icon: Shield },
    { id: "why", label: "⚙️ Middleware کیوں ضروری ہے؟", icon: Zap },
    { id: "setup", label: "🧰 پروجیکٹ سیٹ اپ", icon: FileCode },
    { id: "types", label: "🔹 Middleware کی اقسام", icon: Database },
    { id: "examples", label: "🔸 عملی مثالیں", icon: Settings },
    { id: "usecases", label: "🧩 حقیقی دنیا کے استعمال", icon: Wifi },
    {
      id: "typeSafe",
      label: "📚 Type-Safe Request and Response",
      icon: FileText,
    },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

  // Find current section index
  const currentIndex = sections.findIndex(
    (section) => section.id === activeSection
  );

  // Navigation functions
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:p-6">
         <ScrollToTopButton />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 md:mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="w-10 h-10 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Express.js کے ساتھ TypeScript — Middleware & Type-Safe Backend
              Development
            </h1>
          </div>
          <p className="text-gray-600 text-lg md:text-xl">
            مضبوط اور scalable backend applications کے لیے middleware کی مہارت
            حاصل کریں
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Sidebar - Navigation */}
          <nav className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5" />
                کورس کے موضوعات
              </h2>
              <ul className="space-y-2">
                {sections.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveSection(item.id)}
                      className={`cursor-pointer w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                        activeSection === item.id
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-blue-50"
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
                  <span className="text-sm font-medium text-blue-600">
                    {sections[currentIndex].label}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentIndex + 1) / sections.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* 📘 Middleware کیا ہے؟ */}
              {activeSection === "middleware" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Cpu className="w-8 h-8 text-blue-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      📘 Middleware کیا ہے؟
                    </h2>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6 border-l-4 border-blue-500">
                    <p className="text-lg md:text-xl text-gray-700 mb-4">
                      <strong>سادہ الفاظ میں:</strong>
                    </p>
                    <p className="text-xl md:text-2xl font-semibold text-blue-700">
                      Middleware وہ فنکشنز ہیں جو request کے سرور میں آنے اور
                      response کے client کو بھیجنے کے درمیان execute ہوتے ہیں۔
                    </p>
                  </div>
                  <h4 className="text-bolder text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 mobile-subsection-title">
                    🧠 Visual Example
                  </h4>

                  <img
                    src={img4img}
                    alt="HTTP Request Lifecycle Diagram showing middleware in the request-response cycle"
                    className=" hover:shadow-xl transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1w-full h-auto rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300" />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        🧠 بصری مثال
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center">
                          <div className="bg-white p-4 rounded-lg shadow-inner w-full">
                            <div className="text-center font-mono text-sm md:text-base">
                              <div className="text-green-600">Request →</div>
                              <div className="my-2">
                                <div className="bg-yellow-100 p-2 rounded mb-1">
                                  Middleware Layer
                                </div>
                                <div className="text-gray-500 text-sm">
                                  (سیکورٹی چیک پوائنٹس)
                                </div>
                              </div>
                              <div className="text-blue-600">→ Response</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-800 mb-4">
                        ہر middleware function کی رسائی ہوتی ہے:
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="bg-blue-100 p-2 rounded">
                            <Code className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <span className="font-semibold">Request (req)</span>
                            <p className="text-sm text-gray-600">
                              آنے والے HTTP request کا ڈیٹا
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="bg-green-100 p-2 rounded">
                            <Code className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <span className="font-semibold">
                              Response (res)
                            </span>
                            <p className="text-sm text-gray-600">
                              جا نے والے HTTP response کا object
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="bg-purple-100 p-2 rounded">
                            <Code className="w-4 h-4 text-purple-600" />
                          </div>
                          <div>
                            <span className="font-semibold">
                              next() function
                            </span>
                            <p className="text-sm text-gray-600">
                              اگلے middleware کو control منتقل کرتا ہے
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                      🧩 تشبیہ:
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Middleware کو ہوائی اڈے کے سیکورٹی چیک پوائنٹس یا فلٹرز کے
                      طور پر سوچیں:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">🛂</div>
                        <p className="font-semibold">پاسپورٹ چیک</p>
                        <p className="text-sm text-gray-600">شناخت کی تصدیق</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">🎒</div>
                        <p className="font-semibold">سامان چیک</p>
                        <p className="text-sm text-gray-600">سیکورٹی اسکیننگ</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">🎫</div>
                        <p className="font-semibold">بورڈنگ پاس</p>
                        <p className="text-sm text-gray-600">حتمی اجازت</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700">
                      <strong>اسی طرح، Express میں:</strong> ایک middleware آپ
                      کے request کو لاگ کر سکتا ہے، دوسرا آپ کے token کو verify
                      کر سکتا ہے، تیسرا errors کو handle کر سکتا ہے۔
                    </p>
                  </div>
                </div>
              )}

              {/* ⚙️ Middleware کیوں ضروری ہے؟ */}
              {activeSection === "why" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-8 h-8 text-yellow-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      ⚙️ Middleware کیوں ضروری ہے؟
                    </h2>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                    <p className="text-lg text-gray-700 mb-6">
                      Middleware آپ کو اپنی application کے cross-cutting
                      concerns کو modularize کرنے کی اجازت دیتا ہے۔ Middleware
                      کے بغیر، آپ کو ہر route کے لیے ان کو manually کوڈ کرنا
                      پڑتا — جو ناقابل انتظام ہو جاتا ہے۔
                    </p>
                  </div>
 <h4 className="text-bolder text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 mobile-subsection-title">
                  🧠 Visual Example
                  </h4>
                  <img
                    src={img3img}
                    alt="Middleware Example Diagram illustrating various middleware functions in an Express.js application"
                    className="hover:shadow-xl transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1w-full h-auto rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        icon: "📝",
                        title: "Requests لاگ کریں",
                        desc: "ہر آنے والے request کو ٹریک کریں",
                      },
                      {
                        icon: "🔐",
                        title: "Users کی تصدیق کریں",
                        desc: "کچھ routes تک رسائی سے پہلے verify کریں",
                      },
                      {
                        icon: "✓",
                        title: "ڈیٹا کی توثیق کریں",
                        desc: "آنے والے ڈیٹا کی format چیک کریں",
                      },
                      {
                        icon: "🚨",
                        title: "Errors کو handle کریں",
                        desc: "Global error handling",
                      },
                      {
                        icon: "📁",
                        title: "Static files سرو کریں",
                        desc: "تصاویر، CSS، JS سرو کریں",
                      },
                      {
                        icon: "⚡",
                        title: "Custom logic",
                        desc: "API limits, transformations",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-4 rounded-xl shadow border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 🧰 پروجیکٹ سیٹ اپ */}
              {activeSection === "setup" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <FileCode className="w-8 h-8 text-green-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      🧰 پروجیکٹ سیٹ اپ
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        فولڈر کی ساخت
                      </h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm md:text-base">
                        {`express-ts-app/
├── src/
│   ├── server.ts
│   └── middleware/
│       └── logger.ts
├── package.json
└── tsconfig.json`}
                      </pre>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-blue-800 mb-4">
                        ⚙️ مرحلہ 2: Dependencies انسٹال کریں
                      </h3>
                      <div className="space-y-3">
                        <code className="block bg-white p-3 rounded-lg font-mono text-sm">
                          npm init -y
                        </code>
                        <code className="block bg-white p-3 rounded-lg font-mono text-sm">
                          npm install express
                        </code>
                        <code className="block bg-white p-3 rounded-lg font-mono text-sm">
                          npm install -D typescript tsx @types/node
                          @types/express
                        </code>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-purple-800 mb-4">
                        🧱 مرحلہ 3: TypeScript Configuration
                      </h3>
                      <p className="text-gray-700 mb-3">
                        <code>tsconfig.json</code> بنائیں:
                      </p>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  }
}`}
                      </pre>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-green-800 mb-4">
                        🚀 مرحلہ 4: بنیادی Express Server
                      </h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = 3000;

// JSON parsing کے لیے built-in middleware
app.use(express.json());

// Default route
app.get("/", (req: Request, res: Response) => {
  res.send("🚀 Express + TypeScript Server میں خوش آمدید");
});

// سرور شروع کریں
app.listen(PORT, () => console.log(\`✅ سرور چل رہا ہے http://localhost:\${PORT}\`));`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* 🔹 Middleware کی اقسام */}
              {activeSection === "types" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Database className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      🔹 Middleware کی اقسام
                    </h2>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            قسم
                          </th>
                          <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            تفصیل
                          </th>
                          <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            مثال
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          {
                            type: "Application-level",
                            desc: "تمام routes کے لیے app.use() استعمال کر کے چلتا ہے",
                            example: "Logging, authentication",
                          },
                          {
                            type: "Router-level",
                            desc: "مخصوص routes کے لیے چلتا ہے",
                            example: "User route validation",
                          },
                          {
                            type: "Built-in",
                            desc: "Express کے ذریعے فراہم کیا جاتا ہے",
                            example: "express.json()",
                          },
                          {
                            type: "Error-handling",
                            desc: "پوری application کے errors کو handle کرتا ہے",
                            example: "Catch and respond to exceptions",
                          },
                          {
                            type: "Third-party",
                            desc: "بیرونی packages",
                            example: "cors, morgan, helmet",
                          },
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-4 py-3 whitespace-nowrap">
                              <span className="font-semibold text-blue-700">
                                {row.type}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-gray-700">{row.desc}</span>
                            </td>
                            <td className="px-4 py-3">
                              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                                {row.example}
                              </code>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 🔸 عملی مثالیں */}
              {activeSection === "examples" && (
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-8 h-8 text-orange-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      🔸 عملی مثالیں
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">
                        🔸 مثال 1: Application-Level Middleware
                      </h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`app.use((req: Request, res: Response, next) => {
  console.log(\`\${req.method} \${req.url} - \${new Date().toLocaleTimeString()}\`);
  next(); // اگلے middleware/route کو control منتقل کریں
});`}
                      </pre>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-800 mb-3">
                        🔸 مثال 2: Custom Logger Middleware
                      </h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`// src/middleware/logger.ts
import { Request, Response, NextFunction } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(\`📩 \${req.method} \${req.path}\`);
  next();
};

// server.ts میں
import { logger } from "./middleware/logger";
app.use(logger);`}
                      </pre>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-800 mb-3">
                        🔸 مثال 3: Error-Handling Middleware
                      </h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ message: "Internal Server Error" });
});`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* 🧩 حقیقی دنیا کے استعمال */}
              {activeSection === "usecases" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Wifi className="w-8 h-8 text-teal-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      🧩 حقیقی دنیا کے استعمال
                    </h2>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Middleware کی قسم
                          </th>
                          <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            مقصد
                          </th>
                          <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            مثال
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          {
                            type: "Logging",
                            purpose: "API کے استعمال کو ٹریک کریں",
                            example: "Custom logger یا morgan",
                          },
                          {
                            type: "Authentication",
                            purpose: "JWT tokens کی تصدیق کریں",
                            example: "routes تک رسائی سے پہلے user چیک کریں",
                          },
                          {
                            type: "Validation",
                            purpose: "آنے والے ڈیٹا کی توثیق کریں",
                            example: "express-validator کا استعمال",
                          },
                          {
                            type: "CORS",
                            purpose: "cross-origin requests کو handle کریں",
                            example: "cors package",
                          },
                          {
                            type: "Error Handling",
                            purpose: "global exceptions کو catch کریں",
                            example: "Custom error middleware",
                          },
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-4 py-3">
                              <span className="font-semibold text-blue-700">
                                {row.type}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-gray-700">
                                {row.purpose}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                                {row.example}
                              </code>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* بصری مثالیں */}
              {activeSection === "visual" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-8 h-8 text-purple-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      🧠 بصری مثالیں
                    </h2>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-indigo-800 mb-4">
                      Middleware Flow Visualization
                    </h3>
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold">
                          Request
                        </div>
                        <div className="text-gray-500">→</div>
                        <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-bold">
                          Middleware 1
                        </div>
                        <div className="text-gray-500">→</div>
                        <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-bold">
                          Middleware 2
                        </div>
                        <div className="text-gray-500">→</div>
                        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-bold">
                          Route Handler
                        </div>
                        <div className="text-gray-500">→</div>
                        <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-bold">
                          Response
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-bolder text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 mobile-subsection-title">
                  🧠 Visual Example
                  </h4>
                  <img
                    src={middleimg}
                    alt="Middleware Concept Diagram illustrating the flow of requests and responses through middleware layers"
                    className=" hover:shadow-xl transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1w-full h-auto rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow border">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-blue-600" />
                        Middleware Concept Diagram
                      </h4>
                      <div className="space-y-2">
                        <div className="bg-gray-100 p-3 rounded text-center">
                          🌐 آنے والا Request
                        </div>
                        <div className="text-center text-gray-500">↓</div>
                        <div className="bg-blue-100 p-3 rounded text-center">
                          🔍 Middleware Layer
                        </div>
                        <div className="text-center text-gray-500">↓</div>
                        <div className="bg-green-100 p-3 rounded text-center">
                          🚀 Business Logic
                        </div>
                        <div className="text-center text-gray-500">↓</div>
                        <div className="bg-purple-100 p-3 rounded text-center">
                          📤 جا نے والا Response
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow border">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-600" />
                        Airport Security Analogy
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            1
                          </div>
                          <div className="flex-1 bg-gray-50 p-2 rounded">
                            🛂 پاسپورٹ چیک → Authentication Middleware
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            2
                          </div>
                          <div className="flex-1 bg-gray-50 p-2 rounded">
                            🎒 سامان اسکین → Input Validation Middleware
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            3
                          </div>
                          <div className="flex-1 bg-gray-50 p-2 rounded">
                            🎫 بورڈنگ پاس → Authorization Middleware
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 📚 Type-Safe Request and Response Handling */}
              {activeSection === "typeSafe" && (
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      📚 Type-Safe Request and Response Handling
                    </h2>
                  </div>

                  <div className="bg-indigo-50 rounded-xl p-6 mb-6 border-l-4 border-indigo-500">
                    <p className="text-lg text-gray-700 mb-4">
                      JavaScript-based Node.js applications میں، developers اکثر
                      درج ذیل غلطیاں کرتے ہیں:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="text-red-600 mt-1">•</div>
                        <span>responses میں غلط data types بھیجنا</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="text-red-600 mt-1">•</div>
                        <span>request میں required fields بھول جانا</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="text-red-600 mt-1">•</div>
                        <span>incomplete یا undefined data واپس کرنا</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-700">
                      یہ مسائل اکثر runtime تک نظر نہیں آتے، جس سے unexpected
                      behavior اور broken APIs بنتی ہیں۔ TypeScript ان مسائل کو
                      type safety کے ذریعے حل کرتا ہے۔
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      🧠 Type Safety کیا ہے؟
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Type safety کا مطلب ہے کہ آپ کا code ہر variable، function
                      اور object کی data type کو سمجھتا ہے۔ یہ آپ کو
                      incompatible data assign کرنے یا استعمال کرنے سے روکتا ہے،
                      جس سے bugs development کے دوران ہی پکڑے جاتے ہیں
                      production میں نہیں۔
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                      <h3 className="text-xl font-bold text-red-800 mb-3">
                        🧩 مثال (TypeScript کے بغیر)
                      </h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`app.post("/users", (req, res) => {
  const name = req.body.username; // ❌ Typo mistake (should be req.body.name)
  res.send(\`User: \${name}\`);
});`}
                      </pre>
                      <p className="mt-3 text-gray-700 text-sm">
                        Plain JavaScript میں، یہ typo runtime تک error نہیں دے
                        گی۔ جب آپ server چلائیں گے، تو آپ کو undefined ملے گا
                        کیونکہ req.body.username موجود نہیں ہے۔
                      </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-800 mb-3">
                        ✅ مثال (TypeScript کے ساتھ)
                      </h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`interface UserRequestBody {
  name: string;
  age: number;
}

app.post("/users", (req: Request<{}, {}, UserRequestBody>, res: Response) => {
  const { name, age } = req.body;
  res.json({ message: \`User \${name}, Age: \${age}\` });
});`}
                      </pre>
                      <p className="mt-3 text-gray-700 text-sm">
                        یہاں، TypeScript statically طور پر req.body کو چیک کرتا
                        ہے۔ اگر آپ ایسی property access کرنے کی کوشش کریں جو
                        موجود نہیں ہے (req.body.username)، تو TypeScript فوراً
                        آپ کے editor میں error دکھا دے گا — runtime issues کو
                        روکتے ہوئے۔
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">
                      🧱 TypeScript Types کو Express میں سیٹ اپ کرنا
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-blue-700 mb-2">
                          Step 1️⃣ — Required Types Import کریں
                        </h4>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                          {`import express, { Request, Response, Application } from "express";`}
                        </pre>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          <div className="bg-white p-2 rounded">
                            <span className="font-semibold text-blue-600">
                              Request
                            </span>
                            <p className="text-sm text-gray-600">
                              HTTP request کو represent کرتا ہے
                            </p>
                          </div>
                          <div className="bg-white p-2 rounded">
                            <span className="font-semibold text-green-600">
                              Response
                            </span>
                            <p className="text-sm text-gray-600">
                              HTTP response object کو represent کرتا ہے
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-blue-700 mb-2">
                          Step 2️⃣ — Request Interfaces Define کریں
                        </h4>
                        <p className="text-gray-700 mb-3">
                          آپ اس pattern کے ذریعے request کے ہر حصے کے لیے types
                          define کر سکتے ہیں:
                        </p>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">
                                  Type Argument
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">
                                  تفصیل
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">
                                  مثال
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                                <td className="px-4 py-3 font-medium text-blue-700">
                                  Params
                                </td>
                                <td className="px-4 py-3 text-gray-700">
                                  URL parameters
                                </td>
                                <td className="px-4 py-3">
                                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">{`{ id: string }`}</code>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 font-medium text-blue-700">
                                  ResBody
                                </td>
                                <td className="px-4 py-3 text-gray-700">
                                  Response body type
                                </td>
                                <td className="px-4 py-3">
                                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">{`{ message: string }`}</code>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 font-medium text-blue-700">
                                  ReqBody
                                </td>
                                <td className="px-4 py-3 text-gray-700">
                                  Request body type
                                </td>
                                <td className="px-4 py-3">
                                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">{`{ name: string, age: number }`}</code>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 font-medium text-blue-700">
                                  Query
                                </td>
                                <td className="px-4 py-3 text-gray-700">
                                  Query parameters
                                </td>
                                <td className="px-4 py-3">
                                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">{`{ search?: string }`}</code>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-blue-700 mb-2">
                          Step 3️⃣ — مثال: Type-Safe POST Request
                        </h4>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                          {`import express, { Request, Response, Application } from "express";

const app: Application = express();
app.use(express.json());

// Define request body interface
interface CreateUserRequest {
  name: string;
  email: string;
  age: number;
}

// Define response body interface
interface CreateUserResponse {
  success: boolean;
  message: string;
  data?: CreateUserRequest;
}

// POST route with type safety
app.post(
  "/users",
  (req: Request<{}, {}, CreateUserRequest>, res: Response<CreateUserResponse>) => {
    const { name, email, age } = req.body;

    // Validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required",
      });
    }

    // Valid response
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: { name, email, age },
    });
  }
);`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-green-800 mb-4">
                      ✅ فوائد کا خلاصہ
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-green-100">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">
                              Concept
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">
                              تفصیل
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">
                              مثال
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-3 font-medium text-blue-700">
                              Type Safety
                            </td>
                            <td className="px-4 py-3 text-gray-700">
                              Correct data types کو یقینی بناتا ہے
                            </td>
                            <td className="px-4 py-3">
                              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                                name: string, not any
                              </code>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium text-blue-700">
                              Request Types
                            </td>
                            <td className="px-4 py-3 text-gray-700">
                              Request structure کو enforce کرتا ہے
                            </td>
                            <td className="px-4 py-3">
                              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                                Request&lt;Params, Res, Body, Query&gt;
                              </code>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium text-blue-700">
                              Response Types
                            </td>
                            <td className="px-4 py-3 text-gray-700">
                              Response format کو define کرتا ہے
                            </td>
                            <td className="px-4 py-3">
                              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                                Response&lt;ApiResponse&gt;
                              </code>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium text-blue-700">
                              Interfaces
                            </td>
                            <td className="px-4 py-3 text-gray-700">
                              Reusable type definitions
                            </td>
                            <td className="px-4 py-3">
                              <code className="bg-gray-100 px-2 py-1 rounded text-sm">{`interface User { name: string }`}</code>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium text-blue-700">
                              Generics
                            </td>
                            <td className="px-4 py-3 text-gray-700">
                              Flexible reusable response models
                            </td>
                            <td className="px-4 py-3">
                              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                                ApiResponse&lt;T&gt;
                              </code>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />✅ Type-Safe APIs کے
                      فوائد
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow border">
                        <div className="text-2xl mb-2">💪</div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Reduced runtime errors
                        </h4>
                        <p className="text-sm text-gray-600">
                          کم runtime errors
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow border">
                        <div className="text-2xl mb-2">🧠</div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Better IntelliSense
                        </h4>
                        <p className="text-sm text-gray-600">
                          بہتر autocompletion
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow border">
                        <div className="text-2xl mb-2">🛡️</div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Strong API contract
                        </h4>
                        <p className="text-sm text-gray-600">
                          frontend & backend کے درمیان مضبوط معاہدہ
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow border">
                        <div className="text-2xl mb-2">🧩</div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Easier refactoring
                        </h4>
                        <p className="text-sm text-gray-600">
                          آسان refactoring
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow border">
                        <div className="text-2xl mb-2">🚀</div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Scalable projects
                        </h4>
                        <p className="text-sm text-gray-600">
                          بڑے projects کے لیے مثالی
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">
                      🧩 عملی کام
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Express.js اور TypeScript کا استعمال کرتے ہوئے books کے
                      لیے ایک CRUD API بنائیں۔
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">ضروریات:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="text-green-600 mt-1">✓</div>
                          <span>TypeScript interfaces for Book model</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="text-green-600 mt-1">✓</div>
                          <span>Type-safe routes (GET, POST, PUT, DELETE)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="text-green-600 mt-1">✓</div>
                          <span>JSON middleware for parsing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="text-green-600 mt-1">✓</div>
                          <span>Error handling with types</span>
                        </li>
                      </ul>
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
                  ← پچھلا سبق
                </button>

                <button
                  onClick={goToNext}
                  disabled={currentIndex === sections.length - 1}
                  className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${
                    currentIndex === sections.length - 1
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                  }`}
                >
                  اگلا سبق →
                </button>
              </div>
            </div>
          </main>
        </div>

        {/* Quick Stats Footer */}
        <footer className="mt-8 bg-white rounded-2xl shadow p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">8</div>
              <div className="text-sm text-gray-600">اہم موضوعات</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">20+</div>
              <div className="text-sm text-gray-600">عملی مثالیں</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">10+</div>
              <div className="text-sm text-gray-600">TypeScript فوائد</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">100%</div>
              <div className="text-sm text-gray-600">Type-Safe کوڈ</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
