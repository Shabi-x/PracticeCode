/**
 * lodash的get方法实现
 * 根据路径安全地获取对象的深层属性值
 * @param {Object} object - 要查询的对象
 * @param {string|Array} path - 属性路径，支持字符串和数组格式
 * @param {*} defaultValue - 默认值，当路径不存在时返回
 * @returns {*} 属性值或默认值
 */
function get(object, path, defaultValue = undefined) {
    // 边界情况处理：如果object为null或undefined，直接返回默认值
    if (object == null)  return defaultValue;
    
    // 边界情况处理：如果path为空，返回object本身
    if (!path) return object;
    
    // 路径解析：将路径拆成数组
    let pathArray;
    if (Array.isArray(path)) {
        // 如果path是数组，直接使用
        pathArray = path;
    } else if (typeof path === 'string') {
        // 如果path是字符串，需要解析
        // 将'a.b[0].c' 转换为 ['a', 'b', '0', 'c']
        pathArray = path
            .replace(/\[(\d+)\]/g, '.$1') // 将[0]转换为.0
            .split('.') // 按.分割
            .filter(key => key !== ''); // 过滤空字符串
    } else {
        // 如果path不是字符串也不是数组，返回默认值
        return defaultValue;
    }
    
    // -**核心逻辑**-
    // 核心处理：使用reduce逐层访问对象属性，会遍历数组中的每个元素，每次遍历都会调用回调函数，并将上一次的返回值作为下一次的输入
    return pathArray.reduce((current, key) => {
        // 如果当前值为null或undefined，返回undefined
        if (current == null) {
            return undefined;
        }
        // 返回下一层的值
        return current[key];
    }, object) ?? defaultValue; // 使用??操作符，只有在结果为null或undefined时才返回默认值
}

// 测试用例
const obj = {
    a: {
        b: [{
            c: 1
        }]
    },
    x: {
        y: {
            z: 'hello'
        }
    },
    arr: [1, 2, { name: 'test' }]
};
// 测试正常路径访问
console.log('get(obj, "a.b[0].c"):', get(obj, 'a.b[0].c')); // 1

// 测试不存在的路径
console.log('get(obj, "a.b[0].c[1].e[2][1].e", 0):', get(obj, 'a.b[0].c[1].e[2][1].e', 0)); // 0

// 测试部分存在的路径
console.log('get(obj, "a.b.c", 0):', get(obj, 'a.b.c', 0)); // 0

// 测试存在的路径
console.log('get(obj, "a", 0):', get(obj, 'a', 0)); // {b: [{c: 1}]}

// 测试数组格式的路径
console.log('get(obj, ["x", "y", "z"]):', get(obj, ['x', 'y', 'z'])); // 'hello'
