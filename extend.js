// @ts-nocheck
function Parent() {
  this.name = "poetry"; // 在父类构造器中定义 name 属性
}
Parent.prototype.address = "china";

function Child() {
  this.age = 28;
  Parent.call(this);
}

Child.prototype = new Parent();
// // 使用构造函数继承
// Child.prototype = new Parent();
// Child.prototype.constructor = Child; //理解就是在一个对象的原型上添加一个属性constructor，值为Child
// //可以例如：object.prototype.constructor = sayHello;

var demo = new Child();
console.log(demo.age); // 输出: 28
console.log(demo.address); // 输出: poetry
console.log(demo.constructor); // 输出: Child
