import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import train_test from '../files/train_test.html?url'

const ProblemPage4 = () => {
    const [carriages, setCarriages] = useState(['👻 列車長']);

    const addCarriage = () => {
        const ghosts = ['🧟 殭屍', '🧛 吸血鬼', '💀 骷髏', '🧙 女巫', '👻 幽靈'];
        setCarriages([...carriages, ghosts[Math.floor(Math.random() * ghosts.length)]]);
    };

    const removeCarriage = () => {
        if (carriages.length > 1) setCarriages(carriages.slice(0, -1));
    };

    return (
        <div className="w-full max-w-4xl space-y-6">
            {/* 標題 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex justify-center items-center">
                <h2 className="text-2xl font-bold text-gray-800">第四題</h2>
                <div className='w-2 h-[10px] mx-2 bg-gray-800 rounded-3xl'></div>
                <h2 className="text-2xl font-bold text-gray-800">幽靈列車調度員</h2>
            </section>

            {/* 題目描述 (更新版) */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-600 pl-3">題目描述</h2>
                <div className="prose max-w-none text-black leading-relaxed text-[18px]">
                    <h3 className="text-lg font-bold text-purple-900 mt-0">🚋 歡迎來到第 404 號冥界轉運站</h3>
                    <p>
                        嗨，菜鳥！歡迎加入「靈魂擺渡公司」。我是這裡的站長。
                        我們負責駕駛這列傳說中的<strong>「幽靈列車 (The Phantom Express)」</strong>，將迷途的靈魂送往輪迴之門。
                    </p>
                    <p>
                        這列火車採用了上古魔法結構 <strong>Singly Linked List (單向鏈結串列)</strong>。
                        這裡的規則很簡單，但很嚴格：車廂之間不是用鐵鉤連著，而是用<strong>「靈魂鎖鏈 (next 指標)」</strong>。
                    </p>
                    
                    <ul className="list-disc list-inside bg-purple-50 p-4 rounded-lg text-gray-700 text-base">
                        <li><strong>Head (車頭)：</strong> 這是列車的動力來源，永遠指向第一節車廂。</li>
                        <li><strong>Node (車廂)：</strong> 每一節車廂載著一個靈魂 (<code>value</code>)，並抓著下一節車廂 (<code>next</code>)。</li>
                        <li><strong>Null (虛無斷崖)：</strong> 最後一節車廂的鎖鏈必須指向 <code>null</code>，代表列車的尾端，否則火車會失控衝出軌道！</li>
                    </ul>

                    <p className="mt-4">
                        今天旅客特別多，你的調度面板壞了，必須手寫 JavaScript 咒語來控制列車。請完成以下操作：
                    </p>

                    <div className="my-4 rounded-lg overflow-hidden shadow-lg text-sm">
                        <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers={true} customStyle={{ margin: 0, padding: '1.5rem' }}>
                            {`//把以下程式碼複製到linked_list.js，並實作append(value), toString(), removeLast()函式
class Node {
  constructor(value) {
    this.value = value; // 乘客 (靈魂)
    this.next = null;   // 靈魂鎖鏈 (指向下一節)
  }
}
class LinkedList {
  constructor() {
    this.head = null; // 列車長 (車頭)
  }
  append(value) {}    // 任務一：有新乘客上車 (掛在車尾)
  toString() {}       // 任務二：點名 (列出所有乘客)
  removeLast() {}     // 任務三：最後一位乘客下車
}`}
                        </SyntaxHighlighter>
                    </div>

                    <p className="font-bold mt-4 text-purple-900">詳細任務說明：</p>
                    <ul className="list-decimal list-inside mt-2 space-y-2 text-gray-700">
                        <li>
                            <strong>加掛車廂 <code>append(value)</code>：</strong>
                            <br />
                            <span className="text-sm ml-5 block text-gray-600">
                                有新的靈魂 (Value) 要上車。請將他包裝成 <code>Node</code>，並掛在列車的最尾端。
                                <br />⚠️ 注意：如果列車目前是空的 (Head 為 null)，他就是第一節車廂！
                            </span>
                        </li>
                        <li>
                            <strong>全員點名 <code>toString()</code>：</strong>
                            <br />
                            <span className="text-sm ml-5 block text-gray-600">
                                站長需要確認名單。請從車頭開始，沿著鎖鏈往後走，回傳如 <code>"列車長 -{`>`} 殭屍 -{`>`} 吸血鬼 -{`>`} null"</code> 的字串。
                            </span>
                        </li>
                        <li>
                            <strong>末節脫離 <code>removeLast()</code>：</strong>
                            <br />
                            <span className="text-sm ml-5 block text-gray-600">
                                列車太重了，或者最後一位旅客到站了。請將最後一節車廂移除。
                                <br />💡 提示：要把最後一節甩掉，你必須先找到「倒數第二節」，然後把它的鎖鏈 (next) 指向 <code>null</code>。
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 互動演示區 */}
            <section className="bg-purple-50 rounded-xl shadow-sm border border-purple-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🚂</span>
                    列車模擬器
                </h2>

                <div className="flex flex-col items-center">
                    {/* 軌道與車廂 */}
                    <div className="w-full overflow-x-auto pb-4 mb-6">
                        <div className="flex items-center min-w-max px-4">
                            {carriages.map((ghost, index) => (
                                <React.Fragment key={index}>
                                    <div className="relative flex flex-col items-center group">
                                        {/* 車廂本體 */}
                                        <div className="w-24 h-20 bg-gray-800 rounded-lg border-2 border-gray-600 flex items-center justify-center text-3xl shadow-lg relative z-10">
                                            {ghost.split(' ')[0]}
                                        </div>
                                        {/* Label */}
                                        <span className="mt-2 text-xs font-bold text-purple-800 bg-purple-200 px-2 py-0.5 rounded">
                                            {index === 0 ? 'Head' : `Node ${index}`}
                                        </span>
                                        {/* Node 資料結構示意 */}
                                        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-green-400 text-xs p-2 rounded pointer-events-none font-mono">
                                            {`{ value: "${ghost.split(' ')[1]}", next: ... }`}
                                        </div>
                                    </div>

                                    {/* 連結鍊 (Pointer) */}
                                    {index < carriages.length - 1 ? (
                                        <div className="w-16 h-2 bg-gray-400 mx-1 relative">
                                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-gray-500 text-xs font-mono">next</div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center ml-2 opacity-50">
                                            <div className="w-8 h-1 bg-gray-400"></div>
                                            <span className="ml-2 text-red-500 font-bold font-mono">null</span>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={addCarriage}
                            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold shadow transition-transform active:scale-95"
                        >
                            ➕ 加掛車廂 (append)
                        </button>
                        <button
                            onClick={removeCarriage}
                            disabled={carriages.length <= 1}
                            className="px-6 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-300 text-white rounded-lg font-bold shadow transition-transform active:scale-95"
                        >
                            ➖ 移除末節 (remove)
                        </button>
                    </div>
                </div>
            </section>

            {/* 下載區 */}
            <section className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 sm:p-8 text-white">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold text-green-400">🛠️ 領取測試軌道</h2>
                        <p className="text-gray-300 text-sm">下載後與 linked_list.js 放在同目錄執行。</p>
                    </div>
                    <a
                        href={train_test}
                        download="train_test.html"
                        className="flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow transition-transform hover:scale-105 active:scale-95 whitespace-nowrap decoration-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        下載 train_test.html
                    </a>
                </div>
            </section>

            {/* 應繳交檔案 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>應繳交檔案
                </h2>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-bold text-slate-700">linked_list.js <span className="text-xs bg-red-200 px-2 ml-2 rounded">必要</span></div>
            </section>

            {/* 提示區塊 */}
            <section className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-yellow-800 mb-3">
                    💡 菜鳥手冊 (Hints)
                </h2>
                <ul className="list-disc list-inside text-yellow-900/80 space-y-3 text-base">
                    <li>
                        <strong>如何巡視車廂 (Traverse)？</strong> <br />
                        你需要一個指針變數（例如 <code>let current = this.head;</code>）。使用 <code>while (current.next !== null)</code> 迴圈，讓指針一直往後跳 (<code>current = current.next</code>)，直到找到最後一節車廂。
                    </li>
                    <li>
                        <strong>邊界條件 (Edge Case)：</strong> <br />
                        如果在 <code>append</code> 時，列車原本是空的 (<code>this.head === null</code>)，那麼新車廂就會直接變成 <code>head</code>，而不需要去跑迴圈找最後一節。
                    </li>
                    <li>
                        <strong>關於 toString()：</strong> <br />
                        你可以建立一個空字串或陣列，在遍歷的過程中把 <code>current.value</code> 加進去，最後再回傳組合好的結果。
                    </li>
                    <li>
                        <strong>關於 removeLast()：</strong> <br />
                        <ul className="pl-10 mt-1 list-[square] space-y-1">
                            <li>如果列車是空的：直接結束，什麼都不做。</li>
                            <li>如果只有一節車廂：直接把 <code>this.head</code> 設為 <code>null</code>。</li>
                            <li>
                                如果有多節車廂：你不能停在最後一節（因為刪不掉自己），你必須找到<strong>「倒數第二節」</strong>。
                                <br />
                                <span className="text-sm text-yellow-700">
                                    👉 迴圈條件可以改成：<code>while (current.next.next !== null)</code>，這樣當迴圈結束時，<code>current</code> 就會剛好停在倒數第二節，接著把 <code>current.next</code> 設為 <code>null</code> 即可斷開最後一節。
                                </span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default ProblemPage4;