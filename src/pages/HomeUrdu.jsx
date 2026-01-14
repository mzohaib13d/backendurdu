import React from "react"; 
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function HomeUrdu() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Container */}
        <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 mb-8">
          <ScrollToTopButton />
          <header className="mb-8 border-b pb-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-blue-900">
              🚀 Backend Development with Node.js, Express, MongoDB & TypeScript
            </h1>
          </header>
          
          <p className="text-lg text-gray-700 font-medium text-center" style={{ fontFamily: 'Verdana, sans-serif' }}>
            Instructor: Zohaib Farooq
          </p>
          
          <div className="text-center mt-4">
            <div className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold" style={{ fontFamily: 'Verdana, sans-serif' }}>
              Week 1 - Class 1: Introduction to Backend & TypeScript Basics
            </div>
          </div>
        </div>

        {/* Course Overview Section */}
        <section className="mb-8 bg-white shadow-xl rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-800 flex items-center gap-2">
            📘 کورس کا جائزہ (Course Overview)
          </h2>
          <div
            dir="rtl"
            className="bg-blue-50 p-6 rounded-xl max-w-3xl mx-auto text-right"
          >
            <p className="text-gray-800 leading-8 text-base md:text-lg mb-4 break-words">
              یہ ویب سائیٹ Backend Development with Node.js, Express, MongoDB اور TypeScript کورس کے تمام کورس میٹریل اور وسائل (resources) پر مشتمل ہے۔
            </p>

            <p className="text-gray-800 leading-8 text-base md:text-lg mb-4 break-words">
              اس کورس میں، طلباء سرور سائڈ پروگرامنگ (Server-side Programming) میں مہارت حاصل کریں گے،
              جس میں Node.js, Express, MongoDB اور TypeScript استعمال کرتے ہوئے scalable, secure اور production-ready بیک اینڈ سسٹمز تیار کرنا شامل ہے۔
            </p>

            <p className="text-gray-800 leading-8 text-base md:text-lg break-words">
              کورس مکمل کرنے کے بعد، سیکھنے والے مکمل بیک اینڈ سسٹمز کو design, develop اور deploy کرنے کے قابل ہوں گے،
              اور انڈسٹری کے بہترین طریقوں (best practices) کے مطابق Full-Stack Web Applications کی backend architecture بنا سکیں گے۔
            </p>
          </div>
        </section>

        {/* Prerequisites Section */}
        <section className="mb-8 bg-white shadow-xl rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4 text-green-700 flex items-center gap-2">
            📋 ضروری شرائط (Prerequisites)
          </h3>
          <div className="bg-green-50 p-6 rounded-xl">
            <p className="text-gray-800 text-lg mb-4">کورس شروع کرنے سے پہلے یہ چیزیں لازمی ہونی چاہئیں:</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-800 text-lg">
                <span className="text-2xl text-green-600">✔️</span>
                <span className="font-medium">آپ نے Frontend Development with React مکمل کیا ہو</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800 text-lg">
                <span className="text-2xl text-green-600">✔️</span>
                <span className="font-medium">آپ کو JavaScript ES6+ کی مضبوط سمجھ ہو</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800 text-lg">
                <span className="text-2xl text-green-600">✔️</span>
                <span className="font-medium">ویب ڈیولپمنٹ کے بنیادی concepts کی سمجھ ہو</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Learning Outcomes Section */}
        <section className="mb-8 bg-white shadow-xl rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4 text-purple-700 flex items-center gap-2">
            🎯 سیکھنے کے نتائج (Learning Outcomes)
          </h3>
          <div className="bg-purple-50 p-6 rounded-xl">
            <p className="text-gray-800 text-lg mb-4">کورس مکمل کرنے کے بعد آپ یہ تمام کام کرنے کے قابل ہوں گے:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg">
                <span className="text-xl mt-1">⚙️</span>
                <span>Node.js + Express سرور کو TypeScript کے ساتھ سیٹ اپ اور کنفیگر کرنا</span>
              </div>
              <div className="flex items-start gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg">
                <span className="text-xl mt-1">🗂</span>
                <span>اسکیل ایبل ڈیٹا بیس اسکیماز اور ERD ڈایاگرامز ڈیزائن کرنا</span>
              </div>
              <div className="flex items-start gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg">
                <span className="text-xl mt-1">🔐</span>
                <span>JWT کے ذریعے Authentication اور Authorization نافذ کرنا</span>
              </div>
              <div className="flex items-start gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg">
                <span className="text-xl mt-1">⚡</span>
                <span>MongoDB کو Mongoose کے ساتھ CRUD آپریشنز کے لیے انٹیگریٹ کرنا</span>
              </div>
              <div className="flex items-start gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg">
                <span className="text-xl mt-1">🧠</span>
                <span>Redis کے ذریعے کیشنگ اسٹریٹیجیز اپلائی کرنا تاکہ پرفارمنس بہتر ہو</span>
              </div>
              <div className="flex items-start gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg">
                <span className="text-xl mt-1">🕒</span>
                <span>Cron Jobs کے ذریعے پسِ منظر میں چلنے والے کام شیڈول کرنا</span>
              </div>
              <div className="flex items-start gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg md:col-span-2">
                <span className="text-xl mt-1">📁</span>
                <span>فائل اپلوڈ، پیجینیشن اور سرچ فیچرز بنانا</span>
              </div>
              <div className="flex items-start gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg md:col-span-2">
                <span className="text-xl mt-1">🚀</span>
                <span>پروڈکشن-ریڈی بیک اینڈ کو صحیح کنفیگریشن مینجمنٹ کے ساتھ ڈپلائے کرنا</span>
              </div>
            </div>
          </div>
        </section>

        {/* Course Outline Section */}
        <section className="mb-8 bg-white shadow-xl rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4 text-amber-700 flex items-center gap-2">
            🧭 کورس آؤٹ لائن (Course Outline)
          </h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-gray-800">
              <thead className="bg-amber-100">
                <tr>
                  <th className="p-4 border border-gray-300 font-bold text-lg text-center">Week</th>
                  <th className="p-4 border border-gray-300 font-bold text-lg text-center">Topics</th>
                  <th className="p-4 border border-gray-300 font-bold text-lg text-center">Key Learning Areas</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-amber-50"><td className="p-4 border border-gray-300 text-center font-medium">1</td><td className="p-4 border border-gray-300">Introduction to Backend & TypeScript Basics</td><td className="p-4 border border-gray-300">Node.js setup, TS fundamentals, simple server</td></tr>
                <tr className="hover:bg-amber-50"><td className="p-4 border border-gray-300 text-center font-medium">2</td><td className="p-4 border border-gray-300">RESTful APIs with Express & TypeScript</td><td className="p-4 border border-gray-300">Routing, middleware, error handling</td></tr>
                <tr className="hover:bg-amber-50"><td className="p-4 border border-gray-300 text-center font-medium">3</td><td className="p-4 border border-gray-300">Database Design & ERD</td><td className="p-4 border border-gray-300">Schema design, normalization, relationships</td></tr>
                <tr className="hover:bg-amber-50"><td className="p-4 border border-gray-300 text-center font-medium">4</td><td className="p-4 border border-gray-300">MongoDB & Mongoose</td><td className="p-4 border border-gray-300">CRUD operations, schemas, queries</td></tr>
                <tr className="hover:bg-amber-50"><td className="p-4 border border-gray-300 text-center font-medium">5</td><td className="p-4 border border-gray-300">Advanced Express & Middleware</td><td className="p-4 border border-gray-300">Custom middleware, validation, auth flow</td></tr>
                <tr className="hover:bg-amber-50"><td className="p-4 border border-gray-300 text-center font-medium">6</td><td className="p-4 border border-gray-300">Caching Strategies with Redis</td><td className="p-4 border border-gray-300">Cache-aside pattern, invalidation</td></tr>
                <tr className="hover:bg-amber-50"><td className="p-4 border border-gray-300 text-center font-medium">7</td><td className="p-4 border border-gray-300">Authentication with JWT</td><td className="p-4 border border-gray-300">Login/signup, token management, bcrypt</td></tr>
                <tr className="hover:bg-amber-50"><td className="p-4 border border-gray-300 text-center font-medium">8</td><td className="p-4 border border-gray-300">Role-Based Access Control</td><td className="p-4 border border-gray-300">RBAC, API security, rate limiting</td></tr>
                <tr className="hover:bg-amber-50"><td className="p-4 border border-gray-300 text-center font-medium">9</td><td className="p-4 border border-gray-300">Scheduled Tasks & Cron Jobs</td><td className="p-4 border border-gray-300">Automated reports, notifications</td></tr>
                <tr className="hover:bg-amber-50"><td className="p-4 border border-gray-300 text-center font-medium">10</td><td className="p-4 border border-gray-300">Performance Optimization</td><td className="p-4 border border-gray-300">Indexing, aggregation, query tuning</td></tr>
                <tr className="hover:bg-amber-50"><td className="p-4 border border-gray-300 text-center font-medium">11</td><td className="p-4 border border-gray-300">File Uploads & Advanced Features</td><td className="p-4 border border-gray-300">Multer, pagination, search, logging</td></tr>
                <tr className="hover:bg-amber-50"><td className="p-4 border border-gray-300 text-center font-medium">12</td><td className="p-4 border border-gray-300">Final Project</td><td className="p-4 border border-gray-300">Full backend system + deployment</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Final Project Section */}
        <section className="mb-8 bg-white shadow-xl rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4 text-red-700 flex items-center gap-2">
            🧱 فائنل پراجیکٹ (Final Project)
          </h3>
          <div className="bg-red-50 p-6 rounded-xl">
            <p className="text-gray-800 text-lg mb-4">
              فائنل پراجیکٹ میں طلباء ایک مکمل پروڈکشن ریڈی بیک اینڈ سسٹم بنائیں گے، جس میں شامل ہوگا:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg">
                <span className="text-green-600 text-xl">✔️</span>
                <span>مکمل TypeScript انٹیگریشن</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg">
                <span className="text-green-600 text-xl">✔️</span>
                <span>Express.js + MongoDB (Mongoose)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg">
                <span className="text-green-600 text-xl">✔️</span>
                <span>JWT کے ساتھ Authentication & Authorization</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg">
                <span className="text-green-600 text-xl">✔️</span>
                <span>Redis کیشنگ</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg">
                <span className="text-green-600 text-xl">✔️</span>
                <span>Cron Job آٹومیشن</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg">
                <span className="text-green-600 text-xl">✔️</span>
                <span>فائل اپلوڈز اور دیگر ایڈوانس فیچرز</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg">
                <span className="text-green-600 text-xl">✔️</span>
                <span>ڈپلائمنٹ اور ماحول کی مینجمنٹ (Environment Management)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800 text-lg bg-white p-4 rounded-lg md:col-span-2">
                <span className="text-green-600 text-xl">✔️</span>
                <span>Github ریپوزیٹری — کوڈ واک تھرو + ERD ڈایاگرام کے ساتھ</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Technologies Section */}
        <section className="mb-8 bg-white shadow-xl rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4 text-indigo-700 flex items-center gap-2">
            🧩 ٹولز اور ٹیکنالوجیز (Tools & Technologies)
          </h3>
          <div className="bg-indigo-50 p-6 rounded-xl">
            <p className="text-gray-800 text-lg mb-4">
              فائنل پراجیکٹ اور پورے کورس میں ہم یہ ٹیکنالوجیز استعمال کریں گے:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {["Node.js", "Express.js", "TypeScript", "MongoDB", "Mongoose", "Redis", "JWT", "bcrypt", "node-cron", "Multer", "Winston", "Morgan"].map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-indigo-200 text-center">
                  <p className="text-gray-800 font-medium">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grading Criteria Section */}
        <section className="mb-8 bg-white shadow-xl rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4 text-emerald-700 flex items-center gap-2">
            📊 گریڈنگ کریٹیریا (Grading Criteria)
          </h3>
          <div className="bg-emerald-50 p-6 rounded-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-gray-800">
                <thead className="bg-emerald-100">
                  <tr>
                    <th className="p-4 border border-gray-300 font-bold text-lg text-center">Particulars</th>
                    <th className="p-4 border border-gray-300 font-bold text-lg text-center">Marks (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-emerald-50">
                    <td className="p-4 border border-gray-300 font-medium">Quizzes</td>
                    <td className="p-4 border border-gray-300 text-center font-bold text-xl text-emerald-600">20</td>
                  </tr>
                  <tr className="hover:bg-emerald-50">
                    <td className="p-4 border border-gray-300 font-medium">Class Participation / Attendance</td>
                    <td className="p-4 border border-gray-300 text-center font-bold text-xl text-emerald-600">15</td>
                  </tr>
                  <tr className="hover:bg-emerald-50">
                    <td className="p-4 border border-gray-300 font-medium">Projects</td>
                    <td className="p-4 border border-gray-300 text-center font-bold text-xl text-emerald-600">25</td>
                  </tr>
                  <tr className="hover:bg-emerald-50">
                    <td className="p-4 border border-gray-300 font-medium">Final Project</td>
                    <td className="p-4 border border-gray-300 text-center font-bold text-xl text-emerald-600">40</td>
                  </tr>
                  <tr className="bg-emerald-100 font-bold">
                    <td className="p-4 border border-gray-300">Total</td>
                    <td className="p-4 border border-gray-300 text-center text-2xl text-emerald-700">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Hands-on Practice Section */}
        <section className="mb-8 bg-white shadow-xl rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4 text-pink-700 flex items-center gap-2">
            🧠 عملی مشق (Hands-on Practice)
          </h3>
          <div className="bg-pink-50 p-6 rounded-xl">
            <p className="text-gray-800 text-lg mb-4">ہر ہفتے طلباء درج ذیل عملی مشقیں کریں گے:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-pink-200 flex items-center gap-3">
                <span className="text-green-600 text-xl">✔️</span>
                <p className="text-gray-800">REST APIs بنا نا اور ٹیسٹ کرنا</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-pink-200 flex items-center gap-3">
                <span className="text-green-600 text-xl">✔️</span>
                <p className="text-gray-800">ڈیٹا بیس اسکیما تیار کرنا</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-pink-200 flex items-center gap-3">
                <span className="text-green-600 text-xl">✔️</span>
                <p className="text-gray-800">Authentication Flow نافذ کرنا</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-pink-200 flex items-center gap-3">
                <span className="text-green-600 text-xl">✔️</span>
                <p className="text-gray-800">Custom Middleware لکھنا</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-pink-200 flex items-center gap-3">
                <span className="text-green-600 text-xl">✔️</span>
                <p className="text-gray-800">کیشنگ کے ذریعے پرفارمنس بہتر بنانا</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-pink-200 flex items-center gap-3">
                <span className="text-green-600 text-xl">✔️</span>
                <p className="text-gray-800">Cron Jobs استعمال کرتے ہوئے خودکار (Automated) کام کرنا</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t border-gray-300 text-center text-gray-600 bg-white shadow-xl rounded-3xl p-8">
          <p className="text-lg">
            <span className="font-bold">فائل:</span> HomeUrdu.jsx
          </p>
          <p className="mt-2 text-sm">مکمل طور پر Urdu رُسم الخط میں ترتیب دیا گیا</p>
        </footer>
      </div>
    </main>
  );
}