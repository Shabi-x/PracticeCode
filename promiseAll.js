/**
 *
 * @param promiseAll - 一个 Promise 数组
 * @returns 把多个Promise实例包装成一个新的Promise实例，
 * 成功时PromiseResult（PAll.then(res)=>这里的res是数组）是一个Array，
 * 失败时存放的是第一个Reject的返回结果
 */

function myPromiseAll(promises) {
  let count = 0;
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      if (item instanceof Promise) {
        item.then(
          (res) => {
            result[index] = res;
            count++;
            if (result.length == count) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      } else {
        result[index] = item;
        count++;
        if (result.length == count) {
          resolve(result);
        }
      }
    });
  });
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
 *
 *
 *
 *
 *
 *
 */
