class EventEmitter {
  constructor() {
    this.event = {}; // 'run': [fun]
  }

  //如果该事件类型已经存在对应的回调函数数组，则将回调函数追加到数组中
  //否则创建一个新的数组并将回调函数存入。
  //订阅
  subscribe(type, callback) {
    if (!this.event[type]) {
      this.event[type] = [];
    } else {
      this.event[type].push(callback);
    }
  }

  //用于触发事件，接受一个参数列表 args。
  //如果存在对应的事件类型，就依次执行该类型下的所有回调函数，并将参数传递给它们。
  publish(type, ...args) {
    if (!this.event[type]) {
      return;
    } else {
      this.event[type].forEach((callback) => {
        callback.apply(this, args);
      });
    }
  }
}

class EventBus {
  constructor() {
    this.event = {};
    // 'run' : []
  }

  subscribe(type, callback) {
    if (!this.event[type]) {
      this.event[type] = [];
    } else {
      this.event[type].push(callback);
    }
  }

  publish(type, ...args) {
    if (!this.event[type]) {
      return;
    } else {
      this.event[type].forEach((event) => {
        event.apply(this, args);
      });
    }
  }
}
