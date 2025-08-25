/**
 * LeetCode 3. 无重复字符的最长子串 (Longest Substring Without Repeating Characters)
 * 
 * 题目描述：
 * 给定一个字符串 s，请你找出其中不含有重复字符的最长子串的长度。
 * 
 * 解法：滑动窗口算法
 * 使用双指针和Set维护一个无重复字符的窗口，遇到重复字符时收缩左边界
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0,
  r = 0;
  let set = new Set();
  let maxlen = 0;
  while (r < s.length) {
    if (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    } else {
      set.add(s[r]);
      r++;
      maxlen = Math.max(maxlen, r - l);
    }
  }
  return maxlen;
};
