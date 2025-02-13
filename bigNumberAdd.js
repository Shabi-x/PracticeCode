/**
 * 大数相加
 */

function sumBigNumber(a, b) {
  let res = "";
  let temp = 0; //进位值

  a = a.split("");
  b = b.split("");

  while (a.length || b.length || temp) {
    temp += Number(a.pop() || 0) + Number(b.pop() || 0); //进位值 = a的最后一位+b的最后一位
    res = (temp % 10) + res; //字符串拼接法
    temp = Math.floor(temp / 10);
  }

  return res;
}

function add(a, b) {
  let res = "";
  let temp = 0;
  a = a.split("");
  b = b.split("");

  while (a.length || b.length || temp != 0) {
    let temp = Number(a.pop()) + Number(b.pop());
    res = (temp % 10) + res;
    temp = Math.floor(temp / 10);
  }
  return res;
}
