var longestPalindrome = function (s) {
    let maxLenStr = ''
    for (let i = 0; i < s.length; i++) {
        let l = i - 1, r = i + 1
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        maxLenStr = maxLenStr.length > r - l - 1 ? maxLenStr : s.substring(l + 1, r)

        l = i, r = i + 1
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        maxLenStr = maxLenStr.length > r - l - 1 ? maxLenStr : s.substring(l + 1, r)
    }

    return maxLenStr
};