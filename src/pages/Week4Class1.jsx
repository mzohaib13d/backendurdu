// Week4Class1.jsx
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import ScrollToTopButton from "../components/ScrollToTopButton";
const Week4Class1 = () => {
  const [copiedStates, setCopiedStates] = useState({
    intro: false,
    connection: false,
    schema: false,
    crud: false,
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [type]: true });
    setTimeout(() => {
      setCopiedStates({ ...copiedStates, [type]: false });
    }, 2000);
  };

  // کوڈ blocks کے لیے متن
  const codeBlocks = {
    intro: `MongoDB ایک NoSQL (غیر رشتہ دار)، document-oriented ڈیٹابیس ہے۔

SQL ڈیٹابیسز کے برعکس:
• ڈیٹا documents کے طور پر محفوظ ہوتا ہے (JSON-like objects)
• ہر document میں مختلف فیلڈز ہو سکتے ہیں (schema-less)
• ڈیٹا tables کی بجائے collections میں منظم ہوتا ہے

MongoDB کے فوائد:
• متحرک ایپلیکیشنز کے لیے لچکدار schema
• بڑے پیمانے کی ایپس کے لیے اعلیٰ کارکردگی
• افقی توسیع (sharding)
• پیچیدہ queries اور aggregation کی سپورٹ`,

    connection: `npm install express mongoose dotenv

// .env فائل
PORT=5000
MONGO_URI=mongodb://localhost:27017/myDatabase

// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error:", err));`,

    schema: `// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: "user" },
    skills: [String],
    experience: { type: Number, min: 0 }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("User", userSchema);`,

    crud: `// CREATE
app.post("/users", async (req, res) => {
  const newUser = new User(req.body);
  const savedUser = await newUser.save();
  res.status(201).json(savedUser);
});

// READ (تمام یوزرز)
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// READ (مخصوص یوزر)
app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// UPDATE
app.put("/users/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedUser);
});

// DELETE
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
});`,
  };

  return (
    <div className="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen rtl">
      <ScrollToTopButton />
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-2">
          📘 MongoDB کے ساتھ Express.js
        </h1>
        <p className="text-gray-600 text-sm md:text-base" dir="rtl">
          ہفتہ 4 - کلاس 1: NoSQL ڈیٹابیس اور Document-Based Storage
        </p>
      </div>

      {/* Introduction Section */}
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6 border border-blue-200">
        <div className="flex justify-between items-center mb-4">
          <h2
            className="text-xl md:text-2xl font-bold text-blue-700 text-center"
            dir="rtl"
          >
            🧠 MongoDB کا تعارف: NoSQL ڈیٹابیسز اور Document-Based Storage
          </h2>

          <button
            onClick={() => handleCopy(codeBlocks.intro, "intro")}
            className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg transition-colors text-xs sm:gap-2 sm:px-3 sm:py-1 sm:text-sm"
          >
            {copiedStates.intro ? (
              <>
                <Check className="size-3 sm:size-4" />
                <span>کاپی ہو گیا</span>
              </>
            ) : (
              <>
                <Copy className="size-3 sm:size-4" />
                <span>کاپی کریں</span>
              </>
            )}
          </button>
        </div>

        {/* کوڈ block - اب دکھائی دے گا */}
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <h3 className="font-bold text-blue-700 mb-2 text-right">
            MongoDB تعارف
          </h3>
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm md:text-base whitespace-pre-wrap font-mono">
            {codeBlocks.intro}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <h3 className="font-bold text-blue-700 mb-2 text-right">
            Document کی مثال:
          </h3>
          <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto text-sm md:text-base">
            {`{
  "_id": "64f567c9e87d95",
  "name": "Waqar Rana",
  "role": "Software Engineer",
  "skills": ["JavaScript", "ReactJS", "Node.js"],
  "experience": 2
}`}
          </pre>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Why MongoDB */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 border border-green-200">
          <h3 className="text-lg md:text-xl font-bold text-green-700 mb-4 text-center">
            ⚙️ MongoDB کیوں استعمال کریں؟
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-green-50">
                <tr>
                  <th className="py-2 px-3 text-right font-bold text-green-700">
                    خصوصیت
                  </th>
                  <th className="py-2 px-3 text-right font-bold text-green-700">
                    وضاحت
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-3 text-right">Schema-less</td>
                  <td className="py-2 px-3 text-right">
                    Documents میں مختلف فیلڈز ہو سکتے ہیں
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 text-right">JSON-like Documents</td>
                  <td className="py-2 px-3 text-right">
                    ڈیٹا BSON میں محفوظ ہوتا ہے
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 text-right">اعلیٰ Scalability</td>
                  <td className="py-2 px-3 text-right">
                    Sharding کے ذریعے افقی توسیع
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 text-right">تیز کارکردگی</td>
                  <td className="py-2 px-3 text-right">
                    Indexes اور in-memory operations
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SQL vs MongoDB */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 border border-purple-200">
          <h3 className="text-lg md:text-xl font-bold text-purple-700 mb-4 text-center">
            🧱 SQL بمقابلہ MongoDB
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-purple-50">
                <tr>
                  <th className="py-2 px-3 text-right font-bold text-purple-700">
                    تصور
                  </th>
                  <th className="py-2 px-3 text-right font-bold text-purple-700">
                    SQL
                  </th>
                  <th className="py-2 px-3 text-right font-bold text-purple-700">
                    MongoDB
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-3 text-right">ڈیٹابیس کی قسم</td>
                  <td className="py-2 px-3 text-right">رشتہ دار</td>
                  <td className="py-2 px-3 text-right">غیر رشتہ دار</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 text-right">ڈیٹا کی شکل</td>
                  <td className="py-2 px-3 text-right">ٹیبلز اور قطاریں</td>
                  <td className="py-2 px-3 text-right">JSON-like Documents</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 text-right">Schema</td>
                  <td className="py-2 px-3 text-right">مقررہ</td>
                  <td className="py-2 px-3 text-right">متحرک</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-3 text-right">Scalability</td>
                  <td className="py-2 px-3 text-right">عمودی</td>
                  <td className="py-2 px-3 text-right">افقی (Sharding)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Setup Section */}
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6 border border-yellow-200">
        <h2 className="text-xl md:text-2xl font-bold text-yellow-700 mb-4">
          🛠 MongoDB سیٹ اپ: انسٹالیشن اور بنیادی کنفیگریشن
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-yellow-50 rounded-lg p-4">
            <h3 className="font-bold text-yellow-700 mb-2" dir="rtl">
              1️⃣ MongoDB Atlas (کلاؤڈ)
            </h3>
            <ul className="space-y-2 text-right text-gray-700" dir="rtl">
              <li>• MongoDB Atlas پر جائیں اور سائن اپ کریں</li>
              <li>• مفت cluster بنائیں (M0 tier)</li>
              <li>• ڈیٹابیس یوزر شامل کریں</li>
              <li>• نیٹ ورک ایکسیس اجازت دیں</li>
              <li>• کنکشن URI کاپی کریں</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold text-green-700 mb-2" dir="rtl">
              2️⃣ لوکل MongoDB انسٹالیشن
            </h3>
            <ul className="space-y-2 text-right text-gray-700" dir="rtl">
              <li>• MongoDB Community Edition ڈاؤن لوڈ کریں</li>
              <li>• MongoDB انسٹال کریں</li>
              <li>• mongod سروس شروع کریں</li>
              <li>• Mongo Shell یا MongoDB Compass استعمال کریں</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Express.js Connection */}
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6 border border-blue-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-blue-700" dir="rtl">
            ⚡ Express.js کے ساتھ MongoDB کا استعمال
          </h2>
          <button
            onClick={() => handleCopy(codeBlocks.connection, "connection")}
            className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg transition-colors text-xs sm:gap-2 sm:px-3 sm:py-1 sm:text-sm"
          >
            {copiedStates.connection ? (
              <>
                <Check className="size-3 sm:size-4" />
                <span>کاپی ہو گیا</span>
              </>
            ) : (
              <>
                <Copy className="size-3 sm:size-4" />
                <span>کوڈ کاپی کریں</span>
              </>
            )}
          </button>
        </div>

        {/* کوڈ block دکھائیں */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h3 className="font-bold text-gray-700 mb-2 text-right">
            Express.js میں MongoDB کنکشن کوڈ
          </h3>
          <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto text-sm md:text-base whitespace-pre-wrap">
            {codeBlocks.connection}
          </pre>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-bold text-gray-700 mb-2">
            مرحلہ 1 — ڈیپنڈنسیز انسٹال کریں
          </h3>
          <pre className="bg-gray-800 text-green-400 p-3 rounded-lg text-sm">
            npm install express mongoose dotenv
          </pre>
        </div>
      </div>

      {/* Schema Design */}
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6 border border-purple-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-purple-700" dir="rtl">
            🧱 Mongoose کے ساتھ ڈیٹا ماڈلنگ اور Schema ڈیزائن
          </h2>
          <button
            onClick={() => handleCopy(codeBlocks.schema, "schema")}
            className="flex items-center justify-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded-lg transition-colors text-xs sm:gap-2 sm:px-3 sm:py-1 sm:text-sm"
          >
            {copiedStates.schema ? (
              <>
                <Check className="size-3 sm:size-4" />
                <span>کاپی ہو گیا</span>
              </>
            ) : (
              <>
                <Copy className="size-3 sm:size-4" />
                <span>کوڈ کاپی کریں</span>
              </>
            )}
          </button>
        </div>

        {/* Schema کوڈ block دکھائیں */}
        <div className="bg-purple-50 rounded-lg p-4 mb-4">
          <h3 className="font-bold text-purple-700 mb-2 text-right" dir="rtl">
            User Schema کا مکمل کوڈ
          </h3>
          <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto text-sm md:text-base whitespace-pre-wrap">
            {codeBlocks.schema}
          </pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="font-bold text-purple-700 mb-2">
              Mongoose میں Schema Types
            </h3>
            <ul className="space-y-1 text-right text-gray-700 text-sm">
              <li>
                • <span className="font-bold">String:</span> نام، ای میل، عنوان
              </li>
              <li>
                • <span className="font-bold">Number:</span> عمر، قیمت، تجربہ
              </li>
              <li>
                • <span className="font-bold">Boolean:</span> true / false
              </li>
              <li>
                • <span className="font-bold">Date:</span> createdAt, updatedAt
              </li>
              <li>
                • <span className="font-bold">Array:</span> قدروں کی فہرست
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-bold text-green-700 mb-2">
              Schema Attributes / Validators
            </h3>
            <ul className="space-y-1 text-right text-gray-700 text-sm">
              <li>
                • <span className="font-bold">required:</span> لازمی فیلڈ
              </li>
              <li>
                • <span className="font-bold">unique:</span> منفرد قدر
              </li>
              <li>
                • <span className="font-bold">default:</span> ڈیفالٹ قدر
              </li>
              <li>
                • <span className="font-bold">min / max:</span> نمبر کی حدیں
              </li>
              <li>
                • <span className="font-bold">enum:</span> اجازت شدہ اقدار
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CRUD Operations */}
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6 border border-red-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-red-700">
            🏗 MongoDB میں CRUD آپریشنز
          </h2>
          <button
            onClick={() => handleCopy(codeBlocks.crud, "crud")}
            className="flex items-center justify-center gap-1 bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-lg transition-colors text-xs sm:gap-2 sm:px-3 sm:py-1 sm:text-sm"
          >
            {copiedStates.crud ? (
              <>
                <Check className="size-3 sm:size-4" />
                <span>کاپی ہو گیا</span>
              </>
            ) : (
              <>
                <Copy className="size-3 sm:size-4" />
                <span>کوڈ کاپی کریں</span>
              </>
            )}
          </button>
        </div>

        {/* CRUD کوڈ block دکھائیں */}
        <div className="bg-red-50 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-red-700 mb-2 text-right">
            CRUD آپریشنز کا مکمل کوڈ
          </h3>
          <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto text-sm md:text-base whitespace-pre-wrap">
            {codeBlocks.crud}
          </pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">✨</div>
            <h3 className="font-bold text-green-700 mb-2">Create</h3>
            <p className="text-gray-600 text-sm" dir="rtl">
              نیا ڈیٹا داخل کریں
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-bold text-blue-700 mb-2">Read</h3>
            <p className="text-gray-600 text-sm" dir="rtl">
              ڈیٹا پڑھیں اور دریافت کریں
            </p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">✏️</div>
            <h3 className="font-bold text-yellow-700 mb-2">Update</h3>
            <p className="text-gray-600 text-sm" dir="rtl">
              موجودہ ڈیٹا اپ ڈیٹ کریں
            </p>
          </div>

          <div className="bg-red-50 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🗑️</div>
            <h3 className="font-bold text-red-700 mb-2">Delete</h3>
            <p className="text-gray-600 text-sm" dir="rtl">
              ڈیٹا حذف کریں
            </p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl shadow-lg p-4 md:p-6 border border-cyan-300">
        <h2 className="text-xl md:text-2xl font-bold text-cyan-800 mb-4">
          ✅ MongoDB کے لیے Best Practices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-3 shadow">
            <h4 className="font-bold text-gray-700 mb-1">.env استعمال کریں</h4>
            <p className="text-gray-600 text-sm">حساس ڈیٹا محفوظ رکھیں</p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow">
            <h4 className="font-bold text-gray-700 mb-1">Indexes بنائیں</h4>
            <p className="text-gray-600 text-sm" dir="rtl">
              کثرت سے استعمال ہونے والے فیلڈز کے لیے
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow">
            <h4 className="font-bold text-gray-700 mb-1">
              Mongoose validation
            </h4>
            <p className="text-gray-600 text-sm">ڈیٹا کی صحت یقینی بنائیں</p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow">
            <h4 className="font-bold text-gray-700 mb-1">
              TypeScript interfaces
            </h4>
            <p className="text-gray-600 text-sm" dir="rtl">
              ٹائپ سیفٹی کے لیے
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow">
            <h4 className="font-bold text-gray-700 mb-1">
              Embedding vs Referencing
            </h4>
            <p className="text-gray-600 text-sm">دانشمندی سے انتخاب کریں</p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow">
            <h4 className="font-bold text-gray-700 mb-1">BSON سمجھیں</h4>
            <p className="text-gray-600 text-sm" dir="rtl">
              JSON سے بڑھ کر ڈیٹا سٹوریج
            </p>
          </div>
        </div>
      </div>

      {/* Copy Confirmation Message - اوپر دائیں جانب */}
      {Object.values(copiedStates).some((state) => state) && (
        <div className="fixed top-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-xl shadow-xl animate-bounce z-50">
          <div className="flex items-center gap-2">
            <span className="text-xl">✅</span>
            <span className="font-bold">متن کاپی ہو گیا!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Week4Class1;
