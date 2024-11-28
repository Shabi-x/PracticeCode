function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // 交换元素
    [array[i], array[j]] = [array[j], array[i]];
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
shuffle(arr);
console.log(arr);
