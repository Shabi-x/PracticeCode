const myPromiseAlllll = (PromiseArr) => {
  let count = 0;
  let res = [];
  return new Promise((resolve, reject) => {
    PromiseArr.forEach((item, index) => {
      if (item instanceof Promise) {
        item.then(
          (res) => {
            count++;
            resolve(res);
            if (res.length === count) {
              return res;
            }
          },
          (err) => {
            reject(res);
          }
        );
      } else {
        count++;
        resolve(item);
        if (res.length === count) {
          return res;
        }
      }
    });
  });
};
