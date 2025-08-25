/**
 * LeetCode 165. 比较版本号 (Compare Version Numbers)
 * 
 * 题目描述：
 * 给你两个版本号 version1 和 version2，请你比较它们。
 * 版本号由一个或多个修订号组成，各修订号由一个 '.' 连接。每个修订号由多位数字组成，可能包含前导零。
 * 每个版本号至少包含一个字符。修订号从左到右编号，下标从 0 开始，最左边的修订号下标为 0，下一个修订号下标为 1，以此类推。
 * 
 * 比较规则：
 * 1. 比较版本号时，请按从左到右的顺序依次比较它们的修订号。
 * 2. 比较修订号时，只需比较忽略任何前导零后的整数值。
 * 3. 如果版本号没有指定某个下标处的修订号，则该修订号视为 0。
 * 
 * 返回规则：
 * 如果 version1 > version2 返回 1，
 * 如果 version1 < version2 返回 -1，
 * 除此之外返回 0。
 * 
 * 解法：分割字符串并逐位比较
 * 1. 将两个版本号按 '.' 分割成数组
 * 2. 遍历两个数组的最大长度，逐位比较
 * 3. 如果某个版本号的位数不足，则视为 0
 */
var compareVersion = function (version1, version2) {
    const arr1 = version1.split('.')  // 将版本号按点分割成数组
    const arr2 = version2.split('.')
    const len1 = arr1.length          // 获取两个版本号的长度
    const len2 = arr2.length

    for (let i = 0; i < Math.max(len1, len2); i++) {
        arr1[i] = i >= len1 ? 0 : Number(arr1[i])  // 如果超出版本号长度，则视为0
        arr2[i] = i >= len2 ? 0 : Number(arr2[i])  // 将字符串转为数字，忽略前导零
        if (arr1[i] > arr2[i]) return 1            // 如果version1当前位大于version2，返回1
        if (arr1[i] < arr2[i]) return -1           // 如果version1当前位小于version2，返回-1
    }
    return 0  // 如果所有位都相等，返回0
};
