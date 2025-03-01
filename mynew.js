// function myNew(constructor, ...args) {
//   // 1. 创建一个新对象
//   const obj = {};
//   // 2. 将新对象原型指向构造函数的原型
//   obj.__proto__ = constructor.prototype;
//   // 3.执行构造函数，this 指向新对象
//   const result = constructor.apply(obj, args);
//   // 4.返回新对象
//   return result instanceof Object ? result : obj;
// }
// console.log(myNew.prototype.constructor === myNew);

function neww(constructor, ...args) {
    let obj = {}
    obj.__proto__ = constructor.prototype
    const result = constructor.apply(obj, args)
    return result instanceof Object ? result : obj//因为不确定构造函数返回什么类型，所以要判断一下
}

function myNew(constructor, ...args) {
    // 创建一个新的空对象
    const newObj = {};
    // 将新对象的原型链接到构造函数的原型对象
    Object.setPrototypeOf(newObj, constructor.prototype);
    // 将构造函数的作用域赋给新对象，并执行构造函数
    const result = constructor.apply(newObj, args);
    // 如果构造函数有显式返回一个对象，则返回该对象；否则返回新对象
    return result instanceof Object!== null ? result : newObj;
}
