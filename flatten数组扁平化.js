// function flatten(arr) {
//     let result = []
//     for (let i of arr) {
//         if (Array.isArray(i)) {
//             result.concat(flatten(i))
//         } else {
//             result.push(i)
//         }
//     }
//     return result
// }

// const flatten = (arr) => {
//   let result = [];
//   for (let i of arr) {
//     if (Array.isArray(i)) {
//       result.concat(flatten(i));
//     } else {
//       result.push(i);
//     }
//   }
//   return result;
// };

const flatten = (arr) => {
  let res = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res.concat(flatten(item));
    } else {
      res.push(item);
    }
  });
  return res;
};

const flattenReduce = (arr) => arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flatten(cur) : cur), []);

function flattenRecursiveWithDepth(arr, depth = 1) {
  // 如果深度为0或负数，或者arr不是数组，直接返回原值
  if (depth < 1 || !Array.isArray(arr)) {
    return arr;
  }
  return arr.reduce((result, currentItem) => {
    // 如果当前项是数组且深度尚有余量，则递归调用并减少深度
    if (Array.isArray(currentItem) && depth > 0) {
      result.push(...flattenRecursiveWithDepth(currentItem, depth - 1)); // 注意展开递归结果
    } else {
      // 否则，直接将当前项加入结果
      result.push(currentItem);
    }
    return result;
  }, []); // 初始值为空数组
}
