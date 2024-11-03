console.log("111");

setTimeout(() => {
  console.log("222");
}, 2000);

Promise.resolve().then(() => {
  const startTime = Date.now();
  while (true) {
    const currentTime = Date.now();
    if (currentTime - startTime > 4000) {
      console.log("333");
      break;
    }
  }
});
