async function sendMessage(name, message) {
    const API_URL = "https://web-and-algo-prac-api.vercel.app/api/echo";
    try {
        console.log(`正在發送訊息給: ${API_URL}`);
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                message: message
            })
        });
        if (!response.ok) {
            throw new Error(`伺服器回應錯誤: ${response.status}`);
        }
        const data = await response.json();
        console.log("伺服器回應:", data);
        return data;

    } catch (error) {
        console.error("發生錯誤:", error);
        return {
            status: "error",
            reply: `[系統錯誤] 無法連線到後端: ${error.message}`
        };
    }
}