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

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

myQueue.print();
console.log(myQueue.peek());

myQueue.dequeue();
myQueue.print();
console.log(myQueue.peek());
console.log(myQueue.size());

myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

console.log(myQueue.isEmpty());