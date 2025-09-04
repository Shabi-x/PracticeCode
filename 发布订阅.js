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
      
   off(type, callback) {
    if (!this.event[type]) return;
    
    // 过滤掉要移除的回调
    this.event[type] = this.event[type].filter(cb => cb !== callback);
    
    // 若数组为空，可删除该事件类型（优化内存）
    if (this.event[type].length === 0) {
      delete this.event[type];
    }
  }
}


// 订阅事件
bus.on('onchange', (data) => {
  console.log('数据变化了:', data);
});

// 触发事件  
bus.emit('onchange', { value: 'new data' });