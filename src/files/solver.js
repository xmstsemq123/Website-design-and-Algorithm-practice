/**
 * 二分搜尋法實作
 */
function search(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // 取中間索引
        const mid = Math.floor((left + right) / 2);
        
        // 讀取中間值 (這會消耗 1 次讀取次數)
        const midVal = arr[mid];

        if (midVal === target) {
            return mid; // 找到了
        } else if (midVal < target) {
            left = mid + 1; // 往右半邊找
        } else {
            right = mid - 1; // 往左半邊找
        }
    }

    return -1; // 找不到
}