// https://leetcode.com/problems/sum-of-subarray-minimums/
package sum_of_subarray_minimums

//
// Solution:
// https://leetcode.com/problems/sum-of-subarray-minimums/discuss/257811/Python-O(n)-slightly-easier-to-grasp-solution-(explained)
// class Solution(object):
//     def sumSubarrayMins(self, A):
//         """
//         :type arr: List[int]
//         :rtype: int
//         """
//         A = [0]+A
//         result = [0]*len(A)
//         stack = [0]
//         for i in range(len(A)):
//             while A[stack[-1]] > A[i]:
//                 stack.pop()
//             j = stack[-1]
//             result[i] = result[j] + (i-j)*A[i]
//             stack.append(i)
//         return sum(result) % (10**9+7)
