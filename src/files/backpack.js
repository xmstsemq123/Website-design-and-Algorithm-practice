const STORAGE_KEY = "my_backpack";

/**
 * 1. 讀取背包
 */
function loadItems() {
  const jsonString = localStorage.getItem(STORAGE_KEY);
  
  // 防呆：如果沒存檔，就回傳空陣列，不然 JSON.parse(null) 雖然不會錯但邏輯需處理
  if (!jsonString) {
    return [];
  }
  
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    // 萬一存到了壞掉的格式，為了不讓程式崩潰，回傳空陣列
    console.error("存檔損毀，重置背包", e);
    return [];
  }
}

/**
 * 2. 儲存背包
 */
function saveItems(items) {
  const jsonString = JSON.stringify(items);
  localStorage.setItem(STORAGE_KEY, jsonString);
}

/**
 * 3. 新增道具 (Helper)
 */
function addItem(name) {
  // 步驟 A: 先讀取舊的 (從 LS 拿)
  const items = loadItems();
  
  // 步驟 B: 加入新的
  items.push({ id: Date.now(), name: name });
  
  // 步驟 C: 存回去 (寫入 LS)
  saveItems(items);
  
  return items;
}