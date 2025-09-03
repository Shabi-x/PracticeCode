/**
 * 大数相减
 * 
 * 整体思路：
 * 1. 核心思想：模拟手工减法运算，从个位开始逐位相减
 * 2. 算法步骤：
 *    - 先比较两个数的大小，如果被减数小于减数则返回"0"
 *    - 将两个数字字符串转换为数组，便于从末尾开始处理
 *    - 使用while循环，从右到左（个位到高位）逐位相减
 *    - 维护一个借位值borrow，处理当前位不够减的情况
 *    - 每次计算当前位的结果：(被减数当前位 - 借位 - 减数当前位)
 *    - 如果结果为负，则向高位借位，当前位结果加10
 *    - 将当前位结果拼接到结果字符串的前面
 * 3. 关键点：
 *    - 使用pop()方法从数组末尾取数，模拟从个位开始计算
 *    - 当减数数组为空时，用0补位继续计算
 *    - 最后去除结果的前导零
 *    - 结果字符串采用前拼接方式，保证数位顺序正确
 */

function subtractBigNumber(a, b) {
    // 简单比较两个数的大小（按字符串长度和字典序）
    if (a.length < b.length || (a.length === b.length && a < b)) {
        return subtractBigNumber(b, a);
    }

    let res = "";
    let borrow = 0; // 借位值

    a = a.split("");
    b = b.split("");

    while (a.length || b.length) {
        let digitA = Number(a.pop() || 0);
        let digitB = Number(b.pop() || 0);

        let diff = digitA - borrow - digitB;

        if (diff < 0) {
            diff += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }

        res = diff + res;
    }

    // 去除前导零
    res = res.split('');
    while (res.length > 1 && res[0] === '0') {
        res.shift();
    }
    res = res.join('');

    return res;
  }