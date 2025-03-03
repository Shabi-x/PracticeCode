var maxSubArray = function (nums) {
    let max = nums[0]
    let cursum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (cursum < 0) {
            cursum = nums[i]
        } else {
            cursum = cursum + nums[i]
        }
        max = Math.max(max,cursum)
    }
    return max
};