// ver 1
var mergeTwoLists_v1 = (l1, l2) => {
  let dummyHead = new ListNode();
  let cur = dummyHead;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }

  while (l1) {
    cur.next = l1;
    l1 = l1.next;
    cur = cur.next;
  }

  while (l2) {
    cur.next = l2;
    l2 = l2.next;
    cur = cur.next;
  }

  return dummyHead.next;
}

// ver 2
var mergeTwoLists_v2 = (l1, l2) => {
  let dummyHead = new ListNode();
  let cur = dummyHead;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }

  cur.next = l1 || l2;

  return dummyHead.next;
}

// ver 3
var mergeTwoLists_v3 = (l1, l2) => {
  if (!l1 || !l2) return l1 || l2
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
  l2.next = mergeTwoLists(l1, l2.next)
  return l2
}
