1 << 1 = 2 = pow(2,1) = (00010)
1 << 2 = 4 = pow(2,2) = (00100)

4 >> 1 = 4/pow(2,1) = 2
6 >> 1 = 6/pow(2,1) = 3

https://leetcode.com/discuss/study-guide/1151183/bits-can-hack-the-world-beginners-guide-bit-hacks-with-proper-approach

convert https://www.binaryhexconverter.com/binary-to-decimal-converter

sum: https://www.calculator.net/binary-calculator.html

Subsets 2n * n

    answer := [][]int{[]int{}}
    // 1 << 2^len(nums)
    for mask := uint(0); mask < 1 << uint(len(nums)); mask += 1{
        tempAr := []int{}
        
        for index, item := range nums {
            if mask & (1 << uint(index)) != 0{
                tempAr = append(tempAr, item)
            }
        }
        
        if len(tempAr) > 0{
            answer = append(answer, tempAr)
        }
    }
    
    return answer