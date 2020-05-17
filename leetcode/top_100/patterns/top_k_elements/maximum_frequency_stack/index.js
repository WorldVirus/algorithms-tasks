
/** NOT SUBMITTED (Time Limit Exceeded)
 * LINK: https://leetcode.com/problems/maximum-frequency-stack/
 * 
 *  EXAMPLES:
 *  Input: ["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"][[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
 *  Output: [null,null,null,null,null,null,null,5,7,5,4]
 */

var FreqStack = function() {
    this.ar = [];
    this.checker = {};
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    // this.ar = [5,7,5,7,4,5]; this.checker = {5:3,7:2,4:1}; 
    this.ar.push(x);
    
    if(!this.checker[`${x}`]){ this.checker[`${x}`] = 0; }
    ++this.checker[`${x}`];
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    // this.ar = [5,7,5,4];
    let sorted = Object.values(this.checker).sort((a,b) => b - a); // sorted = [2,2,1]

    let index = 0;
    
    for(let i=this.ar.length - 1; i>= 0; --i){
        if(this.checker[`${this.ar[i]}`] === sorted[0]){index = i; break;} // index = 3
    }
    
    let removed = this.ar.splice(index,1); // 5
    
    --this.checker[`${removed}`]; // this.checker = {5:2,7:1,4:1}; 
    
    return removed; // 5, 7
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */