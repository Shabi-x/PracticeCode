/**
 * LeetCode 56. 合并区间 (Merge Intervals)
 * 
 * 题目描述：
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]。
 * 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 * 
 * 解法：排序 + 一次遍历
 * 1. 首先按区间的起始位置进行排序
 * 2. 然后遍历排序后的区间，判断当前区间是否与结果数组中的最后一个区间重叠
 * 3. 如果重叠，则合并这两个区间
 * 4. 如果不重叠，则将当前区间添加到结果数组中
 * 
 * 时间复杂度：O(nlogn)，其中 n 是区间的数量，排序需要 O(nlogn) 的时间
 * 空间复杂度：O(n)，需要存储合并后的区间
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        // 获取result数组最后一个区间的结束索引
        let lastEnd = result[result.length - 1][1];
        // 如果当前区间的开始时间小于等于result数组最后一个区间的结束时间，说明有重叠
        if (intervals[i][0] <= lastEnd) {
            // 合并区间，更新结束时间为两个区间结束时间的最大值
            result[result.length - 1][1] = Math.max(lastEnd, intervals[i][1]);
        } else {
            // 如果没有重叠，直接将当前区间加入到结果数组
            result.push(intervals[i]);
        }
    }
    
    return result;
};