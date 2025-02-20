class PromiseScheduler {
    constructor(maxConcurrency) {
        // 最大并发数量
        this.maxConcurrency = maxConcurrency;
        // 当前正在执行的任务数量
        this.currentConcurrency = 0;
        // 任务队列
        this.taskQueue = [];
    }

    // 添加任务到调度器
    addTask(task) {
        return new Promise((resolve, reject) => {
            const wrappedTask = () => {
                // 标记任务开始执行，增加当前并发数
                this.currentConcurrency++;
                task()
                   .then(result => {
                        // 任务完成，减少当前并发数
                        this.currentConcurrency--;
                        // 任务完成后解析结果
                        resolve(result);
                        // 检查队列中是否有等待的任务，如果有则执行下一个任务
                        this.runNextTask();
                    })
                   .catch(error => {
                        // 任务失败，减少当前并发数
                        this.currentConcurrency--;
                        // 任务失败后抛出错误
                        reject(error);
                        // 检查队列中是否有等待的任务，如果有则执行下一个任务
                        this.runNextTask();
                    });
            };

            // 如果当前并发数小于最大并发数，立即执行任务
            if (this.currentConcurrency < this.maxConcurrency) {
                wrappedTask();
            } else {
                // 否则将任务加入到任务队列中等待执行
                this.taskQueue.push(wrappedTask);
            }
        });
    }

    // 从任务队列中取出下一个任务并执行
    runNextTask() {
        if (this.taskQueue.length > 0 && this.currentConcurrency < this.maxConcurrency) {
            const nextTask = this.taskQueue.shift();
            nextTask();
        }
    }
}

// 使用示例
const scheduler = new PromiseScheduler(2);

function createTask(id, delay) {
    return () => {
        return new Promise((resolve) => {
            console.log(`Task ${id} started`);
            setTimeout(() => {
                console.log(`Task ${id} finished`);
                resolve(id);
            }, delay);
        });
    };
}

// 添加任务到调度器
scheduler.addTask(createTask(1, 1000));
scheduler.addTask(createTask(2, 500));
scheduler.addTask(createTask(3, 800));
scheduler.addTask(createTask(4, 1200));