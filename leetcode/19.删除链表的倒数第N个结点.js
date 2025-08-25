/**
 * LeetCode 19. 删除链表的倒数第 N 个结点 (Remove Nth Node From End of List)
 * 
 * 题目描述：
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 解法：快慢指针
 * 1. 创建一个虚拟头节点 dummy，指向链表的头节点，这样可以处理删除头节点的情况
 * 2. 使用快慢指针，初始时都指向 dummy 节点
 * 3. 快指针先走 n 步
 * 4. 然后快慢指针一起走，直到快指针到达链表末尾
 * 5. 此时慢指针指向的是倒数第 n 个节点的前一个节点，可以执行删除操作
 * 
 * 时间复杂度：O(n)，其中 n 是链表的长度
 * 空间复杂度：O(1)，只使用了常数个变量
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode()
    dummy.next = head;
    let fast = dummy, slow = dummy;
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }
    while (fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next
    return dummy.next
};