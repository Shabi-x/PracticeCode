/**
 * LeetCode 5. 最长回文子串 (Longest Palindromic Substring)
 * 
 * 题目描述：
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 解法：中心扩展算法
 * 遍历每个可能的回文中心，向两边扩展寻找最长回文串
 * 需要考虑两种情况：奇数长度回文串（中心为单个字符）和偶数长度回文串（中心为两个字符之间）
 */
var longestPalindrome = function (s) {
    let maxLenStr = ''
    for (let i = 0; i < s.length; i++) {
        // 情况1：奇数长度回文串，以 i 为中心
        let l = i - 1, r = i + 1
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        maxLenStr = maxLenStr.length > r - l - 1 ? maxLenStr : s.substring(l + 1, r)

        // 情况2：偶数长度回文串，以 i 和 i+1 之间为中心
        l = i, r = i + 1
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        maxLenStr = maxLenStr.length > r - l - 1 ? maxLenStr : s.substring(l + 1, r)
    }

    return maxLenStr
};
