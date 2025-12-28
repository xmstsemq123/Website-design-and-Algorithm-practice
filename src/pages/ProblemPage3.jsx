import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Problem3TestFileUrl from '../files/Problem3TestFile.html?url'

const ProblemPage3 = () => {
    return (<>
        <div className="w-full max-w-4xl space-y-6">

            {/* 標題區 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex justify-center items-center">
                <h2 className="text-2xl font-bold text-gray-800">
                    第三題
                </h2>
                <div className='w-2 h-[10px] mx-2 bg-gray-800 rounded-3xl'></div>
                <h2 className="text-2xl font-bold text-gray-800">
                    車廠訂單系統
                </h2>
            </section>

            {/* 區塊 1: 題目描述 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">
                    題目描述
                </h2>
                <div className="prose max-w-none text-black leading-relaxed text-[18px]">
                    <p>
                        已經定義好了一個基礎的車子原型 <code>Car</code>。
                        現在有三位挑剔的客戶上門，請利用<strong>繼承</strong>的技巧，基於 <code>Car</code> 擴充出三種不同的車款類別，並實例化物件來滿足他們的需求。
                    </p>
                    <p className='text-red-600 font-bold'>
                        請使用ES6的class語法。
                    </p>
                    <div className="my-4 rounded-lg overflow-hidden shadow-lg text-sm">
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                            showLineNumbers={true} // 顯示行號 (選用)
                            customStyle={{ margin: 0, padding: '1.5rem' }}
                        >
                            {`//把以下程式碼複製到cars.js
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  introduce() {
    return "這是一台 " + this.brand;
  }
}`}
                        </SyntaxHighlighter>
                    </div>

                    <p className="font-bold mt-4">客戶需求列表：</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li><strong>客戶 A (競速愛好者)</strong>：需要一台 <code>SportsCar</code>，這台車必須要有 <code>topSpeed</code> 屬性，且數值需大於 250。</li>
                        <li><strong>客戶 B (多寶家庭)</strong>：需要一台 <code>FamilyVan</code>，這台車必須要有 <code>seatCount</code> 屬性，且數值需大於等於 7。</li>
                        <li><strong>客戶 C (物流公司)</strong>：需要一台 <code>HeavyTruck</code>，這台車必須要有 <code>cargoCapacity</code> 屬性，且載重需大於 1000kg。</li>
                    </ul>
                </div>
            </section>

            {/* 區塊 2: 應繳交檔案 */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    應繳交檔案
                </h2>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-bold text-[14px] text-slate-700">
                    <ul className='list-disc list-inside space-y-2'>
                        <li className='space-x-2'>
                            <span>cars.js</span>
                            <span className="text-xs bg-red-200 px-2 py-0.5 rounded text-gray-600">必要</span>
                            <span className="text-xs text-gray-400 font-normal ml-2">包含所有類別定義與邏輯</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 新增區塊：下載測試工具 */}
            <section className="bg-indigo-50 rounded-xl shadow-sm border border-indigo-100 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-indigo-900 mb-2 flex items-center gap-2">
                            🛠️ 自我檢測工具
                        </h2>
                        <p className="text-indigo-700/80 text-sm">
                            下載此網頁檔案，並將其與你的 <code>cars.js</code> 放在同一個資料夾，<br />
                            直接用瀏覽器開啟即可測試你的程式碼是否符合要求。
                        </p>
                    </div>

                    {/* 修改這裡：直接使用 a 標籤 */}
                    <a
                        href={Problem3TestFileUrl}      // 這裡綁定剛剛 import 進來的 url
                        download="Problem3TestFile.html"    // 指定下載時的檔名，不管原檔名是什麼，下載下來都會叫 test.html
                        className="flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow transition-transform hover:scale-105 active:scale-95 whitespace-nowrap decoration-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        下載 Problem3TestFile.html
                    </a>
                </div>
            </section>

            {/* 區塊 3: 提示 */}
            <section className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-yellow-800 mb-3">
                    💡 提示
                </h2>
                <ul className="list-disc list-inside text-yellow-900/80 space-y-2">
                    <li>可以使用ES6的 <code>class</code>與<code>extends</code>語法。</li>
                    <li>記得在子類別的<code>constructor</code>中使用<code>super()</code>來呼叫父類別的建構子。</li>
                </ul>
            </section>
        </div>
    </>);
};

export default ProblemPage3;