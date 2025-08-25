/**
 * LeetCode 700. 二叉搜索树中的搜索 (Search in a Binary Search Tree)
 * 
 * 题目描述：
 * 给定二叉搜索树（BST）的根节点 root 和一个整数值 val。
 * 你需要在 BST 中找到节点值等于 val 的节点。返回以该节点为根的子树。如果节点不存在，则返回 null。
 * 
 * 解法：递归搜索
 * 当前实现是按照普通二叉树的方式进行搜索，先检查根节点，然后递归搜索左子树和右子树。
 * 
 * 注意：该实现没有充分利用二叉搜索树的特性。对于二叉搜索树，可以通过比较当前节点值与目标值的大小关系，
 * 决定是在左子树还是右子树中继续搜索，从而提高搜索效率。
 * 
 * 时间复杂度：O(n)，其中 n 是二叉树的节点数，最坏情况下需要访问所有节点
 * 空间复杂度：O(h)，其中 h 是二叉树的高度，递归调用的栈空间
 */

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (!root) return null
    if (root.val === val) {
        return root
    }
    let leftValue = searchBST(root.left, val)
    if (leftValue) return leftValue
    return searchBST(root.right, val)
};
