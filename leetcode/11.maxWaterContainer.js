var maxArea = function (height) {
    let res = 0
    let l = 0, r = height.length - 1
    while (l < r) {
        let h = Math.min(height[l], height[r])
        res = Math.max(res, h * (r - l))
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return res
};