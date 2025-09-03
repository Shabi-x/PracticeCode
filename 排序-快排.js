/**
 * 快速排序算法实现
    先取出一个基准值。
    根据这个基准值 再分为小于基准值的数组 和 大于基准值 的数组
    对两侧进入递归快排
 * 时间复杂度：平均情况 O(n log n)，最坏情况 O(n²)（当数组已排序或接近排序时）
 * 空间复杂度：O(log n)（递归调用栈所需空间，平均情况），最坏情况 O(n)
 */


// 一开始把数组的第一个元素作为基准元素
// 遇到小于基准的就交换到左边，遇到大于基准的就交换到右边
// 直到左右指针相遇，将基准元素放到相遇的位置，这样就分成了小于基准值的数组 和 大于基准值 的数组
function partition(arr, start, end) {
  const boundary = arr[start];
  while (start < end) {
    while (start < end && arr[end] >= boundary) {
      --end;
    }
    arr[start] = arr[end];
    while (start < end && arr[start] <= boundary) {
      ++start;
    }
    arr[end] = arr[start];
  }

  arr[start] = boundary;
  return start;
}

function quicksort(arr, start, end) {
  if (start >= end) return;
  const boundaryIndex = partition(arr, start, end); // boundaryIndex是基准值的下标
  quicksort(arr, start, boundaryIndex - 1);
  quicksort(arr, boundaryIndex + 1, end);
}