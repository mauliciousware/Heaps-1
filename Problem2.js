// ## Problem2

// Merge k Sorted Lists(https://leetcode.com/problems/merge-k-sorted-lists/)
class Solution {
//***Time Complexity : O(n * log k) */
//***Time Complexity : O(N) */
    mergeKLists(lists) {
        if (lists.length === 0) return null;
        const minHeap = new MinPriorityQueue(x => x.val);
        for (let list of lists) {
            if (list != null)
                minHeap.enqueue(list);
        }

        let res = new ListNode(0);
        let cur = res;
        while (minHeap.size() > 0) {
            let node = minHeap.dequeue();
            cur.next = node;
            cur = cur.next;

            node = node.next;
            if (node != null) {
                minHeap.enqueue(node);
            }
        }
        return res.next;
    }
}

// var mergeKLists = function(lists) {
//***Time Complexity : O(nlogn) * */
//***Space Complexity : O(n) * */
//     const nodes = [];

//     // Push all nodes into the array
//     for (let list of lists) {
//         while (list) {
//             nodes.push(list);
//             list = list.next;
//         }
//     }

//     // Sort the nodes by their values
//     nodes.sort((a, b) => a.val - b.val);

//     // Reconstruct the sorted linked list
//     let dummy = new ListNode(-1);
//     let current = dummy;
//     for (let node of nodes) {
//         current.next = node;
//         current = current.next;
//     }

//     if (current) current.next = null; // Terminate last node

//     return dummy.next;
// };
