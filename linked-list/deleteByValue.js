const LinkedList = require("./lib/linkedList");

const list = new LinkedList();
list.insert('A');
list.insert('B');
list.insert('C');
list.insert('D');

console.log("Original List: " + list.toString());

const deleteNodeByValue = (list, value) => {
    /**Todo: Write code to delete value */
    if(!list.head) return list;
    if(list.head.value === value){
        list.head = list.head.next;
        return list;
    }
    let current = list.head;
    while(current.next){
        if(current.next.value === value){
            current.next = current.next.next;
            return list;
        }
        current = current.next;
    }
    return list;
}

const updatedList = deleteNodeByValue(list, 'C');
console.log("Updated List: " + updatedList.toString());