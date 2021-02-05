class MinHeap{

    constructor(values){
        this.values = values;
    }

    getLeftChildIndex(parentIndex){
        return 2*parentIndex+1
    }

    getRightChildIndex(parentIndex){
        return 2*parentIndex+2
    }

    getParentIndex(childIndex){
        return (childIndex-1)/2;
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.values.length;

    }
    hasRightChild(index){
        return this.getLeftChildIndex(index) < this.values.length;

    }
    hasParent(index){
        return this.getParentIndex(index) >= 0;

    }

    leftChild(index){
        return this.values[this.getLeftChildIndex(index)];
        
    }       

    rightChild(index){
        return this.values[this.getRightChildIndex(index)];

    }

    parent(index){
        return this.values[this.getParentIndex(index)];

    }

    swap(indexOne, indexTwo){
        let temp = this.values[indexOne];
        this.values[indexOne]=this.values[indexTwo];
        this.values[indexTwo]=temp;

    }

    peek(){
        if(this.values.length === 0) return undefined;

        return this.values.shift();
    }

    poll(){
        if(this.values.length === 0) return undefined;
        let item = this.values.shift();
        this.values[0] = this.values[size-1];
        heapifyDown();
        return item;

    }

    add(item){
        this.values.push(item);
        this.heapifyUp;

    }

    heapifyDown(){
        let index = 0;
        while(this.hasLeftChild(index)){
            let smallerChildIndex = getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.rightChild(index) <  this.leftChild(index)){
                smallerChildIndex = getRightChildIndex(index);

            }

            if(this.values[index] < this.values[smallerChildIndex]){
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }

    heapifyUp(){
        let index = this.values.length - 1;
        while(this.hasParent(index) && parent(index) > this.values[index]){
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);

        }
    }
}
//[3,4,8,9,7,10,9,15,20,13]

let heap = new MinHeap([3,4,8,9,7,10,9,15,20,13]);

console.log(heap.getLeftChildIndex(3));
console.log(heap.getRightChildIndex(3));
console.log(heap.getParentIndex(3));
console.log(heap.hasLeftChild(3));
console.log(heap.hasRightChild(3));
console.log(heap.hasParent(3));
console.log(heap.leftChild(3));
console.log(heap.rightChild(3));
console.log(heap.parent(3));