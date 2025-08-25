/**
 * LeetCode 198. 打家劫舍 (House Robber)
 * 
 * 题目描述：
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋
 * 装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你不触动警报装置的情况下，一夜之内能够偷窃到的最高金额。
 * 
 * 解法：动态规划
 * 1. 定义状态：dp[i] 表示偷到第 i 个房屋时能获得的最大金额
 * 2. 初始状态：
 *    - dp[0] = nums[0]（只有一个房屋时，只能偷这个房屋）
 *    - 如果有多个房屋，dp[1] = max(nums[0], nums[1])（两个房屋中选择金额较大的一个）
 * 3. 状态转移方程：dp[i] = max(dp[i-2] + nums[i], dp[i-1])
 *    - dp[i-2] + nums[i]：偷第 i 个房屋，则不能偷第 i-1 个房屋
 *    - dp[i-1]：不偷第 i 个房屋，则最大金额与偷到第 i-1 个房屋时相同
 * 4. 最终结果：dp[nums.length-1]
 * 
 * 时间复杂度：O(n)，需要计算 dp[0] 到 dp[n-1] 的值
 * 空间复杂度：O(n)，需要一个长度为 n 的数组存储状态
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) return nums[0];
    
    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    
    return dp[nums.length - 1];
};