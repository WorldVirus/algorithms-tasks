/** LINK: https://leetcode.com/problems/implement-trie-prefix-tree/
 * 
 *  EXAMPLES:
 *  Input: ["Trie","insert","search","search","startsWith","insert","search"][[],["apple"],["apple"],["app"],["app"],["app"],["app"]]
 *  Output: [null,null,true,false,true,null,true]
 */

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.ar = [];
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
   this.ar.push(word);
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
   for(let i=0; i < this.ar.length; ++i){
       if(word === this.ar[i]){return true;}
   }
   
   return false;
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
   let size = prefix.length;
   for(let i=0; i < this.ar.length; ++i){
       let buf = this.ar[i].substring(0, size);
       if(buf === prefix){return true;}
   }
   
   return false;
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/
