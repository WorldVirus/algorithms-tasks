// https://leetcode.com/problems/beautiful-arrangement/
var answer int

func calc (pos int, end int, arr []bool) {
        if pos > end {
            answer += 1            
        } else {
            fmt.Println(arr)
            for i := 1; i <= end; i++{
                if !arr[i] && (pos % i == 0 || i % pos == 0){
                    arr[i] = true
                    calc(pos + 1, end, arr)
                    arr[i] = false
                }
            }
        }
    }

func countArrangement(n int) int {
    s := make([]bool, n+1, 2*n)
    calc(1, n, s)
    return answer
}