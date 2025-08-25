/**
 * LeetCode 160. 相交链表 (Intersection of Two Linked Lists)
 * 
 * 题目描述：
 * 给你两个单链表的头节点 headA 和 headB，请你找出并返回两个单链表相交的起始节点。
 * 如果两个链表不存在相交节点，返回 null。
 * 
 * 题目数据保证整个链式结构中不存在环。
 * 注意，函数返回结果后，链表必须保持其原始结构。
 * 
 * 解法：双指针
 * 1. 创建两个指针 pA 和 pB，分别指向两个链表的头节点 headA 和 headB
 * 2. 同时遍历两个链表，当 pA 到达链表 A 的末尾时，将其重定向到链表 B 的头节点
 * 3. 当 pB 到达链表 B 的末尾时，将其重定向到链表 A 的头节点
 * 4. 如果两个链表相交，pA 和 pB 最终会在相交点相遇
 * 5. 如果两个链表不相交，pA 和 pB 最终都会变为 null
 * 
 * 时间复杂度：O(m+n)，其中 m 和 n 分别是两个链表的长度
 * 空间复杂度：O(1)，只使用了两个指针
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null
    let pa = headA, pb = headB;
    while (pa != pb) {
        pa = pa == null ? headB : pa.next;
        pb = pb == null ? headA : pb.next
    }
    if (pa == null) return null
    else return pa

};