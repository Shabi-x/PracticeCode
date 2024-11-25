// 定义两个异步函数，它们返回已解析的Promise对象
const f1 = () => Promise.resolve("result from f1");
const f2 = () => Promise.resolve("result from f2");
const f3 = () => Promise.resolve("result from f3");
const f4 = () => Promise.resolve("result from f4");
const f5 = () => Promise.resolve("result from f5");

const arr = [f2, f1, f3, f4, f5];

async function runPromisesInSequence(promises) {
  const results = [];
  for (const promise of promises) {
    const result = await promise();
    results.push(result);
  }
  return results;
}

// 测试用例
runPromisesInSequence(arr).then((result) => {
  console.log(result);
});
