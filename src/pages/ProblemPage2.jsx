import React, { useState } from 'react';

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

  return (<>
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
          <p>請實作一個 JavaScript 函數 <code>drawCard()</code>，該函數必須回傳一個 <strong>Promise</strong> 物件。</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Promise 內部需使用 <code>setTimeout</code> 模擬 <strong>2秒</strong> 的延遲時間。</li>
            <li>延遲結束後，使用 <code>Math.random()</code> 決定結果：
              <ul className="pl-6 list-[circle] text-gray-600">
                <li>如果隨機數大於 0.5，判定為<strong>成功</strong>，請呼叫 <code>resolve</code> 並帶入字串 "SSR: 抽到大獎！"。</li>
                <li>如果隨機數小於等於 0.5，判定為<strong>失敗</strong>，請呼叫 <code>reject</code> 並帶入字串 "N: 沒抽中..."。</li>
              </ul>
            </li>
            <li>在 HTML 中製作一個按鈕與顯示區域，點擊按鈕後呼叫該函數，並利用 <code>.then()</code> 與 <code>.catch()</code> (或 async/await) 將結果顯示在畫面上。</li>
          </ul>
        </div>
      </section>

      {/* 範例演示區 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          範例演示
        </h2>
        
        <div className='flex flex-col items-center justify-center p-8 bg-slate-50 rounded-xl gap-6'>
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
            </li>
            <li className='space-x-2'>
              <span>HW-2.css</span>
              <span className="text-xs bg-green-200 px-2 py-0.5 rounded text-gray-600">可選</span>
              <span className="text-xs bg-blue-200 px-2 py-0.5 rounded text-gray-600">可直接嵌入html</span>
            </li>
            <li className='space-x-2'>
              <span>HW-2.js</span> 
              <span className="text-xs bg-green-200 px-2 py-0.5 rounded text-gray-600">可選</span>
              <span className="text-xs bg-blue-200 px-2 py-0.5 rounded text-gray-600">可直接嵌入html</span>
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
          <li>建立 Promise 的基本語法：<code>new Promise((resolve, reject) =&gt; &#123; ... &#125;)</code>。</li>
          <li>在等待期間（Pending 狀態），可以先修改 DOM 顯示「抽卡中...」，提升使用者體驗。</li>
        </ul>
      </section>
    </div>
  </>);
};

export default ProblemPage2;