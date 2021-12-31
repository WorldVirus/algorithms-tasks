https://www.youtube.com/watch?v=oBt53YbR9Kk

Grid Traveler
dp[i][j] = dp[i][j-1] + dp[i-1][j]

top-down:
key := i + "" + j
memo[key] = call(i, j -1) + call(i-1, j)
------------------------------------------------------------


canSum 

bottom
table = make([]bool, target + 1)
table[0] = true
for i < target + 1 
    if table[i]
        for j in arr
            table[i + arr[j]] = true

return table[target]


top
if targetSum in memo return true
if targetSum == 0 return true
if targetSum < 0 return false
for i in arr
    if HowSum(arr, target - arr[i])
        memo[targetSum - arr[i]] = true
        return true
memo[targetSum] = false
return false
------------------------------------------------------------


HowSum

top
if targetSum in memo return memo[targetSum]
if targetSum == 0 return []
if targetSum < 0 return nil
for i in arr
    remainder = sum - arr[i]
    remainderRest = CanSum(arr, targetSum - arr[i])
    if remainderRest != nil
        memo[targetSum ] = [arr[i] , remainderRest]
        return memo[targetSum ]
memo[targetSum] = nil
return memo[targetSum]


bottom
table = make([]int, target + 1).fill(nil)
table[0] = []
for i < target + 1 
    if table[i] != nil
        for j in arr
            table[i + arr[j]] = [table[i], arr[j]]

return table[target]
------------------------------------------------------------


BestSum

top
if targetSum in memo return memo[targetSum]
if targetSum == 0 return []
if targetSum < 0 return nil

shortest = nil
for i in arr
    remainder = sum - arr[i]
    remainderRest = CanSum(arr, targetSum - arr[i])
    if remainderRest != nil
        comb = [arr[i] , remainderRest]
        if shortest == nil || len(comb) < len(shortest)
            shortest = comb

memo[targetSum] = shortest
return shortest


bottom
table = make([]int, target + 1).fill(nil)
table[0] = []

for i < target + 1 
    if table[i] != nil
        for j in arr
            comb = [table[i], num]
            if len(table[i + arr[j]]) > len(comb)
                table[i + arr[j]] = comb

return table[target]
------------------------------------------------------------


Can Construct String from Arr string

top
if targetStr in memo return true
if len(targetStr) == 0 return true

for i in arr
    if arr[i] in targetStr
        sufix = targetStr.slice(i, arr[i])
        if HowSum(arr, targetStr - arr[i], memo)
            memo[targetStr] = true
            return true
memo[targetStr] = false
return false


bottom
table = make([]int, targetStr + 1).fill(false)
table[0] = true

for i < targetStr + 1 
    if table[i]
        for word in str
            if targetStr[i:len(word)+1] == word
                table[i + len(word)] = true

return table[targetStr]
------------------------------------------------------------


Count create String from Arr string

top
if targetStr in memo return true
if len(targetStr) == 0 return 1 

totalSum  = 0
for i in arr
    if arr[i] in targetStr
         totalSum += HowSum(arr, targetStr.slice(arr[i]), memo)

memo[targetStr] = totalSum
return totalSum

Time: O(n^*m^2)
Space: O(m^2)

BruteForce:
Time: O(n^m*m)
Space: O(m^2)


Bottom
table = make([]int, targetStr + 1).fill(0)
table[0] = 1

for i < targetStr + 1 
        for word in str
            if targetStr[i:len(word)+1] == word
                table[i + len(word)] = table[i]

return table[len(targetStr)]
------------------------------------------------------------


Count All created String from Arr string

top
if targetStr in memo return memo[target]
if len(targetStr) == 0 return [[]]

res  = 0
for i in arr
    if arr[i] in targetStr
         suf = targetStr.slice(arr[i])
         arrSuf = HowSum(arr, targetStr.slice(arr[i]), memo)
         allArr = [arr[i]]
         for j in arrSuf
            allArr[j+1] = []
            for k  in arrSuf[j]
                allArr.Push(arrSuf[j][k])
         res.Push(allArr)

memo[targetStr] = res
return res
Time: O(n^m)
Space: O(m)


bottom
table = make([]int, targetStr + 1).fill(nil)
table[0] = []

for i < targetStr + 1 
        for word in str
            if targetStr[i:len(word)+1] == word
                table[i + len(word)] = table[i]
                curComb[i] = table[i]
                allArr = [arr[i]]
                for j in arrSuf
                    allArr[j+1] = []
                    for k  in arrSuf[j]
                        allArr.Push(arrSuf[j][k])
                table[i + len(word)] = allArr
                
return table[len(targetStr)]