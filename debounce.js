function debounce2(fn, delay) {
  let timer = null;
  return function (arg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...arg);
    }, delay);
  };
}

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

function debounce2(fn,delay){
  let timer = null
  return function(...args){
    if(timer) clearTimeout(timer)
      timer = setTimeout(()=>{
        fn.apply(this,args)
      },delay)
  }
}