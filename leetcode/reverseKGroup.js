var reverseKGroup = function (head, k) {
    let dummy = new ListNode()
    dummy.next = head
    let start = dummy, end = dummy
    while (true) {
        for (let i = 0; i < k && end; i++) {
            end = end.next
        }
        if (!end) break
        let startNext = start.next
        let endNext = end.next//下一段的头节点

        end.next = null//断开当前链表
        start.next = reverseList(start.next)
        startNext.next = endNext//反转后的startNext拼接上下一段的头节点

        //开始下一段
        end = startNext
        start = startNext
    }

    const reverseList = function (head) {
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
    return dummy.next
};