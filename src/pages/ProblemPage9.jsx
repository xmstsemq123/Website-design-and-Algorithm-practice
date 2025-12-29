import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
// 記得確認這個路徑是否正確
import testFileUrl from '../files/search_test.html?url';

const ProblemPage9 = () => {
    return (
        <div className="w-full max-w-4xl space-y-6">

            {/* 標題區 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex justify-center items-center">
                <h2 className="text-2xl font-bold text-gray-800">第九題</h2>
                <div className='w-2 h-[10px] mx-2 bg-gray-800 rounded-3xl'></div>
                <h2 className="text-2xl font-bold text-gray-800">極速檔案檢索</h2>
            </section>

            {/* 題目描述 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-cyan-600 pl-3">
                    題目描述
                </h2>
                <div className="prose max-w-none text-black leading-relaxed text-[18px]">
                    <p>
                        你是資料庫管理員，我們有一個存放了 <strong>10,000 筆</strong> 資料的陣列 <code>sortedData</code>。
                        好消息是，這些資料已經<strong>由小到大排序 (Sorted)</strong> 完畢。
                    </p>
                    <p>
                        你的任務是撰寫一個函式，找出特定數值 <code>target</code> 在陣列中的索引位置 (Index)。
                        如果找不到，請回傳 <code>-1</code>。
                    </p>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4 text-red-900">
                        <h3 className="font-bold mb-1">⚠️ 系統效能警告</h3>
                        <p>
                            由於伺服器資源受限，對於每一次查詢，你<strong>只能讀取陣列 (Access Array) 不超過 100 次</strong>。
                            <br />
                            如果使用迴圈從第 0 個開始一個一個找 (Linear Search)，平均需要 5000 次，絕對會超時！
                        </p>
                    </div>
                </div>
            </section>

            {/* 程式碼骨架 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-gray-800 mb-2">程式碼骨架 (solver.js)</h3>
                <div className="rounded-lg overflow-hidden shadow-lg text-sm">
                    <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers={true} customStyle={{ margin: 0, padding: '1.5rem' }}>
                        {`/**
 * 在已排序的陣列中搜尋目標值
 * @param {number[]} arr - 已排序的陣列 (Proxy Object)
 * @param {number} target - 目標值
 * @returns {number} - 目標值的索引，找不到回傳 -1
 */
function search(arr, target) {
  // 請在此實作你的搜尋邏輯
  // 注意：你存取 arr[i] 的次數非常有限 (< 100 次)！
  
  // ❌ 禁止使用 arr.indexOf() 或 arr.find() 
  // 因為這些內建函式底層是從頭掃描，會瞬間超過讀取次數限制。
  
  return -1; 
}`}
                    </SyntaxHighlighter>
                </div>
            </section>

            {/* 下載測試工具 */}
            <section className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 sm:p-8 text-white">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-cyan-400 mb-2">
                            ⏱️ 下載效能測評器
                        </h2>
                        <p className="text-gray-300 text-sm">
                            下載 <code>search_test.html</code> 並與你的 <code>solver.js</code> 放在同目錄。<br />
                            測評器會自動生成 10,000 筆資料，並監控你的讀取次數是否合格。
                        </p>
                    </div>
                    <a
                        href={testFileUrl}
                        download="search_test.html"
                        className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 text-white decoration-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        下載 search_test.html
                    </a>
                </div>
            </section>

            {/* 應繳交檔案 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>應繳交檔案
                </h2>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-bold text-slate-700">
                    solver.js <span className="text-xs bg-red-200 px-2 ml-2 rounded text-gray-700">必要</span>
                </div>
            </section>

            <section className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-yellow-800 mb-3">
                    💡 提示 (Hints)
                </h2>
                <ul className="list-disc list-inside text-yellow-900/80 space-y-2 text-base">
                    <li>
                        想像你在查一本厚厚的英文字典，當你要找 "Magic" 這個字時，你會從第一頁開始翻，還是會先翻到中間看看？
                        利用「資料已排序」這個特性，你可以迅速排除掉一半以上的錯誤答案。
                    </li>
                </ul>
            </section>

        </div>
    );
};

export default ProblemPage9;