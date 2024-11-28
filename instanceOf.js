/**
 *
 * @param A 实例对象
 * @param B 构造函数
 * @returns 如果逐层查找原型链，A 只要能找到 B 的原型链，就返回true，否则返回false
 */

function myInstanceOf(A, B) {
  while (A !== null) {
    if (A.__proto__ === B.prototype) {
      return true;
    }
    A = A.__proto__;
  }
  return false;
}
//
//
//
//

//
//
//
//
//
//
//
//
//
//
function myInance(A, B) {
  while (A != null) {
    if ((A.__proto__ = B.prototype)) {
      return true;
    } else {
      A = A.__proto__;
    }
  }
  return false;
}
