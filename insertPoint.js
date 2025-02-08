const str = 1234567890;

function insertPoint(num) {
  let str = String(num);
  let count = 0;
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    count++;
    result = str[i] + result;
    if (count % 3 === 0) {
      result = "," + result;
    }
  }
  return result;
}

function easyInsert(s) {
  return s.toLocaleString();
}
const strres = insertPoint(str);
// const strres = easyInsert(str);

console.log(strres);
