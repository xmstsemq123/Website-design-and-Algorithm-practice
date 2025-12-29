import React, { useRef, useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import testFileUrl from '../files/canvas_test.html?url';

const ProblemPage13 = () => {
  // --- React Demo 邏輯 (僅供展示) ---
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const canvas = canvasRef.current;
    if(!canvas) return;
    
    // 設定畫布解析度
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const ctx = canvas.getContext('2d');
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
  }, []); // 只執行一次初始化

  // 當顏色改變時更新 context
  useEffect(() => {
    const canvas = canvasRef.current;
    if(canvas) {
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = color;
    }
  }, [color]);

  const startDraw = (e) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDraw = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="w-full max-w-4xl space-y-6">
      
      {/* 標題區 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 flex justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-800">第十三題</h2>
        <div className='w-2 h-[10px] mx-2 bg-gray-800 rounded-3xl'></div>
        <h2 className="text-2xl font-bold text-gray-800">煉金術畫布</h2>
      </section>

      {/* 題目描述 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-3">
          題目描述
        </h2>
        <div className="prose max-w-none text-black leading-relaxed text-[18px]">
          <p>
            偉大的煉金術士需要精準地繪製「鍊成陣」。為了節省羊皮紙，工坊決定開發一套數位繪圖板。
            請撰寫 <code>alchemy.js</code>，利用 HTML5 Canvas API 來實作繪圖功能。
          </p>

          <p className="font-bold mt-4 text-indigo-900">任務目標：</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li><strong>繪圖邏輯：</strong> 實作滑鼠按下 (start)、移動 (draw)、放開 (stop) 的繪圖行為。</li>
            <li><strong>筆觸設定：</strong> 線條必須是連續的，不能斷斷續續。</li>
            <li><strong>更換墨水：</strong> 實作切換畫筆顏色的功能。</li>
            <li><strong>洗刷畫布：</strong> 實作一鍵清除畫面的功能。</li>
          </ul>

          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mt-4 text-sm">
             <h3 className="font-bold text-indigo-800 mb-2">🎨 必須實作的函式介面 (API)</h3>
             <ul className="list-disc list-inside space-y-1 font-mono text-gray-700">
                 {/* 這裡更新了列表，包含了所有關鍵函式 */}
                 <li><code>initCanvas()</code>: 初始化畫布與綁定監聽事件</li>
                 <li><code>startDrawing(e)</code>: 處理滑鼠按下 (Mousedown)</li>
                 <li><code>draw(e)</code>: 處理滑鼠移動 (Mousemove)</li>
                 <li><code>stopDrawing()</code>: 處理滑鼠放開 (Mouseup/leave)</li>
                 <li><code>setColor(color)</code>: 改變畫筆顏色</li>
                 <li><code>clearBoard()</code>: 清除畫布</li>
             </ul>
          </div>
        </div>
      </section>

      {/* 程式碼骨架 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-gray-800 mb-2">程式碼骨架 (alchemy.js)</h3>
          <div className="rounded-lg overflow-hidden shadow-lg text-sm">
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} showLineNumbers={true} customStyle={{ margin: 0, padding: '1.5rem' }}>
{`let isDrawing = false;
let canvas, ctx;

// 1. 初始化 (頁面載入後呼叫)
function initCanvas() {
  canvas = document.getElementById('transmutation-circle');
  ctx = canvas.getContext('2d');
  
  // 設定基本樣式
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // TODO: 綁定 mousedown, mousemove, mouseup 事件
  // canvas.addEventListener('mousedown', startDrawing);
  // ...
}

// 2. 開始繪製 (Mousedown)
function startDrawing(e) {
  // TODO: 開始路徑 (beginPath) 並移動到滑鼠位置 (moveTo)
  // 提示: 使用 e.offsetX, e.offsetY 取得座標
}

// 3. 繪製中 (Mousemove)
function draw(e) {
  // TODO: 畫線到目前位置 (lineTo) 並著色 (stroke)
}

// 4. 停止繪製 (Mouseup)
function stopDrawing() {
  // TODO: 更改Flag使停止繪製
}

// 5. 切換顏色
function setColor(newColor) {
  // TODO: 修改 ctx.strokeStyle
}

// 6. 清除畫布
function clearBoard() {
  // TODO: 使用 ctx.clearRect 清空整個畫布
}`}
            </SyntaxHighlighter>
          </div>
      </section>

      {/* 互動 Demo */}
      <section className="bg-slate-100 rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
            🖌️ 煉金術畫布預覽 (Demo)
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4">
            {/* 工具列 */}
            <div className="flex flex-row md:flex-col gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 hidden md:block">Inks</div>
                <button onClick={() => setColor("#000000")} className={`w-8 h-8 rounded-full border-2 ${color === '#000000' ? 'border-indigo-500 scale-110' : 'border-transparent'} bg-black transition-transform`}></button>
                <button onClick={() => setColor("#ef4444")} className={`w-8 h-8 rounded-full border-2 ${color === '#ef4444' ? 'border-indigo-500 scale-110' : 'border-transparent'} bg-red-500 transition-transform`}></button>
                <button onClick={() => setColor("#3b82f6")} className={`w-8 h-8 rounded-full border-2 ${color === '#3b82f6' ? 'border-indigo-500 scale-110' : 'border-transparent'} bg-blue-500 transition-transform`}></button>
                
                <div className="w-full h-px bg-gray-200 my-1 hidden md:block"></div>
                
                <button 
                    onClick={clearCanvas}
                    className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                    title="Clear"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                </button>
            </div>

            {/* 畫布區域 */}
            <div className="flex-1 bg-white rounded-lg shadow-inner border border-gray-300 relative h-[300px] cursor-crosshair overflow-hidden">
                <canvas
                    ref={canvasRef}
                    onMouseDown={startDraw}
                    onMouseMove={draw}
                    onMouseUp={stopDraw}
                    onMouseLeave={stopDraw}
                    className="absolute top-0 left-0 w-full h-full block"
                />
                <div className="absolute bottom-2 right-2 text-xs text-gray-300 pointer-events-none select-none">
                    Alchemy Canvas v1.0
                </div>
            </div>
        </div>
      </section>

      {/* 下載測試工具 */}
      <section className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 sm:p-8 text-white">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
                <h2 className="text-xl font-bold text-indigo-400 mb-2">
                    🧪 下載畫布檢測器
                </h2>
                <p className="text-gray-300 text-sm">
                    下載 <code>canvas_test.html</code> 並與你的 <code>alchemy.js</code> 放在同目錄。
                </p>
            </div>
            <a 
                href={testFileUrl}
                download="canvas_test.html"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 text-white decoration-0"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                下載 canvas_test.html
            </a>
        </div>
      </section>

      {/* 應繳交檔案 */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>應繳交檔案
        </h2>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-bold text-slate-700">
            alchemy.js <span className="text-xs bg-red-200 px-2 ml-2 rounded text-gray-700">必要</span>
        </div>
      </section>

      {/* 提示區塊 */}
      <section className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-100 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-yellow-800 mb-3">
          💡 煉金筆記 (Hints)
        </h2>
        <ul className="list-disc list-inside text-yellow-900/80 space-y-3 text-base">
          <li>
            <strong>滑鼠座標：</strong> <br/>
            事件物件 <code>e</code> 裡面有很多座標屬性。在 Canvas 中，我們通常使用 <code>e.offsetX</code> 和 <code>e.offsetY</code>，因為它們是相對於畫布左上角的距離。
          </li>
          <li>
            <strong>繪圖流程：</strong> <br/>
            每一次開始畫新的線段時（mousedown），一定要呼叫 <code>ctx.beginPath()</code>，否則所有畫過的線條會連在一起，或者顏色會互相影響。
          </li>
        </ul>
      </section>

    </div>
  );
};

export default ProblemPage13;