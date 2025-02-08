// function throttle(delay, func) {
//   let current = 0;
//   return function (...args) {
//     let now = Number(Date.now());
//     if (now - current > delay) {
//       func(...args); //推荐用...展开
//       current = now;
//     }
//   };
// }

function throttle(delay, fn) {
  let current = 0;
  return (...args) => {
    let now = Number(Date.now());
    if (now - current > delay) {
      fn(...args);
      current = now;
    }
  };
}
