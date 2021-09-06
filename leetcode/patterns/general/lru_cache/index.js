/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3309/
 *
 *  EXAMPLES:
 *  Input: ["LRUCache","put","put","get","put","get","put","get","get","get"][[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
 *  Output: [null,null,null,1,null,-1,null,-1,3,4]
 */

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.checker = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let buf = this.checker.get(key);
    if(buf){
        this.checker.delete(key);
        this.checker.set(key,buf)
        return buf;
    }
    
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.checker.has(key)) { this.checker.delete(key) }
    this.checker.set(key, value);
    let keys = this.checker.keys();
    if (this.checker.size > this.capacity) { this.checker.delete(keys.next().value) }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */