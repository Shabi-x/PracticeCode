/**
 * LeetCode 322. 零钱兑换 (Coin Change)
 * 
 * 题目描述：
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 * 计算并返回可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 你可以认为每种硬币的数量是无限的。
 * 
 * 解法：动态规划
 * 1. 定义状态：dp[i] 表示凑成金额 i 所需的最少硬币数
 * 2. 初始状态：
 *    - dp[0] = 0（凑成金额 0 不需要硬币）
 *    - 其他位置初始化为一个较大的值（amount + 1）
 * 3. 状态转移方程：dp[i] = min(dp[i], dp[i - coins[j]] + 1)
 *    - 对于每种硬币 coins[j]，如果 i >= coins[j]，则可以选择使用这种硬币
 *    - dp[i - coins[j]] + 1 表示使用一枚面值为 coins[j] 的硬币后，剩余金额所需的最少硬币数 + 1
 * 4. 最终结果：
 *    - 如果 dp[amount] > amount，则无法凑出总金额，返回 -1
 *    - 否则返回 dp[amount]
 * 
 * 时间复杂度：O(amount * n)，其中 n 是硬币的种类数
 * 空间复杂度：O(amount)，需要一个长度为 amount + 1 的数组存储状态
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // dp[j]表示凑成金额j所需的最少硬币数
    // dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j])
    if (amount == 0) return 0;
    let maxCount = amount + 1; // 初始化为一个较大的值
    const dp = new Array(maxCount).fill(maxCount);
    dp[0] = 0; // 凑成金额0不需要硬币
    
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i < coins[j]) continue; // 当前面额大于要凑的金额，跳过
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1); // 状态转移方程
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount]; // 如果dp[amount]仍然是初始值，说明无法凑出
};