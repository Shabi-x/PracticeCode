/**
 * LeetCode 22. 括号生成 (Generate Parentheses)
 * 
 * 题目描述：
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且有效的括号组合。
 * 有效括号组合需满足：左括号必须以正确的顺序闭合。
 * 
 * 解法：回溯法（DFS）
 * 1. 使用深度优先搜索，维护左右括号的剩余数量
 * 2. 当左括号有剩余时，可以添加左括号
 * 3. 当右括号剩余数量大于左括号剩余数量时，可以添加右括号
 * 4. 当字符串长度等于 2*n 时，将当前字符串加入结果集
 */
var generateParenthesis = function (n) {
  const res = [];  // 存储所有有效的括号组合

  const dfs = (lRemain, rRemain, str) => { // 左右括号所剩的数量，str是当前构建的字符串
    if (str.length == 2 * n) { // 字符串构建完成
      res.push(str);           // 加入解集
      return;                  // 结束当前递归分支
    }
    if (lRemain > 0) {         // 只要左括号有剩，就可以选它，然后继续做选择（递归）
      dfs(lRemain - 1, rRemain, str + "(");
    }
    if (lRemain < rRemain) {   // 右括号比左括号剩的多，才能选右括号
      dfs(lRemain, rRemain - 1, str + ")"); // 然后继续做选择（递归）
    }
  };

  dfs(n, n, ""); // 递归的入口，剩余数量都是n，初始字符串是空串
  return res;    // 返回所有有效的括号组合
};