[Article](https://www.geeksforgeeks.org/program-to-find-lcm-of-two-numbers/)

   a x b = LCM(a, b) * GCD (a, b)

   LCM(a, b) = (a x b) / GCD(a, b)
    
	// Recursive method to return gcd of a and b
	static int gcd(int a, int b)
	{   
		if (a == 0)
			return b;
		return gcd(b % a, a);
	}
	
	// method to return LCM of two numbers
	static int lcm(int a, int b)
	{
		return (a / gcd(a, b)) * b;
	}
	
	// Driver method
	public static void main(String[] args)
	{
		int a = 15, b = 20;
		System.out.println("LCM of " + a +
						" and " + b +
					" is " + lcm(a, b));
	}

[Article](https://www.geeksforgeeks.org/minimize-absolute-difference-sum-two-subsets/)

Input : n = 4
Output : First subset sum = 5, 
         Second subset sum = 5.
         Difference = 0
Explanation:
Subset 1: 1 4 
Subset 2: 2 3 

Input : n = 6 
Output: First subset sum = 10, 
        Second subset sum = 11.
        Difference = 1
Explanation : 
Subset 1: 1 3 6 
Subset 2: 2 4 5 

    void subsetDifference(int n) {
    // summation of n elements
        int s = n * (n + 1) / 2;
    
        // if divisible by 4
        if (n % 4 == 0) {
            cout << "First subset sum = "
                << s / 2;
            cout << "\nSecond subset sum = "
                << s / 2;
            cout << "\nDifference = " << 0;
        }
        else {
    
            // if remainder 1 or 2. In case of remainder
            // 2, we divide elements from 3 to n in groups
            // of size 4 and put 1 in one group and 2 in
            // group. This also makes difference 1.
            if (n % 4 == 1 || n % 4 == 2) {
    
                cout << "First subset sum = "
                    << s / 2;
                cout << "\nSecond subset sum = "
                    << s / 2 + 1;
                cout << "\nDifference = " << 1;
            }
    
            // We put elements from 4 to n in groups of
            // size 4. Remaining elements 1, 2 and 3 can
            // be divided as (1, 2) and (3).
            else
            {
                cout << "First subset sum = "
                    << s / 2;
                cout << "\nSecond subset sum = "
                    << s / 2;
                cout << "\nDifference = " << 0;
            }
        }
    }

[Article](https://www.geeksforgeeks.org/sieve-of-eratosthenes/)

Input : n = 20 
Output: 2 3 5 7 11 13 17 19

    void sieveOfEratosthenes(int n) {
        // Create a boolean array
        // "prime[0..n]" and
        // initialize all entries
        // it as true. A value in
        // prime[i] will finally be
        // false if i is Not a
        // prime, else true.
        boolean prime[] = new boolean[n + 1];
        for (int i = 0; i <= n; i++)
            prime[i] = true;
 
        for (int p = 2; p * p <= n; p++)
        {
            // If prime[p] is not changed, then it is a
            // prime
            if (prime[p] == true)
            {
                // Update all multiples of p
                for (int i = p * p; i <= n; i += p)
                    prime[i] = false;
            }
        }
 
        // Print all prime numbers
        for (int i = 2; i <= n; i++)
        {
            if (prime[i] == true)
                System.out.print(i + " ");
        }
    }
 

n(n+1)/2 number of all subarrays

Sn = n*(a1 + an)/2 - arithmetic progression

Sn = b1(q^n - 1)/q-1; bn = b1*q^n-1 - geometric progression