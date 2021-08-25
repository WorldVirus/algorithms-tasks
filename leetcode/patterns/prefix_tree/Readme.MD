[Article](https://leetcode.com/explore/learn/card/trie/150/introduction-to-trie/1045/)

A Trie is a special form of a Nary tree. Typically, a trie is used to store strings. Each Trie node represents a string (a prefix). Each node might have several children nodes while the paths to different children nodes represent different characters. And the strings the child nodes represent will be the origin string represented by the node itself plus the character on the path.

### Complexity Analysis
If the longest length of the word is N, the height of Trie will be N + 1. Therefore, the time complexity of all insert, search and startsWith methods will be O(N).

If we have M words to insert in total and the length of words is at most N, there will be at most M*N nodes in the worst case (any two words don't have a common prefix).

Let's assume that there are maximum K different characters (K is equal to 26 in this problem, but might differs in different cases). So each node will maintain a map whose size is at most K.

Therefore, the space complexity will be O(M*N*K)

![Picture](imgs/prefix_trie.png)

