import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// 引入你的展示檔案路徑 (請確保檔案存在於 src/files/ajax_demo.html)
import demoFileUrl from '../files/ajax_demo.html?url';

const ProblemPage7 = () => {
  return (
    <div className="w-full max-w-4xl space-y-6">
      
      {/* 標題區 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-800">第七題</h2>
        <div className='w-2 h-[10px] mx-2 bg-gray-800 rounded-3xl'></div>
        <h2 className="text-2xl font-bold text-gray-800">AJAX非同步通訊的小試身手</h2>
      </section>

      {/* 題目描述 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-teal-500 pl-3">
          題目描述
        </h2>
        <div className="prose max-w-none text-black leading-relaxed text-[18px]">
          <p>
            請撰寫一個 JavaScript 函式來與遠端 Flask API 溝通。
            完成後，你可以下載展示面板，它會直接使用你寫的程式碼來運作，變成一個真正的聊天室！
          </p>
          
          <div className="my-4 bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm">
             <h3 className="font-bold text-teal-800 mb-2">📡 API 規格 (Spec)</h3>
             <ul className="space-y-1 text-gray-700 font-mono">
                 <li><strong>URL:</strong> <span className="text-blue-600">https://web-and-algo-prac-api.vercel.app/api/echo</span></li>
                 <li><strong>Method:</strong> POST</li>
                 <li><strong>Header:</strong> Content-Type: application/json</li>
                 <li><strong>Body:</strong> <code>&#123; "name": "...", "message": "..." &#125;</code></li>
             </ul>
          </div>

          <p className="font-bold mt-4 text-teal-900">任務目標：</p>
          <p className="text-gray-700 mb-2">在 <code>api_client.js</code> 中實作：</p>
          <div className="rounded-lg overflow-hidden shadow-lg text-sm mb-4">
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers={true} customStyle={{ margin: 0, padding: '1.5rem' }}>
{`async function sendMessage(name, message) {
  // 1. 使用 fetch 發送 POST
  // 2. 等待回應 (await)
  // 3. 回傳 JSON 物件 (return data)
}`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

      {/* 下載展示工具 (重點修改區域) */}
      <section className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 p-6 sm:p-8 text-white">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
                <h2 className="text-xl font-bold text-teal-400 mb-2 flex items-center gap-2">
                    🖥️ 下載展示面板 (Demo Dashboard)
                </h2>
                <p className="text-gray-300 text-sm">
                    下載 <code>ajax_demo.html</code> 並與你的 <code>api_client.js</code> 放在同目錄。<br/>
                    打開後，你會看到一個漂亮的聊天介面，它會呼叫你的函式來傳送訊息！
                </p>
            </div>
            <a 
                href={demoFileUrl}
                download="ajax_demo.html"
                className="px-6 py-3 bg-teal-600 hover:bg-teal-500 rounded-lg font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 text-white decoration-0"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                下載展示網頁
            </a>
        </div>
      </section>

      {/* 應繳交檔案 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>應繳交檔案
        </h2>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-bold text-slate-700">
            api_client.js <span className="text-xs bg-red-200 px-2 ml-2 rounded text-gray-700">必要</span>
        </div>
      </section>

      <section className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-100 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-yellow-800 mb-3">
          💡 小撇步 (Hints)
        </h2>
        <ul className="list-disc list-inside text-yellow-900/80 space-y-2 text-base">
          <li>
            <strong>Async/Await：</strong> 記得在 function 前面加上 <code>async</code>，並在 <code>fetch</code> 和 <code>res.json()</code> 前面加上 <code>await</code>，這樣程式碼寫起來會像同步一樣直觀。
          </li>
          <li>
            <strong>JSON 轉換：</strong> 傳送資料時要用 <code>JSON.stringify(data)</code>，接收資料時要用 <code>await res.json()</code>。
          </li>
        </ul>
      </section>
      
    </div>
  );
};

export default ProblemPage7;