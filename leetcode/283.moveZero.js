var moveZeroes = function (nums) {
    let slowIndex = 0
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] !== 0) {
            [nums[slowIndex], nums[fastIndex]] = [nums[fastIndex], nums[slowIndex]]
            slowIndex++
        }
    }
    return nums
};