var reverseList = function (head) {
    let cur = head
    let pre = null
    while (cur) {
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
};