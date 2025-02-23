// function deepClone(obj) {
//     if (!obj || typeof (obj) != 'object') return obj
//     let newObj = Array.isArray(obj) ? [] : {}
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             newObj[key] = deepClone(obj[key])
//         }
//     }
//     return newObj
// }

function deepClone(obj) {
  if (obj == null || typeof obj !== "object") {
    return obj;
  }

  let newobj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newobj[key] = deepClone(obj[key]);
    }
  }
  return newobj;
}


function deepClone2(obj) {
  if (obj === null || typeof obj !== "object") {
      return obj;
  }

  // 处理数组
  if (Array.isArray(obj)) {
      return obj.map(item => deepClone(item));
  }

  // 处理对象
  const clonedObj = {};
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          clonedObj[key] = deepClone(obj[key]);
      }
  }
  return clonedObj;
}