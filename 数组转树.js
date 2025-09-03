// 时间复杂度：O(n) - 两次遍历
// 空间复杂度：O(n) - Map 存储所有节点


const flatArray = [
    { id: 1, parentId: null, name: 'root1' },
    { id: 2, parentId: 1, name: 'child1' },
    { id: 3, parentId: 1, name: 'child2' },
    { id: 4, parentId: 2, name: 'grandchild1' },
    { id: 5, parentId: 3, name: 'grandchild2' },
    { id: 6, parentId: null, name: 'root2' }, // 多根结点
  ];

const arrToTree = (arr) => {
    const map = new Map() // 一个id对应一个对象，空间换时间
    for (let item of arr){
        map.set(item.id,item)
    }
    const roots = []
    for(let item of arr){
        // 寻找父节点，基于id去寻找
        if(item.parentId===null){
            roots.push(item) // 这个就是根节点
        }else{
            // 有父节点的子节点
            const parent = map.get(item.parentId) // 根据parentId找到父节点对象
            if(!parent.children){
                parent.children=[]
            }
            parent.children.push(item)
        }
    }
    return roots
}

console.log(arrToTree(flatArray))