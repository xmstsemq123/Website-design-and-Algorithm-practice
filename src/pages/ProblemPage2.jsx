import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ProblemPage2 = () => {
  // --- 範例部分的 React 邏輯 (模擬作業解答) ---
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('點擊按鈕開始抽卡');

  const drawCard = () => {
    // 重置狀態
    setStatus('loading');
    setMessage('抽卡中... (等待 2 秒)');

    // 模擬 Promise 行為
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const isLucky = Math.random() > 0.5; // 50% 機率
        if (isLucky) {
          resolve("🎉 SSR: 傳說級稀有卡片！");
        } else {
          reject("💩 N: 銘謝惠顧，再接再厲...");
        }
      }, 2000);
    });

    // 處理結果
    promise
      .then((res) => {
        setStatus('success');
        setMessage(res);
      })
      .catch((err) => {
        setStatus('error');
        setMessage(err);
      });
  };

  // --- 根據狀態改變樣式 ---
  const getBoxStyle = () => {
    switch (status) {
      case 'loading': return 'bg-blue-100 border-blue-300 text-blue-700 animate-pulse';
      case 'success': return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      case 'error': return 'bg-gray-200 border-gray-300 text-gray-600';
      default: return 'bg-white border-gray-200 text-gray-500';
    }
  };

  return (
    <div className="w-full max-w-4xl space-y-6">
      
      {/* 標題區 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          第二題
        </h2>
        <div className='w-2 h-[10px] mx-2 bg-gray-800 rounded-3xl'></div>
        <h2 className="text-2xl font-bold text-gray-800">
          非同步抽卡機
        </h2>
      </section>

      {/* 區塊 1: 題目描述 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">
          題目描述
        </h2>
        <div className="prose max-w-none text-black leading-relaxed text-[18px]">
          <p>
            請從零開始，使用 HTML、CSS 與 JavaScript 製作一個<strong>完整的抽卡網頁</strong>。
            你不需要依賴任何框架，請直接操作 DOM 來完成畫面更新。
          </p>

          <h3 className="font-bold text-lg mt-4 text-gray-700">1. 介面要求 (HTML/CSS)</h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
            <li><strong>結果顯示區：</strong> 在畫面上方放置一個區塊（例如 <code>div</code>），預設文字為「點擊按鈕開始抽卡」。請加上邊框、背景色等樣式，讓它看起來像一張卡片或螢幕。</li>
            <li><strong>操作按鈕：</strong> 在下方放置一個按鈕 <code>button</code>，文字為「開始抽卡」。</li>
          </ul>

          <h3 className="font-bold text-lg mt-4 text-gray-700">2. 程式邏輯 (JavaScript)</h3>
          <p>請實作一個函式 <code>drawCard()</code>，該函式必須回傳一個 <strong>Promise</strong>：</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
            <li>Promise 內部使用 <code>setTimeout</code> 模擬 <strong>2秒</strong> 的伺服器延遲。</li>
            <li>延遲結束後，使用 <code>Math.random()</code> 決定結果：
              <ul className="pl-6 list-[circle]">
                <li><strong>&gt; 0.5 (成功)</strong>：呼叫 <code>resolve("SSR: 抽到大獎！")</code></li>
                <li><strong>&le; 0.5 (失敗)</strong>：呼叫 <code>reject("N: 沒抽中...")</code></li>
              </ul>
            </li>
          </ul>

          <h3 className="font-bold text-lg mt-4 text-gray-700">3. 互動流程</h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
            <li>當使用者點擊按鈕時：
                <ol className="pl-6 list-decimal mt-1 space-y-1">
                    <li>修改顯示區文字為 <strong>「抽卡中...」</strong>。</li>
                    <li>(選用) 讓按鈕變成不可點擊 (Disabled) 狀態，避免重複觸發。</li>
                    <li>呼叫 <code>drawCard()</code>。</li>
                </ol>
            </li>
            <li>接收到 Promise 結果後（使用 <code>.then</code> 或 <code>.catch</code>）：
                <ol className="pl-6 list-decimal mt-1 space-y-1">
                    <li>將回傳的文字顯示在結果顯示區。</li>
                    <li>(選用) 依據成功或失敗，改變顯示區的背景顏色（例如：中獎顯示金色、失敗顯示灰色）。</li>
                </ol>
            </li>
          </ul>
        </div>
      </section>

      {/* 範例演示區 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          預期成果演示
        </h2>
        <p className="text-gray-500 mb-4 text-sm">下方是你的網頁完成後，預期應該要有的互動行為：</p>
        
        <div className='flex flex-col items-center justify-center p-8 bg-slate-50 rounded-xl gap-6 border border-slate-200'>
          {/* 顯示結果的螢幕 */}
          <div className={`w-full max-w-md h-32 flex items-center justify-center border-2 rounded-xl text-xl font-bold transition-all duration-300 ${getBoxStyle()}`}>
            {message}
          </div>

          {/* 按鈕 */}
          <button 
            onClick={drawCard}
            disabled={status === 'loading'}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white rounded-lg shadow-md font-medium transition-colors"
          >
            {status === 'loading' ? '祈禱中...' : '開始抽卡'}
          </button>
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
              <span>HW-2.html</span>
              <span className="text-xs bg-red-200 px-2 py-0.5 rounded text-gray-600">必要</span>
              <span className="text-xs text-gray-400 font-normal ml-2">(包含 HTML 結構)</span>
            </li>
            <li className='space-x-2'>
              <span>HW-2.css</span>
              <span className="text-xs bg-green-200 px-2 py-0.5 rounded text-gray-600">可選</span>
              <span className="text-xs bg-blue-200 px-2 py-0.5 rounded text-gray-600">可直接嵌入 HTML</span>
            </li>
            <li className='space-x-2'>
              <span>HW-2.js</span> 
              <span className="text-xs bg-green-200 px-2 py-0.5 rounded text-gray-600">可選</span>
              <span className="text-xs bg-blue-200 px-2 py-0.5 rounded text-gray-600">可直接嵌入 HTML</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 區塊 3: 提示 */}
      <section className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-100 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-yellow-800 mb-3">
          💡 提示
        </h2>
        <ul className="list-disc list-inside text-yellow-900/80 space-y-2">
          <li>
            <strong>DOM 操作：</strong> 使用 <code>document.getElementById('id名稱')</code> 或 <code>document.querySelector('.class名稱')</code> 來選取你的 HTML 元素。
          </li>
          <li>
            <strong>修改內容：</strong> 選取元素後，可以使用 <code>element.textContent = "新文字"</code> 來修改顯示內容。
          </li>
          <li>
            <strong>事件監聽：</strong> 使用 <code>button.addEventListener('click', function() &#123; ... &#125;)</code> 來綁定點擊事件。
          </li>
          <li>
            <strong>Promise：</strong> 建立 Promise 的語法為 <code>new Promise((resolve, reject) =&gt; &#123; ... &#125;)</code>。
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ProblemPage2;