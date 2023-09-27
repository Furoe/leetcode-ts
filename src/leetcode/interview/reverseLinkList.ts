interface Node {
  value: number | null;
  next: Node | null;
}
function myNodeList(val: number | null) {
  this.value = val;
  this.next = null;
}

function buildLinkList(arr: Array<number>) {
  let head = new myNodeList(null);
  let p = head;
  for (let val of arr) {
    p.next = new myNodeList(val);
  }
  return head;
}

export function reverseLinkListFromM2N(head: Node, m: number, n: number) {
  let cur: Node | null = head;
  let pre: Node | null = null;
  while (m > 1) {
    pre = cur;
    cur = cur.next;
    m--;
    n--;
  }
  let con = pre;
  let tail = cur;
  let tempNode: Node | null = null;
  while (n > 0) {
    tempNode = cur?.next;
    cur?.next = pre;
    pre = cur;
    cur = tempNode;
    n--;
  }
  if (con != null) {
    con.next = prev;
  } else {
    head = prev;
  }
  tail.next = cur;
  return head;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let ll = buildLinkList(arr);
console.log(reverseLinkListFromM2N(ll, 3, 6));
