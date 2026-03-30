/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    if(!head) return 0;
    let result = "";
    let current = head;
    while(current){
        result+=current.val;

        current=current.next;
    }
    return parseInt(result,2)
};