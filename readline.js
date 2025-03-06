const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 用于存储输入的数组和目标值
let nums = [];
let target;
let lineCount = 0;

rl.on('line', (input) => {
    if (lineCount === 0) {
        nums = input.split(' ').map(Number);
    } else if (lineCount === 1) {
        target = Number(input);
        const result = twoSum(nums, target);
        console.log(result.join(' '));
        rl.close();
    }
    lineCount++;
});

// 核心代码模式：两数之和为例
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}