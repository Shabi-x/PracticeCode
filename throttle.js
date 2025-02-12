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

function throttle(fn,delay){
  let lastCallTime = 0
  return function(...args){
    let now = Date.now()
    if(now-lastCallTime>delay){
      fn.apply(this,...args)
      lastCallTime = now
    }
  }
}