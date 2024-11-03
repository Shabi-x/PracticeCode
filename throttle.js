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

const throlltle = (delay, fn, ...args) => {
  let current = 0;
  return () => {
    let now = Date.now();
    if (now - current > delay) {
      fn(...args);
      current = now;
    }
  };
};
