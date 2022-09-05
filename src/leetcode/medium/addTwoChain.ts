/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let flag: ListNode = new ListNode(0)
  let cur: ListNode  = flag
  let carry: number = 0
  while(carry || l1 || l2){
    const n1: number = l1 ? l1.val : 0
    const n2: number = l2 ? l2.val : 0
    const sum: number = n1 + n2 + carry
    cur.next = new ListNode(sum % 10)
    cur = cur.next
    carry = sum > 10 ? 1 : 0
    if(l1){
      l1 = l1.next
    }
    if(l2){
      l2 = l2.next
    }
  }
  return flag.next
};