/**
 * 给定一个Num数组，一个target，返回三个数，使得这三个数的和最接近target
 * 双指针
 * 算法思路：先对数组排序，固定第一个数，使用双指针分别指向剩余数组的首尾，计算三数之和与目标值的差值，
 * 通过比较更新最小差值及对应的三数组合；根据当前和与目标值的大小关系移动指针（和偏小则右移左指针，偏大则左移右指针），
 * 遍历所有可能组合后返回最接近目标值的三数组合
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
