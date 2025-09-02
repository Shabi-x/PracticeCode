/**
 * 快速排序算法实现
 * 算法思路：选择数组的第一个元素作为基准值，通过分区操作将数组分为两部分（小于等于基准值的元素放左边，大于基准值的元素放右边），
 *          然后递归对左右两部分进行同样的排序操作，最终完成整个数组的排序
 * 时间复杂度：平均情况 O(n log n)，最坏情况 O(n²)（当数组已排序或接近排序时）
 * 空间复杂度：O(log n)（递归调用栈所需空间，平均情况），最坏情况 O(n)
 */
function partition(arr, start, end) {
  var boundary = arr[start];
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
  var boundaryIndex = partition(arr, start, end);
  quicksort(arr, start, boundaryIndex - 1);
  quicksort(arr, boundaryIndex + 1, end);
}