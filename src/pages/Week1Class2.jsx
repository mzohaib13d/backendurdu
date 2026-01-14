import React, { useState } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Week1Class2() {
  const [copiedSections, setCopiedSections] = useState({});

  const handleCopy = (sectionId, code) => {
    navigator.clipboard.writeText(code);
    setCopiedSections(prev => ({ ...prev, [sectionId]: true }));
    
    setTimeout(() => {
      setCopiedSections(prev => ({ ...prev, [sectionId]: false }));
    }, 2000);
  };

  const CodeBlock = ({ id, title, language, code }) => (
    <div className="relative group mt-12">
      {/* Copy Button - Fixed position with margin-top */}
      <div className="absolute right-0 top-0 z-10 -translate-y-full">
        <button
          onClick={() => handleCopy(id, code)}
          className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm mt-5 mobile-copy-btn"
        >
          <span>📋</span>
          <span className="hidden sm:inline">کاپی کریں</span>
        </button>
      </div>
      
      {/* Confirmation Message */}
      {copiedSections[id] && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-16 z-20 animate-fly-up">
          <div className="bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm">
            <span>✅</span>
            <span>کاپی ہو گیا!</span>
          </div>
        </div>
      )}
      
      {/* Code Block - Improved responsiveness */}
      <div className="bg-gray-800 text-white p-3 sm:p-4 rounded-xl font-mono overflow-x-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
          <span className="text-green-400 font-bold text-sm sm:text-base break-words mobile-code-title">{title}</span>
          <span className="text-yellow-300 text-xs sm:text-sm whitespace-nowrap mobile-code-language">{language}</span>
        </div>
        <pre className="whitespace-pre-wrap text-xs sm:text-sm md:text-base break-words overflow-x-auto max-w-full mobile-code-pre">
          {code}
        </pre>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 py-4 px-2 sm:py-8 sm:px-4 overflow-x-hidden mobile-main">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 lg:p-12 overflow-hidden mobile-container">
           <ScrollToTopButton />
        <header className="mb-6 sm:mb-10 text-center border-b pb-4 sm:pb-8 mobile-header">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-blue-900 leading-tight break-words mobile-main-title">
            🧩 بنیادی TypeScript Syntax: ٹائپس، انٹرفیسز، اور ٹائپ سیفٹی
          </h1>
          <p className="text-base sm:text-lg text-gray-700 font-medium mobile-instructor">Instructor: Zohaib Farooq</p>
          <div className="mt-4 sm:mt-6 inline-block px-3 sm:px-4 md:px-6 py-1 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg shadow-lg mobile-week-badge">
            Week 1 - Class 2: TypeScript Syntax
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-blue-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧠 TypeScript کیا ہے؟
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed mobile-section-text">
            TypeScript JavaScript کا ایک superset ہے جو static typing اور compile time پر ٹائپ چیکنگ کا اضافہ کرتا ہے۔
          </p>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 sm:mb-6 leading-relaxed mobile-section-text">
            👉 یہ ڈویلپرز کو ابتدائی مرحلے پر ہی غلطیاں پکڑنے میں مدد کرتا ہے — کوڈ چلنے سے پہلے ہی۔
          </p>
          
          <CodeBlock
            id="js-vs-ts"
            title="JavaScript بمقابلہ TypeScript"
            language="typescript"
            code={`// JavaScript
let age = 25;
age = "twenty five"; // ❌ Run time تک غلطی نہیں آتی

// TypeScript
let age: number = 25;
age = "twenty five"; // 🚫 غلطی: Type 'string' کو type 'number' پر assign نہیں کیا جا سکتا`}
          />
          
          <div className="mt-6 p-4 sm:p-6 bg-green-100 border-l-4 border-green-500 rounded-xl mobile-highlight">
            <p className="text-green-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">✅</span>
              <span>TypeScript یہ غلطی execution سے پہلے ہی پکڑ لیتا ہے، ٹائپ سیفٹی کو یقینی بناتا ہے۔</span>
            </p>
          </div>
        </section>

        {/* Basic TypeScript Syntax */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-green-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧩 بنیادی TypeScript Syntax
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            TypeScript آپ کو explicit types کے ساتھ variables declare کرنے دیتا ہے — جس سے آپ کا کوڈ محفوظ اور self-documenting ہو جاتا ہے۔
          </p>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            جب آپ کوئی value assign کرتے ہیں، تو TypeScript خود بخود اس کی type کا اندازہ لگا لیتا ہے۔ تاہم، بہتر clarity اور safety کے لیے، آپ explicit طور پر type define کر سکتے ہیں جیسا کہ نیچے دکھایا گیا ہے۔
          </p>
        </section>

        {/* Primitive Types */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-orange-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧩 Primitive Types
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            Primitive types بنیادی ڈیٹا ٹائپس ہیں جو single value رکھتی ہیں۔ ان میں شامل ہیں: string, number, boolean, bigint, symbol, null, اور undefined۔
          </p>
          
          <CodeBlock
            id="primitive-types"
            title="Primitive Types کی مثال"
            language="typescript"
            code={`let firstName: string = "Waqar";
let age: number = 22;
let isDeveloper: boolean = true;
let largeNumber: bigint = 1234567890123456789012345678901234567890n;
let symbolValue: symbol = Symbol("id");
let emptyValue: null = null;
let emptyValue2: undefined = undefined;
let futureValue2: any = "Hello";
futureValue2 = "Hello";
futureValue2 = true;`}
          />
          
          <div className="overflow-x-auto mobile-table-container mt-6">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-orange-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">ٹائپ</th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">تفصیل</th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">مثال</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  ['string', 'ٹیکسٹ values کی نمائندگی کرتا ہے', '"Waqar", "Hello"'],
                  ['number', 'integers اور floating-point نمبروں کی نمائندگی کرتا ہے', '25, 3.14'],
                  ['boolean', 'منطقی values (true/false) کی نمائندگی کرتا ہے', 'true, false'],
                  ['bigint', 'بہت بڑے integers کو ظاہر کرتا ہے', '12345678901234567890n'],
                  ['symbol', 'unique values کی نمائندگی کرتا ہے، اکثر object keys کے طور پر استعمال ہوتا ہے', 'Symbol("id")'],
                  ['null', 'کسی value کے جان بوجھ کر غیر موجود ہونے کی نمائندگی کرتا ہے', 'null'],
                  ['undefined', 'uninitialized variables کی نمائندگی کرتا ہے', 'undefined'],
                  ['any', 'ٹائپ چیکنگ کو disable کرتا ہے — کسی بھی ٹائپ کو hold کر سکتا ہے', '"Hello", 42, true'],
                ].map(([type, description, example], index) => (
                  <tr key={index} className="hover:bg-orange-50 mobile-table-row">
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono font-bold text-center text-xs sm:text-sm mobile-table-cell">{type}</td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">{description}</td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono text-xs sm:text-sm mobile-table-cell">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* any Type Warning */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-red-50 to-pink-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-red-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            ⚠️ any ٹائپ — احتیاط سے استعمال کریں
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            <code>any</code> TypeScript کو بتاتا ہے کہ اس variable کے لیے ٹائپ چیکنگ بند کر دے۔
          </p>
          
          <CodeBlock
            id="any-type"
            title="any ٹائپ کی مثال"
            language="typescript"
            code={`let randomValue: any = "Waqar";
randomValue = 123;     // ✅ ٹھیک ہے
randomValue = true;    // ✅ ٹھیک ہے`}
          />
          
          <div className="mt-6 p-4 sm:p-6 bg-red-100 border-l-4 border-red-500 rounded-xl mobile-highlight">
            <p className="text-red-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">💡</span>
              <span>یہ JavaScript سے migration کے دوران یا جب ٹائپ نامعلوم ہو تو مفید ہے، لیکن اس سے بچنے کی کوشش کریں — یہ TypeScript استعمال کرنے کے مقصد کو ناکام کر دیتا ہے۔</span>
            </p>
          </div>
        </section>

        {/* Safer Alternatives */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-blue-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧠 any کے محفوظ متبادل
          </h2>
          
          <div className="overflow-x-auto mobile-table-container">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-blue-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">ٹائپ</th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">تفصیل</th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">مثال</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  ['unknown', 'any کی طرح، لیکن استعمال کرنے سے پہلے ٹائپ چیکنگ کی ضرورت ہوتی ہے', 'نیچے ملاحظہ کریں'],
                  ['never', 'ایسی value کی نمائندگی کرتا ہے جو کبھی نہیں ہوتی', 'function throwError(): never'],
                  ['void', 'ایسے functions کے لیے استعمال ہوتا ہے جو کوئی value واپس نہیں کرتے', 'function log(): void {}'],
                ].map(([type, description, example], index) => (
                  <tr key={index} className="hover:bg-blue-50 mobile-table-row">
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono font-bold text-center text-xs sm:text-sm mobile-table-cell">{type}</td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">{description}</td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mobile-grid">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-blue-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-blue-700 mobile-card-title">unknown ٹائپ کی مثال</h4>
              <CodeBlock
                id="unknown-example"
                title="unknown Type Example"
                language="typescript"
                code={`let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ محفوظ
}`}
              />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 mobile-card-text">
                <code>unknown</code> آپ کو استعمال کرنے سے پہلے ٹائپ چیک کرنے پر مجبور کرتا ہے — <code>any</code> کے برعکس۔
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-blue-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-blue-700 mobile-card-title">never ٹائپ کی مثال</h4>
              <CodeBlock
                id="never-example"
                title="never Type Example"
                language="typescript"
                code={`function throwError(message: string): never {
  throw new Error(message);
}`}
              />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 mobile-card-text">
                ایسے functions کے لیے استعمال ہوتا ہے جو کبھی value واپس نہیں کرتے (مثال کے طور پر، infinite loops یا errors والے functions)۔
              </p>
            </div>
          </div>
        </section>

        {/* Non-Primitive Types */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-purple-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧱 TypeScript میں Non-Primitive (Reference) Types
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            Non-primitive types — جنہیں reference types بھی کہا جاتا ہے — وہ ڈیٹا ٹائپس ہیں جو references (میموری ایڈریسز) store کرتے ہیں بجائے actual value کو براہ راست store کرنے کے۔
          </p>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            اس کا مطلب ہے:
            جب آپ ایک non-primitive variable کو دوسرے variable پر assign کرتے ہیں، تو دونوں variables ایک ہی میموری location کی طرف اشارہ کرتے ہیں، separate copies کی طرف نہیں۔
          </p>
        </section>

        {/* Arrays */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-gray-50 to-slate-100 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🔹 1. TypeScript میں Arrays
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            Array elements کی ایک ordered list ہے۔ JavaScript میں، array کسی بھی قسم کا ڈیٹا hold کر سکتی ہے، لیکن TypeScript میں، آپ define کر سکتے ہیں کہ array میں کس قسم کا ڈیٹا ہونا چاہیے — structure اور safety کا اضافہ کرتے ہوئے۔
          </p>
          
          <CodeBlock
            id="array-types"
            title="Array types define کرنے کے دو طریقے"
            language="typescript"
            code={`let numbers: number[] = [1, 2, 3, 4]; // طریقہ 1
let fruits: Array<string> = ["Apple", "Banana", "Cherry"]; // طریقہ 2`}
          />
          
          <div className="mt-6 p-4 sm:p-6 bg-gray-100 border-l-4 border-gray-500 rounded-xl mobile-highlight">
            <p className="text-gray-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">💡</span>
              <span>دونوں طریقے درست ہیں اور ایک جیسا کام کرتے ہیں۔ تاہم، <code>number[]</code> مختصر اور زیادہ عام ہے۔</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mobile-grid">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-gray-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-700 mobile-card-title">متعدد اقسام والی Array</h4>
              <CodeBlock
                id="union-array"
                title="Union Array"
                language="typescript"
                code={`let mixedArray: (string | number)[] = ["Ali", 22, "Sara", 30];`}
              />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 mobile-card-text">
                یہاں، ہر element یا تو string ہو سکتا ہے یا number۔
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-gray-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-700 mobile-card-title">Objects کی Array</h4>
              <CodeBlock
                id="object-array"
                title="Objects کی Array"
                language="typescript"
                code={`let students: { name: string; age: number }[] = [
  { name: "Waqar", age: 22 },
  { name: "Rana", age: 25 },
];`}
              />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 mobile-card-text">
                اگر آپ ایسی property شامل کرنے کی کوشش کریں جو defined نہیں ہے، تو TypeScript compile-time error دے گا۔
              </p>
            </div>
          </div>
        </section>

        {/* Objects */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-green-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🔹 2. Objects
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            Objects key-value pairs ہیں جو complex data store کر سکتے ہیں۔ TypeScript آپ کو exact define کرنے دیتا ہے کہ object میں کون سی keys اور value types ہونی چاہئیں۔
          </p>
          
          <CodeBlock
            id="object-example"
            title="Object کی مثال"
            language="typescript"
            code={`let user: { name: string; age: number; isAdmin: boolean } = {
  name: "Waqar Rana",
  age: 25,
  isAdmin: true,
};`}
          />
          
          <div className="mt-6">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-green-700 mobile-subsection-title">Optional Properties</h4>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 leading-relaxed mobile-section-text">
              کسی property کو optional بنانے کے لیے <code>?</code> استعمال کریں:
            </p>
            <CodeBlock
              id="optional-props"
              title="Optional Properties"
              language="typescript"
              code={`let person: { name: string; age?: number } = {
  name: "Ali",
};`}
            />
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mt-2 leading-relaxed mobile-section-text">
              یہاں، <code>age</code> optional ہے — مطلب object اس کے missing ہونے پر بھی valid رہے گا۔
            </p>
          </div>
          
          <div className="mt-6 p-4 sm:p-6 bg-red-100 border-l-4 border-red-500 rounded-xl mobile-highlight">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-red-700 mobile-subsection-title">⚠️ Error مثال</h4>
            <CodeBlock
              id="object-error"
              title="Object Error"
              language="typescript"
              code={`let user: { name: string; age: number } = { name: "Sara" };
// ❌ غلطی: Property 'age' غائب ہے`}
            />
            <p className="text-red-800 text-sm sm:text-base font-bold mt-2 mobile-highlight-text">
              TypeScript یقینی بناتا ہے کہ آپ اپنے objects میں required ڈیٹا نہ بھولیں۔
            </p>
          </div>
        </section>

        {/* Functions */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-blue-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🔹 3. Type Annotations والے Functions
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            Functions TypeScript کی ٹائپ سیفٹی کا دل ہیں۔ آپ define کر سکتے ہیں:
          </p>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2 mb-6 mobile-section-text">
            <li className="text-gray-800 text-sm sm:text-base md:text-lg">ہر parameter کی type</li>
            <li className="text-gray-800 text-sm sm:text-base md:text-lg">اور returned value کی type</li>
          </ul>
          
          <CodeBlock
            id="function-example"
            title="Function Declaration مثال"
            language="typescript"
            code={`function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 5)); // ✅ آؤٹ پٹ: 15`}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mobile-grid">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-red-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-red-700 mobile-card-title">⚠️ ٹائپ سیفٹی کے بغیر Error مثال</h4>
              <CodeBlock
                id="js-error"
                title="JavaScript Error"
                language="javascript"
                code={`function add(a, b) {
  return a + b;
}

add("10", 5); // ❌ JavaScript اجازت دیتا ہے — نتیجہ "105"`}
              />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 mobile-card-text">
                TypeScript میں، compiler آپ کو فوراً روک دے گا:
              </p>
              <CodeBlock
                id="ts-error"
                title="TypeScript Error"
                language="typescript"
                code={`add("10", 5); // ❌ غلطی: Argument of type 'string' is not assignable to parameter of type 'number'.`}
              />
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-green-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-green-700 mobile-card-title">🏹 Arrow Function مثال</h4>
              <CodeBlock
                id="arrow-function"
                title="Arrow Function"
                language="typescript"
                code={`const greet = (name: string): string => {
  return \`Hello, \${name}!\`;
};`}
              />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 mobile-card-text">
                یہ define کرتا ہے:
              </p>
              <ul className="list-disc pl-4 mt-2">
                <li className="text-gray-700 text-xs sm:text-sm md:text-base"><code>name</code> string ہونا ضروری ہے</li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base">return value بھی string ہونی چاہیے</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-blue-700 mobile-subsection-title">🧠 Function Type مثال</h4>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 leading-relaxed mobile-section-text">
              آپ کسی variable کو define کر سکتے ہیں کہ وہ کسی مخصوص قسم کے function کو hold کرے:
            </p>
            <CodeBlock
              id="function-type"
              title="Function Type"
              language="typescript"
              code={`let multiply: (a: number, b: number) => number;

multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12`}
            />
          </div>
        </section>

        {/* Type Aliases */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-purple-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧱 4. Type Aliases
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            Type aliases آپ کو <code>type</code> keyword کے ساتھ custom reusable types بنانے دیتے ہیں۔ یہ اس وقت مفید ہے جب ایک ہی structure multiple times استعمال ہوتی ہے۔
          </p>
          
          <CodeBlock
            id="type-alias"
            title="Type Alias مثال"
            language="typescript"
            code={`type User = {
  name: string;
  email: string;
  age?: number; // optional
};

const user1: User = { name: "Ali", email: "ali@gmail.com" };
const user2: User = { name: "Sara", email: "sara@gmail.com", age: 21 };`}
          />
          
          <div className="mt-6 p-4 sm:p-6 bg-purple-100 border-l-4 border-purple-500 rounded-xl mobile-highlight">
            <p className="text-purple-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">💡</span>
              <span>یہ آپ کا کوڈ cleaner اور maintain کرنے میں آسان بناتا ہے۔</span>
            </p>
          </div>
        </section>

        {/* Interfaces */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-teal-50 to-green-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-teal-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧩 5. TypeScript میں Interfaces
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            ایک interface object کی shape define کرتا ہے۔ اسے contract کے طور پر سوچیں — اگر آپ interface استعمال کرتے ہیں، تو آپ کے object کو اس کے rules follow کرنے ہوں گے۔
          </p>
          
          <CodeBlock
            id="interface-example"
            title="Interface مثال"
            language="typescript"
            code={`interface Person {
  name: string;
  age: number;
  address?: string;
}

const person1: Person = {
  name: "Waqar",
  age: 25,
};

const person2: Person = {
  name: "Rana",
  age: 28,
  address: "Karachi, Pakistan",
};`}
          />
          
          <div className="mt-6 p-4 sm:p-6 bg-teal-100 border-l-4 border-teal-500 rounded-xl mobile-highlight">
            <p className="text-teal-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">⚙️</span>
              <span>Interfaces استعمال کرنے کی وجوہات:</span>
            </p>
            <ul className="list-disc pl-4 mt-2 space-y-1">
              <li className="text-teal-800 text-sm sm:text-base">Object structures define کرنے کے لیے بہترین ہیں۔</li>
              <li className="text-teal-800 text-sm sm:text-base">Hierarchical models بنانے کے لیے extend کیے جا سکتے ہیں۔</li>
              <li className="text-teal-800 text-sm sm:text-base">بڑے پروجیکٹس اور APIs میں بھاری مقدار میں استعمال ہوتے ہیں۔</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-teal-700 mobile-subsection-title">🔄 Interfaces کو Extend کرنا</h4>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 leading-relaxed mobile-section-text">
              آپ کسی دوسرے interface کے اوپر build کر کے نیا interface بنا سکتے ہیں۔
            </p>
            <CodeBlock
              id="extend-interface"
              title="Interface Extend کرنا"
              language="typescript"
              code={`interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  id: 1,
  name: "Waqar",
  role: "Super Admin",
};`}
            />
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mt-2 leading-relaxed mobile-section-text">
              <code>Admin</code> interface اب <code>id</code>, <code>name</code>, اور <code>role</code> دونوں شامل کرتا ہے۔
            </p>
          </div>
        </section>

        {/* Interface vs Type Alias */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-indigo-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            ⚔️ 6. Interface بمقابلہ Type Alias
          </h2>
          
          <div className="overflow-x-auto mobile-table-container">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-indigo-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">خصوصیت</th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">Interface</th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">Type Alias</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  ['دوسری اقسام کو extend کرتا ہے', '✅ ہاں', '✅ ہاں (& استعمال کرتے ہوئے)'],
                  ['Declarations کو merge کر سکتا ہے', '✅ ہاں', '❌ نہیں'],
                  ['Primitives/unions کی نمائندگی کر سکتا ہے', '❌ نہیں', '✅ ہاں'],
                  ['کے لیے بہترین ہے', 'Object structure', 'Primitive/unions/combinations'],
                ].map(([feature, interfaceSupport, typeSupport], index) => (
                  <tr key={index} className="hover:bg-indigo-50 mobile-table-row">
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">{feature}</td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-center font-bold text-xs sm:text-sm mobile-table-cell">{interfaceSupport}</td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-center font-bold text-xs sm:text-sm mobile-table-cell">{typeSupport}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mobile-grid">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-indigo-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 mobile-card-title">Interface مثال</h4>
              <CodeBlock
                id="interface-sample"
                title="Interface"
                language="typescript"
                code={`interface Developer {
  name: string;
  language: string;
}`}
              />
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-indigo-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 mobile-card-title">Union کے لیے Type Alias</h4>
              <CodeBlock
                id="type-alias-sample"
                title="Type Alias for Unions"
                language="typescript"
                code={`type Status = "active" | "inactive";`}
              />
            </div>
          </div>
          
          <div className="mt-6 p-4 sm:p-6 bg-indigo-100 border-l-4 border-indigo-500 rounded-xl mobile-highlight">
            <p className="text-indigo-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">💡</span>
              <span>دونوں similar purposes کے لیے کام کرتے ہیں، لیکن object shapes define کرنے کے لیے interfaces زیادہ عام ہیں۔</span>
            </p>
          </div>
        </section>

        {/* Type Safety */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-green-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧩 7. ٹائپ سیفٹی
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            ٹائپ سیفٹی کا مطلب ہے کہ TypeScript یقینی بناتا ہے کہ آپ صحیح ڈیٹا ٹائپس استعمال کریں۔ یہ bugs کو روکتا ہے اور کوڈ کی reliability کو بہتر بناتا ہے early mistakes کو پکڑ کر — کوڈ چلنے سے پہلے ہی۔
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mobile-grid">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-red-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-red-700 mobile-card-title">❌ JavaScript (ٹائپ سیفٹی نہیں)</h4>
              <CodeBlock
                id="js-no-safety"
                title="JavaScript Example"
                language="javascript"
                code={`function multiply(a, b) {
  return a * b;
}
console.log(multiply("5", 2)); // "10" (غیر متوقع)`}
              />
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-green-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-green-700 mobile-card-title">✅ TypeScript (ٹائپ سیفٹی)</h4>
              <CodeBlock
                id="ts-type-safe"
                title="TypeScript Example"
                language="typescript"
                code={`function multiply(a: number, b: number): number {
  return a * b;
}
// multiply("5", 2); // 🚫 غلطی
console.log(multiply(5, 2)); // ✅ 10`}
              />
            </div>
          </div>
          
          <div className="mt-6 p-4 sm:p-6 bg-green-100 border-l-4 border-green-500 rounded-xl mobile-highlight">
            <p className="text-green-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">⚙️</span>
              <span>TypeScript ہر variable, argument, اور return type کو چیک کرتا ہے — آپ کو runtime surprises سے بچاتا ہے۔</span>
            </p>
          </div>
        </section>

        {/* Union & Literal Types */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-orange-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            ⚙️ 8. Union & Literal Types
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mobile-grid">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-yellow-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-yellow-700 mobile-card-title">🧩 Union Type</h4>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
                کسی variable کو multiple possible types رکھنے دیتا ہے۔
              </p>
              <CodeBlock
                id="union-type"
                title="Union Type"
                language="typescript"
                code={`let value: string | number;

value = "Hello"; // ✅
value = 100;     // ✅
value = true;    // ❌ غلطی`}
              />
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-orange-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-orange-700 mobile-card-title">🔸 Literal Type</h4>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
                کسی variable کو specific set of values تک محدود کرتا ہے۔
              </p>
              <CodeBlock
                id="literal-type"
                title="Literal Type"
                language="typescript"
                code={`type Role = "admin" | "user" | "guest";

let myRole: Role = "admin"; // ✅
myRole = "manager"; // ❌ غلطی`}
              />
            </div>
          </div>
          
          <div className="mt-6 p-4 sm:p-6 bg-orange-100 border-l-4 border-orange-500 rounded-xl mobile-highlight">
            <p className="text-orange-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">💡</span>
              <span>یہ invalid assignments کو روکتا ہے اور strict value control کو یقینی بناتا ہے۔</span>
            </p>
          </div>
        </section>

        {/* Example Program */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-teal-50 to-green-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-teal-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧮 9. مثال پروگرام
          </h2>
          
          <CodeBlock
            id="example-program"
            title="مثال پروگرام"
            language="typescript"
            code={`interface Student {
  name: string;
  rollNo: number;
  isPassed: boolean;
}

function showResult(student: Student): string {
  return \`\${student.name} (Roll #\${student.rollNo}) has \${student.isPassed ? "passed ✅" : "failed ❌"} the exam.\`;
}

const student1: Student = { name: "Rana", rollNo: 101, isPassed: true };

console.log(showResult(student1));`}
          />
          
          <div className="mt-6 p-4 sm:p-6 bg-teal-100 border-l-4 border-teal-500 rounded-xl mobile-highlight">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-teal-700 mobile-subsection-title">🖥️ آؤٹ پٹ</h4>
            <div className="bg-gray-800 text-white p-3 sm:p-4 rounded-xl font-mono overflow-x-auto">
              <pre className="whitespace-pre-wrap text-xs sm:text-sm md:text-base mobile-code-pre">
                Rana (Roll #101) has passed ✅ the exam.
              </pre>
            </div>
          </div>
        </section>

        {/* Summary Table */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-gray-50 to-slate-100 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧾 10. Summary Table
          </h2>
          
          <div className="overflow-x-auto mobile-table-container">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">Concept</th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">تفصیل</th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">مثال</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  ['Type Annotation', 'Variables کی اقسام define کریں', 'let age: number = 20'],
                  ['Interface', 'Object structure define کریں', 'interface User { name: string }'],
                  ['Type Alias', 'Reusable type definition', 'type ID = number'],
                  ['Type Safety', 'Invalid type usage کو روکتا ہے', 'Compile-time checking'],
                  ['Union Types', 'Multiple possible types اجازت دیں', 'let val: string | number'],
                  ['Literal Types', 'Values کو fixed options تک محدود کریں', 'type Role = "admin" | "user"'],
                ].map(([concept, description, example], index) => (
                  <tr key={index} className="hover:bg-gray-50 mobile-table-row">
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm mobile-table-cell">{concept}</td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">{description}</td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-blue-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧠 Key Takeaways
          </h2>
          
          <div className="space-y-3 sm:space-y-4 mobile-tips">
            {[
              '✅ Arrays, Objects, اور Functions TypeScript typing کا core بنتے ہیں۔',
              '✅ Object structure واضح طور پر define کرنے کے لیے Type Aliases یا Interfaces استعمال کریں۔',
              '✅ TypeScript ٹائپ سیفٹی فراہم کرتا ہے، runtime bugs کو کم کرتا ہے۔',
              '✅ Union اور Literal Types flexibility کے ساتھ control کے لیے استعمال کریں۔',
              '✅ ڈیٹا ماڈلز اور APIs define کرنے کے لیے Interfaces مثالی ہیں۔',
            ].map((tip, index) => (
              <div key={index} className="bg-white p-3 sm:p-4 rounded-lg shadow border border-blue-200 flex items-start gap-2 sm:gap-3 mobile-tip">
                <span className="text-green-500 text-lg sm:text-xl mt-1 mobile-icon">✅</span>
                <span className="text-gray-700 text-xs sm:text-sm md:text-base mobile-tip-text">{tip}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 sm:p-6 bg-purple-100 border-l-4 border-purple-500 rounded-xl mobile-highlight">
            <p className="text-purple-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">💡</span>
              <span>Tip: ہمیشہ اپنے <code>tsconfig.json</code> میں <code>"strict": true</code> enable کریں maximum ٹائپ سیفٹی کے لیے۔ یہ TypeScript کو types میں چھوٹی موٹی غلطیوں کا پتہ لگانے میں مدد کرتا ہے، code quality کو بہتر بناتا ہے۔</span>
            </p>
          </div>
        </section>

        {/* Node.js Server with TypeScript */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-indigo-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            ⚙️ TypeScript کے ساتھ ایک سادہ Node.js سرور بنانا
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            اس سیکشن میں، آپ سیکھیں گے کہ Node.js اور TypeScript استعمال کرتے ہوئے اپنا پہلا backend سرور کیسے بنائیں اور چلائیں — zero سے running application تک۔
          </p>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            ہم cover کریں گے:
          </p>
          
          <ul className="list-disc pl-4 sm:pl-6 space-y-2 mb-6 mobile-section-text">
            <li className="text-gray-800 text-sm sm:text-base md:text-lg">🧠 سرور دراصل کیا ہے؟</li>
            <li className="text-gray-800 text-sm sm:text-base md:text-lg">⚙️ Node.js requests & responses کو کیسے handle کرتا ہے؟</li>
            <li className="text-gray-800 text-sm sm:text-base md:text-lg">🪜 TypeScript استعمال کرتے ہوئے step-by-step سرور setup</li>
            <li className="text-gray-800 text-sm sm:text-base md:text-lg">💻 مکمل explanation کے ساتھ example code</li>
            <li className="text-gray-800 text-sm sm:text-base md:text-lg">📡 Routing, paths, اور JSON responses</li>
            <li className="text-gray-800 text-sm sm:text-base md:text-lg">🧩 Bonus: Headers, ports, اور status codes کی تفہیم</li>
          </ul>
        </section>

        {/* Server Definition Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-blue-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🌍 سرور کیا ہے؟
          </h2>
          
          <div className="mb-6 p-4 sm:p-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-xl mobile-highlight">
            <p className="text-yellow-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">❓</span>
              <span>عام الجھن: "کیا سرور ایک کمپیوٹر ہے یا پروگرام؟"</span>
            </p>
          </div>
          
          <div className="mb-6 p-4 sm:p-6 bg-green-100 border-l-4 border-green-500 rounded-xl mobile-highlight">
            <p className="text-green-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">✅</span>
              <span>جواب: سرور دونوں کی طرف اشارہ کر سکتا ہے:</span>
            </p>
            <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-2">
              <li className="text-green-800 text-sm sm:text-base"><strong>ہارڈویئر (کمپیوٹر)</strong> جو ڈیٹا کو store اور deliver کرتا ہے۔</li>
              <li className="text-green-800 text-sm sm:text-base"><strong>سافٹ ویئر (پروگرام)</strong> جو requests کو سنتا ہے اور جواب دیتا ہے۔</li>
            </ul>
          </div>
          
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            تو جب ہم کہتے ہیں "Node.js میں سرور بنائیں"، ہمارا مطلب ہے ایک سرور پروگرام بنانا جو مشین پر چلتا ہے اور کلائنٹ کی requests کا جواب دیتا ہے۔
          </p>
          
          <div className="mb-6 p-4 sm:p-6 bg-blue-100 border-l-4 border-blue-500 rounded-xl mobile-highlight">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-blue-700 mobile-subsection-title">🧠 سادہ تعریف:</h4>
            <p className="text-blue-800 text-sm sm:text-base">
              ایک سرور ایک پروگرام ہے جو:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-1">
              <li className="text-blue-800 text-sm sm:text-base">کلائنٹ کی requests کو سنتا ہے (جیسے browsers, mobile apps, یا APIs سے)</li>
              <li className="text-blue-800 text-sm sm:text-base">ان requests کو process کرتا ہے</li>
              <li className="text-blue-800 text-sm sm:text-base">ایک response واپس بھیجتا ہے — ڈیٹا, HTML, JSON, یا error messages</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-purple-700 mobile-subsection-title">📝 مثال:</h4>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 leading-relaxed mobile-section-text">
              جب آپ <code>https://banoqabil.pk/</code> وزٹ کرتے ہیں:
            </p>
            <ol className="list-decimal pl-4 sm:pl-6 space-y-2 mb-4">
              <li className="text-gray-800 text-sm sm:text-base md:text-lg">آپ کا براؤزر سرور کو ایک request بھیجتا ہے۔</li>
              <li className="text-gray-800 text-sm sm:text-base md:text-lg">سرور اسے process کرتا ہے۔</li>
              <li className="text-gray-800 text-sm sm:text-base md:text-lg">پھر ایک HTML صفحہ, JSON ڈیٹا, یا error response واپس بھیجتا ہے۔</li>
            </ol>
          </div>
        </section>

        {/* Why Node.js? Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-green-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            ⚡ Node.js کے ساتھ سرور کیوں بنائیں؟
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            Node.js آپ کو JavaScript یا TypeScript استعمال کرتے ہوئے server-side applications بنانے دیتا ہے — وہی زبان جو frontend کے لیے استعمال ہوتی ہے۔
          </p>
          
          <div className="overflow-x-auto mobile-table-container mt-6">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-green-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">خصوصیت</th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">تفصیل</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  ['🚀 تیز Performance', 'Google Chrome کے V8 JavaScript engine پر چلتا ہے۔'],
                  ['⚙️ Non-blocking I/O', 'بیک وقت متعدد requests کو handle کرتا ہے بغیر انتظار کیے۔'],
                  ['🔁 Asynchronous Nature', 'file reads یا DB queries جیسے کاموں کے انتظار میں freeze نہیں ہوتا۔'],
                  ['💬 Real-time Support', 'چیٹ ایپس, APIs, اور live dashboards کے لیے مثالی۔'],
                  ['🧩 TypeScript Compatible', 'ٹائپ سیفٹی اور بہتر scalability فراہم کرتا ہے۔'],
                ].map(([feature, description], index) => (
                  <tr key={index} className="hover:bg-green-50 mobile-table-row">
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm mobile-table-cell">{feature}</td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Prerequisites Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-blue-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧩 Step 1: Prerequisites
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            اپنا سرور بنانے سے پہلے، یقینی بنائیں کہ آپ کے پاس ہے:
          </p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-blue-200 flex items-start gap-3 mobile-card">
              <span className="text-green-500 text-lg sm:text-2xl mt-1">✅</span>
              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-blue-700 mobile-card-title">Node.js انسٹال کریں</h4>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mobile-card-text">
                  <a href="https://nodejs.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://nodejs.org/</a> سے ڈاؤن لوڈ کریں
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-blue-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-blue-700 mobile-card-title">TypeScript initialize کریں</h4>
              <CodeBlock
                id="ts-init"
                title="TypeScript Initialization"
                language="bash"
                code={`npm init -y
npm install typescript @types/node --save-dev
npx tsc --init`}
              />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 mobile-card-text">
                یہ TypeScript configuration کے لیے ایک <code>tsconfig.json</code> فائل بناتا ہے۔
              </p>
            </div>
          </div>
        </section>

        {/* Project Structure Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-gray-50 to-slate-100 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧠 Step 2: Project Structure
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            اپنا پروجیکٹ اس طرح organize کریں:
          </p>
          
          <CodeBlock
            id="project-structure"
            title="پروجیکٹ سٹرکچر"
            language="text"
            code={`project-folder/
│
├── src/
│   └── index.ts        # مین TypeScript فائل (سرور کوڈ)
│
├── dist/               # Compiled JavaScript فائلیں (خودکار طور پر بنتی ہیں)
│
├── package.json
└── tsconfig.json`}
          />
        </section>

        {/* Create Basic Server Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-purple-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧱 Step 3: ایک Basic سرور بنائیں
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            ایک نئی فائل بنائیں: <code>src/index.ts</code>
          </p>
          
          <CodeBlock
            id="basic-server"
            title="بنیادی سرور کوڈ"
            language="typescript"
            code={`import http, { IncomingMessage, ServerResponse } from "http";

// ایک سرور بنائیں
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  // response header سیٹ کریں
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome to TypeScript Server 🚀");
});

// سرور شروع کریں اور port 3000 پر سنیں
server.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});`}
          />
          
          <div className="mt-6 p-4 sm:p-6 bg-purple-100 border-l-4 border-purple-500 rounded-xl mobile-highlight">
            <p className="text-purple-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">💡</span>
              <span>جب TypeScript کو Node.js کے ساتھ استعمال کرتے ہیں، تو <code>req</code> (request) اور <code>res</code> (response) دونوں objects کے پاس مخصوص TypeScript types ہوتے ہیں جو ان کی structure اور available properties کو describe کرتے ہیں۔ یہ types Node.js کے built-in <code>@types/node</code> package سے آتی ہیں۔</span>
            </p>
          </div>
        </section>

        {/* IncomingMessage Type Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-indigo-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🔹 IncomingMessage
          </h2>
          
          <CodeBlock
            id="import-incoming"
            title="Import Statement"
            language="typescript"
            code={`import { IncomingMessage } from "http";`}
          />
          
          <div className="mb-6 p-4 sm:p-6 bg-indigo-100 border-l-4 border-indigo-500 rounded-xl mobile-highlight">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 mobile-subsection-title">🧾 تعریف:</h4>
            <p className="text-indigo-800 text-sm sm:text-base">
              <code>IncomingMessage</code> وہ TypeScript type ہے جو client سے آنے والے ڈیٹا کی نمائندگی کرتی ہے — یعنی HTTP request۔
            </p>
            <p className="text-indigo-800 text-sm sm:text-base mt-2">
              جب بھی کوئی کلائنٹ (جیسے براؤزر یا Postman) آپ کے سرور کو request بھیجتا ہے، Node.js خود بخود اس request کو <code>IncomingMessage</code> type کے object میں wrap کر دیتا ہے۔
            </p>
          </div>
          
          <div className="overflow-x-auto mobile-table-container mt-6">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-indigo-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">پراپرٹی</th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">ٹائپ</th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">تفصیل</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  ['req.url', 'string | undefined', 'درخواست کردہ URL path (مثلاً, /about, /home)۔'],
                  ['req.method', 'string | undefined', 'HTTP method (مثلاً, GET, POST, PUT, DELETE)۔'],
                  ['req.headers', 'IncomingHttpHeaders', 'request headers (جیسے Content-Type, Authorization, وغیرہ)۔'],
                  ['req.statusCode', 'number | undefined', 'Status code (عام طور پر internally استعمال ہوتا ہے)۔'],
                  ['req.on(event, listener)', 'Function', 'request events کو سننے کی اجازت دیتا ہے جیسے "data" اور "end" (request body پڑھنے کے لیے استعمال ہوتا ہے)۔'],
                ].map(([property, type, description], index) => (
                  <tr key={index} className="hover:bg-indigo-50 mobile-table-row">
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono text-xs sm:text-sm mobile-table-cell">{property}</td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono text-xs sm:text-sm mobile-table-cell">{type}</td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-indigo-700 mobile-subsection-title">🧠 مثال:</h4>
            <CodeBlock
              id="incoming-example"
              title="IncomingMessage Example"
              language="typescript"
              code={`if (req.method === "GET" && req.url === "/") {
  console.log("Received a GET request at the home page!");
}`}
            />
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mt-2 leading-relaxed mobile-section-text">
              تو <code>IncomingMessage</code> یقینی بناتا ہے کہ TypeScript جانتی ہے کہ کون سی properties موجود ہیں اور وہ کس type کی ہیں — آپ کو autocompletion اور error checking فراہم کرتی ہے۔
            </p>
          </div>
        </section>

        {/* ServerResponse Type Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-teal-50 to-green-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-teal-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🔹 ServerResponse
          </h2>
          
          <CodeBlock
            id="import-response"
            title="Import Statement"
            language="typescript"
            code={`import { ServerResponse } from "http";`}
          />
          
          <div className="mb-6 p-4 sm:p-6 bg-teal-100 border-l-4 border-teal-500 rounded-xl mobile-highlight">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-teal-700 mobile-subsection-title">🧾 تعریف:</h4>
            <p className="text-teal-800 text-sm sm:text-base">
              <code>ServerResponse</code> response object کے لیے TypeScript type ہے جو سرور client کو واپس بھیجتا ہے۔ یہ outgoing HTTP response کی نمائندگی کرتی ہے۔
            </p>
          </div>
          
          <div className="overflow-x-auto mobile-table-container mt-6">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-teal-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">میتھڈ</th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">تفصیل</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  ['res.writeHead(statusCode, headers)', 'HTTP status اور headers سیٹ کرتا ہے۔ مثال: res.writeHead(200, { "Content-Type": "text/html" })۔'],
                  ['res.statusCode = 200', 'response status manually سیٹ کرتا ہے۔'],
                  ['res.setHeader(name, value)', 'ایک single HTTP header کو add یا modify کرتا ہے۔'],
                  ['res.write(data)', 'response body کا ایک chunk بھیجتا ہے۔'],
                  ['res.end(data?)', 'یہ اشارہ کرتا ہے کہ response مکمل ہے (ایک بار ضرور call کرنا چاہیے)۔'],
                ].map(([method, description], index) => (
                  <tr key={index} className="hover:bg-teal-50 mobile-table-row">
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono text-xs sm:text-sm mobile-table-cell">{method}</td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-teal-700 mobile-subsection-title">🧠 مثال:</h4>
            <CodeBlock
              id="response-example"
              title="ServerResponse Example"
              language="typescript"
              code={`res.writeHead(200, { "Content-Type": "application/json" });
res.end(JSON.stringify({ message: "Hello from TypeScript Server 🚀" }));`}
            />
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mt-2 leading-relaxed mobile-section-text">
              یہاں، <code>ServerResponse</code> یقینی بناتی ہے کہ آپ صرف ان methods کو call کر سکتے ہیں جو valid Node.js response object پر موجود ہوں — آپ کو typos یا misuse سے بچاتی ہے۔
            </p>
          </div>
        </section>

        {/* Step 4: Explanation Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-orange-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🔍 Step 4: ہر حصے کی وضاحت
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-orange-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-orange-700 mobile-card-title">1️⃣ Import Statement</h4>
              <CodeBlock
                id="import-http"
                title="Import HTTP Module"
                language="typescript"
                code={`import http, { IncomingMessage, ServerResponse } from "http";`}
              />
              <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-1">
                <li className="text-gray-700 text-xs sm:text-sm md:text-base">Node.js ایک built-in <code>http</code> module فراہم کرتا ہے — کوئی installation درکار نہیں۔</li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base">یہ آپ کو servers بنانے, requests بھیجنے, اور responses manage کرنے دیتا ہے۔</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-orange-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-orange-700 mobile-card-title">2️⃣ http.createServer()</h4>
              <CodeBlock
                id="create-server"
                title="Create Server Method"
                language="typescript"
                code={`http.createServer((req: IncomingMessage, res: ServerResponse) => {...})`}
              />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2">
                یہ method ایک HTTP server بناتی ہے جو requests کو سنتی ہے۔
              </p>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-1">
                یہ دو parameters کے ساتھ ایک callback لیتی ہے:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 mt-1 space-y-1">
                <li className="text-gray-700 text-xs sm:text-sm md:text-base"><code>req</code> → incoming request کی نمائندگی کرتا ہے</li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base"><code>res</code> → response object کی نمائندگی کرتا ہے</li>
              </ul>
              
              <div className="mt-3 p-3 bg-orange-50 rounded-lg">
                <p className="text-orange-800 text-sm font-bold">مثال:</p>
                <CodeBlock
                  id="req-example"
                  title="Request Properties"
                  language="typescript"
                  code={`req.url    // درخواست کردہ path, e.g., "/about"
req.method // HTTP method, e.g., "GET" یا "POST"`}
                />
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-orange-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-orange-700 mobile-card-title">3️⃣ res.writeHead()</h4>
              <CodeBlock
                id="write-head"
                title="Write Head Method"
                language="typescript"
                code={`res.writeHead(200, { "Content-Type": "text/plain" });`}
              />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2">
                یہ response کے لیے status code اور headers سیٹ کرتا ہے۔
              </p>
              
              <div className="overflow-x-auto mobile-table-container mt-3">
                <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[300px] mobile-table">
                  <thead className="bg-orange-100">
                    <tr>
                      <th className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm text-center mobile-table-header">کانسیپٹ</th>
                      <th className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm text-center mobile-table-header">تفصیل</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm mobile-table-body">
                    {[
                      ['Status Code', 'کلائنٹ کو بتاتا ہے کہ درخواست کامیاب ہوئی یا نہیں (مثلاً, 200 OK, 404 Not Found)۔'],
                      ['Headers', 'response کے بارے میں meta-information فراہم کرتے ہیں (جیسے format, length, encoding)۔'],
                    ].map(([concept, description], index) => (
                      <tr key={index} className="hover:bg-orange-50 mobile-table-row">
                        <td className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm mobile-table-cell">{concept}</td>
                        <td className="p-2 sm:p-3 border border-gray-300 text-xs sm:text-sm mobile-table-cell">{description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-3">
                <p className="text-orange-800 text-sm font-bold">مثال:</p>
                <CodeBlock
                  id="content-types"
                  title="Content Types Examples"
                  language="typescript"
                  code={`"Content-Type": "text/plain"      // plain text
"Content-Type": "application/json" // JSON data
"Content-Type": "text/html"        // HTML content`}
                />
              </div>
              
              <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm font-bold">💡 Headers کیوں اہم ہیں؟</p>
                <p className="text-blue-800 text-xs sm:text-sm">
                  اگر آپ content type specify نہیں کرتے، تو براؤزر نہیں جانے گا کہ ڈیٹا کو کیسے interpret کرے — یہ اسے غلط طور پر display کر سکتا ہے یا حتیٰ کہ download behavior کو trigger کر سکتا ہے۔
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-orange-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-orange-700 mobile-card-title">4️⃣ res.end()</h4>
              <CodeBlock
                id="res-end"
                title="End Response Method"
                language="typescript"
                code={`res.end("Welcome to TypeScript Server 🚀");`}
              />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2">
                response ختم کرتا ہے اور ڈیٹا client کو واپس بھیجتا ہے۔
              </p>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-1">
                <code>res.end()</code> کے بغیر، سرور انتظار کرتا رہے گا اور صفحہ load نہیں ہوگا۔
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-orange-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-orange-700 mobile-card-title">5️⃣ server.listen()</h4>
              <CodeBlock
                id="server-listen"
                title="Server Listen Method"
                language="typescript"
                code={`server.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});`}
              />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2">
                port 3000 پر سرور start کرتا ہے (جیسے آپ کی ایپ کا "door number")۔
              </p>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-1">
                آپ اسے اس طرح access کر سکتے ہیں: <code>http://localhost:3000</code>
              </p>
              
              <div className="mt-3">
                <p className="text-orange-800 text-sm font-bold">عام Ports:</p>
                <div className="overflow-x-auto mobile-table-container">
                  <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[300px] mobile-table">
                    <thead className="bg-orange-100">
                      <tr>
                        <th className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm text-center mobile-table-header">Port</th>
                        <th className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm text-center mobile-table-header">استعمال</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs sm:text-sm mobile-table-body">
                      {[
                        ['3000', 'React / Node.js development'],
                        ['4000', 'API servers'],
                        ['5000', 'Custom backend'],
                      ].map(([port, usage], index) => (
                        <tr key={index} className="hover:bg-orange-50 mobile-table-row">
                          <td className="p-2 sm:p-3 border border-gray-300 font-mono text-center text-xs sm:text-sm mobile-table-cell">{port}</td>
                          <td className="p-2 sm:p-3 border border-gray-300 text-xs sm:text-sm mobile-table-cell">{usage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 5: Compile and Run Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-green-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧮 Step 5: Compile اور Run کریں
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mobile-grid">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-green-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-green-700 mobile-card-title">Option 1 – Manual Compilation</h4>
              <CodeBlock
                id="manual-compile"
                title="Manual Compilation"
                language="bash"
                code={`npx tsc
node dist/index.js`}
              />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 mobile-card-text">
                TypeScript کو JavaScript میں compile کرتا ہے پھر execute کرتا ہے۔
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-green-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-green-700 mobile-card-title">Option 2 – ts-node استعمال کریں</h4>
              <CodeBlock
                id="ts-node"
                title="Direct Execution with ts-node"
                language="bash"
                code={`npx ts-node src/index.ts`}
              />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 mobile-card-text">
                بغیر compile کیے direct TypeScript execute کرتا ہے۔
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-green-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-green-700 mobile-card-title">Option 3 – tsx استعمال کریں (recommended)</h4>
              <CodeBlock
                id="tsx"
                title="Execution with tsx"
                language="bash"
                code={`npx tsx src/index.ts`}
              />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 mobile-card-text">
                تیز اور جدید TypeScript execution۔
              </p>
            </div>
          </div>
        </section>

        {/* Step 6: Multiple Routes Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-purple-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            📡 Step 6: متعدد Routes کو Handle کرنا
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            اب آئیے request URL کی بنیاد پر مختلف pages serve کرتے ہیں۔
          </p>
          
          <CodeBlock
            id="multiple-routes"
            title="متعدد Routes والا سرور"
            language="typescript"
            code={`import http, { IncomingMessage, ServerResponse } from "http";

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  if (req.url === "/") {
    res.end("🏠 Home Page");
  } else if (req.url === "/about") {
    res.end("ℹ️ About Page");
  } else {
    res.statusCode = 404;
    res.end("❌ Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});`}
          />
          
          <div className="mt-6">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-purple-700 mobile-subsection-title">🧭 Path, URL, اور Endpoint کی تفہیم</h4>
            <div className="overflow-x-auto mobile-table-container">
              <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
                <thead className="bg-purple-200">
                  <tr>
                    <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">ٹرم</th>
                    <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">معنی</th>
                    <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">مثال</th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                  {[
                    ['URL', 'کسی resource کا full address', 'https://example.com/about'],
                    ['Path', 'domain کے بعد کا حصہ', '/about'],
                  ].map(([term, meaning, example], index) => (
                    <tr key={index} className="hover:bg-purple-50 mobile-table-row">
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm mobile-table-cell">{term}</td>
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">{meaning}</td>
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono text-xs sm:text-sm mobile-table-cell">{example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mt-4 leading-relaxed mobile-section-text">
              تو اوپر کی مثال میں:
            </p>
            <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-1">
              <li className="text-gray-800 text-sm sm:text-base md:text-lg"><code>/</code> → Home route</li>
              <li className="text-gray-800 text-sm sm:text-base md:text-lg"><code>/about</code> → About route</li>
            </ul>
          </div>
        </section>

        {/* JSON Responses Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-teal-50 to-green-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-teal-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            ⚙️ JSON Responses بھیجنا
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            اگر آپ structured data بھیجنا چاہتے ہیں (جیسے APIs)، تو JSON format استعمال کریں۔
          </p>
          
          <CodeBlock
            id="json-response"
            title="JSON Response مثال"
            language="typescript"
            code={`if (req.url === "/user") {
  res.writeHead(200, { "Content-Type": "application/json" });
  const user = { name: "Waqar Rana", role: "Developer" };
  res.end(JSON.stringify(user));
}`}
          />
          
          <div className="mt-6 p-4 sm:p-6 bg-teal-100 border-l-4 border-teal-500 rounded-xl mobile-highlight">
            <p className="text-teal-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">❓</span>
              <span><code>JSON.stringify()</code> کیوں استعمال کریں؟</span>
            </p>
            <p className="text-teal-800 text-sm sm:text-base mt-2">
              کیونکہ <code>res.end()</code> method صرف text data بھیجتی ہے، objects نہیں۔ <code>JSON.stringify()</code> JavaScript object کو JSON string میں convert کرتی ہے جسے client سمجھ سکتا ہے۔
            </p>
          </div>
          
          <div className="mt-4">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-2 leading-relaxed mobile-section-text">مثال:</p>
            <div className="bg-gray-800 text-white p-3 sm:p-4 rounded-xl font-mono overflow-x-auto">
              <pre className="whitespace-pre-wrap text-xs sm:text-sm md:text-base mobile-code-pre">
{`{
  "name": "Waqar Rana",
  "role": "Developer"
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Step 7: Package.json Scripts Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-blue-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧰 Step 7: package.json میں Scripts شامل کریں
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            اپنی ایپ کو چلانے کو آسان بنانے کے لیے، اپنی <code>package.json</code> میں یہ scripts شامل کریں:
          </p>
          
          <CodeBlock
            id="package-scripts"
            title="Package.json Scripts"
            language="json"
            code={`"scripts": {
  "start": "node dist/index.js",
  "dev": "npx tsx src/index.ts"
}`}
          />
          
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mt-4 leading-relaxed mobile-section-text">
            اب آپ چلا سکتے ہیں:
          </p>
          <CodeBlock
            id="run-dev"
            title="Run Development Server"
            language="bash"
            code={`npm run dev`}
          />
        </section>

        {/* Summary Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-gray-50 to-slate-100 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧾 Summary
          </h2>
          
          <div className="overflow-x-auto mobile-table-container">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">کانسیپٹ</th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">تفصیل</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  ['http.createServer()', 'ایک نیا Node.js HTTP سرور بناتا ہے'],
                  ['req / res', 'incoming request اور outgoing response کو handle کرتے ہیں'],
                  ['res.writeHead()', 'status code اور headers سیٹ کرتا ہے'],
                  ['res.end()', 'response بھیجتا ہے اور ختم کرتا ہے'],
                  ['server.listen()', 'سرور start کرتا ہے اور port پر سنتا ہے'],
                  ['tsx / ts-node', 'TypeScript کو direct چلاتے ہیں بغیر compile کیے'],
                ].map(([concept, description], index) => (
                  <tr key={index} className="hover:bg-gray-50 mobile-table-row">
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono text-xs sm:text-sm mobile-table-cell">{concept}</td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Final Output Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-green-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🚀 Final Output
          </h2>
          
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-green-200 mobile-card">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-green-700 mobile-card-title">سرور چلائیں:</h4>
            <CodeBlock
              id="run-server"
              title="Run Server Command"
              language="bash"
              code={`npm run dev`}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mobile-grid">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-green-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-green-700 mobile-card-title">Terminal آؤٹ پٹ:</h4>
              <div className="bg-gray-800 text-white p-3 sm:p-4 rounded-xl font-mono">
                <pre className="whitespace-pre-wrap text-xs sm:text-sm md:text-base mobile-code-pre">
                  ✅ Server running at http://localhost:3000
                </pre>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-green-200 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-green-700 mobile-card-title">Browser آؤٹ پٹ:</h4>
              <div className="bg-gray-800 text-white p-3 sm:p-4 rounded-xl font-mono">
                <pre className="whitespace-pre-wrap text-xs sm:text-sm md:text-base mobile-code-pre">
                  Welcome to TypeScript Server 🚀
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Bonus Tip Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-purple-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧩 Bonus Tip: Native سے Frameworks تک
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            ایک بار جب آپ native Node.js servers کو سمجھ لیں، تو آپ آسانی سے frameworks کی طرف move کر سکتے ہیں جیسے:
          </p>
          
          <div className="overflow-x-auto mobile-table-container">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-purple-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">Framework</th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">تفصیل</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  ['Express.js', 'APIs کے لیے سب سے مقبول Node.js framework'],
                  ['NestJS', 'TypeScript سے بنایا گیا enterprise-grade framework'],
                  ['Fastify', 'ہلکا اور performance-focused متبادل'],
                ].map(([framework, description], index) => (
                  <tr key={index} className="hover:bg-purple-50 mobile-table-row">
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm mobile-table-cell">{framework}</td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 p-4 sm:p-6 bg-purple-100 border-l-4 border-purple-500 rounded-xl mobile-highlight">
            <p className="text-purple-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">💡</span>
              <span>یہ آپ کے ابھی سیکھے ہوئے concepts کے اوپر build کرتے ہیں — routes, requests, اور responses کو automatically handle کرتے ہیں۔</span>
            </p>
          </div>
        </section>

        {/* Hands On Practice Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-amber-50 to-orange-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-amber-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧩 Hands On Practice
          </h2>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-amber-200 mobile-card">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-amber-700 mobile-card-title">عملی کام:</h4>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 leading-relaxed mobile-section-text">
              مختلف routes اور responses سمیت ایک TypeScript-powered Node.js سرور بنائیں۔
            </p>
            <ol className="list-decimal pl-4 sm:pl-6 space-y-2">
              <li className="text-gray-800 text-sm sm:text-base md:text-lg">ایک basic HTTP server بنائیں جو port 3000 پر سنے</li>
              <li className="text-gray-800 text-sm sm:text-base md:text-lg">مختلف URLs کے لیے مختلف responses شامل کریں</li>
              <li className="text-gray-800 text-sm sm:text-base md:text-lg">JSON responses بھیجنے کی پریکٹس کریں</li>
              <li className="text-gray-800 text-sm sm:text-base md:text-lg">Error handling شامل کریں (404 errors)</li>
            </ol>
          </div>
        </section>

        

        <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300 text-center text-gray-600 mobile-footer">
          <p className="text-base sm:text-lg md:text-xl font-bold text-blue-900 mobile-footer-title">
            فائل: Week1Class2.jsx
          </p>
          <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base mobile-footer-text">بنیادی TypeScript Syntax ٹیوٹوریل — مکمل طور پر Urdu رُسم الخط میں</p>
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-4 mobile-badges">
            <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-green-100 text-green-800 rounded-full font-semibold text-xs sm:text-sm mobile-badge">
              ✅ تمام کوڈ بلاکس کاپی کے قابل
            </div>
            <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-100 text-blue-800 rounded-full font-semibold text-xs sm:text-sm mobile-badge">
              🎯 عملی مشق کے لیے تیار
            </div>
            <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-100 text-purple-800 rounded-full font-semibold text-xs sm:text-sm mobile-badge">
              ⚡ موبائل ریسپانسیو
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fly-up {
          0% {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          10% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          90% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
        }
        
        .animate-fly-up {
          animation: fly-up 2s ease-in-out forwards;
        }
        
        /* Mobile-specific improvements for 430px, 390px, 375px */
        @media (max-width: 430px) {
          .mobile-main {
            padding-left: 4px !important;
            padding-right: 4px !important;
            padding-top: 8px !important;
            padding-bottom: 8px !important;
          }
          
          .mobile-container {
            padding: 8px !important;
            border-radius: 12px !important;
          }
          
          .mobile-header {
            margin-bottom: 16px !important;
            padding-bottom: 12px !important;
          }
          
          .mobile-main-title {
            font-size: 1.125rem !important;
            line-height: 1.4 !important;
            margin-bottom: 8px !important;
          }
          
          .mobile-instructor {
            font-size: 0.875rem !important;
          }
          
          .mobile-week-badge {
            font-size: 0.9rem !important;
            padding: 4px 8px !important;
            margin-top: 8px !important;
          }
          
          .mobile-section {
            padding: 12px !important;
            margin-bottom: 20px !important;
            border-radius: 12px !important;
          }
          
          .mobile-section-title {
            font-size: 1rem !important;
            margin-bottom: 12px !important;
            gap: 6px !important;
          }
          
          .mobile-section-text {
            font-size: 0.8125rem !important;
            line-height: 1.5 !important;
            margin-bottom: 12px !important;
          }
          
          .mobile-subsection-title {
            font-size: 0.9375rem !important;
            margin-bottom: 8px !important;
          }
          
          .mobile-card-title {
            font-size: 0.9375rem !important;
            margin-bottom: 8px !important;
          }
          
          .mobile-card-text {
            font-size: 0.9rem !important;
            line-height: 1.4 !important;
          }
          
          .mobile-highlight {
            padding: 10px !important;
          }
          
          .mobile-highlight-text {
            font-size: 0.9rem !important;
            line-height: 1.4 !important;
            gap: 6px !important;
          }
          
          .mobile-grid {
            gap: 12px !important;
          }
          
          .mobile-card {
            padding: 12px !important;
          }
          
          .mobile-tips {
            gap: 10px !important;
          }
          
          .mobile-tip {
            padding: 10px !important;
          }
          
          .mobile-tip-text {
            font-size: 0.9rem !important;
          }
          
          .mobile-tasks {
            gap: 12px !important;
          }
          
          .mobile-task {
            padding: 12px !important;
          }
          
          .mobile-task-title {
            font-size: 0.9375rem !important;
            margin-bottom: 8px !important;
          }
          
          .mobile-task-list {
            padding-left: 16px !important;
          }
          
          .mobile-footer {
            margin-top: 20px !important;
            padding-top: 16px !important;
          }
          
          .mobile-footer-title {
            font-size: 1rem !important;
          }
          
          .mobile-footer-text {
            font-size: 0.9rem !important;
          }
          
          .mobile-badges {
            gap: 6px !important;
            margin-top: 12px !important;
          }
          
          .mobile-badge {
            font-size: 0.625rem !important;
            padding: 3px 6px !important;
          }
          
          .mobile-table-container {
            margin-left: -8px;
            margin-right: -8px;
          }
          
          .mobile-table {
            min-width: 400px !important;
          }
          
          .mobile-table-header {
            font-size: 0.6875rem !important;
            padding: 4px !important;
          }
          
          .mobile-table-body {
            font-size: 0.6875rem !important;
          }
          
          .mobile-table-row {
            font-size: 0.6875rem !important;
          }
          
          .mobile-table-cell {
            padding: 4px !important;
            font-size: 0.6875rem !important;
          }
          
          .mobile-copy-btn {
            padding: 6px 8px !important;
            font-size: 0.9rem !important;
            margin-top: 4px !important;
          }
          
          .mobile-code-title {
            font-size: 0.8125rem !important;
          }
          
          .mobile-code-language {
            font-size: 0.6875rem !important;
          }
          
          .mobile-code-pre {
            font-size: 0.6875rem !important;
            line-height: 1.3 !important;
          }
          
          .mobile-icon {
            font-size: 0.875rem !important;
          }
        }
        
        @media (max-width: 390px) {
          .mobile-container {
            padding: 6px !important;
            border-radius: 10px !important;
          }
          
          .mobile-main-title {
            font-size: 1rem !important;
            line-height: 1.3 !important;
          }
          
          .mobile-section {
            padding: 10px !important;
            margin-bottom: 16px !important;
            border-radius: 10px !important;
          }
          
          .mobile-card {
            padding: 10px !important;
          }
          
          .mobile-table {
            min-width: 350px !important;
          }
          
          .mobile-copy-btn {
            padding: 4px 6px !important;
            font-size: 0.6875rem !important;
          }
          
          .mobile-badge {
            font-size: 0.5625rem !important;
            padding: 2px 4px !important;
          }
        }
        
        @media (max-width: 375px) {
          .mobile-container {
            padding: 4px !important;
          }
          
          .mobile-main-title {
            font-size: 0.9375rem !important;
          }
          
          .mobile-section {
            padding: 8px !important;
            margin-bottom: 14px !important;
          }
          
          .mobile-section-title {
            font-size: 0.9375rem !important;
          }
          
          .mobile-section-text {
            font-size: 0.9rem !important;
          }
          
          .mobile-card {
            padding: 8px !important;
          }
          
          .mobile-table {
            min-width: 320px !important;
          }
          
          .mobile-table-header {
            font-size: 0.625rem !important;
            padding: 3px !important;
          }
          
          .mobile-table-cell {
            padding: 3px !important;
            font-size: 0.625rem !important;
          }
          
          .mobile-copy-btn {
            padding: 3px 5px !important;
            font-size: 0.625rem !important;
          }
          
          .mobile-code-pre {
            font-size: 0.625rem !important;
          }
        }
        
        /* Additional mobile optimizations */
        @media (max-width: 640px) {
          pre {
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
          
          .overflow-x-auto {
            -webkit-overflow-scrolling: touch;
          }
          
          /* Ensure tables are properly scrollable */
          .mobile-table-container {
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
          }
          
          .mobile-table-container::-webkit-scrollbar {
            height: 6px;
          }
          
          .mobile-table-container::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
          }
          
          .mobile-table-container::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 3px;
          }
          
          .mobile-table-container::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        }
      `}</style>
      
    </main>
  );
}