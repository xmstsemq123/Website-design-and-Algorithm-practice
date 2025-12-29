/**
 * 1. 驗證帳號
 * 規則：只允許英文字母與數字，不可有空格或符號
 */
function validateUsername(name) {
    if (!name) return false;
    // ^ 開始, [a-zA-Z0-9] 範圍, + 至少一個, $ 結束
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(name);
}

/**
 * 2. 驗證密碼
 * 規則：長度 > 8, 含大寫, 含特殊符號 (!@#$%^&*)
 */
function validatePassword(pwd) {
    if (!pwd) return false;

    // 檢查 1: 長度
    if (pwd.length <= 8) return false; // 題目說 "大於 8"

    // 檢查 2: 大寫字母
    if (!/[A-Z]/.test(pwd)) return false;

    // 檢查 3: 特殊符號
    if (!/[!@#$%^&*]/.test(pwd)) return false;

    return true;
}