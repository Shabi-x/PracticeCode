/**
 * LeetCode 199. 二叉树的右视图 (Binary Tree Right Side View)
 * 
 * 题目描述：
 * 给定一个二叉树的根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 
 * 解法：广度优先搜索（BFS）
 * 1. 使用队列进行层序遍历
 * 2. 对于每一层，记录最后一个节点（即最右边的节点）的值
 * 3. 将每层最右边节点的值加入结果数组
 * 
 * 时间复杂度：O(n)，其中 n 是二叉树的节点数，每个节点被访问一次
 * 空间复杂度：O(w)，其中 w 是二叉树的最大宽度，队列中最多存储一层的节点
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    let ans = []
    if (!root) return ans
    let queue = []
    queue.push(root)
    while (queue.length > 0) {
        let cnt = queue.length
        for (let i = 0; i < cnt; i++) {
            let cur = queue.shift()
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)

            if (i == cnt - 1) {
                ans.push(cur.val)
            }
        }
    }
    return ans
};