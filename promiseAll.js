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
  const len = promises.length;
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      //涉及到了非promise的考虑，面试记忆这个太复杂了，不如下面这个
      if (item instanceof Promise) {
        // item.then(
        Promise.resolve(item).then(
          (res) => {
            result[index] = res;
            count++;
            if (len == count) {
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
        if (len == count) {
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


function allPromise(promises) {
  let result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item).then(
        //这里Promise.resolve()处理了非promise的情况
        // item.then(
        (res) => {
          result[index] = res;
          count++;
          if (count == promises.length) {
            resolve(result);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
}
