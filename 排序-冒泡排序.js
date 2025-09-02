/**
 * 冒泡排序算法实现
 * 算法思路：重复遍历待排序数组，每次比较相邻的两个元素，若顺序错误则交换位置，
 *          每轮遍历会将当前最大的元素"浮"到数组末端，经过n-1轮后完成排序
 * 时间复杂度：O(n²)（无论最好、最坏还是平均情况）
 * 空间复杂度：O(1)（仅使用常数级额外空间）
 */
function bubbleSort(arr) {
  // 复制原数组避免修改原始数据
  const array = [...arr];
  const len = array.length;
  
  // 外层循环控制需要进行多少轮比较
  for (let i = 0; i < len - 1; i++) {
    // 内层循环控制每轮比较的元素范围
    // 每完成一轮，最大的元素已到位，下一轮可减少一次比较
    for (let j = 0; j < len - 1 - i; j++) {
      // 比较相邻元素，若前大后小则交换
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  
  return array;
}