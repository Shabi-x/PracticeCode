/**
 * LeetCode 25. K 个一组翻转链表 (Reverse Nodes in k-Group)
 * 
 * 题目描述：
 * 给你链表的头节点 head 和一个整数 k ，请你设计一个算法将链表每 k 个节点一组进行翻转，
 * 如果链表中的节点数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 解法：分段翻转
 * 1. 使用dummy节点作为链表的虚拟头节点
 * 2. 每次找到k个节点，将这k个节点进行翻转
 * 3. 将翻转后的子链表重新连接到原链表中
 * 4. 继续处理下一组k个节点
 */

// 辅助函数：翻转单个链表
const reverseList = function (head) {
    let cur = head
    let pre = null
    while (cur) {
        let temp = cur.next  // 暂存下一个节点
        cur.next = pre       // 当前节点指向前一个节点
        pre = cur            // 前一个节点向后移动
        cur = temp           // 当前节点向后移动
    }
    return pre              // 返回新的头节点
};

var reverseKGroup = function (head, k) {
    let dummy = new ListNode()  // 创建虚拟头节点
    dummy.next = head
    let start = dummy, end = dummy  // start指向待翻转子链表的前一个节点，end用于寻找子链表的末尾

    while (true) {
        // 寻找k个节点的末尾
        for (let i = 0; i < k && end; i++) {
            end = end.next
        }
        if (!end) break  // 如果不足k个节点，则结束循环

        let startNext = start.next       // 保存待翻转子链表的头节点
        let endNext = end.next           // 保存下一段链表的头节点

        end.next = null                  // 断开当前k个节点的链表
        start.next = reverseList(start.next)  // 翻转当前k个节点，并连接到start
        startNext.next = endNext         // 将翻转后的尾节点(原来的头节点)连接到下一段链表

        // 更新指针，准备处理下一组k个节点
        end = startNext
        start = startNext
    }

    return dummy.next  // 返回新链表的头节点
};