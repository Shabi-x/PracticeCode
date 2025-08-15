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
    const used = new Array(nums.length).fill(false); // 用于记录哪些元素已经被使用

    function dfs(combine) {
        if (combine.length === nums.length) {
            result.push([...combine]); // 将当前排列加入结果集
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                combine.push(nums[i]); // 将当前元素加入排列
                used[i] = true; // 标记该元素已被使用
                dfs(combine); // 递归处理下一个元素
                used[i] = false; // 回溯，取消标记
                combine.pop(); // 回溯，移除当前元素
            }
        }
    }

    dfs([]); // 从空数组开始递归
    return result;
};