import { useState, useRef } from "react";
import { Copy, Check } from "lucide-react";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Week3Class1() {
  const [copiedStates, setCopiedStates] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef(null);

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedStates(prev => ({ ...prev, [id]: true }));
    
    // Show flying notification
    setShowNotification(true);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [id]: false }));
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

      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-right">
        📘 Express.js میں Routers اور Controllers (explanation) کی تفہیم
      </h1>

      <div className="space-y-8">
        {/* Section 1 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🚦 1. Express.js میں Router کیا ہے؟
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg" dir="rtl">
            ایک router آپ کی application کے endpoints/URLs کی تعریف کرنے اور انہیں متعلقہ functions (controllers) سے جوڑنے کا ذمہ دار ہے۔
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <h3 className="font-bold text-green-700 mb-2 text-right" dir="rtl">✔ Routers کیا کرتے ہیں:</h3>
              <ul className="space-y-2 text-right text-gray-700" dir="rtl">
                <li>• آنے والے HTTP requests کو سنتے ہیں</li>
                <li dir="rtl">• request کو route سے ملتے ہیں (GET /users, POST /login, وغیرہ)</li>
                <li dir="rtl">• request کو صحیح controller تک پہنچاتے ہیں</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-xl border border-red-200">
              <h3 className="font-bold text-red-700 mb-2 text-right" dir="rtl">✔ Routers کیا نہیں کرتے:</h3>
              <ul className="space-y-2 text-right text-gray-700">
                <li dir="rtl">• وہ business logic نہیں رکھتے</li>
                <li dir="rtl">• وہ database operations نہیں سنبھالتے</li>
                <li dir="rtl">• وہ data کی تصدیق یا پراسیس نہیں کرتے</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg">
            Routers صرف "کہاں جانا ہے" کی تعریف کرتے ہیں۔
          </p>
          
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 mt-4">
            <h3 className="font-bold text-blue-700 mb-2 text-right">🧠 حقیقی زندگی کی مثال:</h3>
            <p className="text-gray-700 leading-relaxed text-right" dir="rtl">
              Router کو کسی عمارت کے انٹری گیٹ پر سیکورٹی گارڈ کی طرح سمجھیں۔ وہ صرف لوگوں کو بتاتا ہے:
            </p>
            <ul className="space-y-2 mt-2 text-right text-gray-700" dir="rtl">
              <li>• "آپ باورچی خانے میں جائیں۔"</li>
              <li>• "آپ میٹنگ روم میں جائیں۔"</li>
              <li>• "آپ دفتر میں جائیں۔"</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2 text-right">
              وہ کھانا نہیں پکاتا، میٹنگز نہیں چلاتا، یا دفتری کام نہیں سنبھالتا۔
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right" dir="rtl">
            🧠 2. Controller کیا ہے؟
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg" dir="rtl">
            Controller میں اصل logic ہوتی ہے جو اس وقت run ہونی چاہیے جب کسی route کو request موصول ہو۔
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <h3 className="font-bold text-green-700 mb-2 text-right" dir="rtl">✔ Controllers کیا کرتے ہیں:</h3>
              <ul className="space-y-2 text-right text-gray-700">
                <li dir="rtl">• Database سے data fetch کرتے ہیں</li>
                <li dir="rtl">• Data کو save یا update کرتے ہیں</li>
                <li dir="rtl">• Input کی validate کرتے ہیں</li>
                <li dir="rtl">• json response واپس بھیجتے ہیں</li>
                <li dir="rtl">• Errors handle کرتے ہیں</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-xl border border-red-200">
              <h3 className="font-bold text-red-700 mb-2 text-right">✔ Controllers کیا نہیں کرتے:</h3>
              <ul className="space-y-2 text-right text-gray-700">
                <li>• وہ URLs نہیں define کرتے</li>
                <li>• وہ route paths نہیں set کرتے</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <h3 className="font-bold text-blue-700 mb-2 text-right">🧠 حقیقی زندگی کی مثال:</h3>
            <p className="text-gray-700 leading-relaxed text-right">
              اگر router گارڈ ہے، تو controller وہ شیف یا عملہ ہے جو عمارت کے اندر اصل کام انجام دیتا ہے۔
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right">
            🛠 3. Folder Structure (Recommended)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg" dir="rtl">
            ایک clean Express project کو routes اور controllers کو الگ الگ organize کرنا چاہیے:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-300 mb-4">
            <pre className="text-gray-800 text-sm overflow-x-auto text-right">
              .
              ├── controllers
              │     └── user.controller.js
              ├── routes
              │     └── user.routes.js
              ├── index.js
              └── package.json
            </pre>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg" dir="rtl">
            یہ structure بہتری لاتی ہے:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-right">
            <li className="bg-green-100 p-3 rounded-lg">• Readability</li>
            <li className="bg-blue-100 p-3 rounded-lg">• Maintenance</li>
            <li className="bg-purple-100 p-3 rounded-lg">• Scalability</li>
            <li className="bg-yellow-100 p-3 rounded-lg">• Team collaboration</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right">
            📄 4. مثال: Express.js میں Router اور Controller
          </h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-700 text-right">📁 controllers/user.controller.js</h3>
              <button
                onClick={() => handleCopy(`export const getAllUsers = async (req, res) => {
  try {
    // Example data (replace with DB call)
    const users = [
      { id: 1, name: "John" },
      { id: 2, name: "Alice" }
    ];

    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name } = req.body;

    res.json({ success: true, message: "User Created", name });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};`, 'controller')}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg transition-colors"
              >
                {copiedStates.controller ? (
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
            <div className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto">
              <pre className="text-sm">
{`export const getAllUsers = async (req, res) => {
  try {
    // Example data (replace with DB call)
    const users = [
      { id: 1, name: "John" },
      { id: 2, name: "Alice" }
    ];

    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name } = req.body;

    res.json({ success: true, message: "User Created", name });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};`}
              </pre>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-700 text-right">📁 routes/user.routes.js</h3>
              <button
                onClick={() => handleCopy(`import express from "express";
import { getAllUsers, createUser } from "../controllers/user.controller.js";

const router = express.Router();

// GET /users
router.get("/", getAllUsers);

// POST /users
router.post("/", createUser);

export default router;`, 'routes')}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg transition-colors"
              >
                {copiedStates.routes ? (
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
            <div className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto">
              <pre className="text-sm">
{`import express from "express";
import { getAllUsers, createUser } from "../controllers/user.controller.js";

const router = express.Router();

// GET /users
router.get("/", getAllUsers);

// POST /users
router.post("/", createUser);

export default router;`}
              </pre>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-700 text-right">📁 index.js (Main File)</h3>
              <button
                onClick={() => handleCopy(`import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(express.json());

// Mounting user routes
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`, 'index')}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg transition-colors"
              >
                {copiedStates.index ? (
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
            <div className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto">
              <pre className="text-sm">
{`import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(express.json());

// Mounting user routes
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`}
              </pre>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right">
            🔄 5. Routers اور Controllers ایک ساتھ کیسے کام کرتے ہیں
          </h2>
          <ol className="space-y-4 text-right text-gray-700 text-lg">
            <li className="bg-blue-50 p-4 rounded-xl" dir="rtl">1. User URL hit کرتا ہے: <code className="bg-blue-100 px-2 py-1 rounded">GET /users</code></li>
            <li className="bg-green-50 p-4 rounded-xl" dir="rtl">2. Router matching route چیک کرتا ہے: <code className="bg-green-100 px-2 py-1 rounded">router.get("/", getAllUsers)</code></li>
            <li className="bg-yellow-50 p-4 rounded-xl" dir="rtl">3. Router اس request کو controller function تک پہنچاتا ہے: <code className="bg-yellow-100 px-2 py-1 rounded">→ getAllUsers()</code></li>
            <li className="bg-purple-50 p-4 rounded-xl" dir="rtl">4. Controller logic execute کرتا ہے اور response بھیجتا ہے۔</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mt-4 text-right text-lg">
            یہ separation ہر چیز کو رکھتی ہے:
          </p>
          <ul className="flex flex-wrap gap-3 mt-2 justify-end">
            <li className="bg-green-100 text-green-800 px-3 py-1 rounded-lg">clean</li>
            <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg">organized</li>
            <li className="bg-purple-100 text-purple-800 px-3 py-1 rounded-lg">professional</li>
            <li className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg">easy to maintain</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right">
            🎯 6. آپ کو Routers + Controllers کیوں استعمال کرنے چاہئیں؟
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-3 text-right font-bold text-blue-700">Benefit</th>
                  <th className="px-4 py-3 text-right font-bold text-blue-700">Explanation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">Clean Code</td>
                  <td className="px-4 py-3 text-gray-700 text-right" dir="rtl">Logic کو route definitions سے الگ کیا جاتا ہے</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">Better Organization</td>
                  <td className="px-4 py-3 text-gray-700 text-right" dir="rtl">بڑی apps کو manage کرنا آسان ہو جاتا ہے</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">Scalability</td>
                  <td className="px-4 py-3 text-gray-700 text-right" dir="rtl">نئے routes اور logic شامل کرنا simple ہو جاتا ہے</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">Team-friendly</td>
                  <td className="px-4 py-3 text-gray-700 text-right" dir="rtl">Developers routes/controllers پر آزادانہ کام کر سکتے ہیں</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900 text-right">Reusability</td>
                  <td className="px-4 py-3 text-gray-700 text-right" dir="rtl">Controllers کو multiple routes میں reuse کیا جا سکتا ہے</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 7 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right">
            🔥 7. Database کے ساتھ مثال (Optional: Prisma, MongoDB, وغیرہ)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg">
            Controller اصل DB logic handle کرتا ہے:
          </p>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-700 text-right">Controller Code</h3>
              <button
                onClick={() => handleCopy(`export const getPosts = async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
};`, 'dbController')}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg transition-colors"
              >
                {copiedStates.dbController ? (
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
            <div className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto">
              <pre className="text-sm">
{`export const getPosts = async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
};`}
              </pre>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg" dir="rtl">
            Router URL کو controller سے connect کرتا ہے:
          </p>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-700 text-right">Router Code</h3>
              <button
                onClick={() => handleCopy(`router.get("/", getPosts);`, 'dbRouter')}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg transition-colors"
              >
                {copiedStates.dbRouter ? (
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
            <div className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto">
              <pre className="text-sm">
{`router.get("/", getPosts);`}
              </pre>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4 text-right text-lg" dir="rtl">
            Main file route کو load کرتا ہے:
          </p>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-700 text-right">Main File Code</h3>
              <button
                onClick={() => handleCopy(`app.use("/posts", postRoutes);`, 'dbMain')}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg transition-colors"
              >
                {copiedStates.dbMain ? (
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
            <div className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto">
              <pre className="text-sm">
{`app.use("/posts", postRoutes);`}
              </pre>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-right">
            📌 8. Final Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-xl border-2 border-green-500">
              <h3 className="font-bold text-green-700 mb-2 text-center">✔ Router =</h3>
              <p className="text-gray-700 text-center" dir="rtl">URL کی تعریف کرتا ہے اور request کو آگے بھیجتا ہے</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-500">
              <h3 className="font-bold text-blue-700 mb-2 text-center">✔ Controller =</h3>
              <p className="text-gray-700 text-center" dir="rtl">اصل logic اور response handle کرتا ہے</p>
            </div>
          </div>
          
          <div className="mt-6 bg-yellow-50 p-4 rounded-xl border border-yellow-200">
            <p className="text-gray-700 leading-relaxed text-right text-lg font-medium" dir="rtl">
              آپ کو ہمیشہ Express.js میں routes اور controllers کو الگ کرنا چاہیے تاکہ professional اور scalable applications لکھ سکیں۔
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}