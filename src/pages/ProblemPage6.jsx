import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
// 請確保路徑正確指向你的測試檔
import testFileUrl from '../files/array_test.html?url';

const ProblemPage6 = () => {
    // 原始資料 (Raw Data)
    const initialData = [
        { id: 1, name: "Aragorn", role: "Warrior", level: 50, money: 500, isReady: true },
        { id: 2, name: "Legolas", role: "Archer", level: 120, money: 1200, isReady: true },
        { id: 3, name: "Gimli", role: "Warrior", level: 45, money: 300, isReady: true },
        { id: 4, name: "Gandalf", role: "Mage", level: 999, money: 5000, isReady: false },
        { id: 5, name: "Frodo", role: "Civilian", level: 5, money: 50, isReady: true },
    ];

    const [displayData, setDisplayData] = useState(initialData);
    const [consoleLog, setConsoleLog] = useState("等待指令...");

    // --- 演示邏輯 (Demo) ---
    const showWarriors = () => {
        const res = initialData.filter(p => p.role === "Warrior");
        setDisplayData(res);
        setConsoleLog(`getWarriors: 找到 ${res.length} 位戰士`);
    };

    const findGandalf = () => {
        const res = initialData.find(p => p.name === "Gandalf");
        setDisplayData(res ? [res] : []);
        setConsoleLog("findGandalf: 找到了甘道夫！");
    };

    const mapNameTags = () => {
        // Demo 僅顯示效果，實際作業需回傳字串陣列
        const res = initialData.map(p => ({ ...p, name: `[${p.role}] ${p.name}` }));
        setDisplayData(res);
        setConsoleLog("getNameTags: 已格式化名稱");
    };

    const calcTotalMoney = () => {
        const total = initialData.reduce((acc, cur) => acc + cur.money, 0);
        setConsoleLog(`calculateTotalMoney: 公會總資產 $${total}`);
        setDisplayData(initialData);
    };

    const checkEveryoneReady = () => {
        const allReady = initialData.every(p => p.isReady);
        setConsoleLog(`checkStatus: 大家都準備好了嗎？ ${allReady}`);
    };

    const checkStrong = () => {
        const hasStrong = initialData.some(p => p.level > 100);
        setConsoleLog(`checkStatus: 有沒有強者？ ${hasStrong}`);
    };

    const reset = () => {
        setDisplayData(initialData);
        setConsoleLog("資料重置");
    };

    return (
        <div className="w-full max-w-4xl space-y-6">

            {/* 標題區 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex justify-center items-center">
                <h2 className="text-2xl font-bold text-gray-800">第六題</h2>
                <div className='w-2 h-[10px] mx-2 bg-gray-800 rounded-3xl'></div>
                <h2 className="text-2xl font-bold text-gray-800">冒險者公會數據分析</h2>
            </section>

            {/* 題目描述與規格表 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-cyan-500 pl-3">
                    題目描述
                </h2>
                <div className="prose max-w-none text-black leading-relaxed text-[18px]">
                    <p>
                        你是公會的數據分析師，會長給了你一份冒險者名單（Array of Objects）。
                        請使用 JavaScript 的陣列方法（Array Methods）來完成各種查詢與統計任務。
                    </p>
                    <p>
                        <span className="text-sm text-gray-500">所有函式都會接收一個參數 <code>data</code> (即冒險者陣列)。</span>
                    </p>

                    {/* 資料結構範例 */}
                    <div className="my-4 rounded-lg overflow-hidden shadow-lg text-sm">
                        <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers={true} customStyle={{ margin: 0, padding: '1.5rem' }}>
                            {`// 每一位冒險者的資料結構
{
  id: 1,
  name: "Aragorn",
  role: "Warrior",
  level: 50,
  money: 500,
  isReady: true
}`}
                        </SyntaxHighlighter>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-900 mt-6 mb-4">📋 函式實作規格表 （在analysis.js定義以下函式）</h3>

                    <div className="space-y-4">
                        {/* 任務 1: Filter */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                                <code className="text-cyan-700 font-bold font-mono text-lg">getWarriors(data)</code>
                                <span className="text-xs font-bold bg-cyan-100 text-cyan-800 px-2 py-1 rounded">filter</span>
                            </div>
                            <div className="p-4 bg-white text-sm grid grid-cols-1 md:grid-cols-[1fr_150px] gap-4">
                                <div>
                                    <p className="font-bold text-gray-700">任務：</p>
                                    <p>篩選出所有職業 (role) 為 <code>"Warrior"</code> 的冒險者。</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-700">回傳 (Return)：</p>
                                    <code className="bg-gray-100 px-1 rounded">Array (Objects)</code>
                                </div>
                            </div>
                        </div>

                        {/* 任務 2: Map */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                                <code className="text-cyan-700 font-bold font-mono text-lg">getNameTags(data)</code>
                                <span className="text-xs font-bold bg-purple-100 text-purple-800 px-2 py-1 rounded">map</span>
                            </div>
                            <div className="p-4 bg-white text-sm grid grid-cols-1 md:grid-cols-[1fr_150px] gap-4">
                                <div>
                                    <p className="font-bold text-gray-700">任務：</p>
                                    <p>將資料轉換為名牌字串格式：<code>"[Role] Name"</code>。<br />(例如：<code>"[Mage] Gandalf"</code>)</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-700">回傳 (Return)：</p>
                                    <code className="bg-gray-100 px-1 rounded">Array (Strings)</code>
                                </div>
                            </div>
                        </div>

                        {/* 任務 3: Find */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                                <code className="text-cyan-700 font-bold font-mono text-lg">findGandalf(data)</code>
                                <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-1 rounded">find</span>
                            </div>
                            <div className="p-4 bg-white text-sm grid grid-cols-1 md:grid-cols-[1fr_150px] gap-4">
                                <div>
                                    <p className="font-bold text-gray-700">任務：</p>
                                    <p>找出名字 (name) 為 <code>"Gandalf"</code> 的那一位冒險者物件。</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-700">回傳 (Return)：</p>
                                    <code className="bg-gray-100 px-1 rounded">Object</code>
                                </div>
                            </div>
                        </div>

                        {/* 任務 4: Reduce */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                                <code className="text-cyan-700 font-bold font-mono text-lg">calculateTotalMoney(data)</code>
                                <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">reduce</span>
                            </div>
                            <div className="p-4 bg-white text-sm grid grid-cols-1 md:grid-cols-[1fr_150px] gap-4">
                                <div>
                                    <p className="font-bold text-gray-700">任務：</p>
                                    <p>計算公會所有人的金錢 (money) 總和。</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-700">回傳 (Return)：</p>
                                    <code className="bg-gray-100 px-1 rounded">Number</code>
                                </div>
                            </div>
                        </div>

                        {/* 任務 5: Every/Some */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                                <code className="text-cyan-700 font-bold font-mono text-lg">checkStatus(data)</code>
                                <span className="text-xs font-bold bg-red-100 text-red-800 px-2 py-1 rounded">every / some</span>
                            </div>
                            <div className="p-4 bg-white text-sm grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4">
                                <div>
                                    <p className="font-bold text-gray-700">任務：</p>
                                    <p>回傳一個包含兩個布林值的物件：</p>
                                    <ul className="list-disc list-inside text-gray-600 mt-1">
                                        <li><code>isEveryoneReady</code>: 是否<strong>所有人</strong>的 isReady 皆為 true？</li>
                                        <li><code>hasSuperStrong</code>: 是否<strong>有人</strong>等級 {`>`} 100？</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-700">回傳 (Return)：</p>
                                    <pre className="bg-gray-100 px-2 py-1 rounded mt-1 text-xs">
                                        {`{
  isEveryoneReady: boolean,
  hasSuperStrong: boolean
}`}
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* 任務 6: forEach */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                                <code className="text-cyan-700 font-bold font-mono text-lg">tallyRoles(data)</code>
                                <span className="text-xs font-bold bg-gray-200 text-gray-800 px-2 py-1 rounded">forEach</span>
                            </div>
                            <div className="p-4 bg-white text-sm grid grid-cols-1 md:grid-cols-[1fr_150px] gap-4">
                                <div>
                                    <p className="font-bold text-gray-700">任務：</p>
                                    <p>統計每種職業 (role) 的人數。</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-700">回傳 (Return)：</p>
                                    <pre className="bg-gray-100 px-2 py-1 rounded mt-1 text-xs">
                                        {`{
  Warrior: 2,
  Mage: 1,
  ...
}`}
                                    </pre>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 互動演示區 */}
            <section className="bg-cyan-50 rounded-xl shadow-sm border border-cyan-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-cyan-900 mb-4 flex items-center gap-2">
                    📊 成果預覽 (Demo Console)
                </h2>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                        <button onClick={reset} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm font-bold text-gray-700">Reset</button>
                        <button onClick={showWarriors} className="px-3 py-1 bg-white border border-cyan-400 hover:bg-cyan-100 rounded text-sm text-cyan-900">getWarriors()</button>
                        <button onClick={mapNameTags} className="px-3 py-1 bg-white border border-purple-400 hover:bg-purple-100 rounded text-sm text-purple-900">getNameTags()</button>
                        <button onClick={findGandalf} className="px-3 py-1 bg-white border border-green-400 hover:bg-green-100 rounded text-sm text-green-900">findGandalf()</button>
                        <button onClick={calcTotalMoney} className="px-3 py-1 bg-white border border-yellow-400 hover:bg-yellow-100 rounded text-sm text-yellow-900">calculateTotalMoney()</button>
                        <button onClick={checkEveryoneReady} className="px-3 py-1 bg-white border border-red-400 hover:bg-red-100 rounded text-sm text-red-900">checkStatus()</button>
                    </div>

                    <div className="bg-black text-green-400 font-mono text-sm p-3 rounded shadow-inner">
                > {consoleLog}
                    </div>

                    <div className="overflow-x-auto bg-white rounded shadow border border-gray-200">
                        <table className="w-full text-left text-sm text-gray-600">
                            <thead className="bg-gray-50 text-gray-800 uppercase font-bold border-b">
                                <tr>
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Role</th>
                                    <th className="px-4 py-3 text-right">Money</th>
                                    <th className="px-4 py-3 text-center">Ready</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {displayData.map(p => (
                                    <tr key={p.id}>
                                        <td className="px-4 py-2 font-bold">{p.name}</td>
                                        <td className="px-4 py-2"><span className="bg-gray-100 px-2 py-0.5 rounded text-xs">{p.role}</span></td>
                                        <td className="px-4 py-2 text-right font-mono">${p.money}</td>
                                        <td className="px-4 py-2 text-center">{p.isReady ? "✅" : "❌"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 下載測試工具區 */}
            <section className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 sm:p-8 text-white">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-cyan-400 mb-2">
                            📥 下載測試資料 (Test Runner)
                        </h2>
                        <p className="text-gray-300 text-sm">
                            請下載 <code>array_test.html</code>，並與你的 <code>analysis.js</code> 放在同一個資料夾。<br />
                            這會自動匯入測試資料並驗證你實作的這 6 個函式是否正確。
                        </p>
                    </div>
                    <a
                        href={testFileUrl}
                        download="array_test.html"
                        className="px-5 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 text-white decoration-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        下載 array_test.html
                    </a>
                </div>
            </section>

            {/* 應繳交檔案 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>應繳交檔案
                </h2>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-bold text-slate-700">
                    analysis.js <span className="text-xs bg-red-200 px-2 ml-2 rounded text-gray-700">必要</span>
                </div>
            </section>

        </div>
    );
};

export default ProblemPage6;