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

function new1(constructor, ...args) {
  let obj = new Object();
  obj.__proto__ = constructor.prototype;
  const result = constructor.apply(obj, args);
  return result instanceof Object ? result : obj; //因为不确定构造函数返回什么类型，所以要判断一下
}


function create(fn, ...args) {
  var obj = Object.create(fn.prototype);

  // 3、执行fn，并将obj作为内部this。使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
  var res = fn.apply(obj, args);
  // 4、如果fn有返回值，则将其作为new操作返回内容，否则返回obj
  return res instanceof Object ? res : obj;
};