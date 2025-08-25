/**
 * LeetCode 141. 环形链表 (Linked List Cycle)
 * 
 * 题目描述：
 * 给你一个链表的头节点 head，判断链表中是否有环。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
 * 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 * 注意：pos 不作为参数进行传递。仅仅是为了标识链表的实际情况。
 * 如果链表中存在环，则返回 true。否则，返回 false。
 * 
 * 解法：快慢指针（Floyd 判圈算法）
 * 1. 使用两个指针，快指针和慢指针，初始时都指向链表的头节点
 * 2. 快指针每次移动两步，慢指针每次移动一步
 * 3. 如果链表中存在环，快慢指针最终会相遇
 * 4. 如果链表中不存在环，快指针最终会到达链表的末尾
 * 
 * 时间复杂度：O(n)，其中 n 是链表的节点数
 * 空间复杂度：O(1)，只使用了两个指针
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let fast = head;
    let slow = head;
    while (fast!=null&&fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) return true
    }
    return false
};