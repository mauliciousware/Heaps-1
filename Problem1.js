// ## Problem1 
// Kth largest in Array (https://leetcode.com/problems/kth-largest-element-in-an-array/)
class MinHeapClass {
    constructor() {
        this.heap = [];
    }
    front(){
        return this.heap[0]
    }
    enqueue(val) {
        this.heap.push(val);
        this._heapifyUp(this.heap.length - 1);  // Pass the index, not the value
    }
    
    dequeue() {
        if (this.heap.length === 0) return -1;
        // Swap first and last elements before popping
        this._swap(0, this.heap.length - 1);
        let res = this.heap.pop();
        // Heapify down from the root after removal
        if (this.heap.length > 0) {
            this._heapifyDown(0);
        }
        return res;
    }
    
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    _heapifyUp(idx) {
        let parent = Math.floor((idx - 1) / 2);
        if (idx > 0 && this.heap[idx] < this.heap[parent]) {
            this._swap(idx, parent);
            this._heapifyUp(parent);
        }
    }
    
    _heapifyDown(idx) {
        let left = 2 * idx + 1;
        let right = 2 * idx + 2;
        let smallest = idx;
        
        // Compare with left child
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        // Compare with right child
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        
        if (smallest !== idx) {
            this._swap(idx, smallest);
            this._heapifyDown(smallest);
        }
    }
}


var findKthLargest = function(nums, k) {
    //Time Complexity : O(n log k)
    //Space Complexity : O(k)
    let minHeap = new MinHeapClass()
    for(let i =0;i<k;i++){
        minHeap.enqueue(nums[i])
    }
    for(let i =k;i<nums.length;i++){
        if(minHeap.front() < nums[i]){
            minHeap.dequeue()
            minHeap.enqueue(nums[i])
        }
    }
    return minHeap.front()
};

// class Solution {
    //TC : O(n log n) 
    //SC : O(1) / O(n) dpending on sorting algorithm 
//     findKthLargest(nums, k) {
//         nums.sort((a, b) => a - b);
//         return nums[nums.length - k];
//     }
// }