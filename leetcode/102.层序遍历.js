/**
 * LeetCode 102. 二叉树的层序遍历 (Binary Tree Level Order Traversal)
 * 
 * 题目描述：
 * 给你二叉树的根节点 root，返回其节点值的层序遍历。即逐层地，从左到右访问所有节点。
 * 
 * 解法：BFS广度优先搜索
 * 使用队列实现层序遍历，每次处理完一层的所有节点后再处理下一层
 */
var levelOrder = function (root) {
    let ans = []
    if (!root) return []
    let queue = []
    queue.push(root)
    while (queue.length > 0) {
        let cur = []
        let cnt = queue.length
        for (let i = 0; i < cnt; i++) {
            let node = queue.shift()
            cur.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.left) queue.push(node.right)
        }
        ans.push(cur)
    }
    return ans
};
