/**
 * 给定一个Num数组，一个target，返回三个数，使得这三个数的和最接近target
 * 双指针
 */

function threeNumNeartarget(arr, target) {
  arr.sort((a, b) => a - b);
  let min = Infinity;
  let res = [];
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (Math.abs(sum - target) < min) {
        min = Math.abs(sum - target);
        res = [arr[i], arr[left], arr[right]];
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
}
