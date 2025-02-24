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
