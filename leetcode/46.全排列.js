/**
 * LeetCode 46. 全排列 (Permutations)
 * 
 * 题目描述：
 * 给定一个不含重复数字的数组 nums，返回其所有可能的全排列。你可以按任意顺序返回答案。
 * 
 * 解法：回溯算法
 * 使用深度优先搜索和回溯，通过 used 数组记录已使用的元素，递归构建所有排列
 */
const permute = function (nums) {
    const result = [];
    function dfs(path) {
        if (path.length === nums.length) {
            result.push([...path]); // 如果当前path已经达到目标长度，则将其添加到结果中
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if(path.includes(nums[i])) continue; // 如果当前节点已被使用，则跳过
            path.push(nums[i]); // 将当前节点推入
            dfs(path); // 已经推入了一个点、两个点的时候，继续DFS
            path.pop(); // 回溯，例如已经推进去三个了，就回退一次去考虑其他可能
        }
    }

    dfs([]); // 从空数组开始递归
    return result;
};