/**
 * LeetCode 94. 二叉树的中序遍历 (Binary Tree Inorder Traversal)
 * 
 * 题目描述：
 * 给定一个二叉树的根节点 root，返回它的中序遍历结果。
 * 
 * 解法：递归
 * 1. 中序遍历的顺序是：左子树 -> 根节点 -> 右子树
 * 2. 使用递归方法，先遍历左子树，再访问根节点，最后遍历右子树
 * 3. 将访问的节点值存入结果数组中
 * 
 * 时间复杂度：O(n)，其中 n 是二叉树的节点数，每个节点被访问一次
 * 空间复杂度：O(h)，其中 h 是二叉树的高度，递归调用的栈空间
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let tree = []
    const order = (root) => {
        if (!root) return null
        order(root.left)
        tree.push(root.val)
        order(root.right)
    }
    order(root)
    return tree
};