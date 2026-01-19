import { useState, useRef, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Week4Class2() {
  const [copiedStates, setCopiedStates] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const notificationRef = useRef(null);

  // Scroll detection for the top button
  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 300px
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(20px);
      }
    }

    .scroll-top-enter {
      animation: fadeIn 0.3s ease-out forwards;
    }

    .scroll-top-exit {
      animation: fadeOut 0.3s ease-out forwards;
    }
  `;

  return (
    <div className="px-3 sm:px-4 md:px-6 max-w-full sm:max-w-2xl md:max-w-4xl mx-auto">
         <ScrollToTopButton />
      {/* Add notification and scroll styles */}
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
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-4 sm:mb-6">
    📘 MongoDB میں Advanced Querying & Filtering
  </h1>

  <p className="text-lg text-gray-700 font-medium" style={{ fontFamily: 'Calibri, sans-serif', size: '20px' }}>
    Instructor: Zohaib Farooq
  </p>
  
  <div className="inline-block m-4 px-2 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold mt-4" style={{ fontFamily: 'Arial, sans-serif' }}>
    Week 4 - Class 2: MongoDB میں Advanced Querying & Filtering
  </div>
</div>
      {/* Introduction Section */}
      <section className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-3 sm:mb-4 text-right">
          🧠 1. Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-right text-base sm:text-lg" dir="rtl">
          MongoDB آپ کو ڈیٹا کو فلٹر کرنے اور سرچ کرنے کی طاقتور صلاحیت دیتی ہے۔
        </p>

        <div className="bg-blue-50 p-4 sm:p-6 rounded-xl mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="text-xl sm:text-2xl">⚡</span>
            <h3 className="text-lg sm:text-xl font-bold text-right">Advanced Querying شامل ہے:</h3>
          </div>
          <ul className="space-y-2 sm:space-y-3 text-right text-gray-700 text-sm sm:text-base">
            <li className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              <span>ڈیٹا فلٹر (Data Filter)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              <span>شرائط (Conditions)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              <span>ترتیب اور پیجینیشن (Sorting & Pagination)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              <span>مخصوص فیلڈز منتخب کریں (Specific fields select)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              <span>ایری اور نیسٹڈ آبجیکٹ کوئریز (Array & nested object queries)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              <span>کارکردگی بہتر بنائیں (Performance optimization - indexes)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500">•</span>
              <span>Advanced ڈیٹا تجزیہ (Advanced data analysis - aggregation)</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 sm:p-6 rounded-xl">
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
            <span>🔒</span>
            TypeScript کے ساتھ فائدے:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-white rounded-xl">
              <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Type Safety</h4>
              <p className="text-gray-600 text-xs sm:text-sm">ڈیٹا کی قسمیں محفوظ رہتی ہیں</p>
            </div>
            <div className="p-3 sm:p-4 bg-white rounded-xl">
              <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Auto-completion</h4>
              <p className="text-gray-600 text-xs sm:text-sm">کوڈ لکھتے وقت مدد ملتی ہے</p>
            </div>
            <div className="p-3 sm:p-4 bg-white rounded-xl">
              <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Runtime bugs کم</h4>
              <p className="text-gray-600 text-xs sm:text-sm">چلنے والے وقت میں خرابیاں کم ہوتی ہیں</p>
            </div>
            <div className="p-3 sm:p-4 bg-white rounded-xl">
              <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Better Code Quality</h4>
              <p className="text-gray-600 text-xs sm:text-sm">بہتر کوڈ معیار</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Setup */}
      <section className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 sm:mb-6 text-right">
          ⚡ 2. Project Setup
        </h2>
        
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
            <span className="text-xl sm:text-2xl">📦</span>
            <span className="text-sm sm:text-base">Install Required Packages</span>
          </h3>
          <div className="bg-gray-900 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 overflow-x-auto">
            <code className="text-green-400 text-xs sm:text-sm block mb-1 sm:mb-2">npm install express mongoose dotenv</code>
            <code className="text-green-400 text-xs sm:text-sm">npm install --save-dev typescript ts-node @types/express @types/mongoose</code>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mt-4 sm:mt-6">
            <div className="p-2 sm:p-3 bg-blue-50 rounded-xl">
              <h4 className="font-bold mb-1 text-xs sm:text-sm">express</h4>
              <p className="text-xs sm:text-sm">API بنانے کے لیے</p>
            </div>
            <div className="p-2 sm:p-3 bg-green-50 rounded-xl">
              <h4 className="font-bold mb-1 text-xs sm:text-sm">mongoose</h4>
              <p className="text-xs sm:text-sm">MongoDB ODM</p>
            </div>
            <div className="p-2 sm:p-3 bg-purple-50 rounded-xl">
              <h4 className="font-bold mb-1 text-xs sm:text-sm">dotenv</h4>
              <p className="text-xs sm:text-sm">env variables کے لیے</p>
            </div>
            <div className="p-2 sm:p-3 bg-yellow-50 rounded-xl">
              <h4 className="font-bold mb-1 text-xs sm:text-sm">TypeScript</h4>
              <p className="text-xs sm:text-sm">strong typing کے لیے</p>
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
            <span className="text-xl sm:text-2xl">🌱</span>
            <span className="text-sm sm:text-base">Environment Variables (.env)</span>
          </h3>
          <div className="bg-gray-900 p-3 sm:p-4 rounded-xl overflow-x-auto">
            <code className="text-green-400 text-xs sm:text-sm block">PORT=5000</code>
            <code className="text-green-400 text-xs sm:text-sm">MONGO_URI=&lt;Your URI&gt;</code>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
            <span className="text-xl sm:text-2xl">🔌</span>
            <span className="text-sm sm:text-base">MongoDB کنکشن (server.ts)</span>
          </h3>
          <div className="bg-gray-900 p-3 sm:p-4 rounded-xl overflow-x-auto">
            <pre className="text-green-400 text-xs sm:text-sm">
{`import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.listen(process.env.PORT, () =>
  console.log("Server running")
);`}
            </pre>
          </div>
        </div>
      </section>

      {/* Schema & TypeScript Interface */}
      <section className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 sm:mb-6 text-right">
          🏗️ 3. Schema & TypeScript Interface
        </h2>
        
        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4">
            <h4 className="text-base sm:text-lg font-bold text-gray-700 mb-2 sm:mb-0 text-right">Interface Definition</h4>
            <button
              onClick={() => handleCopy(`import mongoose, { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  tags?: string[];
  createdAt?: Date;
}`, "interface")}
              className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-colors text-xs sm:text-sm cursor-pointer w-full sm:w-auto mt-2 sm:mt-0"
            >
              {copiedStates.interface ? (
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
          <pre className="text-green-600 bg-gray-900 p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`import mongoose, { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  tags?: string[];
  createdAt?: Date;
}`}
          </pre>
          <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-blue-100 rounded-xl">
            <p className="text-right font-medium text-blue-700 text-sm sm:text-base">👉 Interface = Type safety</p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-right">📐 Schema Definition</h3>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4">
            <h4 className="text-base sm:text-lg font-bold text-gray-700 mb-2 sm:mb-0 text-right">Product Schema</h4>
            <button
              onClick={() => handleCopy(`const productSchema = new mongoose.Schema<IProduct>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, min: 0 },
  inStock: { type: Boolean, default: true },
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IProduct>("Product", productSchema);`, "schema")}
              className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-colors text-xs sm:text-sm cursor-pointer w-full sm:w-auto mt-2 sm:mt-0"
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
          <pre className="text-green-600 bg-gray-900 p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
{`const productSchema = new mongoose.Schema<IProduct>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, min: 0 },
  inStock: { type: Boolean, default: true },
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IProduct>("Product", productSchema);`}
          </pre>
          <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-green-100 rounded-xl">
            <p className="text-right font-medium text-green-700 text-sm sm:text-base">👉 Schema = Database validation</p>
          </div>
        </div>
      </section>

      {/* Basic Read Queries */}
      <section className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 sm:mb-6 text-right">
          🟢 4. BASIC READ QUERIES
        </h2>
        
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-blue-50 p-3 sm:p-5 rounded-xl border border-blue-200">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
              <span className="text-blue-400">🔹</span>
              find()
            </h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 sm:mb-3">
              <p className="text-gray-700 text-sm sm:text-base mb-1 sm:mb-0">تمام documents حاصل کریں</p>
              <button
                onClick={() => handleCopy("db.users.find()", "find")}
                className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg transition-colors text-xs sm:text-sm cursor-pointer w-full sm:w-auto"
              >
                {copiedStates.find ? (
                  <>
                    <Check className="size-3 sm:size-4" />
                    <span>کاپی</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3 sm:size-4" />
                    <span>کاپی</span>
                  </>
                )}
              </button>
            </div>
            <div className="bg-gray-900 p-2 sm:p-4 rounded-lg mb-2 sm:mb-3 overflow-x-auto">
              <code className="text-green-400 text-xs sm:text-sm">db.users.find()</code>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm text-right">👉 Collection کے تمام documents</p>
          </div>

          <div className="bg-green-50 p-3 sm:p-5 rounded-xl border border-green-200">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
              <span className="text-green-400">🔹</span>
              findOne()
            </h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 sm:mb-3">
              <p className="text-gray-700 text-sm sm:text-base mb-1 sm:mb-0">مخصوص document حاصل کریں</p>
              <button
                onClick={() => handleCopy(`db.users.findOne({ email: "rana@gmail.com" })`, "findOne")}
                className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg transition-colors text-xs sm:text-sm cursor-pointer w-full sm:w-auto"
              >
                {copiedStates.findOne ? (
                  <>
                    <Check className="size-3 sm:size-4" />
                    <span>کاپی</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3 sm:size-4" />
                    <span>کاپی</span>
                  </>
                )}
              </button>
            </div>
            <div className="bg-gray-900 p-2 sm:p-4 rounded-lg mb-2 sm:mb-3 overflow-x-auto">
              <code className="text-green-400 text-xs sm:text-sm">db.users.findOne({"{ email: \"rana@gmail.com\" }"})</code>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm text-right">👉 پہلا matching document</p>
          </div>

          <div className="bg-purple-50 p-3 sm:p-5 rounded-xl border border-purple-200">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
              <span className="text-purple-400">🔹</span>
              findById()
            </h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 sm:mb-3">
              <p className="text-gray-700 text-sm sm:text-base mb-1 sm:mb-0">ID کے ذریعے document حاصل کریں</p>
              <button
                onClick={() => handleCopy(`User.findById("64fae1b2c3d4e5f6a7b8c9d0")`, "findById")}
                className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg transition-colors text-xs sm:text-sm cursor-pointer w-full sm:w-auto"
              >
                {copiedStates.findById ? (
                  <>
                    <Check className="size-3 sm:size-4" />
                    <span>کاپی</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3 sm:size-4" />
                    <span>کاپی</span>
                  </>
                )}
              </button>
            </div>
            <div className="bg-gray-900 p-2 sm:p-4 rounded-lg mb-2 sm:mb-3 overflow-x-auto">
              <code className="text-green-400 text-xs sm:text-sm">User.findById("64fae1b2c3d4e5f6a7b8c9d0")</code>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm text-right">👉 _id indexed ہوتا ہے → fastest query</p>
          </div>
        </div>
      </section>

      {/* Conditional Filtering */}
      <section className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 sm:mb-6 text-right">
          🟣 5. CONDITIONAL FILTERING
        </h2>
        
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-right">Comparison Operators</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-right font-bold text-blue-700 text-xs sm:text-sm">Operator</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-right font-bold text-blue-700 text-xs sm:text-sm">Description</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-right font-bold text-blue-700 text-xs sm:text-sm">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 font-medium text-right text-xs sm:text-sm">$eq</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-right text-xs sm:text-sm">برابر</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-right text-xs sm:text-sm">{`{ price: { $eq: 50 } }`}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 font-medium text-right text-xs sm:text-sm">$ne</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-right text-xs sm:text-sm">برابر نہیں</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-right text-xs sm:text-sm">{`{ category: { $ne: "Books" } }`}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 font-medium text-right text-xs sm:text-sm">$gt</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-right text-xs sm:text-sm">سے زیادہ</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-right text-xs sm:text-sm">{`{ price: { $gt: 50 } }`}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 font-medium text-right text-xs sm:text-sm">$lt</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-right text-xs sm:text-sm">سے کم</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-right text-xs sm:text-sm">{`{ price: { $lt: 100 } }`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 sm:p-6 rounded-xl border border-yellow-200">
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-right">Examples in Code</h3>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 sm:mb-2">
                <p className="text-gray-700 font-medium text-right text-sm sm:text-base">قیمت 50 سے زیادہ مصنوعات</p>
                <button
                  onClick={() => handleCopy(`const expensiveProducts = await Product.find({ price: { $gt: 50 } });`, "gtExample")}
                  className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg transition-colors text-xs sm:text-sm cursor-pointer w-full sm:w-auto mt-1 sm:mt-0"
                >
                  {copiedStates.gtExample ? (
                    <>
                      <Check className="size-3 sm:size-4" />
                      <span>کاپی</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3 sm:size-4" />
                      <span>کاپی</span>
                    </>
                  )}
                </button>
              </div>
              <div className="bg-gray-900 p-2 sm:p-4 rounded-lg overflow-x-auto">
                <code className="text-green-400 text-xs sm:text-sm">const expensiveProducts = await Product.find({"{ price: { $gt: 50 } }"});</code>
              </div>
            </div>

            <div className="mt-3 sm:mt-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 sm:mb-2">
                <p className="text-gray-700 font-medium text-right text-sm sm:text-base">الیکٹرانکس زمرے میں مصنوعات</p>
                <button
                  onClick={() => handleCopy(`const electronics = await Product.find({ category: "Electronics" });`, "eqExample")}
                  className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg transition-colors text-xs sm:text-sm cursor-pointer w-full sm:w-auto mt-1 sm:mt-0"
                >
                  {copiedStates.eqExample ? (
                    <>
                      <Check className="size-3 sm:size-4" />
                      <span>کاپی</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3 sm:size-4" />
                      <span>کاپی</span>
                    </>
                  )}
                </button>
              </div>
              <div className="bg-gray-900 p-2 sm:p-4 rounded-lg overflow-x-auto">
                <code className="text-green-400 text-xs sm:text-sm">const electronics = await Product.find({"{ category: \"Electronics\" }"});</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Array Queries */}
      <section className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 sm:mb-6 text-right">
          🟤 6. ARRAY QUERIES
        </h2>
        
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-purple-50 p-3 sm:p-5 rounded-xl">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-right">مثالیں</h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 sm:mb-2">
                  <p className="text-gray-700 text-right text-sm sm:text-base">"popular" ٹیگ والی مصنوعات</p>
                  <button
                    onClick={() => handleCopy(`const popularProducts = await Product.find({ tags: "popular" });`, "array1")}
                    className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg transition-colors text-xs sm:text-sm cursor-pointer w-full sm:w-auto mt-1 sm:mt-0"
                  >
                    {copiedStates.array1 ? (
                      <>
                        <Check className="size-3 sm:size-4" />
                        <span>کاپی</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3 sm:size-4" />
                        <span>کاپی</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-900 p-2 sm:p-4 rounded-lg overflow-x-auto">
                  <code className="text-green-400 text-xs sm:text-sm">const popularProducts = await Product.find({"{ tags: \"popular\" }"});</code>
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 sm:mb-2">
                  <p className="text-gray-700 text-right text-sm sm:text-base">تمام ٹیگز والی مصنوعات</p>
                  <button
                    onClick={() => handleCopy(`const multiTagged = await Product.find({ tags: { $all: ["popular", "new"] } });`, "array2")}
                    className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg transition-colors text-xs sm:text-sm cursor-pointer w-full sm:w-auto mt-1 sm:mt-0"
                  >
                    {copiedStates.array2 ? (
                      <>
                        <Check className="size-3 sm:size-4" />
                        <span>کاپی</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3 sm:size-4" />
                        <span>کاپی</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-900 p-2 sm:p-4 rounded-lg overflow-x-auto">
                  <code className="text-green-400 text-xs sm:text-sm">const multiTagged = await Product.find({"{ tags: { $all: [\"popular\", \"new\"] } }"});</code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-3 sm:p-5 rounded-xl">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-right">Array Operators</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-right font-bold text-green-700 text-xs sm:text-sm">Operator</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-right font-bold text-green-700 text-xs sm:text-sm">Description</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-right font-bold text-green-700 text-xs sm:text-sm">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-green-50">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 font-medium text-right text-xs sm:text-sm">$in</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-right text-xs sm:text-sm">ایری میں کوئی بھی قدر</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-right text-xs sm:text-sm">{`{ category: { $in: ["Books", "Electronics"] } }`}</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 font-medium text-right text-xs sm:text-sm">$nin</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-right text-xs sm:text-sm">ایری میں کوئی قدر نہیں</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-right text-xs sm:text-sm">{`{ category: { $nin: ["Clothing"] } }`}</td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 font-medium text-right text-xs sm:text-sm">$all</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-right text-xs sm:text-sm">تمام مخصوص عناصر</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-right text-xs sm:text-sm">{`{ tags: { $all: ["popular", "new"] } }`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Performance & Debugging */}
      <section className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 sm:mb-6 text-right">
          ⚙️ 7. PERFORMANCE & DEBUGGING
        </h2>
        
        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-right">Explain Query</h3>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4">
            <p className="text-gray-700 text-right text-sm sm:text-base mb-1 sm:mb-0">کوئری کی کارکردگی کا تجزیہ</p>
            <button
              onClick={() => handleCopy(`db.users.find({ email: "rana@gmail.com" }).explain("executionStats")`, "explain")}
              className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-colors text-xs sm:text-sm cursor-pointer w-full sm:w-auto mt-2 sm:mt-0"
            >
              {copiedStates.explain ? (
                <>
                  <Check className="size-3 sm:size-4" />
                  <span>کاپی</span>
                </>
              ) : (
                <>
                  <Copy className="size-3 sm:size-4" />
                  <span>کوڈ کاپی کریں</span>
                </>
              )}
            </button>
          </div>
          <div className="bg-gray-900 p-2 sm:p-4 rounded-lg mb-3 sm:mb-4 overflow-x-auto">
            <code className="text-green-400 text-xs sm:text-sm">db.users.find({"{ email: \"rana@gmail.com\" }"}).explain("executionStats")</code>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
            <div className="p-3 sm:p-4 bg-green-100 rounded-xl">
              <h5 className="font-bold text-green-700 text-right text-sm sm:text-base">IXSCAN</h5>
              <p className="text-gray-600 text-right text-xs sm:text-sm">Index استعمال ہوا</p>
            </div>
            <div className="p-3 sm:p-4 bg-red-100 rounded-xl">
              <h5 className="font-bold text-red-700 text-right text-sm sm:text-base">COLLSCAN</h5>
              <p className="text-gray-600 text-right text-xs sm:text-sm">سست سکین</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-On Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 border-2 border-dashed border-blue-300 mb-6 sm:mb-8">
  <h2 className="text-xl sm:text-3xl font-bold text-blue-700 mb-4 sm:mb-6 text-center">
    🏗️ Hands-On: Build a RESTful API with MongoDB and TypeScript
  </h2>
  <p className="text-base sm:text-xl text-gray-700 mb-4 sm:mb-8 text-center" dir="rtl">
    اب آپ MongoDB کی طاقتور کوئریز کو عملی شکل دیں!
  </p>
  
  <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
    <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-right">
      عملی کام:
    </h3>
    <div className="space-y-4 sm:space-y-6">
      
      {/* 1. Product API */}
      <div className="bg-white p-3 sm:p-4 rounded-xl border border-blue-200 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-bold text-gray-800 text-right text-sm sm:text-base">1. Product API بنائیں</h4>
          <button
            onClick={() => handleCopy(`// Product Controller Example
import { Request, Response } from 'express';
import Product from '../models/Product';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};`, "productApi")}
            className="flex items-center justify-center gap-1 sm:gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg transition-colors text-xs sm:text-sm cursor-pointer"
          >
            {copiedStates.productApi ? (
              <>
                <Check className="size-3 sm:size-4" />
                <span>کاپی ہو گیا</span>
              </>
            ) : (
              <>
                <Copy className="size-3 sm:size-4" />
                <span>مثال کاپی کریں</span>
              </>
            )}
          </button>
        </div>
        <p className="text-gray-600 text-right text-xs sm:text-sm mb-3" dir="rtl">CRUD آپریشنز کے ساتھ</p>
        <div className="bg-gray-900 p-3 sm:p-4 rounded-lg overflow-x-auto">
          <pre className="text-green-400 text-xs sm:text-sm">
{`// Product Controller Example
import { Request, Response } from 'express';
import Product from '../models/Product';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};`}
          </pre>
        </div>
      </div>

      {/* 2. Advanced Filters */}
      <div className="bg-white p-3 sm:p-4 rounded-xl border border-green-200 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-bold text-gray-800 text-right text-sm sm:text-base">2. Advanced Filters شامل کریں</h4>
          <button
            onClick={() => handleCopy(`// Advanced Filtering Example
const getFilteredProducts = async (req: Request, res: Response) => {
  const { minPrice, maxPrice, category, inStock } = req.query;
  
  const filter: any = {};
  
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }
  
  if (category) filter.category = category;
  if (inStock !== undefined) filter.inStock = inStock === 'true';
  
  const products = await Product.find(filter);
  res.json(products);
};`, "filterApi")}
            className="flex items-center justify-center gap-1 sm:gap-2 bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg transition-colors text-xs sm:text-sm cursor-pointer"
          >
            {copiedStates.filterApi ? (
              <>
                <Check className="size-3 sm:size-4" />
                <span>کاپی ہو گیا</span>
              </>
            ) : (
              <>
                <Copy className="size-3 sm:size-4" />
                <span>مثال کاپی کریں</span>
              </>
            )}
          </button>
        </div>
        <p className="text-gray-600 text-right text-xs sm:text-sm mb-3" dir="rtl">قیمت، زمرہ، دستیابی کے مطابق</p>
        <div className="bg-gray-900 p-3 sm:p-4 rounded-lg overflow-x-auto">
          <pre className="text-green-400 text-xs sm:text-sm">
{`// Advanced Filtering Example
const getFilteredProducts = async (req: Request, res: Response) => {
  const { minPrice, maxPrice, category, inStock } = req.query;
  
  const filter: any = {};
  
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }
  
  if (category) filter.category = category;
  if (inStock !== undefined) filter.inStock = inStock === 'true';
  
  const products = await Product.find(filter);
  res.json(products);
};`}
          </pre>
        </div>
      </div>

      {/* 3. Pagination and Sorting */}
      <div className="bg-white p-3 sm:p-4 rounded-xl border border-purple-200 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-bold text-gray-800 text-right text-sm sm:text-base">3. Pagination اور Sorting</h4>
          <button
            onClick={() => handleCopy(`// Pagination and Sorting Example
const getPaginatedProducts = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const sortBy = req.query.sortBy as string || 'createdAt';
  const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;
  
  const skip = (page - 1) * limit;
  
  const products = await Product.find()
    .sort({ [sortBy]: sortOrder })
    .skip(skip)
    .limit(limit);
    
  const total = await Product.countDocuments();
  
  res.json({
    products,
    page,
    totalPages: Math.ceil(total / limit),
    totalProducts: total
  });
};`, "paginationApi")}
            className="flex items-center justify-center gap-1 sm:gap-2 bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg transition-colors text-xs sm:text-sm cursor-pointer"
          >
            {copiedStates.paginationApi ? (
              <>
                <Check className="size-3 sm:size-4" />
                <span>کاپی ہو گیا</span>
              </>
            ) : (
              <>
                <Copy className="size-3 sm:size-4" />
                <span>مثال کاپی کریں</span>
              </>
            )}
          </button>
        </div>
        <p className="text-gray-600 text-right text-xs sm:text-sm mb-3" dir="rtl">صارف دوست ڈیٹا presentation</p>
        <div className="bg-gray-900 p-3 sm:p-4 rounded-lg overflow-x-auto">
          <pre className="text-green-400 text-xs sm:text-sm">
{`// Pagination and Sorting Example
const getPaginatedProducts = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const sortBy = req.query.sortBy as string || 'createdAt';
  const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;
  
  const skip = (page - 1) * limit;
  
  const products = await Product.find()
    .sort({ [sortBy]: sortOrder })
    .skip(skip)
    .limit(limit);
    
  const total = await Product.countDocuments();
  
  res.json({
    products,
    page,
    totalPages: Math.ceil(total / limit),
    totalProducts: total
  });
};`}
          </pre>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-300 space-y-3 sm:space-y-0">
        <button 
          onClick={() => window.history.back()}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white hover:bg-gray-700 rounded-xl transition-colors font-medium text-sm sm:text-base cursor-pointer w-full sm:w-auto text-center"
        >
          ← پیچھے جائیں
        </button>
        <div className="text-gray-600 text-xs sm:text-sm text-center sm:text-right">
          مکمل شدہ: MongoDB Advanced Querying
        </div>
      </div>
    </div>
  );
}