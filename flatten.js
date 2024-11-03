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
