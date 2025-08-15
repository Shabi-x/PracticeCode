/**
 * LeetCode 21. 合并两个有序链表 (Merge Two Sorted Lists)
 * 
 * 题目描述：
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 
 * 解法：迭代法
 * 使用虚拟头节点简化边界处理，比较两个链表的当前节点值，将较小的节点连接到结果链表
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode();
  let cur = head;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
      cur = cur.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
      cur = cur.next;
    }
  }
  if (list1) {
    cur.next = list1;
  }

  if (list2) {
    cur.next = list2;
  }
  return head.next;
};
