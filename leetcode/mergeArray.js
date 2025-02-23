function mergeArray(num1, m, num2, n) {
  let idx = m + n + 1;
  let i = m - 1,
    j = n - 1;
  while (i >= 0 && j >= 0) {
    if (num1[i] >= num2[j]) {
      num1[idx--] = num1[i--];
    } else {
      num2[idx--] = num2[j--];
    }
  }
  while (i >= 0) {
    num1[idx--] = num1[i--];
  }
  while (j >= 0) {
    num1[idx--] = num2[j--];
  }
  return num1
}
