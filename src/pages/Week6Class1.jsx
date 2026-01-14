// Week6Class1.jsx
import React, { useState } from 'react';
import { Copy, Check, Lock, Shield, Mail, Key, Users, Server } from 'lucide-react';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Week6Class1 = () => {
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
      id: 'user-interface',
      title: '🏗️ صارف کا انٹرفیس (TypeScript)',
      code: `import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  isVerified: boolean;
  createdAt: Date;
}`
    },
    {
      id: 'mongoose-schema',
      title: '📊 Mongoose سکیما',
      code: `import mongoose from "mongoose";
import { IUser } from "../types/User";

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IUser>("User", userSchema);`
    },
    {
      id: 'password-hashing',
      title: '🔑 پاس ورڈ ہیشنگ',
      code: `import bcrypt from "bcrypt";

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});`
    },
    {
      id: 'jwt-generation',
      title: '🔐 JWT ٹوکن جنریشن',
      code: `import jwt from "jsonwebtoken";

export const generateToken = (userId: string, role: string) => {
  return jwt.sign(
    { userId, role },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );
};`
    },
    {
      id: 'login-route',
      title: '🔐 لاگ ان روٹ',
      code: `app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "صارف نہیں ملا" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "غلط کریڈنشلز" });

  const token = generateToken(user._id.toString(), user.role);

  res.json({
    token,
    user: {
      id: user._id,
      role: user.role,
    },
  });
});`
    },
    {
      id: 'auth-middleware',
      title: '🛡️ تصدیق مڈل ویئر',
      code: `export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "ٹوکن فراہم نہیں کیا گیا" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "غلط ٹوکن" });
  }
};`
    },
    {
      id: 'role-authorization',
      title: '🎭 رول پر مبنی اجازت',
      code: `export const authorizeRoles = (...roles: string[]) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "رسائی مسترد" });
    }
    next();
  };
};`
    },
    {
      id: 'protected-routes',
      title: '🛡️ محفوظ روٹس',
      code: `app.get(
  "/admin/dashboard",
  authenticate,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ message: "ایڈمن خوش آمدید" });
  }
);`
    },
    {
      id: 'email-config',
      title: '📧 ای میل کنفیگریشن',
      code: `import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});`
    },
    {
      id: 'welcome-email',
      title: '🎉 خوش آمدید ای میل',
      code: `export const sendWelcomeEmail = async (email: string, name: string) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "ہمارے پلیٹ فارم میں خوش آمدید 🎉",
    html: \`
      <h2>ہیلو \${name}</h2>
      <p>ہمارے پلیٹ فارم میں خوش آمدید۔ آپ کو یہاں پا کر خوشی ہوئی!</p>
    \`,
  });
};`
    }
  ];

  // رولز کی تفصیل
  const roles = [
    { role: 'ایڈمن', access: 'مکمل کنٹرول', icon: '👑', color: 'from-red-500 to-pink-500' },
    { role: 'مینیجر', access: 'محدود کنٹرول', icon: '👔', color: 'from-blue-500 to-cyan-500' },
    { role: 'صارف', access: 'بنیادی رسائی', icon: '👤', color: 'from-green-500 to-emerald-500' },
    { role: 'ٹیچر', access: 'مواد اپ لوڈ', icon: '🎓', color: 'from-purple-500 to-violet-500' }
  ];

  // ای میل اقسام
  const emailTypes = [
    { type: 'خوش آمدید ای میل', purpose: 'نئے صارف کا استقبال', icon: '🎉' },
    { type: 'ای میل تصدیق', purpose: 'اکاؤنٹ کی تصدیق', icon: '✅' },
    { type: 'پاس ورڈ ری سیٹ', purpose: 'پاس ورڈ تبدیل کرنا', icon: '🔐' },
    { type: 'اطلاعات', purpose: 'اپ ڈیٹس اور خبریں', icon: '📢' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 font-urdu">
      <ScrollToTopButton />
      {/* فلائینگ تصدیقی پیغام */}
      {showSuccess && (
        <div className="fixed top-4 right-4 animate-fly-in z-50">
          <div className="relative top-0 right-20 animate-fly-up bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span className="font-semibold">کوڈ کاپی ہو گیا!</span>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* ہیڈر با رنگین ٹائٹل */}
        <header className="mb-10 text-center">
          <div className="relative inline-block mb-2">
            <h1 className="lg:leading-[1.9] text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 bg-clip-text text-transparent leading-relaxed">
              📘 رول پر مبنی تصدیق (RBAC) اور ای میل بھیجنا
            </h1>
            {/* اینیمیٹڈ پروگرس بار */}
            <div className="relative top-4 w-80 h-1.5 mx-auto rounded-full overflow-hidden">
              <div className="absolute h-full w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 animate-progress-bar rounded-full"></div>
            </div>
            {/* انسٹرکٹر کا نام */}
            <p className="mt-4 text-lg text-gray-700 font-medium mt-2 mb-1" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Instructor: Zohaib Farooq
            </p>
            
            {/* چاپٹر کا نام */}
            <div className="mt-2 p-2 inline-block px-4 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full font-semibold text-sm md:text-lg border border-purple-200">
              ہفتہ 6 - کلاس 1: Role-Based Authentication (RBAC) & Email Sending
            </div>
            
            
          </div>
        </header>

        {/* تعارف */}
        <section className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
          <div className="flex items-end gap-3 mb-4">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-xl">
              <Lock className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800" dir="rtl">🧠 تعارف</h2>
              <p className="text-gray-700 mt-2 text-sm md:text-base leading-6" dir="rtl">
                جدید ایپلی کیشنز میں، صرف لاگ ان کافی نہیں ہوتا۔ ہمیں کنٹرول کرنے کی ضرورت ہوتی ہے:
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
              <h4 className="font-bold text-purple-800 mb-2" dir="rtl">کنہیں کیا رسائی حاصل ہے؟</h4>
              <ul className="space-y-1 text-purple-700">
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">•</span>
                  <span>ایڈمن کیا کر سکتے ہیں</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">•</span>
                  <span>عام صارفین پر کیا پابندیاں ہیں</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
              <h4 className="font-bold text-pink-800 mb-2" dir="rtl">یہ تصور کہلاتا ہے:</h4>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-bold text-center">
                👉 رول پر مبنی تصدیق اور اجازت (RBAC)
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-gray-100 to-white rounded-xl p-5 border border-gray-300 leading-8">
            <h4 className="font-bold text-gray-800 mb-3">اس گائیڈ میں شامل ہیں:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'تصدیق بمقابلہ اجازت',
                'JWT پر مبنی لاگ ان سسٹم',
                'رول پر مبنی رسائی (ایڈمن، صارف وغیرہ)',
                'محفوظ روٹس',
                'ای میل بھیجنا (خوش آمدید، تصدیق)',
                'MongoDB + Mongoose + TypeScript انضمام'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* تصدیق بمقابلہ اجازت */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-1 leading-relaxed sm:leading-8">
            <Shield className="w-6 h-6 text-purple-600" />
            🔐 تصدیق بمقابلہ اجازت
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-50 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                <tr>
                  <th className="py-4 px-6 text-right font-bold text-lg">تصور</th>
                  <th className="py-4 px-6 text-right font-bold text-lg">معنی</th>
                  <th className="py-4 px-6 text-right font-bold text-lg">مثال</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-4 px-6 font-bold text-purple-700">تصدیق</td>
                  <td className="py-4 px-6 text-gray-700">یہ شناخت کرنا کہ صارف کون ہے (لاگ ان/سائن اپ)</td>
                  <td className="py-4 px-6 text-gray-700">لاگ ان کرنا</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 font-bold text-pink-700">اجازت</td>
                  <td className="py-4 px-6 text-gray-700">یہ طے کرنا کہ صارف کیا کر سکتا ہے (رولز/اجازتیں)</td>
                  <td className="py-4 px-6 text-gray-700">ایڈمن پینل تک رسائی</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
            <p className="text-gray-800 text-center font-medium">
              <span className="font-bold text-purple-700">لاگ ان کرنا</span> → تصدیق • 
              <span className="font-bold text-pink-700 mx-2">ایڈمن پینل تک رسائی</span> → اجازت
            </p>
          </div>
        </section>

        {/* رول پر مبنی تصدیق */}
        <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-purple-600" />
            🧩 رول پر مبنی تصدیق (RBAC) کیا ہے؟
          </h2>
          
          <div className="bg-white rounded-xl p-5 mb-6 border border-purple-200">
            <p className="text-gray-700 mb-4">
              RBAC میں، ہر صارف کو ایک رول تفویض کیا جاتا ہے:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {roles.map((item, index) => (
                <div key={index} className={`bg-gradient-to-br ${item.color} rounded-xl p-4 text-white shadow-md`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <h4 className="font-bold text-lg">{item.role}</h4>
                  </div>
                  <p className="text-sm opacity-90">{item.access}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-5 border border-purple-300">
            <div className="flex items-start gap-3">
              <Server className="w-8 h-8 text-purple-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">سرور چیک کرتا ہے:</h4>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <p className="text-purple-700 font-medium italic">
                    "کیا اس صارف کے رول کو یہ عمل کرنے کی اجازت ہے؟"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* کوڈ نمونے */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
            💻 کوڈ نمونے اور نفاذ
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {codeSections.map((section) => (
              <div key={section.id} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:border-pink-500 transition-all">
                <div className="bg-gradient-to-r from-purple-700 to-pink-600 px-6 py-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  <button
                    onClick={() => handleCopyCode(section.code, section.id)}
                    className={`px-2 py-1 rounded-lg transition-colors text-xs
             sm:gap-2 sm:px-3 sm:py-1 sm:text-sm cursor-pointer hover:text-white flex items-center gap-1 px-4 py-1 rounded-lg transition-all ${
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

        {/* ای میل بھیجنا */}
        <section className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-xl p-8 mb-8 border border-pink-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6 text-pink-600" />
            📧 ای میل بھیجنا (NodeMailer)
          </h2>
          
          <p className="text-gray-700 mb-6">
            ای میلز عام طور پر استعمال ہوتی ہیں:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {emailTypes.map((email, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-pink-300 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{email.icon}</span>
                  <h4 className="font-bold text-pink-700">{email.type}</h4>
                </div>
                <p className="text-gray-600 text-sm">{email.purpose}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-xl p-5 border border-purple-300">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Key className="w-5 h-5 text-purple-600" />
              .env فائل:
            </h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <code className="text-pink-300 font-mono text-sm">
                EMAIL_USER=yourgmail@gmail.com<br />
                EMAIL_PASS=app_password_here
              </code>
            </div>
          </div>
        </section>

        {/* بہترین طریقے */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <h2 className="lg:leading-[1.9] leading-relaxed text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
            ✅ بہترین طریقے
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                'JWT میعاد استعمال کریں',
                'رولز JWT کے اندر محفوظ کریں',
                'ہمیشہ ایڈمن روٹس کو محفوظ کریں',
                'پاس ورڈز کبھی ظاہر نہ کریں',
                'TypeScript اقسام ہر جگہ استعمال کریں'
              ].map((practice, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-200">{practice}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-5">
              <h4 className="font-bold text-white mb-3">حقیقی دنیا میں استعمال:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">•</span>
                  <span>ایڈمن ڈیش بورڈز</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">•</span>
                  <span>SaaS پلیٹ فارمز</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">•</span>
                  <span>ای کامرس سسٹمز</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">•</span>
                  <span>لرننگ مینجمنٹ سسٹمز</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* خلاصہ */}
        <section className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-xl p-8 mb-8 border border-purple-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            🏁 خلاصہ
          </h2>
          
          <p className="text-gray-700 mb-6 text-center text-lg">
            یہ گائیڈ ظاہر کرتی ہے:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              'JWT پر مبنی تصدیق',
              'رول پر مبنی اجازت',
              'محفوظ پاس ورڈ ہیشنگ',
              'ایڈمن/صارف علیحدگی',
              'ای میل بھیجنا',
              'MongoDB انضمام'
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-3 border border-purple-200 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                  ✓
                </div>
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* فوٹر */}
        <footer className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-600">
          <p className="mb-2">
            <span className="font-semibold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              کلاس 6 ہفتہ 1
            </span> | رول پر مبنی تصدیق اور ای میل بھیجنا
          </p>
          <p className="text-sm">
            تمام کوڈ نمونے پروڈکشن ریڈی ہیں اور براہ راست استعمال کیے جا سکتے ہیں
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
        
        @keyframes progress-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-fly-in {
          animation: fly-in 0.3s ease-out;
        }
        
        .animate-progress-bar {
          animation: progress-bar 2s linear infinite;
        }
        
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </div>
  );
};

export default Week6Class1;