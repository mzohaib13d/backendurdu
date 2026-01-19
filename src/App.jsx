import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import usePreventDevTools from "./hooks/usePreventDevTools";
import HomeUrdu from "./pages/HomeUrdu";
import Week1Class2 from "./pages/Week1Class2";
import Week2Class1 from "./pages/Week2Class1";
import Week2Class2 from "./pages/Week2Class2";
import Week3Class1 from "./pages/Week3Class1";
import Week3Class2 from "./pages/Week3Class2";
import Week4Class1 from "./pages/Week4Class1";
import Week4Class2 from "./pages/Week4Class2";
import SidebarUrdu from "./components/SidebarUrdu";
import MouseTrail from "./components/MouseTrail";
import Week5Class1 from "./pages/Week5Class1";
import Week5Class2 from "./pages/Week5Class2";
import Week6Class1 from "./pages/Week6Class1";
import Week6Class2 from "./pages/Week6Class2";
import Week7Class1 from "./pages/Week7Class1";
import Week7Class2 from "./pages/Week7Class2";
import Week8Class1 from "./pages/Week8Class1";
import Week8Class2 from "./pages/Week8Class2";

function App() {
  const [showMouseTrail, setShowMouseTrail] = useState(true);

  // 🚨 Hook must be here (inside component but before return)
  usePreventDevTools();

  return (
    <BrowserRouter>

      <MouseTrail enabled={showMouseTrail} />

      <button
        onClick={() => setShowMouseTrail(!showMouseTrail)}
        className="absolute top-28 right-4 z-50 bg-gradient-to-r from-green-500 to-emerald-500 text-white 
                 px-4 py-3 rounded-full shadow-lg hover:from-green-600 hover:to-emerald-600 
                 transition-all duration-300 flex items-center justify-center gap-2 
                 cursor-pointer group"
        aria-label={showMouseTrail ? "Hide mouse trail" : "Show mouse trail"}
      >
        {showMouseTrail ? (
          <>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-medium hidden sm:inline">Trail On</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <circle cx="12" cy="12" r="3" strokeWidth="2" fill="currentColor" />
            </svg>
          </>
        ) : (
          <>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <span className="text-sm font-medium hidden sm:inline">Trail Off</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" strokeWidth="2" />
            </svg>
          </>
        )}

        <div className="absolute -top-10 right-0 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Click to {showMouseTrail ? "disable" : "enable"} mouse trail
        </div>
      </button>

      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">

        <main className="flex-1 order-1 md:order-1">
          <div className="p-4 md:p-6">
            <Routes>
              <Route path="/" element={<HomeUrdu />} />
              <Route path="/week1class2" element={<Week1Class2 />} />
              <Route path="/week2class1" element={<Week2Class1 />} />
              <Route path="/week2class2" element={<Week2Class2 />} />
              <Route path="/week3class1" element={<Week3Class1 />} />
              <Route path="/week3class2" element={<Week3Class2 />} />
              <Route path="/week4class1" element={<Week4Class1 />} />
              <Route path="/week4class2" element={<Week4Class2 />} />
              <Route path="/week5class1" element={<Week5Class1 />} />
              <Route path="/week5class2" element={<Week5Class2 />} />
              <Route path="/week6class1" element={<Week6Class1 />} />
              <Route path="/week6class2" element={<Week6Class2 />} />
              <Route path="/week7class1" element={<Week7Class1 />} />
              <Route path="/week7class2" element={<Week7Class2 />} />
              <Route path="/week8class1" element={<Week8Class1 />} />
              <Route path="/week8class2" element={<Week8Class2 />} />
            </Routes>
          </div>
        </main>

        <div className="order-2 md:order-2">
          <SidebarUrdu />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;