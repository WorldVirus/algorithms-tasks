import ("math")

func increasingTriplet(nums []int) bool {
    first := int(math.MaxInt64)
    second := int(math.MaxInt64)
    
    for _,el := range nums {
        fmt.Println(el)
        if first >= el {
            first = el
        } else if second >= el {
            second = el
        } else {
            return true
        }
    }
    
    return false
}