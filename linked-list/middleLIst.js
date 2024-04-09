const LinkedList = require("./lib/linkedList");

const list = new LinkedList();
list.insert('A');
list.insert('B');
list.insert('C');
list.insert('D');
list.insert('E');

const findMiddleNode = (list) => {
    if(!list.head) return null;
    let slow = list.head;
    let fast = list.head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.value;
}

const middleNode = findMiddleNode(list);
console.log("Middle Node: " + middleNode); // C