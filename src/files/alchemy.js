let isDrawing = false;
let canvas, ctx;

// 1. 初始化
function initCanvas() {
  canvas = document.getElementById('transmutation-circle');
  ctx = canvas.getContext('2d');
  
  // 設定基本樣式
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#000000';

  // 綁定事件
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseleave', stopDrawing);
}

// 2. 開始繪製
function startDrawing(e) {
  isDrawing = true;
  ctx.beginPath(); // 重要：重新開始路徑
  ctx.moveTo(e.offsetX, e.offsetY);
}

// 3. 繪製中
function draw(e) {
  if (!isDrawing) return;
  
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

// 4. 停止繪製
function stopDrawing() {
  isDrawing = false;
}

// 5. 切換顏色
function setColor(newColor) {
  ctx.strokeStyle = newColor;
}

// 6. 清除畫布
function clearBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 自動啟動 (如果在真實環境)
// window.onload = initCanvas;