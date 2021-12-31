// https://leetcode.com/problems/my-calendar-ii/ not submited
type MyCalendarTwo struct {
	arr  [][]int
	h    map[int]int
	keys []int
}

func Constructor() MyCalendarTwo {
	return MyCalendarTwo{
		arr:  make([][]int, 0),
		h:    make(map[int]int),
		keys: make([]int, 0),
	}
}

func (this *MyCalendarTwo) Book(start int, end int) bool {
	//     [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
	//     [10, 20],  [50, 60], [10, 40], [5, 15]

	//     [10, 20], [10, 52], [50, 60], [52,60], [5, 15]
	//     [5,10,15,20,40,50,60]
	//     1  2. -1,-1  1  -1

	if _, ok := this.h[start]; !ok {
		this.keys = append(this.keys, start)
		this.h[start] = 0
	}

	this.h[start] += 1

	if _, ok := this.h[end]; !ok {
		this.keys = append(this.keys, end)
		this.h[end] = 0
	}

	this.h[end] -= 1

	sort.Ints(this.keys)
	fmt.Println(this.h)
	cur := 0
	max := 0

	for _, k := range this.keys {
		cur += this.h[k]

		if cur > max {
			max = cur
		}

		if max > 2 {
			this.h[start] += 1
			this.h[end] -= 1

			return false
		}
	}

	return true
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Book(start,end);
 */