//https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/565/week-2-november-8th-november-14th/3523/
func twoSumLessThanK(nums []int, k int) int {
    if len(nums) == 0 {
        return -1
    }
    
    sort.Slice(nums, func(i,j int)bool{
            return nums[i] < nums[j]
    })
    
    max := -1
    var start int
    end := len(nums) - 1
    var bufVal int
    
    for start < end {
        bufVal = nums[start] + nums[end]
        if bufVal < k {
            if max < bufVal {
                max = bufVal
            }
            start += 1
        }
        
        if bufVal >= k {
            end -= 1
        }
        
    }
               fmt.Println(nums)
               
    return max
}