class PromisePool {
    constructor(capacity) {
      this.capacity = capacity;
      this.tasks = [];
      this.running = 0;
    }
  
    add(fn) {
      return new Promise((resolve, reject) => {
        this.tasks.push({
          fn,
          resolve,
          reject,
        });
        this._run();
      });
    }
  
    _run() {
      while (this.tasks.length && this.running < this.capacity) {
        const { fn, resolve, reject } = this.tasks.shift();
        this.running++;
        fn().then(resolve, reject)
          .finally(() => {
            this.running--;
            this._run();
          });
      }
    }
  }
  
/**
 * 数据模拟演示
*/


  function mockRequest(id, delay) {
    return () => {
        return new Promise((resolve) => {
            console.log(`开始请求 ${id}`);
            setTimeout(() => {
                console.log(`请求 ${id} 完成`);
                resolve(`结果 ${id}`);
            }, delay);
        });
    };
}


// 创建一个并发数为2的Promise池
const pool = new PromisePool(2);

// 模拟多个异步请求
const requests = [
    { id: 1, delay: 3000 },  // 3秒
    { id: 2, delay: 1000 },  // 1秒
    { id: 3, delay: 2000 },  // 2秒
    { id: 4, delay: 4000 },  // 4秒
    { id: 5, delay: 5000 }   // 5秒
];

// 执行请求
requests.forEach(req => {
    pool.add(mockRequest(req.id, req.delay))
        .then(result => {
            console.log(`处理 ${result}`);
        });
});