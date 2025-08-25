class EventBus {
  constructor() {
    this.event = {};
  }
  // 订阅事件
  on(type, callback) {
    if (!this.event[type]) {
      this.event[type] = [];
    }
    this.event[type].push(callback);
  }
  // 触发事件
  emit(type, ...args) {
    if (!this.event[type]) {
      return;
    } else {
      this.event[type].forEach((event) => {
        event.apply(this, args);
      });
    }
  }
}


// 订阅事件
bus.on('onchange', (data) => {
  console.log('数据变化了:', data);
});

// 触发事件  
bus.emit('onchange', { value: 'new data' });