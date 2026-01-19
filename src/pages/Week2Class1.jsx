import React, { useState } from "react";
import apiDiagram from "../assets/images/api-works.png";
import rest3img from "../assets/images/rest3.png";
import rest4img from "../assets/images/rest4.png";
import rest2img from "../assets/images/rest2.jpg";
import methodimg from "../assets/images/method.gif";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Week2Class1() {
  const [copiedSections, setCopiedSections] = useState({});

  const handleCopy = (sectionId, code) => {
    navigator.clipboard.writeText(code);
    setCopiedSections((prev) => ({ ...prev, [sectionId]: true }));

    setTimeout(() => {
      setCopiedSections((prev) => ({ ...prev, [sectionId]: false }));
    }, 2000);
  };

  const CodeBlock = ({ id, title, language, code }) => (
    <div className="relative group mt-12">
      <div className="absolute right-0 top-0 z-10 -translate-y-full">
        <button
          onClick={() => handleCopy(id, code)}
          className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm mt-5 mobile-copy-btn"
        >
          <span>📋</span>
          <span className="hidden sm:inline">کاپی کریں</span>
        </button>
      </div>

      {copiedSections[id] && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-16 z-20 animate-fly-up">
          <div className="bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm">
            <span>✅</span>
            <span>کاپی ہو گیا!</span>
          </div>
        </div>
      )}

      <div className="bg-gray-800 text-white p-3 sm:p-4 rounded-xl font-mono overflow-x-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
          <span className="text-green-400 font-bold text-sm sm:text-base break-words mobile-code-title">
            {title}
          </span>
          <span className="text-yellow-300 text-xs sm:text-sm whitespace-nowrap mobile-code-language">
            {language}
          </span>
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
            🌐 HTTP Status Codes کی تفہیم Node.js & TypeScript میں
          </h1>
          <p className="text-base sm:text-lg text-gray-700 font-medium mobile-instructor">
            Instructor: Zohaib Farooq
          </p>
          <div className="mt-4 sm:mt-6 inline-block px-3 sm:px-4 md:px-6 py-1 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg shadow-lg mobile-week-badge">
            Week 2 - Class 1: HTTP Status Codes
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-blue-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🌐 HTTP Status Codes کیا ہیں؟
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed mobile-section-text" dir="rtl">
            HTTP Status Codes تین ہندسوں والے نمبر ہیں جو سرور کی طرف سے client
            (جیسے browser, mobile app, یا API) کو واپس بھیجے جاتے ہیں تاکہ بتایا
            جا سکے کہ request کے بعد کیا ہوا۔
          </p>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 sm:mb-6 leading-relaxed mobile-section-text" dir="rtl">
            👉 ہر بار جب آپ کوئی request بھیجتے ہیں — مثال کے طور پر، page visit
            کرنا، form submit کرنا، یا API data fetch کرنا — سرور ایک status
            code کے ساتھ reply کرتا ہے جو اس operation کے result کو describe
            کرنے میں مدد کرتا ہے۔
          </p>

          <CodeBlock
            id="http-example"
            title="HTTP Request اور Response کی مثال"
            language="http"
            code={`GET /home HTTP/1.1
Host: localhost:3000

Server response:
HTTP/1.1 200 OK
Content-Type: text/html

یہاں:
200 → status code ہے
OK → status message ہے`}
          />
        </section>

        {/* What is HTTP Status Code */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-green-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            ⚙️ HTTP Status Code کیا ہے؟
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text" dir="rtl"> 
            ایک HTTP Status Code response message کا حصہ ہے جو server سے client
            کو بھیجا جاتا ہے۔ یہ client کو inform کرتا ہے کہ request successful
            ہوئی، redirected ہوئی، failed ہوئی، یا error کا باعث بنی۔
          </p>
        </section>

        {/* 5 Categories */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-orange-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧭 HTTP Status Codes کی 5 Categories
          </h2>

          <div className="overflow-x-auto mobile-table-container">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-orange-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Category
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Range
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Meaning
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  [
                    "1xx",
                    "100–199",
                    "Informational – Request received, continuing process",
                  ],
                  [
                    "2xx",
                    "200–299",
                    "Success – Request was successfully received and processed",
                  ],
                  [
                    "3xx",
                    "300–399",
                    "Redirection – Further action needed (e.g., new URL)",
                  ],
                  [
                    "4xx",
                    "400–499",
                    "Client Error – The request had an issue from client-side",
                  ],
                  [
                    "5xx",
                    "500–599",
                    "Server Error – The server failed to complete a valid request",
                  ],
                ].map(([category, range, meaning], index) => (
                  <tr
                    key={index}
                    className="hover:bg-orange-50 mobile-table-row"
                  >
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono font-bold text-center text-xs sm:text-sm mobile-table-cell">
                      {category}
                    </td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono text-center text-xs sm:text-sm mobile-table-cell">
                      {range}
                    </td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                      {meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 1xx - Informational */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-gray-50 to-slate-100 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧩 1xx – Informational Responses
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text" dir="rtl">
            یہ modern applications میں rarely used ہوتے ہیں۔ They simply mean
            "the request has started processing"۔
          </p>

          <div className="overflow-x-auto mobile-table-container">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Code
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Name
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Brief Meaning
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  [
                    "100",
                    "Continue",
                    "Server received initial part of request; client should continue.",
                  ],
                  [
                    "101",
                    "Switching Protocols",
                    "Server will switch protocols (e.g., to WebSocket) as requested.",
                  ],
                  [
                    "102",
                    "Processing",
                    "Server received request and is processing it, but not yet a final response.",
                  ],
                  [
                    "103",
                    "Early Hints",
                    "Used to send preliminary headers (e.g., Link) before full response.",
                  ],
                ].map(([code, name, meaning], index) => (
                  <tr key={index} className="hover:bg-gray-50 mobile-table-row">
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono font-bold text-center text-xs sm:text-sm mobile-table-cell">
                      {code}
                    </td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                      {name}
                    </td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                      {meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2xx - Success */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-green-50 to-emerald-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-green-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            ✅ 2xx – Success Codes
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            These indicate that the client's request was successfully received,
            understood, and accepted.
          </p>

          <div className="overflow-x-auto mobile-table-container">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-green-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Code
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Name
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Brief Meaning
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  ["200", "OK", "Standard success for GET, POST etc."],
                  [
                    "201",
                    "Created",
                    "Request succeeded and a new resource was created.",
                  ],
                  [
                    "202",
                    "Accepted",
                    "Request accepted but processing not yet complete.",
                  ],
                  [
                    "203",
                    "Non-Authoritative Information",
                    "Response from a proxy rather than the origin server.",
                  ],
                  ["204", "No Content", "Success but no content to send back."],
                  [
                    "205",
                    "Reset Content",
                    "Success; client should reset view.",
                  ],
                  [
                    "206",
                    "Partial Content",
                    'Partial data sent in response to a "Range" request.',
                  ],
                  [
                    "207",
                    "Multi-Status",
                    "WebDAV: multiple responses for multiple operations.",
                  ],
                  [
                    "208",
                    "Already Reported",
                    "WebDAV: members of a DAV binding list already reported.",
                  ],
                  [
                    "226",
                    "IM Used",
                    "The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations.",
                  ],
                ].map(([code, name, meaning], index) => (
                  <tr
                    key={index}
                    className="hover:bg-green-50 mobile-table-row"
                  >
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono font-bold text-center text-xs sm:text-sm mobile-table-cell">
                      {code}
                    </td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                      {name}
                    </td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                      {meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock
            id="201-example"
            title="201 Created Code کی مثال"
            language="typescript"
            code={`res.writeHead(201, { "Content-Type": "application/json" });
res.end(JSON.stringify({ message: "User created successfully ✅" }));`}
          />

          <div className="mt-6 p-4 sm:p-6 bg-green-100 border-l-4 border-green-500 rounded-xl mobile-highlight">
            <p className="text-green-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">🧠</span>
              <span dir="rtl" className="text-base sm:text-2xl text-right">
                مثال: یہ code 201 status code کے ساتھ JSON response واپس کرتا ہے
                جب new user create کیا جاتا ہے۔
              </span>
            </p>
          </div>
        </section>

        {/* 3xx - Redirection */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-blue-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🔁 3xx – Redirection Codes
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            یہ codes client کو بتاتے ہیں کہ requested resource کسی دوسرے URL یا
            location پر move ہو گیا ہے۔
          </p>

          <div className="overflow-x-auto mobile-table-container">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-blue-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Code
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Name
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Brief Meaning
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  [
                    "300",
                    "Multiple Choices",
                    "Multiple options for the resource; user or agent to choose.",
                  ],
                  [
                    "301",
                    "Moved Permanently",
                    "Resource permanently moved to new URI.",
                  ],
                  [
                    "302",
                    'Found (formerly "Moved Temporarily")',
                    "Resource temporarily at a different URI.",
                  ],
                  [
                    "303",
                    "See Other",
                    "Response to request can be found under another URI by GET.",
                  ],
                  [
                    "304",
                    "Not Modified",
                    "Resource not modified since last request; use cache.",
                  ],
                  [
                    "305",
                    "Use Proxy",
                    "Requested resource available only via proxy.",
                  ],
                  ["306", "(Unused)", 'Previously "Switch Proxy", now unused.'],
                  [
                    "307",
                    "Temporary Redirect",
                    "Like 302 but method must not change.",
                  ],
                  [
                    "308",
                    "Permanent Redirect",
                    "Like 301 but method cannot change.",
                  ],
                ].map(([code, name, meaning], index) => (
                  <tr key={index} className="hover:bg-blue-50 mobile-table-row">
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono font-bold text-center text-xs sm:text-sm mobile-table-cell">
                      {code}
                    </td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                      {name}
                    </td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                      {meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock
            id="301-example"
            title="301 Redirection کی مثال"
            language="typescript"
            code={`res.writeHead(301, { Location: "/new-page" });
res.end();`}
          />

          <div className="mt-6 p-4 sm:p-6 bg-blue-100 border-l-4 border-blue-500 rounded-xl mobile-highlight">
            <p className="text-blue-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text" dir="rtl">
              <span className="text-lg sm:text-2xl">🧠</span>
              <span>
                مثال: یہ client کو redirect کرتا ہے، انہیں automatically
                /new-page پر لے جاتا ہے۔
              </span>
            </p>
          </div>
        </section>

        {/* 4xx - Client Errors */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-red-50 to-pink-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-red-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            ⚠️ 4xx – Client Error Codes
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text" dir="rtl">
            یہ client کی request میں problems کی نشاندہی کرتے ہیں — جیسے wrong
            data, missing authorization, یا invalid routes۔
          </p>

          <div className="overflow-x-auto mobile-table-container">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-red-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Code
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Name
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Brief Meaning
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  ["400", "Bad Request", "Client sent invalid request."],
                  [
                    "401",
                    "Unauthorized",
                    "Authentication required and has failed or not yet provided.",
                  ],
                  [
                    "402",
                    "Payment Required",
                    "Reserved for future use / digital payments.",
                  ],
                  [
                    "403",
                    "Forbidden",
                    "Server understands request but refuses to authorize.",
                  ],
                  ["404", "Not Found", "Requested resource not found."],
                  [
                    "405",
                    "Method Not Allowed",
                    "Method not supported for the resource.",
                  ],
                  [
                    "406",
                    "Not Acceptable",
                    "Server cannot generate content acceptable by client.",
                  ],
                  [
                    "407",
                    "Proxy Authentication Required",
                    "Client must authenticate with proxy.",
                  ],
                  [
                    "408",
                    "Request Timeout",
                    "Server timed out waiting for request.",
                  ],
                  [
                    "409",
                    "Conflict",
                    "Request conflicts with current state of server.",
                  ],
                  [
                    "410",
                    "Gone",
                    "Resource no longer available and no forwarding address.",
                  ],
                  [
                    "411",
                    "Length Required",
                    "Server refuses to accept request without Content-Length header.",
                  ],
                  [
                    "412",
                    "Precondition Failed",
                    "One or more conditions given in request headers failed.",
                  ],
                  [
                    "413",
                    "Payload Too Large",
                    "Request is larger than server is willing/able to process.",
                  ],
                  ["414", "URI Too Long", "URI requested is too long."],
                  [
                    "415",
                    "Unsupported Media Type",
                    "Request entity has a media type the server does not support.",
                  ],
                  [
                    "416",
                    "Range Not Satisfiable",
                    "Requested range cannot be fulfilled.",
                  ],
                  [
                    "417",
                    "Expectation Failed",
                    "Server cannot meet the requirements of the Expect header.",
                  ],
                  [
                    "418",
                    "I’m a Teapot (RFC 2324)",
                    "Easter-egg code; server refuses to brew coffee.",
                  ],
                  [
                    "421",
                    "Misdirected Request",
                    "Request directed at a server that is not able to produce a response.",
                  ],
                  [
                    "422",
                    "Unprocessable Entity",
                    "WebDAV: request was well-formed but unable to process.",
                  ],
                  ["423", "Locked", "WebDAV: resource is locked."],
                  [
                    "424",
                    "Failed Dependency",
                    "WebDAV: failure in previous request dependency.",
                  ],
                  [
                    "425",
                    "Too Early",
                    "Indicates that the server is unwilling to risk processing a request that might be replayed.",
                  ],
                  [
                    "426",
                    "Upgrade Required",
                    "Client should switch to a different protocol.",
                  ],
                  [
                    "428",
                    "Precondition Required",
                    "Request must be conditional.",
                  ],
                  [
                    "429",
                    "Too Many Requests",
                    'Client sent too many requests in a given amount of time ("rate limiting").',
                  ],
                  [
                    "431",
                    "Request Header Fields Too Large",
                    "Server refuses because headers are too large.",
                  ],
                  [
                    "451",
                    "Unavailable For Legal Reasons",
                    "Resource unavailable for legal/censorship reason.",
                  ],
                ].map(([code, name, meaning], index) => (
                  <tr key={index} className="hover:bg-red-50 mobile-table-row">
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono font-bold text-center text-xs sm:text-sm mobile-table-cell">
                      {code}
                    </td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                      {name}
                    </td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                      {meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock
            id="404-example"
            title="404 Not Found کی مثال"
            language="typescript"
            code={`if (req.url !== "/home") {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404 - Page Not Found ❌");
}`}
          />
        </section>

        {/* 5xx - Server Errors */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-purple-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            💣 5xx – Server Error Codes
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text">
            These indicate that the server failed to fulfill a valid request due
            to internal issues.
          </p>

          <div className="overflow-x-auto mobile-table-container">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-purple-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Code
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Name
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Brief Meaning
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  [
                    "500",
                    "Internal Server Error",
                    "Generic server error when no more specific code fits.",
                  ],
                  [
                    "501",
                    "Not Implemented",
                    "Server does not support functionality required to fulfill request.",
                  ],
                  [
                    "502",
                    "Bad Gateway",
                    "Server, while acting as gateway/proxy, received invalid response from upstream server.",
                  ],
                  [
                    "503",
                    "Service Unavailable",
                    "Server currently unavailable (overloaded/maintenance).",
                  ],
                  [
                    "504",
                    "Gateway Timeout",
                    "Gateway or proxy did not get response in time.",
                  ],
                  [
                    "505",
                    "HTTP Version Not Supported",
                    "Server does not support HTTP protocol version used in request.",
                  ],
                  [
                    "506",
                    "Variant Also Negotiates",
                    "Internal server error; transparent content negotiation loop.",
                  ],
                  [
                    "507",
                    "Insufficient Storage",
                    "WebDAV: Server unable to store representation needed to complete request.",
                  ],
                  [
                    "508",
                    "Loop Detected",
                    'WebDAV: Server detected infinite loop while processing a request with "Depth: infinity".',
                  ],
                  [
                    "510",
                    "Not Extended",
                    "Further extensions to the request are required for server to fulfil it.",
                  ],
                  [
                    "511",
                    "Network Authentication Required",
                    "Client needs network authentication (e.g., captive portal) before accessing network.",
                  ],
                ].map(([code, name, meaning], index) => (
                  <tr
                    key={index}
                    className="hover:bg-purple-50 mobile-table-row"
                  >
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono font-bold text-center text-xs sm:text-sm mobile-table-cell">
                      {code}
                    </td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                      {name}
                    </td>
                    <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                      {meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock
            id="500-example"
            title="500 Internal Server Error کی مثال"
            language="typescript"
            code={`try {
  throw new Error("Unexpected failure");
} catch (error) {
  res.writeHead(500, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Internal Server Error 💥" }));
}`}
          />
        </section>

        {/* Why Important */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-indigo-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            💡 Status Codes کیوں اہم ہیں؟
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mobile-grid" dir="rtl">
            {[
              [
                "🧠",
                "Clear Communication",
                "Client کو یہ جاننے میں مدد کرتا ہے کہ request successful ہوئی یا failed۔",
              ],
              [
                "⚙️",
                "Debugging",
                "Developers آسانی سے identify کر سکتے ہیں کہ کیا wrong ہوا۔",
              ],
              [
                "🔒",
                "Security",
                "Proper use of codes prevents exposing sensitive info۔",
              ],
              [
                "🌍",
                "Standardization",
                "Every system (browser, mobile, backend) understands these codes۔",
              ],
            ].map(([icon, benefit, explanation], index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow border border-indigo-200 flex flex-col mobile-card"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl mobile-icon">
                    {icon}
                  </span>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-indigo-700 mobile-card-title">
                    {benefit}
                  </h4>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mobile-card-text">
                  {explanation}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 sm:p-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-xl mobile-highlight">
            <p className="text-yellow-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">📌</span>
              <span>
                نوٹ: Most typical API/back-end work کے لیے، آپ mainly ایک subset
                use کریں گے: 200, 201, 204, 301, 400, 401, 403, 404, 422, 429,
                500, 503 etc.
              </span>
            </p>
          </div>
        </section>

        {/* Complete Example */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-teal-50 to-green-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-teal-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧩 Complete Example in TypeScript
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text" dir="rtl">
            یہاں ایک چھوٹا Node.js + TypeScript server ہے جو multiple status
            codes کو demonstrate کرتا ہے:
          </p>

          <CodeBlock
            id="complete-server"
            title="Complete Node.js + TypeScript Server"
            language="typescript"
            code={`import http, { IncomingMessage, ServerResponse } from "http";

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("✅ Home Page - Status: 200 OK");
  } 
  else if (req.url === "/create") {
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Resource created successfully" }));
  } 
  else if (req.url === "/redirect") {
    res.writeHead(301, { Location: "/new-location" });
    res.end();
  } 
  else if (req.url === "/error") {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("💥 Internal Server Error");
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("❌ Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});`}
          />

          <div className="mt-6 sm:mt-8">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-teal-700 mobile-subsection-title">
              🧭 Output Summary
            </h4>
            <div className="overflow-x-auto mobile-table-container">
              <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
                <thead className="bg-teal-200">
                  <tr>
                    <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                      URL
                    </th>
                    <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                      Status Code
                    </th>
                    <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                      Response
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                  {[
                    ["/", "200", "✅ Home Page - OK"],
                    ["/create", "201", "JSON: Resource created"],
                    ["/redirect", "301", "Redirects to /new-location"],
                    ["/error", "500", "💥 Internal Server Error"],
                    ["/random", "404", "❌ Page Not Found"],
                  ].map(([url, code, response], index) => (
                    <tr
                      key={index}
                      className="hover:bg-teal-50 mobile-table-row"
                    >
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono text-xs sm:text-sm mobile-table-cell">
                        {url}
                      </td>
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono font-bold text-center text-xs sm:text-sm mobile-table-cell">
                        {code}
                      </td>
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                        {response}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-amber-50 to-orange-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-amber-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧱 Quick Tips for Professionals
          </h2>

          <div className="space-y-3 sm:space-y-4 mobile-tips">
            {[
              "✅ Always use meaningful status codes in APIs (never send 200 for all cases)۔",
              '✅ Combine with proper JSON responses like { "success": false, "message": "Not Found" }۔',
              "✅ Log 500 errors on the server — they usually mean code bugs۔",
              "✅ Use tools like Postman or curl to test different response scenarios۔",
              "✅ Keep your API consistent — always return standard formats۔",
            ].map((tip, index) => (
              <div
                key={index}
                className="bg-white p-3 sm:p-4 rounded-lg shadow border border-amber-200 flex items-start gap-2 sm:gap-3 mobile-tip"
              >
                <span className="text-green-500 text-lg sm:text-xl mt-1 mobile-icon">
                  ✅
                </span>
                <span className="text-gray-700 text-xs sm:text-sm md:text-base mobile-tip-text">
                  {tip}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Tasks */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-rose-50 to-pink-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-rose-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧩 Practice Tasks (For Students)
          </h2>

          <div className="space-y-4 sm:space-y-6 mobile-tasks">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-rose-200 mobile-task">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-rose-700 mobile-task-title">
                1. ایک simple server بنائیں جو:
              </h4>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 mobile-task-list">
                <li className="text-gray-700 text-xs sm:text-sm md:text-base">
                  / کے لیے 200 واپس کرے
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base">
                  /create کے لیے 201 واپس کرے
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base">
                  /notfound کے لیے 404 واپس کرے
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base">
                  /error کے لیے 500 واپس کرے
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-rose-200 mobile-task">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-rose-700 mobile-task-title">
                2. ہر request پر status code اور URL console میں log کریں۔
              </h4>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-rose-200 mobile-task">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-rose-700 mobile-task-title">
                3. Plain text کے بجائے JSON responses واپس کرنے کی کوشش کریں۔
              </h4>
            </div>
          </div>

          <CodeBlock
            id="practice-task"
            title="Practice کے لیے Starting Point"
            language="typescript"
            code={`import http, { IncomingMessage, ServerResponse } from "http";

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  // یہاں اپنا code include کریں
  // TODO: مختلف URLs کے لیے مختلف status codes واپس کریں
});

server.listen(3000, () => {
  console.log("Server running...");
});`}
          />
        </section>

        {/* RESTful APIs Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-blue-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🌐 RESTful APIs اور HTTP Methods کا تعارف
          </h2>

          <div className="mb-6">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-indigo-700 mobile-subsection-title">
              🧠 What is an API?
            </h3>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 leading-relaxed mobile-section-text" dir="rtl">
              API کا مطلب ہے <strong>Application Programming Interface</strong>۔
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 leading-relaxed mobile-section-text" dir="rtl">
              سادہ الفاظ میں: یہ دو applications (یا systems) کے درمیان بات چیت
              کرنے کا طریقہ ہے۔
            </p>

            <h4 className="text-bolder text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 mobile-subsection-title">
              Visual Representation
            </h4>

            {/* Responsive Image Container */}
            <div className="my-6 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-full lg:max-w-none mx-auto">
                <img
                  src={apiDiagram}
                  alt="API Communication Diagram showing how client and server communicate through API"
                  className="w-full h-auto rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                  API Flow
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-blue-200 mt-8 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-blue-700 mobile-card-title">
                📝 مثال:
              </h4>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 mobile-card-text" dir="rtl">
                جب آپ Instagram کھولتے ہیں:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1">
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  Mobile app backend پر Instagram API کو call کرتا ہے
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  وہ API آپ کا profile data, images, اور likes واپس بھیجتا ہے
                </li>
              </ul>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 mobile-card-text" dir="rtl">
                Backend development میں: APIs frontend apps (React, mobile,
                وغیرہ) کو آپ کے Node.js server سے communicate کرنے دیتے ہیں
              </p>
            </div>
            <br />
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-indigo-700 mobile-subsection-title">
              🔁 How API Communication Works
            </h2>
            <h4 className="text-bolder text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 mobile-subsection-title">
              Visual Representation
            </h4>

            <img
              src={rest3img}
              alt="API Communication Diagram showing how client and server communicate through API"
              className="w-full h-auto rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            />
            <div className="mt-8">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-indigo-700 mobile-subsection-title">
                ⚙️ What is REST?
              </h3>

              <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 leading-relaxed mobile-section-text" dir="rtl">
                REST کا مطلب ہے <strong>Representational State Transfer</strong>
                ۔ یہ کوئی programming language یا framework نہیں ہے — یہ ایک
                architectural style یا web APIs بنانے کے rules کا set ہے جو
                scalable, maintainable, اور efficient ہوں۔
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-indigo-200 mt-4 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 mobile-card-title">
                🧠 سادہ تفہیم:
              </h4>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 mobile-card-text" dir="rtl">
                ایک restaurant 🍽️ کا تصور کریں:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1">
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  آپ (client) waiter سے dish request کرتے ہیں
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  Waiter (API) آپ کی request کو chef کے پاس لے جاتا ہے
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  Chef (server/database) آپ کا کھانا تیار کرتا ہے اور waiter کے
                  ذریعے واپس بھیجتا ہے
                </li>
              </ul>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 mobile-card-text" dir="rtl">
                اسی طرح: Client ایک HTTP request بھیجتا ہے → Server اسے process
                کرتا ہے اور response واپس بھیجتا ہے → API دونوں کو connect کرنے
                والا medium ہے۔
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="overflow-x-auto mobile-table-container">
              <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
                <thead className="bg-indigo-200">
                  <tr>
                    <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                      Principle
                    </th>
                    <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                  {[
                    [
                      "Client-Server",
                      "Frontend (client) اور backend (server) separate ہوتے ہیں",
                    ],
                    [
                      "Stateless",
                      "ہر request میں تمام necessary information ہوتی ہے — server پچھلی state store نہیں کرتا",
                    ],
                    ["Uniform Interface", "Consistent endpoints اور formats"],
                    [
                      "Resource-Based",
                      "Data (جیسے users, posts, products) resources کہلاتے ہیں",
                    ],
                    [
                      "HTTP Methods",
                      "CRUD operations کے لیے standard HTTP methods استعمال ہوتے ہیں",
                    ],
                  ].map(([principle, description], index) => (
                    <tr
                      key={index}
                      className="hover:bg-indigo-50 mobile-table-row"
                    >
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm mobile-table-cell">
                        {principle}
                      </td>
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                        {description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <br />
            <h4 className="text-bolder text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 mobile-subsection-title">
              Visual Representation
            </h4>
            {/* Responsive Image Container */}
            <div className="my-6 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-full lg:max-w-none mx-auto">
                <img
                  src={rest4img}
                  alt="API Communication Diagram showing how client and server communicate through API"
                  className="w-full h-auto rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                />
                <br />
                <img
                  src={rest2img}
                  alt="API Communication Diagram showing how client and server communicate through API"
                  className="w-full h-auto rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </section>
        {/* HTTP Methods Introduction */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-blue-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🌐 Backend Development میں HTTP Methods کی تفہیم
          </h2>

          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text" dir="rtl">
            HTTP methods (جنہیں HTTP verbs بھی کہا جاتا ہے) define کرتے ہیں کہ
            آپ web server میں resource (data) پر کس قسم کا action perform کرنا
            چاہتے ہیں۔
          </p>

          <div className="mb-6 p-4 sm:p-6 bg-blue-100 border-l-4 border-blue-500 rounded-xl mobile-highlight">
            <p className="text-blue-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text">
              <span className="text-lg sm:text-2xl">⚡</span>
              <span dir="rtl">
                یہ methods server کو بتاتے ہیں کہ آپ کیا کرنا چاہتے ہیں — جیسے:
              </span>
            </p>
            <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-2">
              <li className="text-blue-800 text-sm sm:text-base">Fetch data</li>
              <li className="text-blue-800 text-sm sm:text-base">
                Create new data
              </li>
              <li className="text-blue-800 text-sm sm:text-base">
                Update existing data
              </li>
              <li className="text-blue-800 text-sm sm:text-base">
                Delete data
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-indigo-700 mobile-subsection-title">
              ⚙️ What is HTTP?
            </h3>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 leading-relaxed mobile-section-text" dir="rtl">
              HTTP (HyperText Transfer Protocol) web پر data communication کی
              foundation ہے۔ یہ define کرتا ہے کہ clients (جیسے browsers یا
              apps) اور servers کیسے communicate کرتے ہیں۔
            </p>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-indigo-200 mt-4 mobile-card">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 mobile-card-title">
                🌍 HTTP Request-Response Cycle
              </h4>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 mobile-card-text" dir="rtl">
                جب آپ website visit کرتے ہیں یا API call کرتے ہیں:
              </p>
              <ol className="list-decimal pl-4 sm:pl-6 space-y-2">
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  آپ کا browser (client) ایک HTTP request بھیجتا ہے۔
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  Server اسے process کرتا ہے۔
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  HTTP response واپس بھیجتا ہے۔
                </li>
              </ol>
            </div>

            <div className="mt-6">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 mobile-subsection-title">
                📦 HTTP Request کا Structure
              </h4>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-4 leading-relaxed mobile-section-text">
                ہر request میں شامل ہوتا ہے:
              </p>

              <div className="overflow-x-auto mobile-table-container">
                <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
                  <thead className="bg-indigo-200">
                    <tr>
                      <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                        Component
                      </th>
                      <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                        Description
                      </th>
                      <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                        Example
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                    {[
                      [
                        "Method",
                        "Action type جو perform کرنا ہے",
                        "GET, POST, PUT, DELETE",
                      ],
                      [
                        "URL/Endpoint",
                        "Resource کا address",
                        "/api/users, /products/123",
                      ],
                      [
                        "Headers",
                        "Meta-information",
                        "Content-Type, Authorization",
                      ],
                      ["Body", "Data (کچھ methods کے لیے)", "JSON, form data"],
                    ].map(([component, description, example], index) => (
                      <tr
                        key={index}
                        className="hover:bg-indigo-50 mobile-table-row"
                      >
                        <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm mobile-table-cell">
                          {component}
                        </td>
                        <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                          {description}
                        </td>
                        <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono text-xs sm:text-sm mobile-table-cell">
                          {example}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* GIF Image Placeholder - آپ یہاں اپنی GIF image شامل کر سکتے ہیں */}
          <div className="mt-8">
            <h4 className="text-bolder text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 mobile-subsection-title">
              🎬 Visual Representation
            </h4>

            <div className="my-6 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-full lg:max-w-none mx-auto">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-4 rounded-xl border-2 border-dashed border-gray-300 min-h-[200px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🎥</div>
                    <p className="text-gray-600 font-medium">
                      HTTP Methods GIF Image
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      {/* آپ یہاں اپنی GIF image شامل کر سکتے ہیں */}
                      <img
                        src={methodimg}
                        alt="HTTP Methods Animation showing request-response cycle"
                        className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
                      />
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                  Animation
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">
                یہ animation HTTP methods کے request-response flow کو visually
                demonstrate کرے گی۔
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 sm:p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border-l-4 border-green-500 mobile-highlight">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-green-700 mobile-subsection-title">
              💡 Key Points to Remember
            </h4>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2">
              <li className="text-green-800 text-sm sm:text-base" dir="rtl">
                HTTP stateless protocol ہے - ہر request independent ہوتی ہے
              </li>
              <li className="text-green-800 text-sm sm:text-base" dir="rtl">
                ہر HTTP method کا specific purpose ہوتا ہے
              </li>
              <li className="text-green-800 text-sm sm:text-base" dir="rtl">
                Methods کو CRUD operations سے map کیا جا سکتا ہے
              </li>
              <li className="text-green-800 text-sm sm:text-base" dir="rtl">
                Headers additional information provide کرتے ہیں
              </li>
              <li className="text-green-800 text-sm sm:text-base" dir="rtl">
                Body میں data ہوتا ہے (POST, PUT, PATCH methods کے لیے)
              </li>
            </ul>
          </div>
        </section>
        {/* HTTP Methods Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-green-50 to-teal-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-green-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🌐 Backend Development میں HTTP Methods کی تفہیم
          </h2>

          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text" dir="rtl">
            HTTP methods (جنہیں HTTP verbs بھی کہا جاتا ہے) define کرتے ہیں کہ
            آپ web server میں resource (data) پر کس قسم کا action perform کرنا
            چاہتے ہیں۔
          </p>

          <div className="mb-6 p-4 sm:p-6 bg-green-100 border-l-4 border-green-500 rounded-xl mobile-highlight">
            <p className="text-green-800 text-sm sm:text-base font-bold flex items-start gap-2 sm:gap-3 mobile-highlight-text" dir="rtl">
              <span className="text-lg sm:text-2xl">⚙️</span>
              <span className="leading-relaxed" dir="rtl">
                یہ methods server کو بتاتے ہیں کہ آپ کیا کرنا چاہتے ہیں — جیسے:
                Data fetch کرنا، نیا data بنانا، existing data update کرنا، یا
                data delete کرنا
              </span>
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-teal-700 mobile-subsection-title">
              ⚡ Common HTTP Methods Explained
            </h3>

            <div className="space-y-6">
              {/* GET Method */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-green-200 mobile-card">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <span className="text-xl sm:text-2xl bg-green-500 text-white p-2 rounded-lg">
                    🟩
                  </span>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-green-700 mobile-card-title">
                    1. GET — Retrieve Data
                  </h4>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 mobile-card-text" dir="rtl">
                  <strong>Purpose:</strong> Server سے data fetch یا read کرنے کے
                  لیے استعمال ہوتا ہے۔ یہ کبھی بھی data modify نہیں کرتا — صرف
                  information request کرتا ہے۔
                </p>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 mobile-card-text" dir="rtl">
                  <strong>Key Points:</strong> Safe اور idempotent (multiple
                  times safely call کیا جا سکتا ہے)۔ Data URL کے ذریعے بھیجتا ہے
                  (query parameters)۔ Usually lists, details, یا search results
                  display/fetch کرنے کے لیے استعمال ہوتا ہے۔
                </p>
                <CodeBlock
                  id="get-example"
                  title="GET Method Example"
                  language="http"
                  code={`GET /books
Response:
[
  { "id": 1, "title": "Atomic Habits" },
  { "id": 2, "title": "Deep Work" }
]`}
                />
              </div>

              {/* POST Method */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-blue-200 mobile-card">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <span className="text-xl sm:text-2xl bg-blue-500 text-white p-2 rounded-lg">
                    🟦
                  </span>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-blue-700 mobile-card-title">
                    2. POST — Create Data
                  </h4>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 mobile-card-text" dir="rtl">
                  <strong>Purpose:</strong> Server میں نیا data add کرنے کے لیے
                  استعمال ہوتا ہے۔
                </p>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 mobile-card-text" dir="rtl">
                  <strong>Key Points:</strong> Request body کے اندر data بھیجتا
                  ہے۔ Server اسے process کرتا ہے اور store کرتا ہے۔ Confirmation
                  یا created object واپس کرتا ہے۔
                </p>
                <CodeBlock
                  id="post-example"
                  title="POST Method Example"
                  language="http"
                  code={`POST /books
Request Body:
{ "title": "The Alchemist" }
Response:
{ "message": "Book added successfully!" }`}
                />
              </div>

              {/* PUT Method */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-yellow-200 mobile-card">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <span className="text-xl sm:text-2xl bg-yellow-500 text-white p-2 rounded-lg">
                    🟨
                  </span>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-yellow-700 mobile-card-title">
                    3. PUT — Full Update
                  </h4>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 mobile-card-text" dir="rtl">
                  <strong>Purpose:</strong> Existing resource کو مکمل طور پر
                  update کرنے کے لیے استعمال ہوتا ہے۔ اگر کچھ fields missing
                  ہیں، تو وہ replace یا overwrite ہو جائیں گے۔
                </p>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 mobile-card-text" dir="rtl">
                  <strong>Key Points:</strong> Idempotent (same result no matter
                  how many times you send it)۔ پورے resource کو new data سے
                  replace کرتا ہے۔
                </p>
                <CodeBlock
                  id="put-example"
                  title="PUT Method Example"
                  language="http"
                  code={`PUT /books/2
Request Body:
{ "title": "Deep Work (Updated Edition)" }
Response:
{ "message": "Book updated successfully!" }`}
                />
              </div>

              {/* DELETE Method */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-red-200 mobile-card">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <span className="text-xl sm:text-2xl bg-red-500 text-white p-2 rounded-lg">
                    🟥
                  </span>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-red-700 mobile-card-title">
                    4. DELETE — Remove Data
                  </h4>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 mobile-card-text" dir="rtl">
                  <strong>Purpose:</strong> Server سے data delete کرنے کے لیے
                  استعمال ہوتا ہے۔
                </p>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 mobile-card-text" dir="rtl">
                  <strong>Key Points:</strong> Specified resource کو remove کرتا
                  ہے۔ Usually URL میں ID یا identifier کی ضرورت ہوتی ہے۔
                </p>
                <CodeBlock
                  id="delete-example"
                  title="DELETE Method Example"
                  language="http"
                  code={`DELETE /books/2
Response:
{ "message": "Book deleted successfully!" }`}
                />
              </div>

              {/* PATCH Method */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-orange-200 mobile-card">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <span className="text-xl sm:text-2xl bg-orange-500 text-white p-2 rounded-lg">
                    🟧
                  </span>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-orange-700 mobile-card-title">
                    5. PATCH — Partial Update
                  </h4>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 mobile-card-text" dir="rtl">
                  <strong>Purpose:</strong> Existing resource کے specific fields
                  کو update کرنے کے لیے استعمال ہوتا ہے۔ PUT کے برعکس، یہ پورا
                  object replace نہیں کرتا۔
                </p>
                <CodeBlock
                  id="patch-example"
                  title="PATCH Method Example"
                  language="http"
                  code={`PATCH /books/1
Request Body:
{ "author": "James Clear" }
Response:
{ "message": "Book partially updated!" }`}
                />
              </div>
            </div>
          </div>

          {/* PUT vs PATCH Comparison */}
          <div className="mt-8 p-4 sm:p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-xl mobile-highlight">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-yellow-700 mobile-subsection-title">
              💬 PUT vs PATCH — Key Difference
            </h4>
            <div className="overflow-x-auto mobile-table-container">
              <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
                <thead className="bg-yellow-100">
                  <tr>
                    <th className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm text-center mobile-table-header">
                      Method
                    </th>
                    <th className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm text-center mobile-table-header">
                      Purpose
                    </th>
                    <th className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm text-center mobile-table-header">
                      Behavior
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm mobile-table-body" dir="rtl">
                  {[
                    ["PUT", "Full update", "پورے resource کو replace کرتا ہے"],
                    [
                      "PATCH",
                      "Partial update",
                      "صرف specified fields کو update کرتا ہے",
                    ],
                  ].map(([method, purpose, behavior], index) => (
                    <tr
                      key={index}
                      className="hover:bg-yellow-50 mobile-table-row"
                    >
                      <td className="p-2 sm:p-3 border border-gray-300 font-mono font-bold text-center text-xs sm:text-sm mobile-table-cell">
                        {method}
                      </td>
                      <td className="p-2 sm:p-3 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                        {purpose}
                      </td>
                      <td className="p-2 sm:p-3 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                        {behavior}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 mobile-grid">
              <div className="bg-white p-3 sm:p-4 rounded-lg border border-green-200">
                <p className="text-green-700 text-sm font-bold mb-1">
                  ✅ PUT replaces everything
                </p>
                <CodeBlock
                  id="put-behavior"
                  title="PUT Example"
                  language="json"
                  code={`{ "title": "New Title" }`}
                />
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-lg border border-orange-200">
                <p className="text-orange-700 text-sm font-bold mb-1">
                  ✅ PATCH changes only one field
                </p>
                <CodeBlock
                  id="patch-behavior"
                  title="PATCH Example"
                  language="json"
                  code={`{ "author": "New Author" }`}
                />
              </div>
            </div>
          </div>

          {/* Typical API Usage */}
          <div className="mt-8">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-teal-700 mobile-subsection-title">
              🌍 How a Typical API Uses HTTP Methods
            </h4>
            <div className="overflow-x-auto mobile-table-container">
              <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
                <thead className="bg-teal-200">
                  <tr>
                    <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                      Method
                    </th>
                    <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                      Example Endpoint
                    </th>
                    <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                  {[
                    ["GET", "/users", "Fetch all users"],
                    ["GET", "/users/1", "Fetch a single user"],
                    ["POST", "/users", "Add a new user"],
                    ["PUT", "/users/1", "Replace an existing user"],
                    ["PATCH", "/users/1", "Update specific fields"],
                    ["DELETE", "/users/1", "Delete a user"],
                  ].map(([method, endpoint, purpose], index) => (
                    <tr
                      key={index}
                      className="hover:bg-teal-50 mobile-table-row"
                    >
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono font-bold text-center text-xs sm:text-sm mobile-table-cell">
                        {method}
                      </td>
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono text-xs sm:text-sm mobile-table-cell">
                        {endpoint}
                      </td>
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                        {purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* HTTP Methods Summary */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-gray-50 to-slate-100 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧠 Summary
          </h2>

          <div className="overflow-x-auto mobile-table-container">
            <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Method
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Action
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Safe?
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Idempotent?
                  </th>
                  <th className="p-2 sm:p-3 md:p-4 border border-gray-300 font-bold text-xs sm:text-sm md:text-base text-center mobile-table-header">
                    Request Body
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-sm mobile-table-body">
                {[
                  ["GET", "Read", "✅ Yes", "✅ Yes", "❌ No"],
                  ["POST", "Create", "❌ No", "❌ No", "✅ Yes"],
                  ["PUT", "Update (Full)", "❌ No", "✅ Yes", "✅ Yes"],
                  ["PATCH", "Update (Partial)", "❌ No", "✅ Yes", "✅ Yes"],
                  ["DELETE", "Delete", "❌ No", "✅ Yes", "❌ No"],
                ].map(
                  ([method, action, safe, idempotent, requestBody], index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 mobile-table-row"
                    >
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 font-mono font-bold text-center text-xs sm:text-sm mobile-table-cell">
                        {method}
                      </td>
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                        {action}
                      </td>
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-center font-bold text-xs sm:text-sm mobile-table-cell">
                        {safe}
                      </td>
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-center font-bold text-xs sm:text-sm mobile-table-cell">
                        {idempotent}
                      </td>
                      <td className="p-2 sm:p-3 md:p-4 border border-gray-300 text-center font-bold text-xs sm:text-sm mobile-table-cell">
                        {requestBody}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 sm:p-6 bg-blue-100 border-l-4 border-blue-500 rounded-xl mobile-highlight">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-blue-700 mobile-subsection-title">
              🎯 Key Takeaways
            </h4>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2">
              <li className="text-blue-800 text-sm sm:text-base" dir="rtl">
                HTTP methods define کرتے ہیں کہ آپ resource (CRUD operations) کے
                ساتھ کیسے interact کرتے ہیں
              </li>
              <li className="text-blue-800 text-sm sm:text-base" dir="rtl">
                ہر method کا specific purpose ہوتا ہے — انہیں mix up نہ کریں
              </li>
              <li className="text-blue-800 text-sm sm:text-base" dir="rtl">
                ہمیشہ meaningful status codes واپس کریں (مثلاً, 200 OK, 201
                Created, 404 Not Found)
              </li>
              <li className="text-blue-800 text-sm sm:text-base" dir="rtl">
                TypeScript requests اور responses handle کرتے وقت type safety
                enforce کرنے میں مدد کرتا ہے
              </li>
            </ul>
          </div>
        </section>

        {/* Express.js Section */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-purple-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🚀 Express.js - Node.js Web Framework
          </h2>

          <div className="space-y-6">
            {/* What is Express.js */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-purple-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-purple-700 mobile-card-title">
                1) What is Express.js?
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mobile-card-text" dir="rtl">
                Express.js ایک minimal, flexible web framework ہے Node.js کے لیے
                جو web servers اور APIs بنانے کو آسان بناتا ہے۔ یہ features کی
                ایک thin layer فراہم کرتا ہے — routing, middleware,
                request/response helpers — تاکہ آپ کو manually low-level HTTP
                handling implement کرنے کی ضرورت نہ پڑے۔
              </p>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 mobile-card-text" dir="rtl">
                <strong>Key idea:</strong> Express آپ کو structured, readable
                API دیتا ہے endpoints بنانے کے لیے جبکہ unopinionated رہتا ہے
                (آپ choose کرتے ہیں کہ app کو کیسے structure کریں)۔
              </p>
            </div>

            {/* Why Express */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-purple-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-purple-700 mobile-card-title">
                2) Why do we need Express?
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mobile-card-text" dir="rtl">
                Framework کے بغیر، web server بنانے کے لیے many common tasks کی
                manual handling درکار ہوتی ہے:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-1">
                <li className="text-gray-700 text-xs sm:text-sm md:text-base">
                  Request bodies parsing (JSON, form data)
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base">
                  Routing (URLs اور HTTP methods matching)
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  Headers اور status codes کی consistent handling
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base">
                  Middleware chains (authentication, logging, body parsing)
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  Error handling, central logging, اور static file serving
                </li>
              </ul>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 mobile-card-text" dir="rtl">
                Express انہیں solve کرتا ہے یہ offer کر کے:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-1">
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  <code>app.get()</code>, <code>app.post()</code> وغیرہ routing
                  کے لیے
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  <code>express.json()</code> اور{" "}
                  <code>express.urlencoded()</code> body parsing کے لیے
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  Middleware system (<code>app.use()</code>) reusable logic کے
                  لیے
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  Clear separation of concerns (routes, middleware, controllers)
                </li>
              </ul>
            </div>

            {/* Node.js vs Express Comparison */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-purple-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-purple-700 mobile-card-title">
                3) Node.js vs Express.js — quick comparison
              </h3>
              <div className="overflow-x-auto mobile-table-container">
                <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
                  <thead className="bg-purple-100">
                    <tr>
                      <th className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm text-center mobile-table-header">
                        Feature
                      </th>
                      <th className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm text-center mobile-table-header">
                        Raw Node.js (http module)
                      </th>
                      <th className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm text-center mobile-table-header">
                        Express.js
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm mobile-table-body">
                    {[
                      [
                        "Routing",
                        "Manual if (req.url ...)",
                        "app.get, app.post, routers",
                      ],
                      [
                        "Parsing body",
                        'Manual req.on("data") & parse',
                        "express.json() / express.urlencoded()",
                      ],
                      [
                        "Middleware",
                        "Ad-hoc implementation needed",
                        "Built-in middleware pipeline (next())",
                      ],
                      [
                        "Readability",
                        "Verbose & low-level",
                        "Cleaner, declarative",
                      ],
                      [
                        "Ecosystem",
                        "You write more code",
                        "Rich middleware ecosystem",
                      ],
                      [
                        "Use case",
                        "Very small scripts / custom protocols",
                        "Most web APIs and apps",
                      ],
                    ].map(([feature, nodejs, express], index) => (
                      <tr
                        key={index}
                        className="hover:bg-purple-50 mobile-table-row"
                      >
                        <td className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm mobile-table-cell">
                          {feature}
                        </td>
                        <td className="p-2 sm:p-3 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                          {nodejs}
                        </td>
                        <td className="p-2 sm:p-3 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                          {express}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Express.js Info */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-purple-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-purple-700 mobile-card-title">
                4) Who made Express & when?
              </h3>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1">
                <li className="text-gray-700 text-xs sm:text-sm md:text-base">
                  <strong>Created by:</strong> TJ Holowaychuk
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base">
                  <strong>First release:</strong> around 2010
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base">
                  <strong>Over time</strong> it became the de-facto standard web
                  framework for Node.js اور اب Express.js core team اور
                  community کے ذریعے maintained ہے
                </li>
              </ul>
            </div>

            {/* Other Frameworks */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-purple-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-purple-700 mobile-card-title">
                5) Other popular Node.js frameworks
              </h3>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1">
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  <strong>Fastify</strong> — high performance, schema-based
                  validation
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  <strong>Koa</strong> — Express کے creators کے ذریعے، minimal
                  اور modern (async/await middleware استعمال کرتا ہے)
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  <strong>NestJS</strong> — full-featured, opinionated framework
                  TypeScript کے ساتھ بنایا گیا (بڑی apps کے لیے اچھا)
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  <strong>Hapi</strong> — configuration-first framework
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  <strong>Sails.js</strong> — MVC-style, data-driven apps کے لیے
                  مفید
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Express.js Setup & Basic Server */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-teal-50 to-green-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-teal-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            ⚙️ Express.js + TypeScript Basic Server Setup
          </h2>

          <div className="space-y-6">
            {/* Prerequisites */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-teal-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-teal-700 mobile-card-title">
                Prerequisites
              </h3>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1">
                <li className="text-gray-700 text-xs sm:text-sm md:text-base">
                  Node.js installed (v14+ recommended)
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base">
                  npm اور TypeScript کی basic familiarity
                </li>
              </ul>
            </div>

            {/* Installation */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-teal-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-teal-700 mobile-card-title">
                Installation & Initialization
              </h3>
              <CodeBlock
                id="express-setup"
                title="Express.js + TypeScript Setup"
                language="bash"
                code={`mkdir express-ts-server
cd express-ts-server
npm init -y

# production dependency
npm install express

# dev dependencies (TypeScript and types)
npm install -D typescript tsx @types/node @types/express nodemon

express — framework
typescript — compiler
tsx — run TS files directly (fast)
@types/* — TypeScript definitions for Node and Express
nodemon — restarts server in dev when files change`}
              />
            </div>

            {/* tsconfig.json */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-teal-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-teal-700 mobile-card-title">
                tsconfig.json
              </h3>
              <CodeBlock
                id="tsconfig"
                title="tsconfig.json Example"
                language="json"
                code={`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}`}
              />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 mobile-card-text">
                <strong>Key fields:</strong> target (language version), module
                (CommonJS for Node.js), rootDir/outDir (source اور compiled
                dirs), strict (strict typing enable کرتا ہے), esModuleInterop
                (import express from "express" کے ساتھ compatibility)
              </p>
            </div>

            {/* Package.json Scripts */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-teal-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-teal-700 mobile-card-title">
                package.json Scripts
              </h3>
              <CodeBlock
                id="package-scripts-express"
                title="Package.json Scripts"
                language="json"
                code={`"scripts": {
  "dev": "npx tsx src/server.ts",
  "start": "node dist/server.js",
  "build": "tsc"
}`}
              />
              <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-1">
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  <code>npm run dev</code> — development server with auto
                  restart (tsx استعمال کرتا ہے TypeScript کو بغیر compile کیے
                  چلانے کے لیے)
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  <code>npm run build</code> — compile to dist/
                </li>
                <li className="text-gray-700 text-xs sm:text-sm md:text-base" dir="rtl">
                  <code>npm start</code> — run compiled JS in production
                </li>
              </ul>
            </div>

            {/* Basic Server Code */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-teal-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-teal-700 mobile-card-title">
                Basic Express.js Server
              </h3>
              <CodeBlock
                id="express-basic-server"
                title="src/server.ts - Basic Express.js Server"
                language="typescript"
                code={`import express, { Request, Response, NextFunction } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: parse incoming JSON bodies
app.use(express.json());

// Basic GET route (home)
app.get("/", (req: Request, res: Response) => {
  // res.status(200) is default for successful responses from GET
  res.status(200).send("🚀 Welcome to Express + TypeScript Server");
});

// Start the server
app.listen(PORT, () => {
  console.log(\`✅ Server running at http://localhost:\${PORT}\`);
});`}
              />

              <div className="mt-4 p-3 sm:p-4 bg-blue-50 rounded-lg">
                <h4 className="text-blue-700 text-sm font-bold mb-2">
                  Explanation (line by line):
                </h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li className="text-blue-700 text-xs sm:text-sm">
                    <code>
                      import express, {"{"} Request, Response, NextFunction{" "}
                      {"}"} from "express";
                    </code>{" "}
                    — Express اور TypeScript types import کرتا ہے
                  </li>
                  <li className="text-blue-700 text-xs sm:text-sm">
                    <code>const app = express();</code> — Express application
                    instance بناتا ہے
                  </li>
                  <li className="text-blue-700 text-xs sm:text-sm">
                    <code>app.use(express.json());</code> — JSON request bodies
                    کو parse کرنے کے لیے built-in middleware
                  </li>
                  <li className="text-blue-700 text-xs sm:text-sm">
                    <code>
                      app.get("/", (req, res) =&gt; {"{"} ... {"}"});
                    </code>{" "}
                    — / پر GET endpoint define کرتا ہے
                  </li>
                  <li className="text-blue-700 text-xs sm:text-sm">
                    <code>app.listen(PORT, ...)</code> — specified port پر
                    listening شروع کرتا ہے
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Express.js Core Concepts */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-indigo-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧭 Express.js Core Concepts
          </h2>

          <div className="space-y-6">
            {/* Routing */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-indigo-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 mobile-card-title">
                1️⃣ Routing in Express
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 mobile-card-text">
                Routing define کرتی ہے کہ آپ کی app specific URLs پر client
                requests کا جواب کیسے دیتی ہے۔
              </p>

              <CodeBlock
                id="routing-syntax"
                title="Routing Syntax"
                language="typescript"
                code={`app.METHOD(PATH, HANDLER)`}
              />

              <div className="overflow-x-auto mobile-table-container mt-3">
                <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[300px] mobile-table">
                  <thead className="bg-indigo-100">
                    <tr>
                      <th className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm text-center mobile-table-header">
                        Term
                      </th>
                      <th className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm text-center mobile-table-header">
                        Meaning
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm mobile-table-body">
                    {[
                      ["METHOD", "HTTP method (get, post, put, delete)"],
                      ["PATH", 'URL endpoint ("/users", "/books/:id")'],
                      ["HANDLER", "Function handling request & response"],
                    ].map(([term, meaning], index) => (
                      <tr
                        key={index}
                        className="hover:bg-indigo-50 mobile-table-row"
                      >
                        <td className="p-2 sm:p-3 border border-gray-300 font-mono text-xs sm:text-sm mobile-table-cell">
                          {term}
                        </td>
                        <td className="p-2 sm:p-3 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                          {meaning}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4">
                <h4 className="text-indigo-700 text-sm font-bold mb-2">
                  🔹 Examples:
                </h4>

                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 text-xs sm:text-sm mb-1">
                      Basic Route:
                    </p>
                    <CodeBlock
                      id="basic-route"
                      title="Basic GET Route"
                      language="typescript"
                      code={`app.get("/users", (req: Request, res: Response) => {
  res.json([{ id: 1, name: "Rana" }]);
});`}
                    />
                  </div>

                  <div>
                    <p className="text-gray-700 text-xs sm:text-sm mb-1">
                      Dynamic Route with Parameters:
                    </p>
                    <CodeBlock
                      id="dynamic-route"
                      title="Dynamic Route with Parameters"
                      language="typescript"
                      code={`app.get("/users/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.json({ message: \`Fetching user with ID: \${id}\` });
});`}
                    />
                  </div>

                  <div>
                    <p className="text-gray-700 text-xs sm:text-sm mb-1">
                      POST Route with Request Body:
                    </p>
                    <CodeBlock
                      id="post-route"
                      title="POST Route with Request Body"
                      language="typescript"
                      code={`app.post("/data", (req: Request, res: Response) => {
  const data = req.body;
  res.json({ message: "Data received", data });
});`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Response Methods */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-indigo-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-indigo-700 mobile-card-title">
                ⚙️ Sending Responses
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-2 mobile-card-text">
                Express multiple methods فراہم کرتا ہے responses بھیجنے کے لیے:
              </p>

              <div className="overflow-x-auto mobile-table-container">
                <table className="w-full text-gray-800 border-collapse border border-gray-300 rounded-lg overflow-hidden min-w-[500px] mobile-table">
                  <thead className="bg-indigo-100">
                    <tr>
                      <th className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm text-center mobile-table-header">
                        Method
                      </th>
                      <th className="p-2 sm:p-3 border border-gray-300 font-bold text-xs sm:text-sm text-center mobile-table-header">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm mobile-table-body">
                    {[
                      ["res.send()", "Text/HTML بھیجتا ہے"],
                      ["res.json()", "JSON بھیجتا ہے"],
                      ["res.status()", "HTTP status code سیٹ کرتا ہے"],
                      ["res.sendStatus()", "صرف status code بھیجتا ہے"],
                    ].map(([method, description], index) => (
                      <tr
                        key={index}
                        className="hover:bg-indigo-50 mobile-table-row"
                      >
                        <td className="p-2 sm:p-3 border border-gray-300 font-mono text-xs sm:text-sm mobile-table-cell">
                          {method}
                        </td>
                        <td className="p-2 sm:p-3 border border-gray-300 text-xs sm:text-sm mobile-table-cell">
                          {description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4">
                <CodeBlock
                  id="response-example-express"
                  title="Response Example"
                  language="typescript"
                  code={`res.status(200).json({ message: "Success" });`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hands-on CRUD Example */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-purple-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🛠️ Hands-on CRUD with Express.js + TypeScript
          </h2>

          <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 leading-relaxed mobile-section-text" dir="rtl">
            ہم ایک چھوٹا books resource بنائیں گے جو memory (array) میں store
            کیا جائے گا۔ یہ typical REST CRUD (Create / Read / Update / Delete)
            کو demonstrate کرتا ہے۔
          </p>

          <CodeBlock
            id="express-crud-full"
            title="Complete Express.js CRUD Example"
            language="typescript"
            code={`import express, { Request, Response, NextFunction } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Use middleware to parse JSON
app.use(express.json());

// --- In-memory data store (static for demo purposes) ---
type Book = {
  id: number;
  title: string;
  author?: string;
};

let books: Book[] = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Deep Work", author: "Cal Newport" }
];

// Utility to find next ID (simple)
const getNextId = (): number => (books.length ? Math.max(...books.map(b => b.id)) + 1 : 1);

// --- Routes ---

// GET /books - list all books
app.get("/books", (req: Request, res: Response) => {
  res.status(200).json(books);
});

// GET /books/:id - get a single book
app.get("/books/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(book);
});

// POST /books - create a new book
app.post("/books", (req: Request, res: Response) => {
  const { title, author } = req.body as Partial<Book>;
  if (!title || typeof title !== "string") {
    return res.status(400).json({ message: "Title is required and must be a string" });
  }
  const newBook: Book = { id: getNextId(), title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id - full replace (must provide title)
app.put("/books/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, author } = req.body as Partial<Book>;
  if (!title || typeof title !== "string") {
    return res.status(400).json({ message: "Title is required and must be a string" });
  }

  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ message: "Book not found" });

  const updated: Book = { id, title, author };
  books[idx] = updated;
  res.json(updated);
});

// PATCH /books/:id - partial update
app.patch("/books/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, author } = req.body as Partial<Book>;
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  if (title !== undefined) {
    if (typeof title !== "string") return res.status(400).json({ message: "Title must be a string" });
    book.title = title;
  }
  if (author !== undefined) book.author = author;

  res.json(book);
});

// DELETE /books/:id - delete a book
app.delete("/books/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ message: "Book not found" });

  const deleted = books.splice(idx, 1)[0];
  res.json({ message: "Book deleted", deleted });
});

// Simple global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  console.log(\`✅ Server running at http://localhost:\${PORT}\`);
});`}
          />

          <div className="mt-6">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-purple-700 mobile-subsection-title">
              🧠 CRUD Routes کی وضاحت:
            </h4>
            <div className="space-y-4" dir="rtl">
              {[
                {
                  route: "GET /books",
                  desc: "تمام books کی array واپس کرتا ہے۔ res.status(200).json(books) — 200 OK کے ساتھ JSON payload",
                },
                {
                  route: "GET /books/:id",
                  desc: "URL param :id کو req.params.id سے access کرتا ہے۔ Number میں convert کرتا ہے اور book ڈھونڈتا ہے۔ اگر نہ ملے تو 404 واپس کرتا ہے",
                },
                {
                  route: "POST /books",
                  desc: "req.body سے JSON body پڑھتا ہے (express.json() middleware درکار ہے)۔ Required title کو validate کرتا ہے۔ اگر invalid ہو تو 400 واپس کرتا ہے۔ کامیابی پر نیا book بناتا ہے، array میں شامل کرتا ہے، اور 201 Created کے ساتھ created object واپس کرتا ہے",
                },
                {
                  route: "PUT /books/:id",
                  desc: "Full replacement: title کی ضرورت ہوتی ہے۔ پورے resource کو supplied object سے replace کرتا ہے۔ Idempotent — repeated calls same result produce کرتے ہیں",
                },
                {
                  route: "PATCH /books/:id",
                  desc: "Partial update: صرف body میں present fields کو update کرتا ہے۔ جب ضرورت ہو تو types validate کرتا ہے",
                },
                {
                  route: "DELETE /books/:id",
                  desc: "Array سے item remove کرتا ہے اور confirmation واپس کرتا ہے",
                },
              ].map(({ route, desc }, index) => (
                <div
                  key={index}
                  className="bg-white p-3 sm:p-4 rounded-lg shadow border border-purple-100"
                >
                  <h5 className="text-purple-700 font-bold text-sm sm:text-base mb-1">
                    {route}
                  </h5>
                  <p className="text-gray-700 text-xs sm:text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing with Postman */}
        <section className="mb-8 sm:mb-12 bg-gradient-to-r from-teal-50 to-green-50 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg mobile-section">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-teal-800 flex items-center gap-2 sm:gap-3 mobile-section-title">
            🧪 Postman اور curl کے ساتھ Testing
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-teal-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-teal-700 mobile-card-title">
                Start Your Server (dev)
              </h3>
              <CodeBlock
                id="start-server"
                title="Start Development Server"
                language="bash"
                code={`npm run dev
# or
npx tsx src/server.ts`}
              />
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-teal-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-teal-700 mobile-card-title">
                GET all books (curl & Postman)
              </h3>

              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 text-xs sm:text-sm font-bold mb-1">
                    curl:
                  </p>
                  <CodeBlock
                    id="curl-get"
                    title="curl GET Request"
                    language="bash"
                    code={`curl -i http://localhost:3000/books`}
                  />
                </div>

                <div>
                  <p className="text-gray-700 text-xs sm:text-sm font-bold mb-1">
                    Postman:
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li className="text-gray-700 text-xs sm:text-sm">
                      Method: GET
                    </li>
                    <li className="text-gray-700 text-xs sm:text-sm">
                      URL: http://localhost:3000/books
                    </li>
                    <li className="text-gray-700 text-xs sm:text-sm">
                      Send → view JSON array in Body tab
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-teal-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-teal-700 mobile-card-title">
                POST create book
              </h3>

              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 text-xs sm:text-sm font-bold mb-1">
                    curl:
                  </p>
                  <CodeBlock
                    id="curl-post"
                    title="curl POST Request"
                    language="bash"
                    code={`curl -i -X POST http://localhost:3000/books \\
  -H "Content-Type: application/json" \\
  -d '{"title":"The Alchemist","author":"Paulo Coelho"}'`}
                  />
                </div>

                <div>
                  <p className="text-gray-700 text-xs sm:text-sm font-bold mb-1">
                    Postman:
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li className="text-gray-700 text-xs sm:text-sm">
                      Method: POST
                    </li>
                    <li className="text-gray-700 text-xs sm:text-sm">
                      URL: http://localhost:3000/books
                    </li>
                    <li className="text-gray-700 text-xs sm:text-sm">
                      Body → raw → JSON → {"{"}"title":"The
                      Alchemist","author":"Paulo Coelho"{"}"}
                    </li>
                    <li className="text-gray-700 text-xs sm:text-sm">
                      Response: 201 Created with created object
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-teal-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-teal-700 mobile-card-title">
                PUT replace book
              </h3>

              <CodeBlock
                id="curl-put"
                title="curl PUT Request"
                language="bash"
                code={`curl -i -X PUT http://localhost:3000/books/1 \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Atomic Habits (2nd Edition)","author":"James Clear"}'`}
              />
              <p className="text-gray-700 text-xs sm:text-sm mt-2">
                Note: PUT expects full resource (title required). If you omit
                fields, they'll be replaced/overwritten
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-teal-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-teal-700 mobile-card-title">
                PATCH partial update
              </h3>

              <CodeBlock
                id="curl-patch"
                title="curl PATCH Request"
                language="bash"
                code={`curl -i -X PATCH http://localhost:3000/books/1 \\
  -H "Content-Type: application/json" \\
  -d '{"author":"J. Clear"}'`}
              />
              <p className="text-gray-700 text-xs sm:text-sm mt-2">
                Response: 200 with updated object
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-teal-200 mobile-card">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-teal-700 mobile-card-title">
                DELETE book
              </h3>

              <CodeBlock
                id="curl-delete"
                title="curl DELETE Request"
                language="bash"
                code={`curl -i -X DELETE http://localhost:3000/books/1`}
              />
              <p className="text-gray-700 text-xs sm:text-sm mt-2">
                Response: 200 with message and deleted resource
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300 text-center text-gray-600 mobile-footer">
          <p className="text-base sm:text-lg md:text-xl font-bold text-blue-900 mobile-footer-title">
            فائل: Week2Class1.jsx
          </p>
          <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base mobile-footer-text" dir="rtl">
            HTTP Status Codes Tutorial — مکمل طور پر Urdu رُسم الخط میں
          </p>
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-4 mobile-badges">
            <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-green-100 text-green-800 rounded-full font-semibold text-xs sm:text-sm mobile-badge" dir="rtl">
              ✅ تمام code blocks کاپی کے قابل
            </div>
            <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-100 text-blue-800 rounded-full font-semibold text-xs sm:text-sm mobile-badge" dir="rtl">
              🎯 عملی مشق کے لیے تیار
            </div>
            <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-100 text-purple-800 rounded-full font-semibold text-xs sm:text-sm mobile-badge" dir="rtl">
              ⚡ موبائل responsive
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

        @media (max-width: 640px) {
          pre {
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          .overflow-x-auto {
            -webkit-overflow-scrolling: touch;
          }

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
