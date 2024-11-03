function Race(promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach((item) => {
      item.then(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
}
