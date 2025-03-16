// 数组并集
function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

// 数组交集
function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

// 数组差集 (arr1 相对于 arr2 的差集)
function difference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

// 示例用法
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

console.log(union(arr1, arr2));      // [1, 2, 3, 4, 5, 6]
console.log(intersection(arr1, arr2)); // [3, 4]
console.log(difference(arr1, arr2));   // [1, 2]