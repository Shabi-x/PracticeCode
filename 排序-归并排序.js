/**
 * 归并排序算法实现
 * 算法思路：采用分治策略，将数组不断二分至单个元素（默认有序），然后逐步将相邻的有序子数组合并为更大的有序数组，
 *          最终合并为完整的有序数组
 * 时间复杂度：O(n log n)（最好、最坏和平均情况均为此复杂度）
 * 空间复杂度：O(n)（需要额外空间存储合并过程中的临时数组）
 */
function mergeSort(arr) {
  // 基线条件：数组长度小于等于1时直接返回（已排序）
  if (arr.length <= 1) {
    return [...arr]; // 复制数组避免修改原始数据
  }
  
  // 将数组二分
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  // 合并两个有序数组
  return merge(left, right);
}

/**
 * 合并两个有序数组为一个有序数组
 * @param {Array} left - 第一个有序数组
 * @param {Array} right - 第二个有序数组
 * @returns {Array} 合并后的有序数组
 */
function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  // 比较两个数组的元素，按顺序放入结果数组
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  // 将剩余元素添加到结果数组
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  
  return result;
}