/**
 * LeetCode 144. 二叉树的前序遍历 (Binary Tree Preorder Traversal)
 * 
 * 题目描述：
 * 给你二叉树的根节点 root ，返回它节点值的前序遍历。
 * 
 * 解法：递归
 * 1. 前序遍历的顺序是：根节点 -> 左子树 -> 右子树
 * 2. 使用递归方法，先访问根节点，再遍历左子树，最后遍历右子树
 * 3. 将访问的节点值存入结果数组中
 * 
 * 时间复杂度：O(n)，其中 n 是二叉树的节点数，每个节点被访问一次
 * 空间复杂度：O(h)，其中 h 是二叉树的高度，递归调用的栈空间
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let res = []
    function preOrder(root) {
        if (!root) return
        res.push(root.val)
        preOrder(root.left)
        preOrder(root.right)
    }
    preOrder(root)
    return res
};