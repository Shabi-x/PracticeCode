/**
 * 
 * @param {*} nums 
 * @returns 将一个数组划分成两个子集，使得两个子集的和尽量接近，返回这两个子集的下标子集
 */

function partitionArray(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    let maxSum = 0;
    let bestIndexes = new Set();

    function dfs(start, currentSum, currentIndexes) {
        // 如果当前子集的和超过了总和的一半，停止当前递归分支
        if (currentSum > sum / 2) return;
        // 如果当前子集的和大于之前记录的最大和，更新最大和以及最优子集下标
        if (currentSum > maxSum) {
            maxSum = currentSum;
            bestIndexes = new Set(currentIndexes);
        }
        // 从 start 开始遍历数组中的元素
        for (let i = start; i < nums.length; i++) {
            // 选择当前元素，将其下标加入当前子集下标集合
            currentIndexes.add(i);
            // 递归调用 dfs 函数，继续搜索下一个元素，同时更新当前子集的和
            dfs(i + 1, currentSum + nums[i], currentIndexes);
            // 回溯操作，撤销对当前元素的选择
            currentIndexes.delete(i);
        }
    }

    dfs(0, 0, new Set());

    const group1 = Array.from(bestIndexes);
    const group2 = nums.map((_, idx) => idx).filter(i => !bestIndexes.has(i));
    return [group1, group2];
}