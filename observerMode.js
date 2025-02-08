class Topic {
  constructor() {
    this.observers = []; //观察者列表
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyAllObservers(data) {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

class Observer {
  update(data) {
    console.log("receive update", data);
  }
}

/**
 * 观察者模式（Observer Pattern）：
 * 
    -定义对象间的一种一对多依赖关系
    -当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并自动更新
    -对象之间存在直接的依赖关系

 * 发布-订阅模式（Publish-Subscribe Pattern）：

    -引入了一个中间件（事件通道）
    -发布者和订阅者之间完全解耦
    -通过事件通道进行通信，彼此不直接感知对方
 */
