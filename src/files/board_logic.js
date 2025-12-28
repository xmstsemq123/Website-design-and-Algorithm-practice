/**
 * 從 API 取得留言，篩選 2024 年並「由新到舊」排序
 * @param {string} apiUrl - API 的網址
 */
async function renderMessages(apiUrl) {
    try {
        // 1. 發送請求
        const response = await fetch(apiUrl);
        const data = await response.json();

        // 2. 篩選資料 (Filter) - 只留 2024 年
        let filteredData = data.filter(msg => {
            return msg.timestamp.startsWith("2024");
        });

        // 3. 排序資料 (Sort) - 由新到舊 (Descending)
        // 原理：將時間字串轉為毫秒數，b - a 代表大的(晚的)在前
        filteredData.sort((a, b) => {
            return new Date(b.timestamp) - new Date(a.timestamp);
        });

        // 4. 取得容器並清空
        const board = document.getElementById('message-board');
        board.innerHTML = ""; 

        if (filteredData.length === 0) {
            board.innerHTML = '<div class="text-center text-gray-500">沒有找到符合的資料。</div>';
            return;
        }

        // 5. 渲染畫面
        filteredData.forEach(msg => {
            // 美化時間顯示 (把 T 換成 空格)
            const displayTime = msg.timestamp.replace("T", " "); 

            const html = `
                <div class="msg-card">
                    <div class="msg-header">
                        <span class="msg-author">
                            <span class="icon">👤</span> 
                            ${msg.author}
                        </span>
                        <span class="msg-time">${displayTime}</span>
                    </div>
                    <p class="msg-content">
                        ${msg.content}
                    </p>
                </div>
            `;
            board.innerHTML += html;
        });

        console.log(`成功渲染 ${filteredData.length} 筆資料 (已排序)`);

    } catch (error) {
        console.error("發生錯誤:", error);
        document.getElementById('message-board').innerHTML = `<div class="text-red-500 text-center">載入失敗: ${error.message}</div>`;
    }
}