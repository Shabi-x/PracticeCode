function partition(arr, start, end) {
  var boundary = arr[start];
  while (start < end) {
    while (start < end && arr[end] >= arr[boundary]) {
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
