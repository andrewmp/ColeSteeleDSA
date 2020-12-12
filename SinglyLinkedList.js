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
        console.log('----------');
    }
    shift() {
        if (this.head === null) { return undefined;}
        var newNode = this.head;
        this.head = this.head.next;
        this.count--;

        return newNode;
    }
}

var list  = new SinglyLinkedList;
list.push("One");
list.push("Two");
list.push("Three");
list.push("Four");
//list.print();
list.shift()
list.print();
list.shift()
list.print();
list.shift()
list.print();
console.log(list);
