/**
 * 插入排序算法实现
 * 算法思路：将数组分为已排序和未排序两部分，从第二个元素开始，依次将未排序部分的元素插入到已排序部分的合适位置，
 * 时间复杂度：最好情况 O(n)（数组已排序），最坏情况和平均情况 O(n²)
 * 空间复杂度：O(1)（仅使用常数级额外空间）
 */
function insertionSort(arr) {
  // 复制原数组避免修改原始数据
  const array = [...arr];
  const len = array.length;
  
  // 从第二个元素开始遍历（第一个元素默认已排序）
  for (let i = 1; i < len; i++) {
    // 保存当前要插入的元素
    const current = array[i];
    // 从已排序部分的末尾开始比较
    let j = i - 1;
    
    // 寻找插入位置：如果已排序元素大于当前元素，则向后移动
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    
    // 将当前元素插入到正确位置
    array[j + 1] = current;
  }
  
  return array;
}