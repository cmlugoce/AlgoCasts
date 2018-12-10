// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {

    //create array inside class, initialize and assigned it to the instance

    constructor(){
        this.data = [];
    }

    add(record){
      this.data.unshift(record);
    }

    remove(record) {
        return this.data.pop();
    }
}

module.exports = Queue;
