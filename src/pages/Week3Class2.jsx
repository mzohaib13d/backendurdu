import { useState, useRef } from "react";
import { Copy, Check } from "lucide-react";
import edatabase from "../assets/images/ecommercedatabase.jpg";
import DBDesign from "../assets/images/DBDesign.PNG";
import DBEnvironment from "../assets/images/DBEnvironment.PNG";
import ERcompanyDB from "../assets/images/ERcompanyDB.PNG";
import HierarchicalSystem from "../assets/images/HierarchicalSystem.PNG";
import NetworkSystem from "../assets/images/NetworkSystem.PNG";
import r1image from "../assets/images/r1.PNG";
import r2image from "../assets/images/r2.PNG";
import r3image from "../assets/images/r3.PNG";
import r4image from "../assets/images/r4.PNG";
import r5image from "../assets/images/r5.PNG";
import symbol from "../assets/images/symbol1.PNG";
import symbol2 from "../assets/images/symbol2.PNG";
import symbol3 from "../assets/images/symbol3.PNG";
import strongentity from "../assets/images/Strong-Entity-Set-Example.png";
import ScrollToTopButton from "../components/ScrollToTopButton";
export default function Week3Class2() {
  const [copiedStates, setCopiedStates] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef(null);

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedStates((prev) => ({ ...prev, [id]: true }));

    // Show flying notification
    setShowNotification(true);

    // Reset after 2 seconds
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [id]: false }));
    }, 2000);

    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  // Flying notification animation styles
  const notificationStyles = `
    @keyframes flyUp {
      0% {
        transform: translateY(0);
        opacity: 1;
      }
      70% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100px);
        opacity: 0;
      }
    }
    
    .flying-notification {
      animation: flyUp 2s ease-out forwards;
    }
  `;

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
         <ScrollToTopButton />
      {/* Add notification styles */}
      <style>{notificationStyles}</style>

      {/* Flying Notification */}
      {showNotification && (
        <div
          ref={notificationRef}
          className="fixed top-20 right-1/2 transform translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 flying-notification"
        >
          <div className="flex items-center gap-2">
            <Check size={18} />
            <span className="font-medium">کوڈ کاپی ہو گیا!</span>
          </div>
        </div>
      )}
  <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-right">
        📘 ڈیٹا بیس سسٹمز (Database Systems)
      </h1>
      <p className="text-lg text-gray-700 font-medium" style={{ fontFamily: 'Calibri, sans-serif', size: '20px' }}>
                Instructor: Zohaib Farooq
              </p>
              <div className="mt-4 inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold" style={{ fontFamily: 'Arial, sans-serif' }}>
                Week 3 - Class 2: Database Systems</div>
</div>
<br />

      <div className="space-y-8">
        {/* Section 1 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🧩 1. ڈیٹا (Data) کیا ہے؟
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg">
            ڈیٹا خام، غیر منظم حقائق ہیں جن کا کوئی معنی خیز سیاق و سباق نہیں
            ہوتا۔
          </p>

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-300 mb-4">
            <h3 className="font-bold text-gray-700 mb-2 text-right">مثالیں:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-right">
              <div className="bg-blue-100 p-3 rounded-lg">
                <span className="font-medium">نمبرز:</span> 45, 89, 102
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <span className="font-medium">الفاظ:</span> "علی", "لیپ ٹاپ",
                "نیلا"
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <span className="font-medium">تاریخیں:</span> 12-02-2024
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
            <p className="text-gray-700 leading-relaxed text-right text-lg font-medium">
              ➡️ ڈیٹا = خام حقائق (Raw facts)
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🧠 2. معلومات (Information) کیا ہے؟
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg" dir="rtl">
            معلومات وہ ڈیٹا ہے جو پراسیس، منظم اور معنی خیز بنایا گیا ہو۔
          </p>

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-300 mb-4">
            <h3 className="font-bold text-gray-700 mb-2 text-right">مثالیں:</h3>
            <ul className="space-y-2 text-right text-gray-700">
              <li className="bg-blue-50 p-3 rounded-lg">
                • "علی کی عمر 20 سال ہے۔"
              </li>
              <li className="bg-green-50 p-3 rounded-lg">
                • "لیپ ٹاپ کی قیمت 85,000 روپے ہے۔"
              </li>
              <li className="bg-purple-50 p-3 rounded-lg">
                • "آج کا درجہ حرارت 32°C ہے۔"
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
            <p className="text-gray-700 leading-relaxed text-right text-lg font-medium">
              ➡️ معلومات = پراسیس شدہ ڈیٹا (Processed Data)
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🗄️ 3. ڈیٹا بیس (Database) کیا ہے؟
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg">
            ڈیٹا بیس متعلقہ ڈیٹا کا ایک منظم اور ساختہ مجموعہ ہے جو الیکٹرانک
            طور پر محفوظ کیا جاتا ہے۔
          </p>

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-300 mb-4">
            <h3 className="font-bold text-gray-700 mb-2 text-right">مثالیں:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-right">
              <div className="bg-blue-100 p-3 rounded-lg">
                <span className="font-medium">سکول ڈیٹا بیس:</span> طلباء،
                اساتذہ، کلاسیں
              </div>
              <div className="bg-green-100 p-3 rounded-lg" dir="rtl">
                <span className="font-medium">ای کامرس:</span> مصنوعات، آرڈرز،
                گاہک
              </div>
              <div className="bg-purple-100 p-3 rounded-lg" dir="rtl">
                <span className="font-medium">ہسپتال:</span> مریض، ڈاکٹرز،
                اپائنٹمنٹس
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
            <p className="text-gray-700 leading-relaxed text-right text-lg font-medium">
              ➡️ ڈیٹا بیس ڈیٹا کو ٹیبلز (قطاریں + کالم) میں محفوظ کرتا ہے۔
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            📝 4. میٹا ڈیٹا (Metadata) کیا ہے؟
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg" dir="rtl">
            میٹا ڈیٹا کا مطلب ہے "ڈیٹا کے بارے میں ڈیٹا"۔
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg" dir="rtl">
            یہ بیان کرتا ہے:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-xl">
              <ul className="space-y-2 text-right text-gray-700">
                <li>• ڈیٹا کی اقسام (Data types)</li>
                <li>• ٹیبل کی ساخت (Table structure)</li>
                <li>• کالم کے نام (Column names)</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <ul className="space-y-2 text-right text-gray-700">
                <li>• پابندیاں (Constraints)</li>
                <li>• سائز، فارمیٹ (Size, format)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-300 mb-4">
            <h3 className="font-bold text-gray-700 mb-2 text-right">
              کالم "عمر" کے لیے میٹا ڈیٹا مثال:
            </h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto">
              <pre className="text-sm text-right">
                {`نوع: INT
رینج: 1–120
ضروری: ہاں`}
              </pre>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
            <p className="text-gray-700 leading-relaxed text-right text-lg font-medium" dir="rtl">
              ➡️ میٹا ڈیٹا DBMS کو سمجھنے میں مدد کرتا ہے کہ ڈیٹا کیسے محفوظ کیا
              جائے۔
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🖥️ 5. DBMS کیا ہے؟
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg">
            DBMS (ڈیٹا بیس مینجمنٹ سسٹم) ایک سافٹ ویئر ہے جو ڈیٹا بیس بناتا،
            منیج کرتا اور کنٹرول کرتا ہے۔
          </p>

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-300 mb-4">
            <h3 className="font-bold text-gray-700 mb-2 text-right">
              مثالیں (Examples):
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
              <div className="bg-blue-100 p-3 rounded-lg font-medium">
                MySQL
              </div>
              <div className="bg-green-100 p-3 rounded-lg font-medium">
                PostgreSQL
              </div>
              <div className="bg-purple-100 p-3 rounded-lg font-medium">
                Oracle
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg font-medium">
                MongoDB
              </div>
              <div className="bg-red-100 p-3 rounded-lg font-medium">
                SQL Server
              </div>
            </div>
            <br />
            <img
              src={DBEnvironment}
              alt="DB Environment Example"
              className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
            />
          </div>
          <div className="bg-blue-50 p-4 rounded-xl">
            <p className="text-gray-700 leading-relaxed text-right text-lg">
              DBMS ڈیٹا بیس تک رسائی کو کنٹرول کرتا ہے اور مختلف آپریشنز کو
              انجام دیتا ہے۔
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200" dir="rtl">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🔧 6. DBMS کے افعال (Functionalities)
          </h2>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h3 className="font-bold text-blue-700 mb-2 text-right">
                1) تعریف کرنا (Define)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2 text-right">
                بیان کرتا ہے:
              </p>
              <ul className="space-y-2 text-right text-gray-700">
                <li>• ساخت (ٹیبلز)</li>
                <li>• ڈیٹا کی اقسام</li>
                <li>• کیز (Keys)</li>
                <li>• پابندیاں (Constraints)</li>
              </ul>
              <div className="mt-3">
                <p className="text-gray-700 font-medium text-right">مثال:</p>
                <div className="flex justify-between items-center mb-2 mt-2">
                  <span className="text-gray-700 text-right">
                    ایک ٹیبل بنانا
                  </span>
                  <button
                    onClick={() =>
                      handleCopy(
                        `CREATE TABLE Student (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT
);`,
                        "define"
                      )
                    }
                    className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white 
             px-2 py-1 rounded-lg transition-colors text-xs
             sm:gap-2 sm:px-3 sm:py-1 sm:text-sm cursor-pointer"
                  >
                    {copiedStates.define ? (
                      <>
                        <Check size={16} />
                        <span>کاپی ہو گیا</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>کوڈ کاپی کریں</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-900 text-gray-100 p-3 rounded-xl overflow-x-auto">
                  <pre className="text-sm">
                    {`CREATE TABLE Student (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT
);`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <h3 className="font-bold text-green-700 mb-2 text-right">
                2) تعمیر کرنا (Construct)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2 text-right">
                اصل ڈیٹا کو اسٹوریج میڈیا پر محفوظ کرنا۔
              </p>
              <div className="mt-3">
                <p className="text-gray-700 font-medium text-right">مثال:</p>
                <div className="flex justify-between items-center mb-2 mt-2">
                  <span className="text-gray-700 text-right">
                    نئی ریکارڈ شامل کرنا
                  </span>
                  <button
                    onClick={() =>
                      handleCopy(
                        `INSERT INTO Student (id, name, age) 
VALUES (1, 'علی', 20);`,
                        "construct"
                      )
                    }
                    className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white 
             px-2 py-1 rounded-lg transition-colors text-xs
             sm:gap-2 sm:px-3 sm:py-1 sm:text-sm cursor-pointer"
                  >
                    {copiedStates.construct ? (
                      <>
                        <Check size={16} />
                        <span>کاپی ہو گیا</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>کوڈ کاپی کریں</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-900 text-gray-100 p-3 rounded-xl overflow-x-auto">
                  <pre className="text-sm">
                    {`INSERT INTO Student (id, name, age) 
VALUES (1, 'علی', 20);`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <h3 className="font-bold text-purple-700 mb-2 text-right">
                3) جوڑ توڑ کرنا (Manipulate)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2 text-right">
                ڈیٹا پر کیے جانے والے آپریشنز:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-right text-gray-700">
                <li className="bg-blue-100 p-2 rounded">
                  • حاصل کرنا (SELECT)
                </li>
                <li className="bg-green-100 p-2 rounded">• اپ ڈیٹ کرنا</li>
                <li className="bg-yellow-100 p-2 rounded">
                  • حذف کرنا (Delete)
                </li>
                <li className="bg-red-100 p-2 rounded">• رپورٹس بنانا</li>
              </ul>
              <div className="mt-3">
                <p className="text-gray-700 font-medium text-right">مثال:</p>
                <div className="flex justify-between items-center mb-2 mt-2">
                  <span className="text-gray-700 text-right">
                    "تمام طلباء دکھائیں جن کے نمبر 80 یا زیادہ ہیں"
                  </span>
                  <button
                    onClick={() =>
                      handleCopy(
                        `SELECT * FROM Student 
WHERE marks >= 80;`,
                        "manipulate"
                      )
                    }
                    className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white 
             px-2 py-1 rounded-lg transition-colors text-xs
             sm:gap-2 sm:px-3 sm:py-1 sm:text-sm cursor-pointer"
                  >
                    {copiedStates.manipulate ? (
                      <>
                        <Check size={16} />
                        <span>کاپی ہو گیا</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>کوڈ کاپی کریں</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-900 text-gray-100 p-3 rounded-xl overflow-x-auto">
                  <pre className="text-sm">
                    {`SELECT * FROM Student 
WHERE marks >= 80;`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
              <h3 className="font-bold text-yellow-700 mb-2 text-right">
                4) اشتراک (Share)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2 text-right">
                متعدد صارفین ایک ہی وقت میں ڈیٹا بیس تک رسائی حاصل کر سکتے ہیں۔
              </p>
              <div className="mt-3">
                <p className="text-gray-700 font-medium text-right">مثال:</p>
                <p className="text-gray-700 text-right bg-yellow-100 p-3 rounded-lg">
                  استاد، ایڈمن، اور اکاؤنٹنٹ ایک ہی سکول ڈیٹا بیس استعمال کر رہے
                  ہیں۔
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🥇 7. ڈیٹا بیس اور DBMS میں فرق
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-3 text-right font-bold text-blue-700">
                    ڈیٹا بیس
                  </th>
                  <th className="px-4 py-3 text-right font-bold text-blue-700">
                    DBMS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 text-right">
                    ٹیبلز کا مجموعہ
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">
                    ڈیٹا بیس کو منیج کرنے کے لیے استعمال ہونے والا سافٹ ویئر
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 text-right">
                    صرف ڈیٹا محفوظ کرتا ہے
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">
                    آپریشنز انجام دیتا ہے (CRUD)
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 text-right">
                    قوانین نافذ نہیں کر سکتا
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">
                    پابندیاں نافذ کرتا ہے
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 text-right">
                    سوالات نہیں کر سکتا
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">
                    SQL سوالات کی اجازت دیتا ہے
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700 text-right">
                    غیر فعال (Passive)
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">
                    فعال (Active)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 8 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            👨‍💼 8. ڈیٹا بیس صارفین (Database Users)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg">
            ڈیٹا بیس صارفین دو زمروں میں تقسیم ہیں:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-3 text-right">
                A) منظر پر اداکار (Direct Users)
              </h3>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <h4 className="font-bold text-green-700 mb-2 text-right">
                    1) ڈیٹا بیس منتظم (Database Administrator - DBA)
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-2 text-right">
                    ذمہ داریاں:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-right text-gray-700">
                    <li className="bg-white p-2 rounded">
                      • انسٹالیشن اور کنفیگریشن
                    </li>
                    <li className="bg-white p-2 rounded">• سیکورٹی</li>
                    <li className="bg-white p-2 rounded">• بیک اپ اور بحالی</li>
                    <li className="bg-white p-2 rounded">
                      • کارکردگی کی بہتری
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-700 mb-2 text-right">
                    2) ڈیٹا بیس ڈیزائنرز
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-2 text-right">
                    وہ ڈیزائن کرتے ہیں:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-right text-gray-700">
                    <li className="bg-white p-2 rounded">• ٹیبلز</li>
                    <li className="bg-white p-2 rounded">• تعلقات</li>
                    <li className="bg-white p-2 rounded">• کیز</li>
                    <li className="bg-white p-2 rounded">• پابندیاں</li>
                  </ul>
                  <p className="text-gray-700 mt-2 text-right">
                    وہ ERD بناتے ہیں۔
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                  <h4 className="font-bold text-purple-700 mb-2 text-right">
                    3) آخری صارفین (End Users)
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-2 text-right">
                    وہ لوگ جو ایپلیکیشنز استعمال کرتے ہیں۔
                  </p>
                  <p className="text-gray-700 font-medium mb-2 text-right">
                    آخری صارفین کی اقسام:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-right">
                    <div className="bg-white p-3 rounded-lg">
                      <span className="font-medium">عام صارفین:</span>
                      <br />
                      وقتی سوالات
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <span className="font-medium">سادہ صارفین:</span>
                      <br />
                      ATM, POS
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <span className="font-medium">ماہر صارفین:</span>
                      <br />
                      انجینئرز
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <span className="font-medium">خود مختار صارفین:</span>
                      <br />
                      Excel, Access
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                  <h4 className="font-bold text-yellow-700 mb-2 text-right">
                    4) سسٹم تجزیہ کار اور سافٹ ویئر انجینئرز
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-2 text-right">
                    وہ ڈیزائن کرتے ہیں:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-right text-gray-700">
                    <li className="bg-white p-2 rounded">• ایپلیکیشنز</li>
                    <li className="bg-white p-2 rounded">• APIs</li>
                    <li className="bg-white p-2 rounded">• فرنٹ اینڈ</li>
                    <li className="bg-white p-2 rounded">• بیک اینڈ منطق</li>
                  </ul>
                  <p className="text-gray-700 mt-2 text-right">
                    وہ SQL کا استعمال کرتے ہوئے DB کے ساتھ تعامل کرتے ہیں۔
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-600 mb-3 text-right">
                B) منظر کے پیچھے کام کرنے والے
              </h3>

              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                  <h4 className="font-bold text-red-700 mb-2 text-right">
                    1) سسٹم ڈیزائنرز اور نفاذ کنندگان
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-2 text-right">
                    تعمیر کرتے ہیں:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-right text-gray-700">
                    <li className="bg-white p-2 rounded">• اسٹوریج انجنز</li>
                    <li className="bg-white p-2 rounded">• سوال پروسیسرز</li>
                    <li className="bg-white p-2 rounded">
                      • ڈیٹا بیس آرکیٹیکچر
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                  <h4 className="font-bold text-orange-700 mb-2 text-right">
                    2) ٹول ڈویلپرز
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-2 text-right">
                    ترقی دیتے ہیں:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-right text-gray-700">
                    <li className="bg-white p-2 rounded">• ایڈمن ٹولز</li>
                    <li className="bg-white p-2 rounded">• کارکردگی کے ٹولز</li>
                    <li className="bg-white p-2 rounded">• مانیٹرنگ ٹولز</li>
                    <li className="bg-white p-2 rounded">• بیک اپ یوٹیلیٹیز</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-300">
                  <h4 className="font-bold text-gray-700 mb-2 text-right">
                    3) آپریٹرز اور دیکھ بھال کرنے والے عملہ
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-2 text-right">
                    ذمہ داریاں:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-right text-gray-700">
                    <li className="bg-white p-2 rounded">• جابز چلانا</li>
                    <li className="bg-white p-2 rounded">
                      • سرور کی دیکھ بھال
                    </li>
                    <li className="bg-white p-2 rounded">
                      • سروسز دوبارہ شروع کرنا
                    </li>
                    <li className="bg-white p-2 rounded">
                      • ہارڈویئر مسائل حل کرنا
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9 & 10 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-green-600 mb-4 text-right" dir="rtl">
                ⭐ 9. DBMS کے فوائد
              </h2>
              <ul className="space-y-3 text-right text-gray-700">
                <li className="bg-green-50 p-3 rounded-lg flex items-center gap-2">
                  <span className="text-green-600">✓</span> ڈیٹا کی تکرار کو کم
                  کرتا ہے
                </li>
                <li className="bg-green-50 p-3 rounded-lg flex items-center gap-2">
                  <span className="text-green-600">✓</span> یکسانیت کو یقینی
                  بناتا ہے
                </li>
                <li className="bg-green-50 p-3 rounded-lg flex items-center gap-2">
                  <span className="text-green-600">✓</span> ڈیٹا شیئرنگ بہتر
                  ہوتی ہے
                </li>
                <li className="bg-green-50 p-3 rounded-lg flex items-center gap-2">
                  <span className="text-green-600">✓</span> سیکورٹی اور رسائی
                  کنٹرول
                </li>
                <li className="bg-green-50 p-3 rounded-lg flex items-center gap-2">
                  <span className="text-green-600">✓</span> بیک اپ اور بحالی
                </li>
                <li className="bg-green-50 p-3 rounded-lg flex items-center gap-2">
                  <span className="text-green-600">✓</span> ڈیٹا سالمیت نافذ
                  کرتا ہے
                </li>
                <li className="bg-green-50 p-3 rounded-lg flex items-center gap-2">
                  <span className="text-green-600">✓</span> ایک ساتھ رسائی
                </li>
                <li className="bg-green-50 p-3 rounded-lg flex items-center gap-2">
                  <span className="text-green-600">✓</span> رپورٹس کے ساتھ بہتر
                  فیصلہ سازی
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-red-600 mb-4 text-right" dir="rtl">
                ⚠️ 10. DBMS کے نقصانات
              </h2>
              <ul className="space-y-3 text-right text-gray-700">
                <li className="bg-red-50 p-3 rounded-lg flex items-center gap-2">
                  <span className="text-red-600">✗</span> مہنگا سافٹ ویئر اور
                  ہارڈویئر
                </li>
                <li className="bg-red-50 p-3 rounded-lg flex items-center gap-2">
                  <span className="text-red-600">✗</span> تربیت یافتہ عملے کی
                  ضرورت
                </li>
                <li className="bg-red-50 p-3 rounded-lg flex items-center gap-2">
                  <span className="text-red-600">✗</span> پیچیدہ انتظام
                </li>
                <li className="bg-red-50 p-3 rounded-lg flex items-center gap-2">
                  <span className="text-red-600">✗</span> ناکامی پورے سسٹم کو
                  متاثر کرتی ہے
                </li>
                <li className="bg-red-50 p-3 rounded-lg flex items-center gap-2">
                  <span className="text-red-600">✗</span> زیادہ سسٹم وسائل درکار
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 11 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200" dir="rtl">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🏛️ 11. ڈیٹا بیس ایپلیکیشنز کی تاریخ
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-300">
              <h3 className="text-lg font-bold text-gray-700 mb-3 text-right">
                1) ابتدائی DB ایپلیکیشنز (1960s–1980s)
              </h3>
              <p className="text-gray-700 mb-3 text-right">3 ماڈلز پر مبنی:</p>

              <div className="space-y-6">
                {/* 1. Hierarchical Model with Image */}
                <div className="mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg font-medium text-center mb-3">
                    Hierarchical Model
                  </div>
                  <img
                    src={HierarchicalSystem}
                    alt="Hierarchical System"
                    className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                  />
                </div>

                {/* 2. Network Model with Image */}
                <div className="mb-4">
                  <div className="bg-green-100 p-3 rounded-lg font-medium text-center mb-3">
                    Network Model
                  </div>
                  <img
                    src={NetworkSystem}
                    alt="Network System"
                    className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                  />
                </div>

                {/* 3. Inverted File System - No Image */}
                <div className="bg-purple-100 p-3 rounded-lg font-medium text-center">
                  Inverted File System
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-xl mt-6 mb-3">
                <h4 className="font-bold text-red-700 mb-2 text-right">
                  خرابیاں:
                </h4>
                <ul className="space-y-2 text-right text-gray-700">
                  <li>• صرف پروگرامنگ انٹرفیس</li>
                  <li>• کوئی SQL نہیں</li>
                  <li>• دوبارہ ترتیب دینا مشکل</li>
                  <li>• سخت ساخت</li>
                </ul>
              </div>

              <p className="text-gray-700 text-right">
                مشہور اور وسیع پیمانے پر استعمال ہونے والے ماڈلز: Hierarchical &
                Network
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <h3 className="font-bold text-green-700 mb-3 text-right">
                2) Relational DBMS (RDBMS) – 1970s–1980s
              </h3>
              <p className="text-gray-700 mb-3 text-right">
                E. F. Codd نے متعارف کرایا۔ ڈیٹا کو ٹیبلز میں منظم کرتا ہے۔
              </p>

              <div className="bg-white p-4 rounded-xl mb-3">
                <h4 className="font-bold text-blue-700 mb-2 text-right">
                  فوائد:
                </h4>
                <ul className="space-y-2 text-right text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> نئے سوالات لکھنا
                    آسان
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> اعلیٰ سطحی زبان
                    (SQL)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> لچکدار
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span> دوبارہ ترتیب دینا
                    آسان
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 text-right">
                ابتدائی سسٹمز سست تھے → بہتری آئی:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 text-center">
                <div className="bg-blue-100 p-3 rounded-lg">Indexing</div>
                <div className="bg-green-100 p-3 rounded-lg">Optimizers</div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  بہتر اسٹوریج تکنیک
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 12 & 13 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🧱 12. ERD (Entity–Relationship Diagram)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-right text-lg">
            ERD حقیقی دنیا کے سسٹمز کو ماڈل کرنے کے لیے استعمال ہوتا ہے:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
            <div className="bg-blue-100 p-4 rounded-xl">
              <span className="font-bold text-blue-700 text-lg">Entities</span>
            </div>
            <div className="bg-green-100 p-4 rounded-xl">
              <span className="font-bold text-green-700 text-lg">
                Attributes
              </span>
            </div>
            <div className="bg-purple-100 p-4 rounded-xl">
              <span className="font-bold text-purple-700 text-lg">
                Relationships
              </span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🔤 13. ERD کی اصطلاحات
          </h2>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h3 className="font-bold text-blue-700 mb-2 text-right">
                1) Entity
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2 text-right">
                ایک حقیقی دنیا کا آبجیکٹ جس کی آزادانہ موجودگی ہو۔
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center mt-3">
                <div className="bg-white p-2 rounded">Student</div>
                <div className="bg-white p-2 rounded">Car</div>
                <div className="bg-white p-2 rounded">Product</div>
                <div className="bg-white p-2 rounded">Teacher</div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <h3 className="font-bold text-green-700 mb-2 text-right">
                2) Attributes
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2 text-right">
                Entities کی خصوصیات۔
              </p>

              <div className="space-y-4 mt-3">
                <div>
                  <h4 className="font-bold text-gray-700 mb-1 text-right">
                    a) سادہ Attributes
                  </h4>
                  <p className="text-gray-700 text-right">
                    تقسیم نہیں کیے جا سکتے۔
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2 justify-end">
                    <span className="bg-white p-2 rounded">عمر</span>
                    <span className="bg-white p-2 rounded">تنخواہ</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-700 mb-1 text-right">
                    b) مرکب Attributes
                  </h4>
                  <p className="text-gray-700 text-right">
                    تقسیم کیے جا سکتے ہیں۔
                  </p>
                  <div className="bg-white p-3 rounded-xl mt-2">
                    <p className="text-gray-700 text-right">
                      نام → (پہلا، درمیانی، آخری)
                    </p>
                    <p className="text-gray-700 text-right mt-1">
                      پتہ → (شہر، ملک)
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-700 mb-1 text-right">
                    c) واحد قدر Attributes
                  </h4>
                  <p className="text-gray-700 text-right">صرف ایک قدر۔</p>
                  <div className="flex flex-wrap gap-2 mt-2 justify-end">
                    <span className="bg-white p-2 rounded">عمر</span>
                    <span className="bg-white p-2 rounded">رول نمبر</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-700 mb-1 text-right">
                    d) کثیر قدر Attributes
                  </h4>
                  <p className="text-gray-700 text-right">
                    ایک سے زیادہ قدریں۔
                  </p>
                  <div className="bg-white p-3 rounded-xl mt-2">
                    <p className="text-gray-700 text-right">
                      ڈگریاں {`{BS, MS}`}
                    </p>
                    <p className="text-gray-700 text-right mt-1">
                      زبانیں {`{English, Urdu, Arabic}`}
                    </p>
                  </div>
                  <p className="text-gray-700 text-right mt-1 text-sm">
                    نوٹیشن: ڈبل بیضوی
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-700 mb-1 text-right">
                    e) ماخوذ Attributes
                  </h4>
                  <p className="text-gray-700 text-right">
                    کسی دوسرے attribute سے حاصل کیے جاتے ہیں۔
                  </p>
                  <div className="bg-white p-3 rounded-xl mt-2">
                    <p className="text-gray-700 text-right">
                      تاریخ پیدائش سے عمر حاصل ہوتی ہے
                    </p>
                  </div>
                  <p className="text-gray-700 text-right mt-1 text-sm">
                    نوٹیشن: ڈیشڈ بیضوی
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-700 mb-1 text-right">
                    f) محفوظ Attributes
                  </h4>
                  <p className="text-gray-700 text-right">
                    اصل قدر جس سے دوسرے حاصل ہوتے ہیں۔
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2 justify-end">
                    <span className="bg-white p-2 rounded">تاریخ پیدائش</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-700 mb-1 text-right">
                    g) پیچیدہ Attributes
                  </h4>
                  <p className="text-gray-700 text-right">مرکب + کثیر قدر۔</p>
                  <div className="bg-white p-3 rounded-xl mt-2">
                    <p className="text-gray-700 text-right">
                      مثال: {`{Degree(Name, College, Passing Year)}`}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-700 mb-1 text-right">
                    h) خالی قدریں
                  </h4>
                  <p className="text-gray-700 text-right">
                    نامعلوم یا لاگو نہیں۔
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl mt-2">
                    <p className="text-gray-700 text-right">
                      NULL قدریں ڈیٹا کی عدم موجودگی یا نامعلوم ہونے کو ظاہر
                      کرتی ہیں۔
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🗂️ 14. Entity Type اور Entity Set
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h3 className="font-bold text-blue-700 mb-2 text-right">
                Entity Type
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3 text-right">
                مماثل entities کی تعریف (کلاس کی طرح)۔
              </p>

              <div className="bg-white p-3 rounded-lg mt-3">
                <p className="text-gray-700 font-medium mb-2 text-right">
                  مثال:
                </p>
                <div className="text-right text-gray-700">
                  <p>
                    <span className="font-semibold">Entity Type:</span> Student
                  </p>
                  <p>
                    <span className="font-semibold">Attributes:</span> id, name,
                    age
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <h3 className="font-bold text-green-700 mb-2 text-right">
                Entity Set
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3 text-right">
                ایک وقت میں تمام entities کا مجموعہ۔
              </p>

              <div className="bg-white p-3 rounded-lg mt-3">
                <p className="text-gray-700 font-medium mb-2 text-right">
                  مثال:
                </p>
                <div className="text-right text-gray-700">
                  <p>
                    <span className="font-semibold">Student Set =</span> فی
                    الحال داخلہ لینے والے تمام طلباء
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Image Placeholder for Entity Type & Set */}
          <div className="mt-6">
            <h3 className="text-sm md:text-lg font-bold text-gray-700 font-bold mb-3 text-right">
              👁️ تصویری مثال (Visual Example):
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-dashed border-blue-300 rounded-2xl p-8 text-center">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-blue-600 mb-2">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg">
                  Entity Type & Entity Set ڈایاگرام
                </p>
                <img
                  src={strongentity}
                  alt="Entity Type and Set Example"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 15 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🔑 15. Key Attribute
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg">
            منفرد طور پر کسی entity کی شناخت کرتا ہے۔
          </p>

          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 mb-4">
            <h3 className="font-bold text-yellow-700 mb-2 text-right">
              (Examples) مثالیں:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
              <div className="bg-white p-3 rounded-lg">رول نمبر</div>
              <div className="bg-white p-3 rounded-lg">قومی شناختی کارڈ</div>
              <div className="bg-white p-3 rounded-lg">ای میل (منفرد)</div>
            </div>
          </div>
        </section>

        {/* Section 16 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🧩 16. کمزور Entity (Weak Entity)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg">
            دوسری entity کے بغیر موجود نہیں رہ سکتی۔
          </p>

          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <h3 className="font-bold text-red-700 mb-2 text-right">
              مثال: Employee → Dependent (کمزور entity)
            </h3>

            <div className="bg-white p-4 rounded-lg mt-3">
              <p className="text-gray-700 mb-2 text-right font-medium">
                Dependent میں ہے:
              </p>
              <ul className="space-y-2 text-right text-gray-700">
                <li>• کوئی منفرد attribute نہیں</li>
                <li>• شناخت: Employee + DependentName سے ہوتی ہے</li>
                <li>• Identifying Relationship کی ضرورت ہوتی ہے۔</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 17 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🏗️ 17. ڈیٹا بیس ڈیزائن کا عمل
          </h2>

          <div className="space-y-3 text-right">
            <div className="bg-blue-100 p-3 rounded-lg flex items-center gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                1
              </span>
              <span className="font-medium">ضروریات کا جمع کرنا</span>
            </div>
            <div className="bg-green-100 p-3 rounded-lg flex items-center gap-3">
              <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                2
              </span>
              <span className="font-medium">تجزیہ</span>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg flex items-center gap-3">
              <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                3
              </span>
              <span className="font-medium">تصوراتی ڈیزائن (ERD)</span>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg flex items-center gap-3">
              <span className="bg-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                4
              </span>
              <span className="font-medium">منطقی ڈیزائن (ٹیبلز)</span>
            </div>
            <div className="bg-red-100 p-3 rounded-lg flex items-center gap-3">
              <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                5
              </span>
              <span className="font-medium">طبعی ڈیزائن</span>
            </div>
            <div className="bg-indigo-100 p-3 rounded-lg flex items-center gap-3">
              <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                6
              </span>
              <span className="font-medium">نفاذ</span>
            </div>
            <div className="bg-pink-100 p-3 rounded-lg flex items-center gap-3">
              <span className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                7
              </span>
              <span className="font-medium">دیکھ بھال</span>
            </div>
          </div>
        </section>

        {/* Section 18 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🔗 18. Relationship Degree
          </h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h3 className="font-bold text-blue-700 mb-2 text-right">
                1) Unary
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2 text-right">
                ایک ہی entity کے اندر رشتہ۔
              </p>

              <div className="bg-white p-3 rounded-lg mt-3">
                <p className="text-gray-700 font-medium mb-1 text-right">
                  مثال:
                </p>
                <p className="text-gray-700 text-right">
                  Employee manages Employee
                </p>
              </div>

              {/* Visual Example Placeholder */}
              <div className="mt-4 bg-gradient-to-r from-blue-100 to-white p-4 rounded-xl border border-blue-200">
                <h4 className="font-bold text-blue-600 mb-2 text-right">
                  👁️ تصویری مثال:
                </h4>
                <img
                  src={r1image}
                  alt="R1 Image"
                  className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                />
                <div className="flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="bg-blue-200 rounded-lg p-4 inline-block mb-2">
                      <span className="font-bold">Employee</span>
                    </div>
                    <div className="text-blue-600 my-2">↓↑</div>
                    <div className="text-sm text-gray-600">manages</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <h3 className="font-bold text-green-700 mb-2 text-right">
                2) Binary
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2 text-right">
                دو entities کے درمیان رشتہ۔
              </p>

              <div className="bg-white p-3 rounded-lg mt-3">
                <p className="text-gray-700 font-medium mb-1 text-right">
                  مثال:
                </p>
                <img
                  src={r2image}
                  alt="R2 Image"
                  className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                />
                <br />
                <p className="text-lg text-gray-700 text-right">
                  Student — Enrolls — Course
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <h3 className="font-bold text-purple-700 mb-2 text-right">
                3) Ternary
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2 text-right">
                (Between three entities.) تین entities کے درمیان رشتہ۔
              </p>
              <div className="bg-white p-3 rounded-lg mt-3">
                <p className="text-gray-700 font-medium mb-1 text-right">
                  مثال:
                </p>
                <img
                  src={r3image}
                  alt="R3 Image"
                  className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                />
                <p className="text-gray-700 text-right">
                  Supplier — Supplies — Product — To Store
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 19 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🔒 19. Relationship Constraints
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h3 className="font-bold text-blue-700 mb-3 text-right">
                1) Cardinality Ratio
              </h3>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="px-4 py-3 text-right font-bold text-blue-700">
                        قسم
                      </th>
                      <th className="px-4 py-3 text-right font-bold text-blue-700">
                        مطلب
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50">
                      <td className="px-4 py-3 font-medium text-gray-900 text-right">
                        1 : 1
                      </td>
                      <td className="px-4 py-3 text-gray-700 text-right">
                        ایک سے ایک
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="px-4 py-3 font-medium text-gray-900 text-right">
                        1 : N
                      </td>
                      <td className="px-4 py-3 text-gray-700 text-right">
                        ایک سے کئی
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="px-4 py-3 font-medium text-gray-900 text-right">
                        N : 1
                      </td>
                      <td className="px-4 py-3 text-gray-700 text-right">
                        کئی سے ایک
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="px-4 py-3 font-medium text-gray-900 text-right">
                        M : N
                      </td>
                      <td className="px-4 py-3 text-gray-700 text-right">
                        کئی سے کئی
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Visual Example Placeholder */}
              <div className="mt-4">
                <h4 className="font-bold text-gray-700 mb-2 text-right">
                  👁️ تصویری مثال:
                </h4>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-dashed border-blue-300 rounded-xl p-6 text-center">
                  <p className="text-gray-600 mb-2">
                    Cardinality Ratio ڈایاگرام
                  </p>
                  <img
                    src={r4image}
                    alt="R4 Image"
                    className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                  />
                  <div className="flex justify-center space-x-4">
                    <div className="bg-blue-200 p-3 rounded-lg">Entity A</div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-blue-600">1</div>
                      <div className="h-px w-8 bg-gray-400"></div>
                      <div className="text-blue-600">N</div>
                    </div>
                    <div className="bg-green-200 p-3 rounded-lg">Entity B</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-right">
                (2) شرکت کے تقاضے (Participation Constraints) 
              </h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-700 mb-2 text-right">
                  مکمل شرکت (Total Participation)
                </h4>
                <ul className="space-y-1 text-gray-700 text-right">
                  <li className="flex items-start justify-end">
                    <span>ضرور شرکت کرے</span>
                    <span className="mr-2">&nbsp;•</span>
                    
                  </li>
                  <li className="flex items-start justify-end">
                    <span>نوٹیشن: ڈبل لائن</span>
                    <span className="mr-2">&nbsp;•</span>

                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-yellow-700 mb-2 text-right">
                  جزوی شرکت (Partial Participation)
                </h4>
                <ul className="space-y-1 text-gray-700 text-right">
                  <li className="flex items-start justify-end">
                       <span>شرکت کر سکتا ہے یا نہیں</span>
                    <span className="mr-2">&nbsp;•</span>

                  </li>
                  <li className="flex items-start justify-end">
                    <span>نوٹیشن: سنگل لائن</span>
                    <span className="mr-2">&nbsp;•</span>
                    
                  </li>
                </ul>
                <br />
                <img
                  src={r5image}
                  alt="R5 Image"
                  className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 20 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🟥 20. ER Diagram Symbols (بہت اہم)
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-red-50">
                <tr>
                  <th className="px-4 py-3 text-right font-bold text-red-700">
                    علامت
                  </th>
                  <th className="px-4 py-3 text-right font-bold text-red-700">
                    مطلب
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-red-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">
                    ▢ مستطیل
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">Entity</td>
                </tr>
                <tr className="hover:bg-red-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">
                    ○ بیضوی
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">
                    Attribute
                  </td>
                </tr>
                <tr className="hover:bg-red-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">
                    ○○ ڈبل بیضوی
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">
                    Multivalued Attribute
                  </td>
                </tr>
                <tr className="hover:bg-red-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">
                    ○ (ڈیشڈ)
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">
                    Derived Attribute
                  </td>
                </tr>
                <tr className="hover:bg-red-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">
                    ◆ ہیرا
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">
                    Relationship
                  </td>
                </tr>
                <tr className="hover:bg-red-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">
                    ◆◆ ڈبل ہیرا
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">
                    Identifying Relationship
                  </td>
                </tr>
                <tr className="hover:bg-red-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">
                    ▢▢ ڈبل مستطیل
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">
                    کمزور Entity
                  </td>
                </tr>
                <tr className="hover:bg-red-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">
                    ڈبل باروں والی لائن
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">
                    مکمل شرکت
                  </td>
                </tr>
                <tr className="hover:bg-red-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">
                    لائن تیر کے ساتھ →
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">
                    ایک طرف
                  </td>
                </tr>
                <tr className="hover:bg-red-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">
                    تیر کے بغیر
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">کئی</td>
                </tr>
                <tr className="hover:bg-red-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">
                    مثلث (ISA)
                  </td>
                  <td className="px-4 py-3 text-gray-700 text-right">
                    Generalization / Specialization
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        <div className="mt-8">
  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-right">
    👁️ ER Diagram Symbols کی تصویری مثالیں:
  </h3>
  
  <div className="space-y-4 md:space-y-6">
    <img src={symbol} alt="ER Diagram Symbols" className="w-full rounded-xl shadow" />
    <img src={symbol2} alt="ER Diagram Symbols 2" className="w-full rounded-xl shadow" />
    <img src={symbol3} alt="ER Diagram Symbols 3" className="w-full rounded-xl shadow" />
    <img src={ERcompanyDB} alt="ER Diagram Company" className="w-full rounded-xl shadow" />
  </div>
</div>
        </section>

        {/* Section 21 - Normalization */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-purple-700 mb-6 text-right" dir="rtl">
            📘 Normalization & Denormalization
          </h2>

          {/* What is Normalization */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
              🧩 Normalization کیا ہے؟
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg" dir="rtl">
              Normalization ایک ڈیٹا بیس ڈیزائن تکنیک ہے جو استعمال ہوتی ہے:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-xl">
                <ul className="space-y-2 text-right text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✔</span> ڈیٹا کی تکرار کو
                    ہٹانا
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✔</span> ڈیٹا کی خرابیوں سے
                    بچنا
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl">
                <ul className="space-y-2 text-right text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✔</span> ڈیٹا بیس کو اچھی
                    طرح ساختہ ٹیبلز میں منظم کرنا
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✔</span> ڈیٹا کی انحصاریت
                    کو منطقی بنانا
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
              <p className="text-gray-700 leading-relaxed text-right text-lg font-medium">
                ➡️ مقصد: ڈیٹا بیس کو موثر، مستقل مزاج اور تکرار سے پاک بنانا۔
              </p>
            </div>
          </div>

          {/* Why Normalization */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4 text-right" dir="rtl">
              ❓ ہمیں Normalization کی ضرورت کیوں ہے؟
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg">
              Normalization کے بغیر، ہمیں مسائل پیش آتے ہیں:
            </p>

            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                <h4 className="font-bold text-red-700 mb-2 text-right">
                  1. داخلہ خرابی (Insertion Anomaly)
                </h4>
                <p className="text-gray-700 text-right">
                  آپ ڈیٹا داخل نہیں کر سکتے کیونکہ کچھ دوسرا ڈیٹا غائب ہے۔
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                <h4 className="font-bold text-red-700 mb-2 text-right">
                  2. حذف خرابی (Deletion Anomaly)
                </h4>
                <p className="text-gray-700 text-right">
                  ایک ریکارڈ کو حذف کرنا غلطی سے اہم متعلقہ ڈیٹا کو ہٹا دیتا ہے۔
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                <h4 className="font-bold text-red-700 mb-2 text-right">
                  3. اپ ڈیٹ خرابی (Update Anomaly)
                </h4>
                <p className="text-gray-700 text-right">
                  آپ کو ایک ہی ڈیٹا کو بہت سی جگہوں پر اپ ڈیٹ کرنا پڑتا ہے۔
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-xl border border-green-200 mt-4">
              <p className="text-gray-700 leading-relaxed text-right text-lg font-medium">
                Normalization ان تمام مسائل کو حل کرتی ہے۔
              </p>
            </div>
          </div>

          {/* Normalization Example */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl"> 
              🎯 Normalization مثال (Normalization سے پہلے)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg" dir="rtl">
              فرض کریں ہم طالب علم اور کورس کی معلومات ایک ٹیبل میں محفوظ کرتے
              ہیں:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-right font-bold text-gray-700">
                      StudentID
                    </th>
                    <th className="px-4 py-3 text-right font-bold text-gray-700">
                      StudentName
                    </th>
                    <th className="px-4 py-3 text-right font-bold text-gray-700">
                      Course
                    </th>
                    <th className="px-4 py-3 text-right font-bold text-gray-700">
                      Instructor
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700 text-center">1</td>
                    <td className="px-4 py-3 text-gray-700 text-right">علی</td>
                    <td className="px-4 py-3 text-gray-700 text-right">DBMS</td>
                    <td className="px-4 py-3 text-gray-700 text-right">احمد</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700 text-center">1</td>
                    <td className="px-4 py-3 text-gray-700 text-right">علی</td>
                    <td className="px-4 py-3 text-gray-700 text-right">OOP</td>
                    <td className="px-4 py-3 text-gray-700 text-right">بلال</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700 text-center">2</td>
                    <td className="px-4 py-3 text-gray-700 text-right">سارہ</td>
                    <td className="px-4 py-3 text-gray-700 text-right">DBMS</td>
                    <td className="px-4 py-3 text-gray-700 text-right">احمد</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 p-4 rounded-xl border border-red-200">
              <h4 className="font-bold text-red-700 mb-2 text-right">
                ❌ مسائل:
              </h4>
              <ul className="space-y-2 text-right text-gray-700">
                <li>
                  • <span className="font-medium">تکرار:</span> Instructor
                  "احمد" متعدد بار ظاہر ہوتا ہے
                </li>
                <li>
                  • <span className="font-medium">اپ ڈیٹ خرابی:</span> اگر احمد
                  نام بدلے، تمام قطاروں کو اپ ڈیٹ کریں
                </li>
                <li>
                  • <span className="font-medium">داخلہ خرابی:</span> نیا کورس
                  اس وقت تک شامل نہیں ہو سکتا جب تک کوئی طالب علم داخل نہ لے
                </li>
                <li>
                  • <span className="font-medium">حذف خرابی:</span> اگر طالب علم
                  چلا جائے، کورس کی معلومات ضائع ہو جائے گی
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-xl border border-green-200 mt-4">
              <p className="text-gray-700 leading-relaxed text-right text-lg font-medium">
                ➡️ Normalization یہ تمام مسائل ٹھیک کرتی ہے۔
              </p>
            </div>
          </div>

          {/* Normal Forms */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
              🏛️ Normalization کی اقسام (Normal Forms)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg">
              اہم اقسام:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg font-bold text-blue-700">
                1NF
              </div>
              <div className="bg-green-100 p-3 rounded-lg font-bold text-green-700">
                2NF
              </div>
              <div className="bg-purple-100 p-3 rounded-lg font-bold text-purple-700">
                3NF
              </div>
              <div className="bg-red-100 p-3 rounded-lg font-bold text-red-700">
                BCNF
              </div>
            </div>

            <p className="text-gray-700 text-right mb-4">
              (اعلیٰ اقسام بھی موجود ہیں لیکن کم استعمال ہوتی ہیں)
            </p>
          </div>

          {/* 1NF */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
              🔰 1NF – First Normal Form
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-right">
              ایک ٹیبل 1NF میں ہے اگر:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-xl">
                <ul className="space-y-2 text-right text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✔</span> تمام اقدار ایٹومک
                    ہوں (کثیر قدری نہ ہوں)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✔</span> دہرائے گروپ نہ ہوں
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✔</span> ہر فیلڈ کی ایک ہی
                    قدر ہو
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-red-700 mb-2 text-right">
                  ❌ 1NF سے پہلے:
                </h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-right font-bold text-gray-700">
                          StudentID
                        </th>
                        <th className="px-4 py-3 text-right font-bold text-gray-700">
                          Name
                        </th>
                        <th className="px-4 py-3 text-right font-bold text-gray-700">
                          Courses
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700 text-center">
                          1
                        </td>
                        <td className="px-4 py-3 text-gray-700 text-right">
                          علی
                        </td>
                        <td className="px-4 py-3 text-gray-700 text-right">
                          DBMS, OOP
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700 text-center">
                          2
                        </td>
                        <td className="px-4 py-3 text-gray-700 text-right">
                          سارہ
                        </td>
                        <td className="px-4 py-3 text-gray-700 text-right">
                          DBMS
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-green-700 mb-2 text-right">
                  ✔ 1NF کے بعد (ایٹومک اقدار):
                </h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-right font-bold text-gray-700">
                          StudentID
                        </th>
                        <th className="px-4 py-3 text-right font-bold text-gray-700">
                          Name
                        </th>
                        <th className="px-4 py-3 text-right font-bold text-gray-700">
                          Course
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700 text-center">
                          1
                        </td>
                        <td className="px-4 py-3 text-gray-700 text-right">
                          علی
                        </td>
                        <td className="px-4 py-3 text-gray-700 text-right">
                          DBMS
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700 text-center">
                          1
                        </td>
                        <td className="px-4 py-3 text-gray-700 text-right">
                          علی
                        </td>
                        <td className="px-4 py-3 text-gray-700 text-right">
                          OOP
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-700 text-center">
                          2
                        </td>
                        <td className="px-4 py-3 text-gray-700 text-right">
                          سارہ
                        </td>
                        <td className="px-4 py-3 text-gray-700 text-right">
                          DBMS
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* 2NF */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-green-600 mb-4 text-right" dir="rtl">
              🟦 2NF – Second Normal Form
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-right">
              ایک ٹیبل 2NF میں ہے اگر:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-xl">
                <ul className="space-y-2 text-right text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✔</span> یہ پہلے سے 1NF میں
                    ہے
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✔</span> کوئی جزوی انحصار
                    نہ ہو
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✔</span> غیر کلیدی
                    attributes پورے پرائمری کلیدی پر منحصر ہوں
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 text-right mb-4">
              (لاگو ہوتا ہے جب مرکب کلیدی موجود ہو)
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-red-700 mb-2 text-right">
                  ❌ مثال (2NF سے پہلے)
                </h4>
                <p className="text-gray-700 mb-2 text-right">آرڈر ٹیبل:</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-right font-bold text-gray-700">
                          OrderID
                        </th>
                        <th className="px-4 py-3 text-right font-bold text-gray-700">
                          ProductID
                        </th>
                        <th className="px-4 py-3 text-right font-bold text-gray-700">
                          ProductName
                        </th>
                        <th className="px-4 py-3 text-right font-bold text-gray-700">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          className="px-4 py-3 text-gray-700 text-center text-sm"
                          colSpan="4"
                        >
                          پرائمری کلیدی = (OrderID + ProductID)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 mt-2 text-right">
                  یہاں: ProductName & Price صرف ProductID پر منحصر ہیں، پوری
                  کلیدی پر نہیں۔
                </p>
                <p className="text-gray-700 text-right font-medium">
                  ➡️ جزوی انحصار → خراب
                </p>
              </div>

              <div>
                <h4 className="font-bold text-green-700 mb-2 text-right">
                  ✔ 2NF کے بعد:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-700 mb-2 text-right">
                      Orders:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-blue-100">
                          <tr>
                            <th className="px-4 py-2 text-right font-bold text-gray-700">
                              OrderID
                            </th>
                            <th className="px-4 py-2 text-right font-bold text-gray-700">
                              ProductID
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 mb-2 text-right">
                      Products:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-green-100">
                          <tr>
                            <th className="px-4 py-2 text-right font-bold text-gray-700">
                              ProductID
                            </th>
                            <th className="px-4 py-2 text-right font-bold text-gray-700">
                              ProductName
                            </th>
                            <th className="px-4 py-2 text-right font-bold text-gray-700">
                              Price
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-2 text-right">
                  اب ہر attribute پوری پرائمری کلیدی پر منحصر ہے۔
                </p>
              </div>
            </div>
          </div>

          {/* 3NF */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-purple-600 mb-4 text-right" dir="rtl">
              🟩 3NF – Third Normal Form
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-right">
              ایک ٹیبل 3NF میں ہے اگر:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-50 p-4 rounded-xl">
                <ul className="space-y-2 text-right text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✔</span> پہلے سے 2NF میں ہے
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✔</span> کوئی عبوری انحصار
                    نہ ہو
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 text-right mb-4">
              (عبوری انحصار: غیر کلیدی attribute دوسرے غیر کلیدی attribute پر
              منحصر ہو)
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-red-700 mb-2 text-right">
                  ❌ 3NF سے پہلے:
                </h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-right font-bold text-gray-700">
                          StudentID
                        </th>
                        <th className="px-4 py-3 text-right font-bold text-gray-700">
                          Name
                        </th>
                        <th className="px-4 py-3 text-right font-bold text-gray-700">
                          City
                        </th>
                        <th className="px-4 py-3 text-right font-bold text-gray-700">
                          ZIP
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
                <p className="text-gray-700 mt-2 text-right">
                  یہاں: City, ZIP پر منحصر ہے → عبوری انحصار
                </p>
              </div>

              <div>
                <h4 className="font-bold text-green-700 mb-2 text-right">
                  ✔ 3NF کے بعد:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-700 mb-2 text-right">
                      Students:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-blue-100">
                          <tr>
                            <th className="px-4 py-2 text-right font-bold text-gray-700">
                              StudentID
                            </th>
                            <th className="px-4 py-2 text-right font-bold text-gray-700">
                              Name
                            </th>
                            <th className="px-4 py-2 text-right font-bold text-gray-700">
                              ZIP
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 mb-2 text-right">
                      ZIP Codes:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-green-100">
                          <tr>
                            <th className="px-4 py-2 text-right font-bold text-gray-700">
                              ZIP
                            </th>
                            <th className="px-4 py-2 text-right font-bold text-gray-700">
                              City
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-2 text-right">
                  کوئی عبوری انحصار نہیں۔
                </p>
              </div>
            </div>
          </div>

          {/* BCNF */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-red-600 mb-4 text-right" dir="rtl">
              🟥 BCNF – Boyce–Codd Normal Form
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-right">
              3NF کا مضبوط ورژن۔
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 p-4 rounded-xl">
                <p className="text-gray-700 leading-relaxed mb-3 text-right">
                  ایک ٹیبل BCNF میں ہے اگر:
                </p>
                <ul className="space-y-2 text-right text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✔</span> ہر functional
                    dependency کے لیے
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✔</span> بائیں طرف سپر
                    کلیدی ہو
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
              <p className="text-gray-700 leading-relaxed text-right">
                استعمال ہوتا ہے جب:
              </p>
              <ul className="mt-2 space-y-2 text-right text-gray-700">
                <li>• ٹیبل میں متعدد candidate keys ہوں</li>
                <li>• اوورلیپنگ کلیدیں مسائل پیدا کرتی ہوں</li>
              </ul>
            </div>
          </div>

          {/* Summary Table */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
              🎉 Normal Forms کا خلاصہ
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-4 py-3 text-right font-bold text-blue-700">
                      Form
                    </th>
                    <th className="px-4 py-3 text-right font-bold text-blue-700">
                      ہٹاتا ہے
                    </th>
                    <th className="px-4 py-3 text-right font-bold text-blue-700">
                      ضرورت
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50">
                    <td className="px-4 py-3 font-medium text-gray-900 text-right">
                      1NF
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-right">
                      کثیر قدری attributes
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-right">
                      ایٹومک اقدار
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="px-4 py-3 font-medium text-gray-900 text-right">
                      2NF
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-right">
                      جزوی انحصار
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-right">
                      کوئی attribute مرکب کلیدی کے حصے پر منحصر نہ ہو
                    </td>
                  </tr>
                  <tr className="hover:bg-purple-50">
                    <td className="px-4 py-3 font-medium text-gray-900 text-right">
                      3NF
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-right">
                      عبوری انحصار
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-right">
                      غیر کلیدی attributes صرف پرائمری کلیدی پر منحصر ہوں
                    </td>
                  </tr>
                  <tr className="hover:bg-red-50">
                    <td className="px-4 py-3 font-medium text-gray-900 text-right">
                      BCNF
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-right">
                      پیچیدہ خرابیاں
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-right">
                      ہر determinant کلیدی ہو
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Denormalization */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-600 mb-4 text-right" dir="rtl">
              🧱 Denormalization کیا ہے؟
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg">
              Denormalization normalized ٹیبلز کو ملانے کا عمل ہے تاکہ:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-orange-50 p-4 rounded-xl text-center">
                <span className="text-orange-600 text-2xl">⚡</span>
                <p className="font-medium text-gray-700 mt-2" dir="rtl">
                  کارکردگی بہتر ہو
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl text-center">
                <span className="text-orange-600 text-2xl">🔗</span>
                <p className="font-medium text-gray-700 mt-2" dir="rtl">جوائنز کم ہوں</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl text-center">
                <span className="text-orange-600 text-2xl">🚀</span>
                <p className="font-medium text-gray-700 mt-2">سوالات تیز ہوں</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
              <p className="text-gray-700 leading-relaxed text-right text-lg font-medium" dir="rtl">
                ➡️ یہ جان بوجھ کر تکرار شامل کرتا ہے تاکہ پڑھنے کے آپریشنز تیز
                ہوں۔
              </p>
            </div>

            <div className="mt-4 bg-blue-50 p-4 rounded-xl">
              <h4 className="font-bold text-blue-700 mb-2 text-right">
                استعمال ہوتا ہے:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center mt-2">
                <div className="bg-white p-3 rounded-lg" dir="rtl">ڈیٹا گوداموں میں</div>
                <div className="bg-white p-3 rounded-lg">
                  تلاش پر مبنی سسٹمز
                </div>
                <div className="bg-white p-3 rounded-lg" dir="rtl">OLAP سسٹمز</div>
              </div>
            </div>
          </div>

          {/* Why Denormalization */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4 text-right" dir="rtl">
              ❓ Denormalization کیوں؟
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-xl border border-gray-300">
              <p className="text-gray-700 leading-relaxed mb-3 text-right text-lg" dir="rtl">
                Normalization → اچھی ساخت، کم خرابیاں
              </p>
              <p className="text-gray-700 leading-relaxed mb-3 text-right text-lg" dir="rtl">
                لیکن بہت زیادہ normalization = بہت ساری ٹیبلز = بہت ساری جوائنز
                = سست کارکردگی
              </p>
              <div className="bg-yellow-100 p-4 rounded-lg mt-4">
                <p className="text-gray-700 leading-relaxed text-right text-lg font-medium" dir="rtl">
                  Denormalization کارکردگی کے مسائل حل کرتی ہے۔
                </p>
              </div>
            </div>
          </div>

          {/* Denormalization Example */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-purple-600 mb-4 text-right" dir="rtl">
              📌 Denormalization کی مثال
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg" dir="rtl">
              فرض کریں ہم normalized ڈیٹا اس طرح رکھتے ہیں:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <caption className="caption-top text-sm text-gray-500 mb-2 text-right">
                      Customers
                    </caption>
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="px-4 py-2 text-right font-bold text-gray-700">
                          CustomerID
                        </th>
                        <th className="px-4 py-2 text-right font-bold text-gray-700">
                          CustomerName
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
              <div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <caption className="caption-top text-sm text-gray-500 mb-2 text-right">
                      Orders
                    </caption>
                    <thead className="bg-green-100">
                      <tr>
                        <th className="px-4 py-2 text-right font-bold text-gray-700">
                          OrderID
                        </th>
                        <th className="px-4 py-2 text-right font-bold text-gray-700">
                          CustomerID
                        </th>
                        <th className="px-4 py-2 text-right font-bold text-gray-700">
                          Amount
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg" dir="rtl">
              صارف + آرڈر ڈیٹا دکھانے کے لیے، ہمیں ٹیبلز کو join کرنا پڑے گا۔
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg" dir="rtl">
              اگر سسٹم پڑھنے پر بھاری ہے (بہت سے SELECT سوالات)، ہم denormalize
              کرتے ہیں:
            </p>

            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
              <h4 className="font-bold text-yellow-700 mb-2 text-right">
                Denormalized Table
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-yellow-100">
                    <tr>
                      <th className="px-4 py-2 text-right font-bold text-gray-700">
                        OrderID
                      </th>
                      <th className="px-4 py-2 text-right font-bold text-gray-700">
                        CustomerName
                      </th>
                      <th className="px-4 py-2 text-right font-bold text-gray-700">
                        Amount
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <span className="text-green-600 font-bold">✔</span> تیز پڑھنے
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <span className="text-red-600 font-bold">❌</span> کچھ تکرار
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
              🔥 Normalization اور Denormalization میں فرق
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-4 py-3 text-right font-bold text-blue-700">
                      Normalization
                    </th>
                    <th className="px-4 py-3 text-right font-bold text-blue-700">
                      Denormalization
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700 text-right">
                      تکرار ہٹاتی ہے
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-right">
                      تکرار شامل کرتی ہے
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700 text-right">
                      زیادہ ٹیبلز
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-right">
                      کم ٹیبلز
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700 text-right">
                      خرابیاں کم کرتی ہے
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-right">
                      کارکردگی بہتر کرتی ہے
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700 text-right">
                      OLTP کے لیے بہترین
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-right">
                      OLAP کے لیے بہترین
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700 text-right">
                      سست SELECT، تیز UPDATE
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-right">
                      تیز SELECT، سست UPDATE
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* When to Use */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-700 mb-4 text-right" dir="rtl">
                🧠 Normalization کب کریں؟
              </h3>
              <ul className="space-y-3 text-right text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>جب ڈیٹا کی مستقل مزاجی اہم ہو</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>جب سسٹم بہت سے inserts/updates انجام دے</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>بینکنگ سسٹمز</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>سکول سسٹمز</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>انوینٹری سسٹمز</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <h3 className="text-xl font-bold text-orange-700 mb-4 text-right" dir="rtl">
                ⚡ Denormalization کب کریں؟
              </h3>
              <ul className="space-y-3 text-right text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">🚀</span>
                  <span>جب READ کارکردگی ترجیح ہو</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">📊</span>
                  <span>رپورٹنگ سسٹمز</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">🔍</span>
                  <span>تلاش کے سسٹمز</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">📈</span>
                  <span>تجزیات</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">🛒</span>
                  <span>ای کامرس پروڈکٹ لسٹنگ صفحات</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Hands On */}
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 border-2 border-dashed border-blue-300">
            <h3 className="text-2xl font-bold text-blue-700 mb-4 text-right" dir="rtl">
              👐 عملی کام:
            </h3>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-right">
                🛍️ ایک ای کامرس ویب سائٹ کے لیے ڈیٹا بیس بنائیں۔
              </h4>
              <p className="text-gray-700 mb-4 text-right">
                اپنے ای کامرس ڈیٹا بیس کو ڈیزائن کریں اور درج ذیل پر غور کریں:
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2 mt-4">
                  <span className="text-gray-700 text-right font-medium">
                    1. ضروری entities کی نشاندہی کریں
                  </span>
                  <button
                    onClick={() =>
                      handleCopy(
                        `-- ای کامرس ڈیٹا بیس کے لیے ممکنہ entities
-- Customers, Products, Orders, Categories, Reviews
-- Payments, Shipping, Inventory, Suppliers`,
                        "entities"
                      )
                    }
                    className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white 
             px-2 py-1 rounded-lg transition-colors text-xs
             sm:gap-2 sm:px-3 sm:py-1 sm:text-sm cursor-pointer">
                                  {copiedStates.entities ? (
                      <>
                        <Check size={16} />
                        <span>کاپی ہو گیا</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>کوڈ کاپی کریں</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 text-right font-medium">
                    2. ERD بنائیں
                  </span>
                  <button
                    onClick={() =>
                      handleCopy(
                        `-- ERD نمونہ ساخت
-- Customers (CustomerID, Name, Email, Phone)
-- Products (ProductID, Name, Price, CategoryID)
-- Orders (OrderID, CustomerID, OrderDate, TotalAmount)
-- OrderDetails (OrderDetailID, OrderID, ProductID, Quantity)
-- Categories (CategoryID, CategoryName)
-- Reviews (ReviewID, ProductID, CustomerID, Rating, Comment)`,
                        "erd"
                      )
                    }
                    className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white 
             px-2 py-1 rounded-lg transition-colors text-xs
             sm:gap-2 sm:px-3 sm:py-1 sm:text-sm"
                  >
                    {copiedStates.erd ? (
                      <>
                        <Check size={16} />
                        <span>کاپی ہو گیا</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>کوڈ کاپی کریں</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 text-right font-medium">
                    3. Normalization لاگو کریں
                  </span>
                  <button
  onClick={() =>
    handleCopy(
      `-- 3NF تک normalization کا نمونہ
-- صارفین کی معلومات الگ ٹیبل
-- مصنوعات کی معلومات الگ ٹیبل
-- آرڈرز اور آرڈر تفصیلات الگ الگ
-- ہر ٹیبل میں primary keys
-- foreign keys کے ذریعے تعلقات`,
      "normalization"
    )
  }
  className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white 
             px-2 py-1 rounded-lg transition-colors text-xs
             sm:gap-2 sm:px-3 sm:py-1 sm:text-sm cursor-pointer"
>
  {copiedStates.normalization ? (
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
              </div>

              {/* Visual Example Placeholder for E-commerce */}
              <div className="mt-6">
                <h4 className="font-bold text-gray-700 mb-3 text-right">
                  👁️ ای کامرس ڈیٹا بیس کا تصویری خاکہ:
                </h4>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-dashed border-blue-300 rounded-xl p-8 text-center">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="text-blue-600 mb-2">
                      <svg
                        className="w-20 h-20 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-lg">
                      ای کامرس ڈیٹا بیس ڈایاگرام
                    </p>
                    <img
                      src={edatabase}
                      alt="E - Commerce Database Diagram"
                      className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
