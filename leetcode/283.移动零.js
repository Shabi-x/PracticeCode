/**
 * LeetCode 283. 移动零 (Move Zeroes)
 * 
 * 题目描述：
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 请注意，必须在不复制数组的情况下原地对数组进行操作。
 * 
 * 解法：双指针（快慢指针）
 * 1. 使用慢指针 slowIndex 指向当前应该存放非零元素的位置
 * 2. 使用快指针 fastIndex 遍历数组
 * 3. 当快指针指向的元素不为零时，将其与慢指针指向的元素交换，并将慢指针向后移动一位
 * 4. 这样操作后，所有非零元素都按原有顺序排列在数组前面，所有零元素都被移动到了数组末尾
 */
var moveZeroes = function (nums) {
    let slowIndex = 0  // 慢指针，指向当前应该存放非零元素的位置
    
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {  // 快指针遍历数组
        if (nums[fastIndex] !== 0) {  // 当快指针指向的元素不为零时
            // 交换快慢指针指向的元素
            [nums[slowIndex], nums[fastIndex]] = [nums[fastIndex], nums[slowIndex]]
            slowIndex++  // 慢指针向后移动一位
        }
    }
    
    return nums  // 返回处理后的数组
};
