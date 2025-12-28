import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import testFileUrl from '../files/sort_test.html?url';

const ProblemPage10 = () => {
    // 控制是否顯示解答的 State
    const [showSolution, setShowSolution] = useState(false);

    return (
        <div className="w-full max-w-4xl space-y-6">

            {/* 標題區 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex justify-center items-center">
                <h2 className="text-2xl font-bold text-gray-800">第十題</h2>
                <div className='w-2 h-[10px] mx-2 bg-gray-800 rounded-3xl'></div>
                <h2 className="text-2xl font-bold text-gray-800">混沌檔案館 (Sorting Algorithm)</h2>
            </section>

            {/* 題目描述 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-rose-500 pl-3">
                    題目描述
                </h2>
                <div className="prose max-w-none text-black leading-relaxed text-[18px]">
                    <p>
                        歡迎來到「混沌檔案館」。這裡堆積了 <strong>N = 10,000</strong> 份完全打亂的檔案（數字陣列）。
                        你的任務是撰寫一個函式 <code>superSort(arr)</code>，將這些檔案<strong>由小到大</strong>重新排列。
                    </p>

                    <div className="bg-rose-50 border-l-4 border-rose-500 p-4 my-4 text-rose-900">
                        <h3 className="font-bold mb-1">⚠️ 嚴格效能限制</h3>
                        <p className="mb-2">
                            系統的 CPU 資源非常珍貴。對於 10,000 筆資料：
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>如果你使用「兩兩交換」的普通方法 (如 Bubble Sort)，大約需要執行 <strong>1 億次</strong> 運算，這會導致系統崩潰！</li>
                            <li>你必須設計一種更聰明的方法，讓運算次數壓在 <strong>50 萬次</strong> 以內。</li>
                        </ul>
                    </div>

                    <p className="font-bold mt-4 text-rose-900">任務目標：</p>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        <li>輸入：一個長度 10,000 的亂數陣列。</li>
                        <li>輸出：一個由小到大排序好的陣列。</li>
                        <li><strong>禁止使用</strong> <code>Array.prototype.sort()</code> (系統會封鎖此函式)。</li>
                    </ul>
                </div>
            </section>

            {/* 程式碼骨架 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-gray-800 mb-2">程式碼骨架 (sorter.js)</h3>
                <div className="rounded-lg overflow-hidden shadow-lg text-sm">
                    <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers={true} customStyle={{ margin: 0, padding: '1.5rem' }}>
                        {`/**
 * 高效排序演算法
 * @param {number[]} arr - 雜亂的陣列 (Proxy)
 * @returns {number[]} - 排序後的陣列
 */
function superSort(arr) {
  // 請在此實作你的演算法
  // 提示：不要試圖一次解決所有問題，試著把陣列切成小塊來處理
  
  // 範例：回傳排序好的陣列
  return arr;
}`}
                    </SyntaxHighlighter>
                </div>
            </section>

            {/* 下載測試工具 */}
            <section className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 sm:p-8 text-white">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-rose-400 mb-2">
                            🔥 下載效能壓力測試器
                        </h2>
                        <p className="text-gray-300 text-sm">
                            下載 <code>sort_test.html</code> 並與你的 <code>sorter.js</code> 放在同目錄。<br />
                            它會產生 1 萬筆資料，並監控你的讀取/寫入次數是否符合標準。
                        </p>
                    </div>
                    <a
                        href={testFileUrl}
                        download="sort_test.html"
                        className="px-6 py-3 bg-rose-600 hover:bg-rose-500 rounded-lg font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 text-white decoration-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        下載 sort_test.html
                    </a>
                </div>
            </section>

            {/* 應繳交檔案 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>應繳交檔案
                </h2>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-bold text-slate-700">
                    sorter.js <span className="text-xs bg-red-200 px-2 ml-2 rounded text-gray-700">必要</span>
                </div>
            </section>

            {/* 提示區塊 */}
            <section className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-yellow-800 mb-3">
                    💡 提示 (Hints)
                </h2>
                <ul className="list-disc list-inside text-yellow-900/80 space-y-3 text-base">
                    <li>
                        <strong>為什麼傳統方法會失敗？</strong> <br />
                        像是「氣泡排序 (Bubble Sort)」這種方法，每排好一個數字，就要把剩下所有數字檢查一遍。當有 10,000 個數字時，就要檢查 10,000 x 10,000 次，這就是所謂的「指數級爆炸」。
                    </li>
                    <li>
                        <strong>分而治之 (Divide and Conquer)：</strong> <br />
                        試著不要一次排好所有的數字。試著把陣列切成兩半，分別排好後再合併起來。
                    </li>
                </ul>
            </section>

            {/* --- 新增的 Merge Sort 詳解區塊 (Spoiler Section) --- */}
            <section className="mt-8 bg-slate-900 rounded-xl shadow-lg border border-slate-700 p-6 sm:p-8 text-slate-300">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🤫</span>
                    <h2 className="text-xl font-bold text-rose-400">絕密檔案：Merge Sort 演算法詳解</h2>
                </div>

                {!showSolution ? (
                    // 隱藏狀態：顯示警告按鈕
                    <div className="flex flex-col items-center justify-center py-8 space-y-4 border-t border-slate-800">
                        <p className="text-slate-400 text-center max-w-md">
                            此區域包含完整的 <strong>Merge Sort (合併排序)</strong> 程式碼與原理解析。
                            <br />建議先嘗試自己思考，真的卡關再來查看。
                        </p>
                        <button
                            onClick={() => setShowSolution(true)}
                            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                            我真的想不透，確定展開
                        </button>
                    </div>
                ) : (
                    // 展開狀態：顯示教學內容
                    <div className="space-y-6 animate-in fade-in zoom-in duration-300 border-t border-slate-700 pt-6">

                        {/* 1. 概念圖解 */}
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">1. 核心概念：分而治之 (Divide and Conquer)</h3>
                            <div className="text-slate-400 space-y-4 mb-4 leading-relaxed">
                                <p>
                                    <strong>想像你在整理一副亂七八糟的撲克牌：</strong><br />
                                    如果手上有 100 張牌很難排，我們就把它一直對切，切到最後每個人手上<strong>只剩下一張牌</strong>。
                                    這時候，因為手上只有一張牌，所以它一定是「排好序」的。
                                </p>
                                <p>
                                    接著開始<strong>「兩兩合併」</strong>：左手拿一張，右手拿一張，比大小後依序放回桌上。
                                    就像滾雪球一樣，排好的小隊伍兩兩結合成大隊伍，最後變回原本的一大疊，但這次是整齊的。
                                </p>
                            </div>

                            {/* ASCII 圖解 (修正版) */}
                            <div className="bg-slate-800 p-4 rounded-lg font-mono text-xs sm:text-sm text-center leading-relaxed text-cyan-300 whitespace-pre overflow-x-auto">
                                {`   [ 38, 27, 43, 3 ]
    ↓
   [38, 27]    [43, 3]
   ↙    ↘      ↙    ↘
  [38]  [27]  [43]   [3]

--- 開始合併 (Zipper Merge) ---

   ↘    ↙      ↘    ↙
   [27, 38]    [3, 43]
       ↘        ↙
    [ 3, 27, 38, 43 ]`}
                            </div>
                        </div>

                        {/* 2. 邏輯詳解 */}
                        <div className="mt-6">
                            <h3 className="text-lg font-bold text-white mb-2">2. 關鍵魔法：拉鍊合併法 (The Zipper)</h3>
                            <p className="text-slate-400 mb-2">
                                <code>merge</code> 函式是速度快的主因。想像有兩排已經按身高排好的學生，老師只要看著<strong>兩隊的最前面</strong>，
                                誰比較矮誰就先出列。這樣我們只需要遍歷一次，就能把兩隊合併成一隊。
                            </p>
                        </div>


                        {/* 2. 程式碼實作 */}
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">3. 參考程式碼</h3>
                            <div className="rounded-lg overflow-hidden shadow-lg text-sm">
                                <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers={true} customStyle={{ margin: 0, padding: '1.5rem' }}>
                                    {`function superSort(arr) {
  // 1. 終止條件：如果陣列只剩 1 個或 0 個，就不需要排了
  if (arr.length <= 1) return arr;

  // 2. 切分 (Divide)：找出中間點，切成左右兩半
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // 3. 遞迴 (Recursion)：對左右兩半繼續切，直到切不下去
  const sortedLeft = superSort(left);
  const sortedRight = superSort(right);

  // 4. 合併 (Conquer)：將排好的左右兩半合併起來
  return merge(sortedLeft, sortedRight);
}

// 負責合併兩個「已經排好序」的陣列
function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  // 比較左右兩邊的數字，誰小就先放誰進 result
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // 把剩下的數字全部倒進去
  return [...result, ...left.slice(i), ...right.slice(j)];
}`}
                                </SyntaxHighlighter>
                            </div>
                        </div>

                        <div className="text-center pt-4">
                            <button
                                onClick={() => setShowSolution(false)}
                                className="text-slate-500 hover:text-white text-sm underline transition-colors"
                            >
                                收起解答
                            </button>
                        </div>
                    </div>
                )}
            </section>

        </div>
    );
};

export default ProblemPage10;