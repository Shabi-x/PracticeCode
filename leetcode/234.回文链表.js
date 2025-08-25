/**
 * LeetCode 234. 回文链表 (Palindrome Linked List)
 * 
 * 题目描述：
 * 给你一个单链表的头节点 head，请你判断该链表是否为回文链表。
 * 如果是，返回 true；否则，返回 false。
 * 
 * 解法：数组 + 双指针
 * 1. 遍历链表，将每个节点的值存入数组中
 * 2. 使用双指针（左右指针）判断数组是否为回文
 * 3. 如果左右指针所指的元素始终相等，则为回文链表
 * 
 * 时间复杂度：O(n)，其中 n 是链表的长度
 * 空间复杂度：O(n)，需要一个数组存储链表中的值
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let arr = []
    let cur = head
    while (cur != null) {
        arr.push(cur.val)
        cur = cur.next
    }
    let l = 0, r = arr.length - 1
    while (l < r) {
        if (arr[l] != arr[r]) {
            return false
        }
        l++;
        r--;
    }
    //如果左右两个指针指向的元素一直相等，就是回文
    return true
};