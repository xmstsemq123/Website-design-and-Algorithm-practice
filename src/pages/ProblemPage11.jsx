import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import testFileUrl from '../files/storage_test.html?url';

const ProblemPage11 = () => {
    // Demo 用的 State
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    // Demo: 載入
    useEffect(() => {
        const saved = localStorage.getItem("demo_backpack");
        if (saved) {
            try { setItems(JSON.parse(saved)); } catch (e) { }
        }
    }, []);

    // Demo: 新增
    const handleAdd = () => {
        if (!inputValue.trim()) return;
        const newItem = { id: Date.now(), name: inputValue };
        const newList = [...items, newItem];
        setItems(newList);
        localStorage.setItem("demo_backpack", JSON.stringify(newList));
        setInputValue("");
    };

    // Demo: 刪除
    const handleRemove = (id) => {
        const newList = items.filter(item => item.id !== id);
        setItems(newList);
        localStorage.setItem("demo_backpack", JSON.stringify(newList));
    };

    return (
        <div className="w-full max-w-4xl space-y-6">

            {/* 標題區 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex justify-center items-center">
                <h2 className="text-2xl font-bold text-gray-800">第十一題</h2>
                <div className='w-2 h-[10px] mx-2 bg-gray-800 rounded-3xl'></div>
                <h2 className="text-2xl font-bold text-gray-800">冒險者的背包</h2>
            </section>

            {/* 題目描述 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-amber-500 pl-3">
                    題目描述
                </h2>
                <div className="prose max-w-none text-black leading-relaxed text-[18px]">
                    <p>
                        身為一名冒險者，最怕的事情不是遇到巨龍，而是<strong>「忘記存檔」</strong>！
                        我們需要一個魔法背包，無論世界如何重啟 (重新整理網頁)，裡面的裝備都必須完好如初。
                    </p>
                    <p>
                        請撰寫 <code>backpack.js</code>，使用瀏覽器的 <strong>LocalStorage API</strong> 來實作資料持久化功能。
                    </p>

                    {/* 新增：資料結構規範區塊 */}
                    <div className="my-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="text-sm font-bold text-amber-800 uppercase mb-2">📋 資料結構規範 (Data Schema)</h3>
                        <p className="text-sm text-gray-600 mb-2">背包內的每一個道具 (Item) 必須是一個<strong>物件</strong>，包含以下屬性：</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 font-mono space-y-1">
                            <li><strong>id</strong>: <code>Number</code> (唯一識別碼，請使用 <code>Date.now()</code> 產生)</li>
                            <li><strong>name</strong>: <code>String</code> (道具名稱，由參數傳入)</li>
                        </ul>
                        <div className="mt-3 text-xs text-gray-500">
                            範例：<code className="bg-white px-1 border rounded">[ {`{ "id": 1709283000123, "name": "聖劍" }`} , ... ]</code>
                        </div>
                    </div>

                    <p className="font-bold mt-4 text-amber-900">任務目標：</p>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        <li><strong>儲存 (Save)：</strong> 將道具陣列轉為 JSON 字串存入 <code>localStorage</code> (Key: <code>"my_backpack"</code>)。</li>
                        <li><strong>讀取 (Load)：</strong> 從 <code>localStorage</code> 讀取並還原成陣列。若無存檔則回傳空陣列 <code>[]</code>。</li>
                        <li><strong>新增 (Add)：</strong> 實作完整流程：讀取舊資料 &rarr; 加入符合格式的新物件 &rarr; 存回 LocalStorage。</li>
                    </ul>
                </div>
            </section>

            {/* 程式碼骨架 (已移除 addItem 解答) */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-gray-800 mb-2">程式碼骨架 (backpack.js)</h3>
                <div className="rounded-lg overflow-hidden shadow-lg text-sm">
                    <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers={true} customStyle={{ margin: 0, padding: '1.5rem' }}>
                        {`const STORAGE_KEY = "my_backpack";

/**
 * 1. 讀取背包
 * @returns {Array} - 道具陣列 (若無資料則回傳 [])
 */
function loadItems() {
  // TODO: 實作讀取邏輯
}

/**
 * 2. 儲存背包
 * @param {Array} items - 要儲存的道具陣列
 */
function saveItems(items) {
  // TODO: 實作儲存邏輯
}

/**
 * 3. 新增道具 (整合測試)
 * @param {string} name - 道具名稱
 * @returns {Array} - 更新後的陣列
 */
function addItem(name) {
  // TODO:
  // 1. 呼叫 loadItems() 取得目前背包
  // 2. 建立新物件 { id: Date.now(), name: name }
  // 3. 將新物件 push 進陣列
  // 4. 呼叫 saveItems() 存檔
  // 5. 回傳陣列
}`}
                    </SyntaxHighlighter>
                </div>
            </section>

            {/* 互動 Demo */}
            <section className="bg-amber-50 rounded-xl shadow-sm border border-amber-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                    🎒 背包預覽 (Demo)
                </h2>
                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="輸入道具名稱 (ex: 聖劍)"
                        className="flex-1 px-4 py-2 rounded border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                    />
                    <button
                        onClick={handleAdd}
                        className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded font-bold shadow-sm"
                    >
                        放入背包
                    </button>
                </div>
                <div className="bg-white rounded-lg border border-amber-200 min-h-[150px] p-2">
                    {items.length === 0 ? (
                        <div className="text-center text-gray-400 py-10">背包是空的</div>
                    ) : (
                        <ul className="space-y-2">
                            {items.map(item => (
                                <li key={item.id} className="flex justify-between items-center p-3 bg-amber-50/50 rounded hover:bg-amber-100 transition-colors group">
                                    <span className="font-medium text-gray-700">📦 {item.name}</span>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity px-2"
                                    >
                                        丟棄
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>

            {/* 下載測試工具 */}
            <section className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 sm:p-8 text-white">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-amber-400 mb-2">
                            💾 下載存檔檢測器
                        </h2>
                        <p className="text-gray-300 text-sm">
                            下載 <code>storage_test.html</code> 並與你的 <code>backpack.js</code> 放在同目錄。
                        </p>
                    </div>
                    <a
                        href={testFileUrl}
                        download="storage_test.html"
                        className="px-6 py-3 bg-amber-600 hover:bg-amber-500 rounded-lg font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 text-white decoration-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
                        下載 storage_test.html
                    </a>
                </div>
            </section>

            {/* 應繳交檔案 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>應繳交檔案
                </h2>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-bold text-slate-700">
                    backpack.js <span className="text-xs bg-red-200 px-2 ml-2 rounded text-gray-700">必要</span>
                </div>
            </section>

            {/* 提示區塊 */}
            <section className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-yellow-800 mb-3">
                    💡 提示 (Hints)
                </h2>
                <ul className="list-disc list-inside text-yellow-900/80 space-y-3 text-base">
                    <li>
                        <strong>資料格式陷阱：</strong> <br />
                        LocalStorage <strong>只能存字串 (String)</strong>！如果你直接存陣列，它會變成 <code>"[object Object]"</code> 這種壞掉的字串。
                        <br />一定要用 <code>JSON.stringify(data)</code> 轉成 JSON 字串再存。
                    </li>
                    <li>
                        <strong>為什麼要 <code>Date.now()</code>？</strong> <br />
                        在 React 或 Vue 等框架中，列表渲染通常需要一個唯一的 <code>key</code>。使用當下的時間戳記 (Timestamp) 是產生唯一 ID 最簡單的方法。
                    </li>
                    <li>
                        <strong>讀取防呆：</strong> <br />
                        <code>localStorage.getItem()</code> 如果找不到資料會回傳 <code>null</code>。
                        請使用 <code>JSON.parse(data) || []</code> 來確保函式永遠回傳陣列，避免後續程式報錯。
                    </li>
                </ul>
            </section>

        </div>
    );
};

export default ProblemPage11;