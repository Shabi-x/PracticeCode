var lengthOfLongestSubstring = function (s) {
  let l = 0;
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
