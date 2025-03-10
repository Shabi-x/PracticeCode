class PromisePool {
  constructor(capacity) {
    this.opacity = capacity;
    this.tasks = [];
    this.active = 0;
  }

  add(fn) {
    this.tasks.push(fn);
    this.run();
  }

  run() {
    const curTask = this.tasks.shift();
    if(this.active<this.capacity&&this.queue.length>0){
      this.active++;
      curTask().finally(()=>{
        this.active--;
        this.run();
      })
    }
  }
}
