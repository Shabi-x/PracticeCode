/**
 * LeetCode 128. 最长连续序列 (Longest Consecutive Sequence)
 * 
 * 题目描述：
 * 给定一个未排序的整数数组 nums，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * 
 * 解法：哈希集合
 * 1. 将所有数字加入哈希集合（Set）中，以便 O(1) 时间内判断一个数是否存在
 * 2. 遍历哈希集合中的每个数 x，如果 x-1 不存在于集合中，则 x 是一个连续序列的起点
 * 3. 从 x 开始，不断检查 x+1, x+2, ... 是否存在于集合中，确定连续序列的长度
 * 4. 更新最长连续序列的长度
 * 
 * 时间复杂度：O(n)，虽然有嵌套循环，但内层循环最多执行 n 次（每个数字最多被访问两次）
 * 空间复杂度：O(n)，需要一个哈希集合存储所有数字
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const set = new Set(nums)
    let res = 0
    for (let start of set) {
        if (!set.has(start - 1)) {
            let end = start//确定是开头后，初始化另一个指针指向start
            while (set.has(end + 1)) {
                end++
            }
            res = Math.max(res, end - start + 1)
        }
    }

    return res
};