/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const ans = [];//用于存储最终找到的所有合法 IP 地址。
    let cur = [];//用于临时存储当前正在构建的 IP 地址的各个部分。

    function dfs(s, idx, start) {
        // 当已经有 4 个 IP 段且已经遍历完字符串时，说明找到了一个合法的 IP 地址
        if (idx === 4 && start === s.length) {
            let ip = cur[0];
            // 拼接 IP 地址，每个段之间用点分隔
            for (let i = 1; i < cur.length; i++) {
                ip = ip + '.' + cur[i];
            }
            ans.push(ip);
            return;
        }
        // 如果已经有 4 个 IP 段但还没遍历完字符串，或者还没到 4 个 IP 段就已经遍历完字符串，直接返回
        if (idx === 4 || start === s.length) {
            return;
        }

        for (let i = start, num = 0; i < s.length; i++) {
            // 计算当前数字
            num = num * 10 + parseInt(s[i]);
            // 如果数字大于 255，说明不合法，跳出循环
            if (num > 255) break;
            cur.push(num);
            // 递归调用，继续处理下一个 IP 段
            dfs(s, idx + 1, i + 1);
            cur.pop();
            // 如果当前数字是 0，说明不能有前导零，跳出循环
            if (num === 0) break;
        }
    }

    dfs(s, 0, 0);
    return ans;
};