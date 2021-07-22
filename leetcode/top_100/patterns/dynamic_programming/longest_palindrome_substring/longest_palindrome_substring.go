// https://leetcode.com/problems/longest-palindromic-substring/
package longest_palindrome_substring
func longestPalindrome(s string) string {
    dp := make([][]bool, len(s))
    for i := range dp {
        dp[i] = make([]bool, len(s))
    }
    
    var answer string
    n := len(s)
    
    for i:= n-1; i >= 0; i -= 1 {
        for j := i; j < n; j += 1 {
            if string(s[i]) == string(s[j]) && (j - i < 3 || dp[i+1][j-1]){
                dp[i][j] = true
            }
            
            if dp[i][j] && (len(answer) == 0 || j-i+1 > len(answer)){
                answer = s[i:j+1]
            }
        }
    }

    fmt.Println(dp)
    
    return answer
}

[[true false true false false false false] 
 [false true false false false true false] 
 [false false true false true false false] 
 [false false false true false false false] 
 [false false false false true false false]
 [false false false false false true false]
 [false false false false false false true]]

