function myNew(constructor, ...args) {
  // 1. 创建一个新对象
  const obj = {};
  // 2. 将新对象原型指向构造函数的原型
  obj.__proto__ = constructor.prototype;
  // 3.执行构造函数，this 指向新对象
  const result = constructor.apply(obj, args);
  // 4.返回新对象
  return result instanceof Object ? result : obj;
}
console.log(myNew.prototype.constructor === myNew);