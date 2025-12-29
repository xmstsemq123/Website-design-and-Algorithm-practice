import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import testFileUrl from '../files/form_test.html?url';

const ProblemPage12 = () => {
  // Demo 用的 State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  // 驗證狀態
  const [uCheck, setUCheck] = useState({ valid: false, msg: "等待輸入..." });
  const [pCheck, setPCheck] = useState({ valid: false, msg: "等待輸入..." });

  // Demo 驗證邏輯 (模擬 validator.js)
  useEffect(() => {
    // 1. 驗證帳號
    if (!username) {
        setUCheck({ valid: false, msg: "必填" });
    } else if (/^[a-zA-Z0-9]+$/.test(username)) {
        setUCheck({ valid: true, msg: "✨ 咒語格式正確" });
    } else {
        setUCheck({ valid: false, msg: "❌ 僅限英文字母與數字" });
    }

    // 2. 驗證密碼
    // 規則：長度 > 8, 含大寫, 含特殊符號
    let pValid = true;
    let pMsg = [];
    if (password.length <= 8) { pValid = false; pMsg.push("長度需 > 8"); }
    if (!/[A-Z]/.test(password)) { pValid = false; pMsg.push("需含大寫字母"); }
    if (!/[!@#$%^&*]/.test(password)) { pValid = false; pMsg.push("需含特殊符號 (!@#$%^&*)"); }
    
    if(!password) {
        setPCheck({ valid: false, msg: "必填" });
    } else if (pValid) {
        setPCheck({ valid: true, msg: "✨ 靈魂共鳴穩定" });
    } else {
        setPCheck({ valid: false, msg: "❌ " + pMsg.join(", ") });
    }

  }, [username, password]);

  return (
    <div className="w-full max-w-4xl space-y-6">
      
      {/* 標題區 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-800">第十二題</h2>
        <div className='w-2 h-[10px] mx-2 bg-gray-800 rounded-3xl'></div>
        <h2 className="text-2xl font-bold text-gray-800">禁忌的魔法契約</h2>
      </section>

      {/* 題目描述 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-600 pl-3">
          題目描述
        </h2>
        <div className="prose max-w-none text-black leading-relaxed text-[18px]">
          <p>
            想加入黑魔法公會嗎？請簽署這份「靈魂契約 (註冊表單)」。
            契約魔法具有強大的防護機制，如果你的「真名 (帳號)」或「靈魂印記 (密碼)」不符合規則，契約將無法成立。
          </p>
          <p>
            請撰寫 <code>validator.js</code>，實作表單驗證邏輯。你需要利用 <strong>Regular Expression (正規表達式)</strong> 來檢查字串格式。
          </p>

          <div className="my-6 bg-purple-50 p-5 rounded-lg border border-purple-200">
             <h3 className="text-sm font-bold text-purple-900 uppercase mb-3">🔮 契約法則 (Validation Rules)</h3>
             
             <div className="space-y-4">
                <div>
                    <span className="font-bold text-gray-800">1. 真名 (Account Name):</span>
                    <ul className="list-disc list-inside text-sm text-gray-600 ml-2">
                        <li>只能包含 <strong>英文字母 (A-Z, a-z)</strong> 與 <strong>數字 (0-9)</strong>。</li>
                        <li>不能包含空格或特殊符號。</li>
                    </ul>
                </div>
                <div>
                    <span className="font-bold text-gray-800">2. 靈魂印記 (Password):</span>
                    <ul className="list-disc list-inside text-sm text-gray-600 ml-2">
                        <li>長度必須 <strong>大於 8</strong> 個字元。</li>
                        <li>必須包含至少一個 <strong>大寫字母 (A-Z)</strong>。</li>
                        <li>必須包含至少一個 <strong>特殊符號</strong> (限定範圍：<code>!@#$%^&*</code>)。</li>
                    </ul>
                </div>
             </div>
          </div>

          <p className="font-bold mt-4 text-purple-900">任務目標：</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>實作 <code>validateUsername(str)</code>：回傳布林值 (Boolean)，符合規則回傳 true。</li>
            <li>實作 <code>validatePassword(str)</code>：回傳布林值 (Boolean)，符合所有條件回傳 true。</li>
          </ul>
        </div>
      </section>

      {/* 程式碼骨架 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-gray-800 mb-2">程式碼骨架 (validator.js)</h3>
          <div className="rounded-lg overflow-hidden shadow-lg text-sm">
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers={true} customStyle={{ margin: 0, padding: '1.5rem' }}>
{`/**
 * 1. 驗證帳號 (True Name)
 * 規則：只允許英數字 (Alphanumeric)
 * @param {string} name 
 * @returns {boolean}
 */
function validateUsername(name) {
  // TODO: 使用 Regex 檢查
}

/**
 * 2. 驗證密碼 (Soul Signature)
 * 規則：長度 > 8, 含大寫, 含特殊符號 (!@#$%^&*)
 * @param {string} pwd 
 * @returns {boolean}
 */
function validatePassword(pwd) {
  // TODO: 使用多重條件檢查
}`}
            </SyntaxHighlighter>
          </div>
      </section>

      {/* 互動 Demo */}
      <section className="bg-slate-900 rounded-xl shadow-xl border border-slate-700 p-6 sm:p-8 text-slate-200">
        <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-2 flex justify-center items-center gap-2">
                📜 簽訂契約 (Demo)
            </h2>
            <p className="text-sm text-slate-400">當輸入內容符合規則時，按鈕才會解鎖</p>
        </div>

        <div className="max-w-md mx-auto space-y-5">
            {/* Username Input */}
            <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider font-bold text-purple-300">True Name</label>
                <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="User123"
                    className="w-full bg-slate-800 border border-slate-600 rounded px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
                <div className={`text-xs flex items-center gap-1 ${uCheck.valid ? 'text-green-400' : 'text-red-400'}`}>
                    {uCheck.valid ? '✓' : '⚠'} {uCheck.msg}
                </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider font-bold text-purple-300">Soul Signature</label>
                <input 
                    type="text" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="P@ssword99"
                    className="w-full bg-slate-800 border border-slate-600 rounded px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
                <div className={`text-xs flex items-center gap-1 ${pCheck.valid ? 'text-green-400' : 'text-red-400'}`}>
                    {pCheck.valid ? '✓' : '⚠'} {pCheck.msg}
                </div>
            </div>

            {/* Submit Button */}
            <button 
                disabled={!uCheck.valid || !pCheck.valid}
                className="w-full py-3 mt-4 rounded font-bold text-lg shadow-lg transition-all
                disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed
                bg-purple-600 hover:bg-purple-500 text-white hover:shadow-purple-500/30"
            >
                {(!uCheck.valid || !pCheck.valid) ? '魔力不足 (Locked)' : '🩸 獻祭並簽約 (Submit)'}
            </button>
        </div>
      </section>

      {/* 下載測試工具 */}
      <section className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 sm:p-8 text-white">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
                <h2 className="text-xl font-bold text-purple-400 mb-2">
                    ⚖️ 下載契約審判者 (Test Runner)
                </h2>
                <p className="text-gray-300 text-sm">
                    下載 <code>form_test.html</code> 並與你的 <code>validator.js</code> 放在同目錄。
                </p>
            </div>
            <a 
                href={testFileUrl}
                download="form_test.html"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 text-white decoration-0"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                下載 form_test.html
            </a>
        </div>
      </section>

      {/* 應繳交檔案 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>應繳交檔案
        </h2>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-bold text-slate-700">
            validator.js <span className="text-xs bg-red-200 px-2 ml-2 rounded text-gray-700">必要</span>
        </div>
      </section>

      {/* 提示區塊 */}
      <section className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-100 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-yellow-800 mb-3">
          💡 咒語小抄 (Regex Hints)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-900/80">
            <div className="bg-white p-3 rounded border border-yellow-200">
                <code>/^[a-z0-9]+$/</code><br/>
                代表「從頭到尾 (<code>^...$</code>) 只能有小寫英文或數字，且至少一個字 (<code>+</code>)」。
            </div>
            <div className="bg-white p-3 rounded border border-yellow-200">
                <code>/[A-Z]/.test(str)</code><br/>
                檢查字串中「是否包含」至少一個大寫字母。
            </div>
            <div className="bg-white p-3 rounded border border-yellow-200">
                <code>/[!@#$%^&*]/</code><br/>
                特殊符號的集合。注意有些符號在 Regex 中可能有特殊意義，若有需要可用 <code>\</code> 轉義 (但這幾個在 <code>[]</code> 內通常安全)。
            </div>
            <div className="bg-white p-3 rounded border border-yellow-200">
                <code>str.length &gt; 8</code><br/>
                最簡單的長度檢查，不一定要用 Regex。
            </div>
        </div>
      </section>

    </div>
  );
};

export default ProblemPage12;