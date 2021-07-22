// https://leetcode.com/problems/implement-trie-prefix-tree/
package implement_tree_prefix

type Trie struct {
	arr     [26]*Trie
	isEnded bool
}

/** Initialize your data structure here. */
func Constructor() Trie {
	return Trie{}
}

/** Inserts a word into the trie. */
func (this *Trie) Insert(word string) {
	pad := "a"
	cop := this
	for i := 0; i < len(word); i += 1 {
		cur := word[i] - pad[0]
		if cop.arr[cur] == nil {
			cop.arr[cur] = &Trie{}
		}
		cop = cop.arr[cur]
	}

	cop.isEnded = true
}

/** Returns if the word is in the trie. */
func (this *Trie) Search(word string) bool {
	pad := "a"
	cop := this
	for i := 0; i < len(word); i += 1 {
		cur := word[i] - pad[0]
		if cop.arr[cur] == nil {
			return false
		}

		cop = cop.arr[cur]
	}

	return cop.isEnded
}

/** Returns if there is any word in the trie that starts with the given prefix. */
func (this *Trie) StartsWith(prefix string) bool {
	pad := "a"
	cop := this
	for i := 0; i < len(prefix); i += 1 {
		cur := prefix[i] - pad[0]
		if cop.arr[cur] == nil {
			return false
		}

		cop = cop.arr[cur]
	}

	return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Insert(word);
 * param_2 := obj.Search(word);
 * param_3 := obj.StartsWith(prefix);
 */
