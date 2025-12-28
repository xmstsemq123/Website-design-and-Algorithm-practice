/**
 * 使用快速排序法 (Quick Sort)
 * 平均複雜度: O(N log N)
 */
function superSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1]; // 選最後一個當基準
    const left = [];
    const right = [];

    // 注意：這裡只會遍歷一次 (N)，如果用遞迴，總層數是 log N
    // 所以總次數是 N * log N
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // 遞迴呼叫
    return [...superSort(left), pivot, ...superSort(right)];
}