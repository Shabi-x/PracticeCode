/**
 * LeetCode 11. 盛最多水的容器 (Container With Most Water)
 * 
 * 题目描述：
 * 给定一个长度为 n 的整数数组 height，有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i])。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 解法：双指针算法
 * 使用左右两个指针，每次移动高度较小的指针，因为移动高度较大的指针不会增加容器面积
 */
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
