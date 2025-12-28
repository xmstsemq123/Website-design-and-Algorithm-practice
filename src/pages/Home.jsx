import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  // 這裡整理了我們之前做過的所有題目，讓首頁看起來更豐富
  const problems = [
    {
      id: 1,
      title: "會動的盒子",
      desc: "DOM 操作與事件監聽 (Draggable)",
      tag: "DOM API",
      color: "text-green-600 bg-green-50 border-green-200" // 綠色：代表操作、互動
    },
    {
      id: 2,
      title: "非同步抽卡機",
      desc: "Promise 與 Async/Await 實作",
      tag: "Async",
      color: "text-amber-600 bg-amber-50 border-amber-200" // 琥珀黃：代表等待、抽卡的驚喜
    },
    {
      id: 3,
      title: "車廠訂單系統",
      desc: "OOP基礎實作：類別與繼承",
      tag: "Object Orientation",
      color: "text-blue-600 bg-blue-50 border-blue-200" // 藍色：代表結構、藍圖、穩重
    },
    {
      id: 4,
      title: "幽靈列車調度員",
      desc: "Linked List 資料結構 (Class)",
      tag: "Data Structure",
      color: "text-purple-600 bg-purple-50 border-purple-200" // 紫色：代表幽靈、神秘
    },
    {
      id: 5,
      title: "RPG 角色卡片",
      desc: "CSS 偽類與偽元素應用",
      tag: "CSS",
      color: "text-pink-600 bg-pink-50 border-pink-200" // 粉色：代表設計、美術
    },
    {
      id: 6,
      title: "冒險者公會數據分析",
      desc: "Array Methods (Filter, Map, ...)",
      tag: "Array",
      color: "text-indigo-600 bg-indigo-50 border-indigo-200" // 靛青色：代表數據、分析
    },
    {
      id: 7,
      title: "AJAX的小試身手",
      desc: "AJAX 與非同步處理",
      tag: "AJAX",
      color: "text-cyan-600 bg-cyan-50 border-cyan-200" // 青色：代表網路、傳輸
    },
    {
      id: 8,
      title: "時空留言板",
      desc: "進階 AJAX：資料處理與渲染",
      tag: "DOM Render",
      color: "text-teal-600 bg-teal-50 border-teal-200" // 藍綠色：代表時間、紀錄
    },
    {
      id: 9,
      title: "極速檔案檢索",
      desc: "Searching Algorithm",
      tag: "Search",
      color: "text-orange-600 bg-orange-50 border-orange-200" // 橘色：代表搜尋、焦點
    },
    {
      id: 10,
      title: "混沌檔案館",
      desc: "Sorting Algorithm",
      tag: "Sort",
      color: "text-rose-600 bg-rose-50 border-rose-200" // 玫瑰紅：代表混沌、修正
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">

      {/* Hero Section: 大標題與主要按鈕 */}
      <section className="w-full bg-white border-b border-gray-200 pt-20 pb-16 px-6 text-center shadow-sm">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block p-3 rounded-full bg-gray-100 mb-4">
            <span className="text-2xl">🚀</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            網頁設計與演算法<span className="text-blue-600">練習作業</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            歡迎來到練習系統。這裡包含了一系列的挑戰，從基礎的 DOM 操作、CSS 樣式設計，到進階的演算法與資料結構。
          </p>

          <div className="pt-8">
            <button
              onClick={() => navigate('/problem/1')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2 mx-auto"
            >
              開始第一題挑戰
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>
            <p className="text-sm text-gray-400 mt-4">
              準備好了嗎？點擊按鈕開始你的旅程！
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section: 題目選單 */}
      <section className="w-full max-w-6xl mx-auto p-6 md:p-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
          <span className="w-2 h-8 bg-gray-800 rounded-full"></span>
          題目列表 (Roadmap)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob) => (
            <div
              key={prob.id}
              onClick={() => navigate(`/problem/${prob.id}`)}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-blue-300 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${prob.color}`}>
                  {prob.tag}
                </span>
                <span className="text-gray-300 font-mono text-2xl font-bold opacity-30 group-hover:opacity-100 group-hover:text-blue-600 transition-colors">
                  {prob.id < 10 ? '0' : ''}{prob.id}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {prob.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {prob.desc}
              </p>

              {/* 裝飾用的箭頭，Hover 時會出現 */}
              <div className="absolute bottom-4 right-4 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-8 text-gray-400 text-sm">
        © 2025 Web Design & Algorithm Practice By Jia-You Lu. Built with Vite + React + Tailwind.
      </footer>

    </div>
  );
}