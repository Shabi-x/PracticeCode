/**
 * LeetCode 88. 合并两个有序数组 (Merge Sorted Array)
 * 
 * 题目描述：
 * 给你两个按非递减顺序排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n，分别表示 nums1 和 nums2 中的元素数目。
 * 请你合并 nums2 到 nums1 中，使合并后的数组同样按非递减顺序排列。
 * 
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。
 * 为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0，应忽略。
 * nums2 的长度为 n。
 * 
 * 解法：双指针（从后向前）
 * 1. 从后向前遍历两个数组，比较两个数组的元素
 * 2. 将较大的元素放入 nums1 的末尾
 * 3. 如果 nums2 中还有剩余元素，将其复制到 nums1 的前面
 * 4. 如果 nums1 中还有剩余元素，不需要额外操作（因为它们已经在正确的位置）
 */
function mergeArray(num1, m, num2, n) {
  let idx = m + n - 1  // 合并后数组的末尾索引
  let i = m - 1,  j = n - 1;         // nums2 的末尾索引
  
  // 从后向前遍历两个数组，比较两个数组的元素
  while (i >= 0 && j >= 0) {
    if (num1[i] >= num2[j]) {
      num1[idx--] = num1[i--];  // 将 nums1 中较大的元素放入末尾
    } else {
      num1[idx--] = num2[j--];  // 将 nums2 中较大的元素放入末尾
    }
  }
  
  while (i >= 0) {
    num1[idx--] = num1[i--];
  }
  
  while (j >= 0) {
    num1[idx--] = num2[j--];
  }
  
  return num1;  // 返回合并后的数组
}