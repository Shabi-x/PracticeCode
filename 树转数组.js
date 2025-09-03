/**
 * 树转数组 - 深度优先遍历
 * 将树形结构扁平化为一维数组
 */


// 使用递归
const treeToArrayByRecursion = (tree) => {
    const result = [];
    
    const traverse = (nodes) => {
        for (const node of nodes) {
            // 添加当前节点（去除 children 属性），也就是把当前的节点本身存入结果数组
            const { children, ...nodeWithoutChildren } = node;
            result.push(nodeWithoutChildren);
            
            // 如果有子节点，递归处理子节点
            if (children && children.length > 0) {
                traverse(children);
            }
        }
    };
    
    traverse(tree);
    return result;
};

//使用栈（迭代方式）
const treeToArrayByStack = (tree) => {
    const result = [];
    const stack = [...tree];
    
    while (stack.length > 0) {
        const currentNode = stack.pop();
        
        // 添加当前节点（去除 children 属性）
        const { children, ...nodeWithoutChildren } = currentNode;
        result.push(nodeWithoutChildren);
        
        // 如果有子节点，加入栈中（注意顺序）
        if (children && children.length > 0) {
            stack.push(...children.reverse());
        }
    }
    
    return result;
};