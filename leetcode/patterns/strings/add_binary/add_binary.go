// https://leetcode.com/problems/add-binary/
package add_binary

func addBinary(a string, b string) string {

	i := len(a)
	j := len(b)

	result := ""

	carry := false
	for i > 0 || j > 0 {
		i--
		j--

		count := 0
		if i >= 0 && a[i] == '1' {
			count++
		}
		if j >= 0 && b[j] == '1' {
			count++
		}
		if carry {
			count++
			carry = false
		}

		if count == 0 {
			result = "0" + result
		} else if count == 1 {
			result = "1" + result
		} else if count == 2 {
			result = "0" + result
			carry = true
		} else {
			result = "1" + result
			carry = true
		}

	}
	if carry {
		result = "1" + result
	}
	return result
}
