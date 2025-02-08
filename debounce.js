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

function debounce(delay, fn) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
