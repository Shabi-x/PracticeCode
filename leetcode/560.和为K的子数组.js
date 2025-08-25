/**
 * LeetCode 560. 和为 K 的子数组 (Subarray Sum Equals K)
 * 
 * 题目描述：
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回该数组中和为 k 的连续子数组的个数。
 * 
 * 解法：前缀和 + 哈希表
 * 1. 使用哈希表记录前缀和出现的次数
 * 2. 遍历数组，计算当前前缀和，并查找是否存在前缀和等于 (当前前缀和 - k) 的情况
 * 3. 如果存在，则说明从之前某个位置到当前位置的子数组和为 k
 * 4. 更新哈希表中当前前缀和的出现次数
 * 
 * 时间复杂度：O(n)，其中 n 是数组的长度
 * 空间复杂度：O(n)，需要哈希表存储前缀和
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let sum = 0; let ans = 0;
    let map = new Map()
    map.set(0, 1)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        const toFind = sum - k
        if (map.has(toFind)) {
            ans += map.get(toFind)
        }

        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1)
        } else {
            map.set(sum, 1)
        }
    }

    return ans
};