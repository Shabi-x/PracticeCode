/**
 * LeetCode 53. 最大子数组和 (Maximum Subarray)
 * 
 * 题目描述：
 * 给你一个整数数组 nums，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组是数组中的一个连续部分。
 * 
 * 解法：动态规划/贪心算法
 * 1. 维护两个变量：当前子数组和(cursum)和全局最大和(max)
 * 2. 遍历数组，对于每个元素，判断是将其加入到当前子数组中，还是重新开始一个新的子数组
 * 3. 如果当前子数组和为负，则丢弃前面的结果，从当前元素重新开始
 * 4. 否则，将当前元素加入到当前子数组中
 * 5. 每次更新全局最大和
 */
var maxSubArray = function (nums) {
    let max = nums[0]     // 初始化全局最大和为第一个元素
    let cursum = nums[0]  // 初始化当前子数组和为第一个元素
    
    for (let i = 1; i < nums.length; i++) {
        if (cursum < 0) {
            cursum = nums[i]  // 如果当前子数组和为负，则丢弃前面的结果，从当前元素重新开始
        } else {
            cursum = cursum + nums[i]  // 否则，将当前元素加入到当前子数组中
        }
        max = Math.max(max, cursum)  // 更新全局最大和
    }
    
    return max  // 返回最大子数组和
};