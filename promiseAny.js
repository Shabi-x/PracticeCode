/**
 *
 * @param promisesAny - 一个 Promise 数组
 * @returns 一个 Promise，该 Promise 等待第一个完成的 Promise，并返回其结果或错误
 */
function promisesAny(promises) {
  let res = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then(
        (value) => {
          res[index] = value;
          count++;
          if (count === promises.length) {
            resolve(res);
          }
        },
        (error) => {
          res[index] = error;
          count++;
          if (count === promises.length) {
            reject(res);
          }
        }
      );
    });
  });
}
