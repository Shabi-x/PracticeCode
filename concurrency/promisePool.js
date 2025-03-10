class PromisePool {
    constructor(maxConcurrent) {
      this.maxConcurrent = maxConcurrent; 
      this.queue = []; 
      this.active = 0; 
    }
    add(task) {
      this.queue.push(task);
      this.run();
    }
    run() {
      while (this.active < this.maxConcurrent && this.queue.length > 0) {
        const task = this.queue.shift();
        this.active++;
        task().finally(() => {
          this.active--;
          this.run(); 
        });
      }
    }
  }


  
  //测试PromisePool
  const pool = new PromisePool(2);

  function delay(ms, name) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${name} 完成`);
        resolve();
      }, ms);
    });
  }
  
  pool.add(() => delay(1000, '任务1'));
  pool.add(() => delay(1000, '任务2'));
  pool.add(() => delay(1000, '任务3'));
  pool.add(() => delay(1000, '任务4'));
  