class Node {
    constructor(val) {
        this.val=val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head=null;
        this.tail=null;
        this.count=0;
    }
    push(val) {
        var newNode = new Node(val);

        if (this.head == null) { 
            this.head = newNode; 
            this.tail = this.head;  
        }
        else { 
            this.tail.next = newNode; 
            this.tail = newNode; 
        }
        this.count++;
        return this;

    }
    pop() {
        if (this.count == 0) { return undefined; }
        var temp = this.head;
        var pre = temp;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
            
        }

        pre.next = null;
        this.tail = pre;
        this.count--;

        
        
        if (this.count === 0) {
            this.head=null;
            this.tail=null;
        }

        return temp;

    }
    print() {
        var newNode = this.head;

        for (var x=0; x < this.count; x++) {
            console.log(newNode);
            newNode = newNode.next;
        }
    }
}

var list  = new SinglyLinkedList;
list.push("HI");
list.push("There");
list.push("Mo");

console.log("Pop:" + list.pop());
console.log("Pop 2:" + list.pop());
console.log("Pop 3:" + list.pop());
console.log("Pop 3:" + list.pop());
list.print();
console.log(list);
