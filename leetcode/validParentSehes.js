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