/**
 * LeetCode 70. 爬楼梯 (Climbing Stairs)
 * 
 * 题目描述：
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 解法：动态规划
 * 1. 定义状态：dp[i] 表示爬到第 i 阶楼梯的方法数
 * 2. 初始状态：dp[0] = 1, dp[1] = 1
 * 3. 状态转移方程：dp[i] = dp[i-1] + dp[i-2]
 *    (爬到第 i 阶的方法数等于爬到第 i-1 阶的方法数加上爬到第 i-2 阶的方法数)
 * 4. 最终结果：dp[n]
 * 
 * 时间复杂度：O(n)，需要计算 dp[2] 到 dp[n] 的值
 * 空间复杂度：O(n)，需要一个长度为 n+1 的数组存储状态
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let dp = []
    dp[0] = 1, dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};