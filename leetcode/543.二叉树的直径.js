/**
 * LeetCode 543. 二叉树的直径 (Diameter of Binary Tree)
 * 
 * 题目描述：
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个节点路径长度中的最大值。
 * 这条路径可能穿过也可能不穿过根节点。
 * 
 * 解法：深度优先搜索（DFS）
 * 1. 二叉树的直径是所有节点的左右子树深度之和的最大值
 * 2. 使用递归计算每个节点的深度，同时更新经过该节点的最长路径
 * 
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let res = 0;
    const depth = (root) => {
        if(!root) return 0  // 空节点深度为0
        let left = depth(root.left)
        let right = depth(root.right)
        res = Math.max((left + right), res)  // 更新经过当前节点的最长路径
        return Math.max(left, right) + 1  // 返回当前节点的深度
    }
    depth(root)
    return res
};