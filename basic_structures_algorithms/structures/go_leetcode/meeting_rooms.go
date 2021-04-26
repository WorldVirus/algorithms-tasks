// https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3515/
func canAttendMeetings(intervals [][]int) bool {
    if len (intervals) == 0 {
        return true
    }
    
    sort.Slice(intervals, func(i, j int) bool {
            return intervals[i][0] < intervals[j][0]
    })
        fmt.Println(intervals)

    var cur = intervals[0][1]
    for _, i := range intervals[1:] {
        if i[0] < cur {
            return false
        }
        cur = i[1]
    }
    
    
    return true
}