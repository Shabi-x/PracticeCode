/**
 * LeetCode 104. 二叉树的最大深度 (Maximum Depth of Binary Tree)
 * 
 * 题目描述：
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 解法：递归
 * 1. 如果树为空，则深度为0
 * 2. 否则，递归计算左右子树的最大深度
 * 3. 返回左右子树最大深度的较大值 + 1（加上根节点自身）
 */
var maxDepth = function (root) {
    if (!root) return 0                        // 如果树为空，深度为0
    let leftdepth = maxDepth(root.left);       // 递归计算左子树的最大深度
    let rightDepth = maxDepth(root.right);     // 递归计算右子树的最大深度
    return Math.max(rightDepth, leftdepth) + 1 // 返回左右子树最大深度的较大值 + 1
};
