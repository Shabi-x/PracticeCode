/**
 * LeetCode 145. 二叉树的后序遍历 (Binary Tree Postorder Traversal)
 * 
 * 题目描述：
 * 给你一棵二叉树的根节点 root ，返回其节点值的后序遍历。
 * 
 * 解法：递归
 * 1. 后序遍历的顺序是：左子树 -> 右子树 -> 根节点
 * 2. 使用递归方法，先遍历左子树，再遍历右子树，最后访问根节点
 * 3. 将访问的节点值存入结果数组中
 * 
 * 时间复杂度：O(n)，其中 n 是二叉树的节点数，每个节点被访问一次
 * 空间复杂度：O(h)，其中 h 是二叉树的高度，递归调用的栈空间
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root, res = []) {
    if (!root) return res;
    postorderTraversal(root.left, res)
    postorderTraversal(root.right, res)
    res.push(root.val);
    return res;
};