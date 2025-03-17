var maxDepth = function (root) {
    if (!root) return 0
    let leftdepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    return Math.max(rightDepth, leftdepth) + 1
};