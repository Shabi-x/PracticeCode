function throttle(delay, funct, ...args) {
  let current = 0;
  return function () {
    let now = Number(Date.now());
    if (now - current > delay) {
      funct(...args);
      current = now;
    }
  };
}

const throttle2 = (delay, fn) => {
  let current = 0;
  return (...args) => {
    let now = Date.now();
    if (now - current > delay) {
      fn(...args);
      current = now;
    }
  };
};
