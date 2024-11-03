function RandomIndex (arr) {
    for (let i = 0; i < arr.length; i++) {
        let randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + 1;
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
    }
    return arr
}