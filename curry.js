/**
 * 核心思路
 * 参数达到length时，直接执行fn
 * 未达到length时，返回一个新函数，新函数的参数为之前的参数和新的参数
 */
/**
 *
 * @param {*} fn
 * apply方法被用来调用fn函数，并将arg1数组中的所有元素作为参数传递给fn。
 * 这是因为curry函数的目的是将一个多参数的函数转换为一系列单参数的函数
 *而apply方法允许你将一个数组作为参数传递给函数，这在处理不定数量的参数时非常有用。
 */
// function curry(fn) {
//   return function curried(...arg1) {
//     if (arg1.length >= fn.length) {
//       return fn.apply(this, arg1);
//     } else {
//       return function (...arg2) {
//         return curried.apply(this, arg1.concat(arg2));
//       };
//     }
//   };
// }

// function curry(fn){
//   return function curried(...args){
//     if(args.length>=fn.length){
//       return fn.apply(this,args)
//     }else{
//       return function(...args2){
//         return curried.apply(this,args.concat(args2))
//       }
//     }
//   }
// }

function curry(fn) {
  return function curried(...args1) {
    if (fn.length > args1.length) {
      return function (...args2) {
        return curried.apply(this, args1.concat(args2));
      };
    } else {
      return fn.apply(this, args1);
    }
  };
}

const curry2 = (fn, ...args) => {
  return args.length >= fn.length
    ? fn(...args)
    : (..._args) => curry2(fn, ...args, ..._args);
};

function curryy(fn) {
  return function curried(...arg1) {
    if (fn.length > arg1.length) {
      return function (...arg2) {
        return curried.apply(this, arg1.concat(arg2));
      };
    } else {
      return fn.apply(this, arg1);
    }
  };
}
