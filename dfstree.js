const dfsTree = (root, target) => {
  // 二叉树搜索
  if (!root) return null;
  if (root.val === target) {
    return root;
  }
  let leftResult = dfsTree(root.left, target);
  if (leftResult) return leftResult;
  return dfsTree(root.right, target);
};
