import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
// 引入展示面板檔案 (請確保路徑正確)
import demoFileUrl from '../files/demo_board.html?url';

const ProblemPage8 = () => {
    return (
        <div className="w-full max-w-4xl space-y-6">

            {/* 標題區 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex justify-center items-center">
                <h2 className="text-2xl font-bold text-gray-800">第八題</h2>
                <div className='w-2 h-[10px] mx-2 bg-gray-800 rounded-3xl'></div>
                <h2 className="text-2xl font-bold text-gray-800">時空留言板 (AJAX + DOM Render)</h2>
            </section>

            {/* 題目描述 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-3">
                    題目描述
                </h2>
                <div className="prose max-w-none text-black leading-relaxed text-[18px]">
                    <p>
                        時空管理局的資料庫出現了混亂，來自不同時間線的留言全部混雜在一起。
                        請你撰寫一支程式 <code>board_logic.js</code>，負責從 API 撈取資料，篩選出 <strong>2024 年</strong> 的訊息，並將其顯示在留言板上。
                    </p>

                    <div className="my-4 bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm">
                        <h3 className="font-bold text-teal-800 mb-2">📡 API 規格 (Spec)</h3>
                        <ul className="space-y-1 text-gray-700 font-mono">
                            <li><strong>URL:</strong> <span className="text-blue-600">https://web-and-algo-prac-api.vercel.app/api/messages</span></li>
                            <li><strong>Method:</strong> GET</li>
                            <li><strong>Header:</strong> Content-Type: application/json</li>
                            <li><strong>Body:</strong> <code>&#123;&#125;</code></li>
                        </ul>
                    </div>

                    <p className="font-bold mt-4 text-teal-900">任務目標：</p>
                    <p className="text-gray-700 mb-2">在 <code>board_logic.js</code> 中實作：</p>
                    <div className="rounded-lg overflow-hidden shadow-lg text-sm mb-4">
                        <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers={true} customStyle={{ margin: 0, padding: '1.5rem' }}>
                            {`/**
 * 從 API 取得留言，篩選 2024 年並「由新到舊」排序
 * @param {string} apiUrl - API 的網址，已在demo_board.html中被傳入
 */
async function renderMessages(apiUrl) {
    // 1.利用fetch向apiURL獲取資料
    // 2.篩選出年份為2024年的資料
    // 3.根據時間大小排序資料
    // 4.將資料依下方模板規範渲染至message-board容器中
}`}
                        </SyntaxHighlighter>
                    </div>

                    <p className="font-bold mt-4 text-indigo-900">任務流程：</p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>使用 <code>fetch()</code> 向指定 API 取得留言陣列。</li>
                        <li>使用 <code>filter()</code> 篩選出 <code>timestamp</code> 年份為 <strong>2024</strong> 的資料。</li>
                        <li>使用 <code>sort()</code> 將留言依時間倒序排列 (最新的在最前)。</li>
                        <li>依照下方的<strong>HTML模板</strong>製作元素，並使用 <code>forEach()</code> 遍歷資料並插入到 <code>#message-board</code> 容器中。</li>
                    </ol>
                </div>

            </section>

            {/* 模板規範區 */}
            <section className="bg-indigo-50 rounded-xl shadow-sm border border-indigo-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                    📋 模板規範 (Templates)
                </h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-sm font-bold text-indigo-800 uppercase mb-2">1. 容器 (Container)</h3>
                        <p className="text-sm text-gray-600 mb-2">請將產生好的留言放入這個 ID 的元素內：</p>
                        <code className="bg-white px-3 py-1 rounded border border-indigo-200 text-indigo-600 font-mono">
                            &lt;div id="message-board"&gt;&lt;/div&gt;
                        </code>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-indigo-800 uppercase mb-2">2. 單一留言模板 (Message Card)</h3>
                        <p className="text-sm text-gray-600 mb-2">每一則留言的 HTML 結構必須如下（請填入對應資料）：</p>
                        <div className="rounded-lg overflow-hidden shadow-lg text-sm">
                            <SyntaxHighlighter language="html" style={vscDarkPlus} showLineNumbers={true} customStyle={{ margin: 0, padding: '1rem' }}>
                                {`<div class="msg-card">
  <div class="msg-header">
    <span class="msg-author">
      <span class="icon">👤</span> 
      \${author} </span>
    <span class="msg-time">\${time}</span> </div>
  <p class="msg-content">
    \${content} </p>
</div>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </section>

            {/* 下載展示面板 */}
            <section className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 sm:p-8 text-white">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-indigo-400 mb-2">
                            🛠️ 下載工作檯 (Workbench)
                        </h2>
                        <p className="text-gray-300 text-sm">
                            下載 <code>demo_board.html</code>，並與你的 <code>board_logic.js</code> 放在同目錄。<br />
                            這個網頁已經包含了 HTML 架構與 CSS 樣式，你只需要專注在 JS 邏輯即可。
                        </p>
                    </div>
                    <a
                        href={demoFileUrl}
                        download="demo_board.html"
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 text-white decoration-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        下載 demo_board.html
                    </a>
                </div>
            </section>

            {/* 應繳交檔案 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>應繳交檔案
                </h2>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-bold text-slate-700">
                    board_logic.js <span className="text-xs bg-red-200 px-2 ml-2 rounded text-gray-700">必要</span>
                </div>
            </section>

            {/* 提示區塊 */}
            <section className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-yellow-800 mb-3">
                    💡 提示 (Hints)
                </h2>
                <ul className="list-disc list-inside text-yellow-900/80 space-y-2 text-base">
                    <li>
                        <strong>真實 API 連線：</strong> 這次使用的是真實的雲端伺服器，所以根據你的網路狀況，可能會有一點點延遲（Loading），這是正常的。
                    </li>
                    <li>
                        <strong>時間篩選技巧：</strong>
                        API 回傳的資料是全時段的。請利用 <code>filter()</code> 搭配 <code>startsWith("2024")</code> 來過濾資料。
                        <br />
                        <code className="bg-yellow-100 px-1 text-sm">const data2024 = allData.filter(item ={`>`} item.timestamp.includes("2024"));</code>
                    </li>
                    <li>
                        <strong>時間排序 (Sorting)：</strong>
                        要讓新的時間排在前面，你需要將兩個時間字串轉為 <code>Date</code> 物件相減。
                        <br />
                        降序排列公式：<code>data.sort((a, b) ={`>`} new Date(b.timestamp) - new Date(a.timestamp));</code>
                    </li>
                    <li>
                        <strong>生成 HTML：</strong>
                        使用 Template Literal (反引號) 組合 HTML 字串，再塞入 <code>innerHTML</code>。
                    </li>
                </ul>
            </section>

        </div>
    );
};

export default ProblemPage8;