// function curry(fn) {
//   return function curried(args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return function (...part) {
//         return curried.apply(this, args.concat(part));
//       };
//     }
//   };
// }
function curry(fn) {
  return function curried(args) {
    if (args.length >= fn) {
      return fn.apply(this, args);
    } else {
      return function (...part) {
        return curried.apply(this, args.concat(part));
      };
    }
  };
}
