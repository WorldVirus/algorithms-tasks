// https://leetcode.com/problems/design-add-and-search-words-data-structure/
package design_add_and_search

type WordDictionary struct {
	isWord   bool
	Children [26]*WordDictionary
}

func Constructor() WordDictionary {
	return WordDictionary{
		Children: [26]*WordDictionary{},
	}
}

func (this *WordDictionary) AddWord(word string) {
	node := this
	for _, c := range word {
		if node.Children[c-'a'] == nil {
			node.Children[c-'a'] = &WordDictionary{
				Children: [26]*WordDictionary{},
			}
		}
		node = node.Children[c-'a']
	}
	node.isWord = true
}

func (this *WordDictionary) Search(word string) bool {
	node := this
	for i, c := range word {
		if c == '.' {
			for _, child := range node.Children {
				if child == nil {
					continue
				}
				if child.Search(word[i+1:]) {
					return true
				}
			}
			return false
		}
		if node.Children[c-'a'] == nil {
			return false
		}
		node = node.Children[c-'a']
	}
	return node.isWord
}
