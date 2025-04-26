// enqueue(elem) to insert the element in the queue
// dequeue() to remove the element from the queue
// peek() to get the first element
// isEmpty() to check if the queue is empty
// size() to get the size of the queue

// First In First Out FIFO     OR   LILO

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
    }

    dequeue() { 
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.queue[0];
    }

    size() {    
        return this.queue.length;
    }

    print() {
        console.log(this.queue);
    }
}

const myQueue = new Queue();

// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.enqueue(4);

// myQueue.print();
// console.log(myQueue.peek());

// myQueue.dequeue();
// myQueue.print();
// console.log(myQueue.peek());
// console.log(myQueue.size());

// myQueue.dequeue();
// myQueue.dequeue();
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());

// console.log(myQueue.isEmpty());


// Circular queue implementation
// design a circular queue that supports all the operations of a normal queue

var MyCircularQueue = function(k) {  // k is the size
    this.queue = [];
    this.size = k;
};

MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) {
        return false;
    }
    this.queue.push(value);
    return true;
};

MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false;
    }
    this.queue.shift();
    return true;
};

MyCircularQueue.prototype.isEmpty = function() {
    return this.queue.length === 0;
};

MyCircularQueue.prototype.isFull = function() {
    return this.size === this.queue.length;
};

MyCircularQueue.prototype.getFront = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[0];
};

MyCircularQueue.prototype.getRear = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[this.queue.length - 1];
};

// var myCircularQueue = new MyCircularQueue(3);

// myCircularQueue.enQueue(1);
// myCircularQueue.enQueue(2);
// myCircularQueue.enQueue(3);
// myCircularQueue.enQueue(4);
// myCircularQueue.deQueue();
// myCircularQueue.enQueue(7);

// console.log(myCircularQueue);
// console.log(myCircularQueue.getFront());
// console.log(myCircularQueue.getRear());

// Implement a stack using queues
// design a stack using two queues

var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
};

MyStack.prototype.push = function(x) {
    while (this.q1.length > 0) {
        this.q2.push(this.q1.shift());
    }
    this.q1.push(x);
    while(this.q2.length > 0) {
        this.q1.push(this.q2.shift());
    }
};

MyStack.prototype.pop = function() {
    return this.q1.shift();
};

MyStack.prototype.top = function() {
    return this.q1[0];
};

MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};


var myStack = new MyStack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.pop());
console.log(myStack.top());
console.log(myStack.empty());