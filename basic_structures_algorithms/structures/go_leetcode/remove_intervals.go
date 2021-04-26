// https://leetcode.com/problems/remove-interval/
func removeInterval(intervals [][]int, toBeRemoved []int) [][]int {
    var out [][]int
    rS := toBeRemoved[0]
    rE := toBeRemoved[1]
    
    for _,el := range intervals {
        start := el[0]
        end := el[1]
        
        if end <= rS || start >= rE{
               // if current interval ends before toBeRemoved
        // or starts after
            out = append(out, []int{start,end})
        } else if start < rS && end > rE {
                  // if the interval to be removed is inside 
        // of the current interval
            out = append(out,[]int{start,rS})
            out = append(out,[]int{rE,end})
        } else if start < rS && end <= rE {
                    // "left" overlap

            out = append(out,[]int{start,rS})
        } else if start >= rS && end > rE {
                    // "right" overlap

            out = append(out,[]int{rE,end})
        }
    }
    return out
}