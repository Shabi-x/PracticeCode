/**
 * LeetCode 20. 有效的括号 (Valid Parentheses)
 * 
 * 题目描述：
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s，判断字符串是否有效。
 * 有效字符串需满足：左括号必须用相同类型的右括号闭合，左括号必须以正确的顺序闭合。
 * 
 * 解法：栈算法
 * 遇到左括号时将对应的右括号入栈，遇到右括号时检查是否与栈顶匹配
 */
var isValid = function (s) {
    const stack = []
    for (let c of s) {
        switch (c) {
            case "[": {
                stack.push(']')
                break;
            }
            case "{": {
                stack.push('}')
                break;
            }
            case "(": {
                stack.push(')')
                break;
            }
            default: {
                if (c != stack.pop()) {
                    return false
                }
            }
        }
    }

    return stack.length === 0
};
