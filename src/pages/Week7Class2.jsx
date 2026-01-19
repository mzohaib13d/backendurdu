// Week7Class2.jsx - iPhone 12/14 Optimized (Full Content)
import React, { useState } from "react";
import {
  Copy,
  Check,
  Filter,
  Search,
  SortAsc,
  Layers,
  Database,
  Server,
  List,
} from "lucide-react";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Week7Class2 = () => {
  const [copiedCode, setCopiedCode] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successPosition, setSuccessPosition] = useState({ top: 0, left: 0 });

  const handleCopyCode = (code, section, event) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(section);

    const buttonRect = event.currentTarget.getBoundingClientRect();
    setSuccessPosition({
      top: buttonRect.top - 60,
      left: buttonRect.left + buttonRect.width / 2 - 40,
    });
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 2000);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  // صارف کی ضروریات (Complete)
  const userNeeds = [
    { icon: "📄", title: "ڈیٹا کے چھوٹے حصے", description: "پیجینیشن" },
    { icon: "🔍", title: "مخصوص اشیاء کی تلاش", description: "سرچنگ" },
    { icon: "🎯", title: "زمرے کے لحاظ سے فلٹر", description: "فلٹرنگ" },
    { icon: "📊", title: "ترتیب دینے کی صلاحیت", description: "سارٹنگ" },
  ];

  // کوئری پیرامیٹرز (Complete)
  const queryParams = [
    { param: "page", meaning: "موجودہ صفحہ نمبر", example: "?page=2" },
    { param: "limit", meaning: "فی صفحہ اشیاء کی تعداد", example: "&limit=10" },
    {
      param: "search",
      meaning: "نام یا تفصیل میں تلاش",
      example: "&search=جوتے",
    },
    {
      param: "category",
      meaning: "زمرے کے لحاظ سے فلٹر",
      example: "&category=مرد",
    },
    { param: "sort", meaning: "نتائج کی ترتیب", example: "&sort=price_desc" },
  ];

  // تمام کوڈ سیکشنز (Complete - Untrimmed)
  const codeSections = [
    {
      id: "query-params-url",
      title: "🌐 کوئری پیرامیٹرز والا URL",
      code: `GET /products?page=2&limit=5&search=جوتے&category=مرد&sort=price_desc

تشریح:
page=2      → صفحہ نمبر 2
limit=5     → 5 اشیاء فی صفحہ  
search=جوتے  → "جوتے" کی تلاش
category=مرد → صرف مردوں کے لیے
sort=price_desc → قیمت کے لحاظ سے نزولی ترتیب`,
    },
    {
      id: "pagination-controller",
      title: "🏗 پیجینیشن کنٹرولر",
      code: `export const getProducts = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const skip = (page - 1) * limit;

  const products = await Product.find()
    .skip(skip)
    .limit(limit);

  const total = await Product.countDocuments();

  res.json({
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    totalItems: total,
    data: products,
  });
};`,
    },
    {
      id: "search-logic",
      title: "🔍 سرچ منطق",
      code: `const search = req.query.search as string;
const query: any = {};

if (search) {
  query.name = { 
    $regex: search, 
    $options: "i"  // کیس-انسیں سٹیو
  };
}

const products = await Product.find(query)
  .skip(skip)
  .limit(limit);

// $regex → جزوی مماثلت کی اجازت دیتا ہے
// $options: "i" → بڑے/چھوٹے حروف کا فرق نہیں کرتا`,
    },
    {
      id: "filter-logic",
      title: "🧩 فلٹرز",
      code: `const category = req.query.category as string;
const minPrice = parseFloat(req.query.minPrice as string);
const maxPrice = parseFloat(req.query.maxPrice as string);

if (category) query.category = category;

if (minPrice && maxPrice) {
  query.price = { 
    $gte: minPrice,  // سے بڑا یا برابر
    $lte: maxPrice   // سے چھوٹا یا برابر
  };
}

const products = await Product.find(query)
  .skip(skip)
  .limit(limit);`,
    },
    {
      id: "sorting-logic",
      title: "🔢 سارٹنگ",
      code: `const sort = req.query.sort as string; // مثال: price_asc, price_desc

let sortOption: any = {};

if (sort === "price_asc") sortOption.price = 1;      
else if (sort === "price_desc") sortOption.price = -1; 
else if (sort === "date_desc") sortOption.createdAt = -1;

const products = await Product.find(query)
  .sort(sortOption)      
  .skip(skip)
  .limit(limit);

// 1  → چڑھتی ترتیب (Ascending)
// -1 → اترتی ترتیب (Descending)`,
    },
    {
      id: "combined-example",
      title: "📌 مشترکہ مثال",
      code: `const page = parseInt(req.query.page as string) || 1;
const limit = parseInt(req.query.limit as string) || 10;
const skip = (page - 1) * limit;

const search = req.query.search as string;
const category = req.query.category as string;
const sort = req.query.sort as string;

const query: any = {};

if (search) query.name = { $regex: search, $options: "i" };
if (category) query.category = category;

let sortOption: any = {};
if (sort === "price_asc") sortOption.price = 1;
else if (sort === "price_desc") sortOption.price = -1;

const products = await Product.find(query)
  .sort(sortOption)
  .skip(skip)
  .limit(limit);

const total = await Product.countDocuments(query);

res.json({
  page,
  limit,
  totalPages: Math.ceil(total / limit),
  totalItems: total,
  data: products,
});`,
    },
    {
      id: "postman-testing",
      title: "🧪 Postman ٹیسٹنگ",
      code: `GET /products?page=1&limit=5&search=جوتے&category=مرد&sort=price_asc

مثالیں:
1. /products?page=1&limit=10
2. /products?search=لیپ ٹاپ&category=الیکٹرانکس
3. /products?minPrice=1000&maxPrice=5000
4. /products?page=2&limit=20&sort=date_desc`,
    },
    {
      id: "best-practices",
      title: "✅ بہترین طریقے",
      code: `1. ڈیفالٹ page اور limit
2. کوئری پیرامیٹرز validate کریں
3. limit = 50 تک محدود کریں
4. سرچ کے لیے indexes بنائیں
5. totalPages اور totalItems return کریں
6. تمام optional parameters`,
    },
  ];

  // MongoDB Operators (Complete)
  const mongoOperators = [
    {
      operator: "$regex",
      purpose: "جزوی مماثلت",
      example: "جوتا → جوتے، جوتوں",
    },
    {
      operator: "$gte",
      purpose: "سے بڑا یا برابر",
      example: "price: { $gte: 1000 }",
    },
    {
      operator: "$lte",
      purpose: "سے چھوٹا یا برابر",
      example: "price: { $lte: 5000 }",
    },
    { operator: "$gt", purpose: "سے بڑا", example: "price: { $gt: 1000 }" },
    { operator: "$lt", purpose: "سے چھوٹا", example: "price: { $lt: 5000 }" },
    {
      operator: "$in",
      purpose: "ارے میں موجود",
      example: 'category: { $in: ["مرد", "خواتین"] }',
    },
  ];

  // استعمال کے معاملات (Complete)
  const useCases = [
    "ای کامرس ایپس",
    "ایڈمن ڈیش بورڈز",
    "بلاگ لسٹنگ APIs",
    "SaaS پلیٹ فارمز",
    "صارفین کی فہرست",
    "آرڈر ہسٹری",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-3 md:p-6 font-urdu text-[13px] md:text-base leading-[1.4]">
      {/* Mobile Success Toast - Fixed width */}
      {showSuccess && (
        <div
          className="fixed z-50 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-2 animate-slide-in-right md:right-12 right-2 top-16 md:top-24"
          style={{
            left: `${successPosition.left}px`,
            top: `${successPosition.top}px`,
            transform: "translateX(-50%)",
            width: "auto",
            minWidth: "140px",
            maxWidth: "200px",
            whiteSpace: "nowrap"
          }}
        >
          <Check className="w-4 h-4 flex-shrink-0" />
          <span className="font-semibold text-sm">
            کوڈ کاپی ہو گیا!
          </span>
        </div>
      )}

      <div className="max-w-full mx-auto">
        {/* Compact Header */}
        <header className="mb-6 md:mb-10 text-center px-1 md:px-2">
          <div className="relative inline-block mb-3 md:mb-4">
            <h1
              className="py-5 md:py-6 px-2 md:px-4 text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent text-center"
              style={{
                lineHeight: "1.8",
                wordBreak: "break-word",
                whiteSpace: "normal",
              }}
            >
              📄 پیجینیشن، فلٹرنگ اور سارٹنگ
            </h1>
            <div className="relative top-2 md:top-3 w-full max-w-[240px] md:max-w-[280px] md:w-64 mx-auto h-1 md:h-1.5 rounded-full overflow-hidden">
              <div className="absolute h-full w-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 animate-progress-bar rounded-full"></div>
            </div>
            <p
              className="py-1 md:py-2 text-sm md:text-base text-gray-700 font-medium mt-2 mb-1 md:mb-2"
              style={{ fontFamily: "Verdana, sans-serif" }}
            >
              Instructor: Zohaib Farooq
            </p>
            <div className="inline-block px-2 md:px-3 py-1 md:py-1.5 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full font-semibold text-xs md:text-sm border border-amber-200">
              ہفتہ 7 - کلاس 2: مکمل گائیڈ
            </div>
          </div>
        </header>

        {/* تعارف - Mobile Optimized */}
        <section className="bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl shadow-sm md:shadow-xl p-4 md:p-6 mb-6 md:mb-8 border border-gray-200">
          <div className="flex items-start gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-2 md:p-3 rounded-lg md:rounded-xl flex-shrink-0">
              <Layers className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3 leading-tight">
                🧠 تعارف
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4 md:mb-0">
                جب APIs بناتے ہیں جو بڑے ڈیٹاسیٹس واپس کرتی ہیں، تو ایک ساتھ
                سارا ڈیٹا بھیجنا غیر موثر ہوتا ہے۔
              </p>
            </div>
          </div>

          <div className="mt-4 md:mt-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
              <List className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
              صارفین کو عام طور پر ضرورت ہوتی ہے:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
              {userNeeds.map((need, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg md:rounded-xl p-3 md:p-4 border border-amber-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-2 md:gap-3">
                    <span className="text-xl md:text-2xl mt-1 flex-shrink-0">
                      {need.icon}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-bold text-amber-800 mb-1 text-sm md:text-base leading-tight">
                        {need.title}
                      </h4>
                      <p className="text-gray-700 text-xs md:text-sm">
                        {need.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 md:mt-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg md:rounded-xl p-4 md:p-5 border border-amber-300">
            <h3 className="font-bold text-gray-800 mb-2 md:mb-3 text-base">
              اس گائیڈ میں شامل ہیں:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 text-sm">
              {[
                "کوئری پیرامیٹرز (?page=1&limit=10)",
                "پیجینیشن منطق (.skip().limit())",
                "کلیدی الفاظ کے ساتھ سرچنگ ($regex)",
                "فیلڈز کے لحاظ سے فلٹرنگ ($gte, $lte)",
                "نتائج کی ترتیب (.sort())",
                "Postman کے ساتھ ٹیسٹنگ",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 py-1">
                  <span className="text-amber-600 mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-xs md:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* کوئری پیرامیٹرز - Mobile Table */}
        <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl md:rounded-2xl shadow-sm md:shadow-xl p-5 md:p-8 mb-6 md:mb-8 border border-orange-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-2">
            <Database className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
            🌐 کوئری پیرامیٹرز
          </h2>

          <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-5 mb-4 md:mb-6 border border-orange-300">
            <p className="text-gray-700 text-sm md:text-lg mb-3 md:mb-4 leading-relaxed">
              APIs اکثر پیجینیشن، فلٹرنگ اور سارٹنگ کے لیے کوئری پیرامیٹرز قبول
              کرتی ہیں۔
            </p>

            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg md:rounded-lg p-3 md:p-4 mb-3 md:mb-4 overflow-hidden">
              <code className="text-white font-mono text-sm md:text-lg font-bold block break-all text-left">
                GET
                /products?page=2&limit=5&search=جوتے&category=مرد&sort=price_desc
              </code>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-50 rounded-lg md:rounded-lg overflow-hidden text-xs md:text-sm">
                <thead className="bg-gradient-to-r from-amber-600 to-orange-500 text-white">
                  <tr>
                    <th className="py-2 px-2 md:py-4 md:px-4 md:px-6 text-right font-bold text-xs md:text-lg">
                      پیرامیٹر
                    </th>
                    <th className="py-2 px-2 md:py-4 md:px-4 md:px-6 text-right font-bold text-xs md:text-lg">
                      معنی
                    </th>
                    <th className="py-2 px-2 md:py-4 md:px-4 md:px-6 text-right font-bold text-xs md:text-lg">
                      مثال
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {queryParams.map((param, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="py-2 px-2 md:py-3 md:px-4 md:px-6 font-medium text-amber-800 text-xs md:text-base">
                        {param.param}
                      </td>
                      <td className="py-2 px-2 md:py-3 md:px-4 md:px-6 text-gray-700 text-xs md:text-base">
                        {param.meaning}
                      </td>
                      <td className="py-2 px-2 md:py-3 md:px-4 md:px-6 text-xs md:text-base">
                        <div className="bg-amber-100 rounded px-2 py-1 md:rounded-lg md:p-2">
                          <code className="text-amber-800 font-mono text-xs md:text-sm break-all">
                            {param.example}
                          </code>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* تمام کوڈ سیکشنز - Single Column Mobile */}
        <section className="mb-8 md:mb-10">
          <h2 
            className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center bg-gradient-to-r from-amber-600 to-red-500 bg-clip-text text-transparent px-2 break-words"
            style={{
              lineHeight: '1.8',
              wordBreak: 'break-word',
              whiteSpace: 'normal'
            }}
          >
            💻 کوڈ نمونے اور نفاذ
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {codeSections.map((section) => (
              <div
                key={section.id}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden border border-gray-700 hover:border-amber-500 transition-all relative max-w-full"
              >
                <div className="bg-gradient-to-r from-amber-600 to-red-500 px-3 md:px-6 py-3 md:py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 md:gap-0">
                  <h3 className="text-lg md:text-xl font-bold text-white flex-1 pr-0 md:pr-2 break-words leading-relaxed">
                    {section.title}
                  </h3>
                  <button
                    onClick={(e) => handleCopyCode(section.code, section.id, e)}
                    className={`flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all text-xs md:text-sm relative flex-shrink-0 min-w-[80px] justify-center ${
                      copiedCode === section.id
                        ? "bg-green-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {copiedCode === section.id ? (
                      <>
                        <Check className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="hidden sm:inline">کاپی ہو گیا</span>
                        <span className="sm:hidden">کاپی</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="hidden sm:inline">کوڈ کاپی کریں</span>
                        <span className="sm:hidden">کاپی</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-4 md:p-6 max-h-96 md:max-h-80 overflow-y-auto">
                  <pre 
  className="text-gray-300 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto bg-gray-900/50 p-3 md:p-4 rounded-lg"
  dir={section.id === "best-practices" ? "rtl" : "ltr"}
  style={section.id === "best-practices" ? { textAlign: "right" } : { textAlign: "left" }}
>
                    {section.code}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MongoDB آپریٹرز - Mobile Grid */}
        <section className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl md:rounded-2xl shadow-sm md:shadow-xl p-5 md:p-8 mb-6 md:mb-8 border border-red-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-2">
            <Server className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
            🛠️ MongoDB آپریٹرز
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {mongoOperators.map((operator, index) => (
              <div
                key={index}
                className="bg-white rounded-lg md:rounded-xl p-4 md:p-5 border border-red-300 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2 md:mb-3 gap-2">
                  <div className="bg-gradient-to-r from-red-100 to-pink-100 px-2 md:px-3 py-1 md:py-1 rounded-lg flex-shrink-0">
                    <code className="font-bold text-red-700 text-xs md:text-sm">
                      {operator.operator}
                    </code>
                  </div>
                  <span className="text-lg md:text-xl">🔧</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base leading-tight">
                  {operator.purpose}
                </h4>
                <div className="bg-gray-900 rounded-lg p-2 md:p-2">
                  <code className="text-red-300 font-mono text-xs md:text-sm text-left" dir="ltr">
                    {operator.example}
                  </code>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 md:mt-8 p-4 md:p-5 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg md:rounded-xl border border-red-300">
            <div className="flex items-start gap-3">
              <div className="bg-red-500 text-white p-2 md:p-3 rounded-lg flex-shrink-0">
                📝
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">
                  پیجینیشن کی اہم اصطلاحات:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
                  <div className="space-y-2">
                    <p>
                      <span className="font-bold text-red-700">skip:</span> کتنے
                      دستاویزات چھوڑنے ہیں
                    </p>
                    <p>
                      <span className="font-bold text-red-700">limit:</span> فی
                      صفحہ کتنے دستاویزات
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p>
                      <span className="font-bold text-red-700">
                        totalPages:
                      </span>{" "}
                      صفحات کی کل تعداد
                    </p>
                    <p>
                      <span className="font-bold text-red-700">
                        totalItems:
                      </span>{" "}
                      اشیاء کی کل تعداد
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* فوائد اور استعمال - Mobile */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl md:rounded-2xl shadow-sm md:shadow-xl p-5 md:p-8 mb-6 md:mb-8 border border-amber-300">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-2">
            <Filter className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
            🏁 فوائد اور خلاصہ
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="space-y-3 md:space-y-4">
              <h3 className="font-bold text-gray-800 text-base md:text-lg leading-tight">
                پیجینیشن، فلٹرنگ اور سارٹنگ کے ساتھ:
              </h3>
              <div className="space-y-2 md:space-y-3 text-sm md:text-base">
                {[
                  "صارفین بڑے ڈیٹاسیٹس کو موثر طریقے سے نیویگیٹ کر سکتے ہیں",
                  "APIs تیز اور اسکیل ایبل رہتی ہیں",
                  "فرنٹ اینڈ کو بالکل وہی چیز مانگ سکتا ہے جس کی اسے ضرورت ہے",
                  "سرچ، فلٹرز اور سارٹنگ کو ملا کر لچکدار سوالات بنا سکتے ہیں",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-1.5 md:p-2 rounded-full mt-1 md:mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg md:rounded-xl p-4 md:p-5 border border-orange-400">
              <h3 className="font-bold text-gray-800 mb-3 md:mb-4 text-base">
                یہ بنیادی خصوصیت ہے:
              </h3>
              <div className="space-y-2 text-sm">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center gap-2 py-1">
                    <SortAsc className="w-4 h-4 md:w-5 md:h-5 text-orange-600 flex-shrink-0" />
                    <span className="text-gray-700">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
            <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 border border-amber-300 text-center">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 text-lg md:text-2xl">
                ⚡
              </div>
              <h4 className="font-bold text-amber-800 mb-1 text-sm md:text-base">
                کارکردگی
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                بڑے ڈیٹا کو چھوٹے حصوں میں تقسیم کرتا ہے
              </p>
            </div>

            <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 border border-orange-300 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 text-lg md:text-2xl">
                🔍
              </div>
              <h4 className="font-bold text-orange-800 mb-1 text-sm md:text-base">
                تلاش
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                مطلوبہ ڈیٹا تک تیزی سے رسائی
              </p>
            </div>

            <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 border border-red-300 text-center">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 text-lg md:text-2xl">
                📊
              </div>
              <h4 className="font-bold text-red-800 mb-1 text-sm md:text-base">
                ترتیب
              </h4>
              <p className="text-gray-700 text-xs md:text-sm">
                ڈیٹا کو منطقی ترتیب میں پیش کرتا ہے
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-gray-300 text-center text-gray-600 bg-white rounded-xl md:rounded-2xl shadow-sm md:shadow-xl p-6 md:p-8">
          <p className="mb-2 md:mb-3 text-sm md:text-base" dir="rtl">
            <span className="font-semibold bg-gradient-to-r from-amber-600 to-red-500 bg-clip-text text-transparent">
              ہفتہ 7 کلاس 2
            </span>{" "}
            | پیجینیشن، فلٹرنگ اور سارٹنگ
          </p>
          <p className="text-xs md:text-sm mb-3 md:mb-4">
            تمام کوڈ نمونے پروڈکشن ریڈی ہیں اور براہ راست استعمال کیے جا سکتے
            ہیں
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500">
            <div className="flex items-center justify-center gap-1">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-amber-500 to-red-500 rounded-full"></div>
              <span>امرود سے لال گرےڈیئنٹ</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Copy className="w-3 h-3 md:w-4 md:h-4" />
              <span>کوڈ کاپی بٹنز</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Mobile Optimized Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap");

        .font-urdu {
          font-family: "Noto Nastaliq Urdu", serif;
          direction: rtl;
          line-height: 1.4;
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
          word-break: break-word;
        }

        table td,
        table th {
          text-align: right;
        }

        /* iPhone Specific */
        @media (max-width: 414px) {
          .font-urdu {
            font-size: 13px;
          }
          pre {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
};

export default Week7Class2;