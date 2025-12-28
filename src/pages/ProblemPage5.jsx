import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import css_test from '../files/css_test.html?url'

const ProblemPage5 = () => {
    // 模擬 CSS 成果的 React State (僅供 Demo 用)
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const cards = [
        { title: "劍士", job: "Warrior", color: "from-red-500 to-orange-500", rare: false },
        { title: "魔法師", job: "Mage", color: "from-blue-500 to-purple-500", rare: true }, // Popular
        { title: "盜賊", job: "Rogue", color: "from-green-500 to-teal-500", rare: false },
    ];

    return (
        <div className="w-full max-w-4xl space-y-6">
            {/* 標題區 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex justify-center items-center">
                <h2 className="text-2xl font-bold text-gray-800">第五題</h2>
                <div className='w-2 h-[10px] mx-2 bg-gray-800 rounded-3xl'></div>
                <h2 className="text-2xl font-bold text-gray-800">RPG 角色卡片設計</h2>
            </section>

            {/* 題目描述 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-3">
                    題目描述
                </h2>
                <div className="prose max-w-none text-black leading-relaxed text-[18px]">
                    <p>
                        請製作一個 RPG 遊戲的角色選擇介面，包含三張卡片。你需要撰寫 <strong>style.css</strong>，利用 CSS 偽類與偽元素來達成以下視覺效果，而<strong>不修改 HTML 結構</strong>增加多餘的標籤。
                    </p>
                    <p className="mt-2 text-gray-600 italic">
                        HTML 結構已固定為：三個 <code>div.card</code>，其中第二個有 <code>class="popular"</code>。
                    </p>

                    <div className="my-4 rounded-lg overflow-hidden shadow-lg text-sm">
                        <SyntaxHighlighter language="css" style={vscDarkPlus} showLineNumbers={true} customStyle={{ margin: 0, padding: '1.5rem' }}>
                            {`/* 你的任務：實作以下 CSS */

/* 1. 滑鼠懸停特效 (:hover) */
.card:hover {
  /* 讓卡片往上浮動並放大 */
}

/* 2. 熱門/稀有標籤 (::before) */
/* 必須使用偽元素在卡片右上角製作一個 "Rare" 或 "Hot" 的標籤 */
.popular::before {
  content: "RARE";
  position: absolute;
  /* ...其他樣式 */
}

/* 3. 屬性列表圖示 (::before 或 ::marker) */
/* 讓列表項目前面出現自定義的顏色或符號 */
li::marker {
  color: gold; 
}`}
                        </SyntaxHighlighter>
                    </div>

                    <p className="font-bold mt-4 text-indigo-900">實作目標：</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li><strong>懸浮互動：</strong>使用 <code>:hover</code> 讓卡片在滑鼠移上去時有放大 (`scale`) 或位移 (`translateY`) 的效果。</li>
                        <li><strong>稀有標籤：</strong>使用 <code>::before</code> 或 <code>::after</code> 在帶有 <code>.popular</code> class 的卡片右上角，加上一個標籤（無需在 HTML 加 span）。</li>
                        <li><strong>隔行變色：</strong>使用 <code>:nth-child(odd)</code> 或 <code>even</code> 讓屬性列表有不同的背景色。</li>
                    </ul>
                </div>
            </section>

            {/* 範例成果演示 (React 模擬) */}
            <section className="bg-slate-800 rounded-xl shadow-sm border border-slate-700 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="text-2xl">⚔️</span> 預期成果 (Demo)
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`
                relative w-64 h-80 bg-slate-700 rounded-xl p-6 border-2 border-slate-600 transition-all duration-300 cursor-pointer overflow-hidden group
                ${hoveredIndex === index ? '-translate-y-4 scale-105 shadow-2xl shadow-indigo-500/50 border-indigo-400' : ''}
              `}
                        >
                            {/* 模擬 ::before 標籤 */}
                            {card.rare && (
                                <div className="absolute top-0 right-0 bg-yellow-500 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg shadow-lg z-10">
                                    RARE
                                </div>
                            )}

                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${card.color} mb-4 flex items-center justify-center text-3xl shadow-lg`}>
                                {index === 0 ? '🗡️' : index === 1 ? '🔮' : '🗡️'}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
                            <p className="text-slate-400 text-sm mb-4 font-mono">{card.job}</p>

                            <ul className="text-slate-300 text-sm space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="text-yellow-500">★</span> ATK: {100 + index * 20}
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400">🛡</span> DEF: {50 + index * 5}
                                </li>
                            </ul>

                            {/* 裝飾用的偽元素模擬 (底部光條) */}
                            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${card.color} opacity-50`}></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 下載測試工具 */}
            <section className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 sm:p-8 text-white">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-indigo-400 mb-2">
                            🧪 樣式實驗室
                        </h2>
                        <p className="text-gray-300 text-sm">
                            下載 <code>css_test.html</code>，並與你的 <code>css_test.css</code> 放在同一目錄。<br />
                            打開網頁即可檢測你的 CSS 是否符合偽元素的使用規範。
                        </p>
                    </div>
                    <a
                        href={css_test}      // 這裡綁定剛剛 import 進來的 url
                        download="css_test.html"    // 指定下載時的檔名，不管原檔名是什麼，下載下來都會叫 test.html
                        className="flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow transition-transform hover:scale-105 active:scale-95 whitespace-nowrap decoration-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        下載 css_test.html
                    </a>
                </div>
            </section>

            {/* 應繳交檔案 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>應繳交檔案
                </h2>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-bold text-slate-700 flex flex-col gap-2">
                    <div className='flex items-center gap-2'>
                        <span>css_test.css</span>
                        <span className="text-xs bg-red-200 px-2 py-0.5 rounded text-gray-600">必要</span>
                    </div>
                </div>
            </section>

            {/* 提示區塊 */}
            <section className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-yellow-800 mb-3">
                    💡 CSS 提示 (Hints)
                </h2>
                <ul className="list-disc list-inside text-yellow-900/80 space-y-3 text-base">
                    <li>
                        <strong>關於 ::before / ::after</strong> <br />
                        這兩個偽元素一定要設定 <code>content: "...";</code> 屬性才會顯示出來，即使是空字串 <code>""</code> 也可以。
                    </li>
                    <li>
                        <strong>定位技巧 (Positioning)</strong> <br />
                        如果你想把 "Rare" 標籤放在卡片的右上角，請記得將父元素 (<code>.card</code>) 設為 <code>position: relative;</code>，並將偽元素設為 <code>position: absolute; top: 0; right: 0;</code>。
                    </li>
                    <li>
                        <strong>:nth-child 的計算</strong> <br />
                        <code>:nth-child(2)</code> 會選取父層下的第二個元素。這很適合用來選取中間那張「魔法師」卡片並給予特別的樣式（例如邊框發光）。
                    </li>
                </ul>
            </section>

        </div>
    );
};

export default ProblemPage5;