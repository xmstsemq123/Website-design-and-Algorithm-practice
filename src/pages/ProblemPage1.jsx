import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProblemPage1 = () => {
  const containerRef = useRef(null)
  const boxRef = useRef(null)
  const draggingRef = useRef(false)
  const offsetRef = useRef({ x: 0, y: 0 })
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e) => {
      if (!draggingRef.current) return
      const container = containerRef.current
      const box = boxRef.current
      if (!container || !box) return
      const cRect = container.getBoundingClientRect()
      const bRect = box.getBoundingClientRect()
      let x = e.clientX - cRect.left - offsetRef.current.x
      let y = e.clientY - cRect.top - offsetRef.current.y
      const maxX = cRect.width - bRect.width
      const maxY = cRect.height - bRect.height
      x = Math.max(0, Math.min(x, maxX))
      y = Math.max(0, Math.min(y, maxY))
      setPos({ x, y })
    }
    const handleUp = () => {
      draggingRef.current = false
    }
    window.addEventListener("pointermove", handleMove)
    window.addEventListener("pointerup", handleUp)
    return () => {
      window.removeEventListener("pointermove", handleMove)
      window.removeEventListener("pointerup", handleUp)
    }
  }, [])
  const handleDown = (e) => {
    e.preventDefault()
    const box = boxRef.current
    if (!box) return
    const rect = box.getBoundingClientRect()
    offsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    draggingRef.current = true
    box.setPointerCapture?.(e.pointerId)
  }
  return (<>
    {/* 主要內容區塊 (包含左右按鈕) */}
    {/* 中央：題目卡片區 */}
    <div className="w-full max-w-4xl space-y-6">
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          第一題
        </h2>
        <div className='w-2 h-[10px] mx-2 bg-gray-800 rounded-3xl'></div>
        <h2 className="text-2xl font-bold text-gray-800">
          會動的盒子
        </h2>
      </section>
      {/* 區塊 1: 題目描述 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">
          題目描述
        </h2>
        <div className="prose max-w-none text-black leading-relaxed text-[18px]">
          <p>製作寬與高皆為50px的box，且背景色足以辨識該box存在。利用原生Javascript對HTML DOM的操作，鼠標可以對box任意拖曳至網頁上任何地方，並且放開鼠標後，box會停留在最後被拖曳處。</p>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          範例
        </h2>
        <div
          className='relative h-[100px] bg-slate-50 rounded-xl'
          ref={containerRef}
        >
          <div
            className={`absolute w-[50px] h-[50px] bg-green-300 cursor-grab font-bold flex justify-center items-center text-xs select-none`}
            style={{ top: pos.y, left: pos.x }}
            ref={boxRef}
            onPointerDown={handleDown}
          >
            抓我!
          </div>
        </div>
      </section>

      {/* 區塊 2: 必要輸出檔案 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          應繳交檔案
        </h2>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-bold text-[14px] text-slate-700">
          <ul className='list-disc list-inside space-y-2'>
            <li className='space-x-2'>
              <span>HW-1.html</span>
              <span className="text-xs bg-red-200 px-2 py-0.5 rounded text-gray-600">必要</span>
            </li>
            <li className='space-x-2'>
              <span>HW-1.css</span>
              <span className="text-xs bg-green-200 px-2 py-0.5 rounded text-gray-600">可選</span>
              <span className="text-xs bg-blue-200 px-2 py-0.5 rounded text-gray-600">可直接嵌入html</span>
            </li>
            <li className='space-x-2'>
              <span>HW-1.js</span> 
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
          <li>使用addEventListener監聽鼠標情況。</li>
          <li>利用getElement*或querySelector*抓取Html DOM。</li>
          <li>鼠標位置是相對於整體viewport的，而box位置有可能因父元素而異。</li>
        </ul>
      </section>
    </div>
  </>);
};

export default ProblemPage1;