//处理并发请求

function axios(url) {}
export function dealtRequest(URLS, maxNum) {
  const Results = []; // 存放请求返回的结果
  let index = 0; // 用于指定当前请求的那个

  // 处理请求
  async function runRequest() {
    //这里要控制 index 的长度，如果index++ 一直增加就会造成死循环
    if (URLS.length === index) return;
    let i = index; //
    const url = URLS[index];
    index++;
    try {
      const res = await axios(url);
      Results[i] = res;
    } catch (error) {
      Results[i] = error;
    } finally {
      runRequest();
    }
  }

  // 比较并发数和接口的数量，防止出现只有5个接口，并发数10的情况
  let minNum = Math.min(URLS.length, maxNum);

  for (let i = 0; i < minNum; i++) {
    runRequest();
  }

  // 这个返回的是一个成功的 promise 对象 ，用于存储最后的请求结果
  return new Promise((reslove) => {
    reslove(Results);
  });
}
