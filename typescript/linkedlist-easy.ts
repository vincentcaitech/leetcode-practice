class ListNode {
      val: number
         next: ListNode | null
         constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
             this.next = (next===undefined ? null : next)
         }
}

//Delete Node in a Linked List

function deleteNode(root: ListNode | null): void {
    root = {
        val: root.next.val,
        next: root.next.next,
    }
};

//Remove Nth Node from End of List


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    var node1 = head;
    var node2 = head;
    var count = 1;
    var length = 1;
    while(node2.next!=null){
        node2 = node2.next;
        count++;
        length++;
        if(count>Math.max(n,2)){
            count--;
            node1 = node1.next;
        }
    }
    if(n<2){
        if(length<2) head = null;
        node1.next = null;
    }else {
        node1.val = node1.next.val;
        node1.next = node1.next.next;
    }
    return head;
};

//Reverse a Linked List


function reverseList(head: ListNode | null): ListNode | null {
    if(head==null||head.next==null) return head;
    var lastNode = head;
    var thisNode = head.next;
    var newHead = thisNode;
    head.next = null;
    while(thisNode!=null){
        var tempNode = thisNode.next;
        thisNode.next = lastNode;
        lastNode = thisNode;
        newHead = thisNode;
        thisNode = tempNode;
    }
    return newHead;
};

//Merge Two Sorted Lists


function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    var newHead:ListNode;
    if(l1==null&&l2==null) return null;
    if(l1==null){
        newHead = l2;
        l2 = l2.next;
    }else if(l2==null||l2.val>l1.val){
        newHead = l1;
        l1 = l1.next;
    }else{
        newHead = l2;
        l2 = l2.next;
    }
    var thisNode:ListNode = newHead;
    while(l1!=null||l2!=null){
        if(l2==null){
            //add l1 to linked list
            thisNode.next = l1;
            l1 = l1.next;
            thisNode = thisNode.next;
        }else if(l1==null||l1.val>l2.val){
            //add l2 to linked list
            thisNode.next = l2;
            l2 = l2.next;
            thisNode = thisNode.next;
        }else{
            //add l1 to linked list
            thisNode.next = l1;
            l1 = l1.next;
            thisNode = thisNode.next;
        }
        console.log(l1);
        console.log(l2);
    }
    return newHead;
};

//Palindrome Linked List

function isPalindrome(head: ListNode | null): boolean {
    var arr = [];
    while(head!==null){
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr);
    for(var i =0;i<=arr.length/2;i++){
        if(arr[i]!==arr[arr.length-1-i]) return false;
    }
    return true;
};

//Linked List Cycle

function hasCycle(head: ListNode | null): boolean {
    if(head==null) return false;
    while(head.next!==null){
        if(head==head.next) return true;
        var tempNext = head.next;
        head.next = head;
        head = tempNext;
    }
    return false;
};