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
  let obj = {};
  obj.__proto__ = constructor.prototype;
  const result = constructor.apply(obj, args);
  return result instanceof Object ? result : obj; //因为不确定构造函数返回什么类型，所以要判断一下
}

function new2(constructor, ...args) {
  let obj = {};
  obj.__proto__ = constructor.prototype;
  const result = constructor.apply(this, ...args);
  return result instanceof Object ? result : obj;
}
