/** / LINK: https://leetcode.com/problems/accounts-merge/
 * 
 *  EXAMPLES:
 *  Input: [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
 *  Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
 */

var accountsMerge = function (accounts) {
    // JAVA SOLUTION
    // class Solution {
    //     public List<List<String>> accountsMerge(List<List<String>> accounts) {
    //         DSU dsu = new DSU();
    //         Map<String, String> emailToName = new HashMap();
    //         Map<String, Integer> emailToID = new HashMap();
    //         int id = 0;
    //         for (List<String> account: accounts) {
    //             String name = "";
    //             for (String email: account) {
    //                 if (name == "") {
    //                     name = email;
    //                     continue;
    //                 }
    //                 emailToName.put(email, name);
    //                 if (!emailToID.containsKey(email)) {
    //                     emailToID.put(email, id++);
    //                 }
    //                 dsu.union(emailToID.get(account.get(1)), emailToID.get(email));
    //             }
    //         }
    
    //         Map<Integer, List<String>> ans = new HashMap();
    //         for (String email: emailToName.keySet()) {
    //             int index = dsu.find(emailToID.get(email));
    //             ans.computeIfAbsent(index, x-> new ArrayList()).add(email);
    //         }
    //         for (List<String> component: ans.values()) {
    //             Collections.sort(component);
    //             component.add(0, emailToName.get(component.get(0)));
    //         }
    //         return new ArrayList(ans.values());
    //     }
    // }
    // class DSU {
    //     int[] parent;
    //     public DSU() {
    //         parent = new int[10001];
    //         for (int i = 0; i <= 10000; ++i)
    //             parent[i] = i;
    //     }
    //     public int find(int x) {
    //         if (parent[x] != x) parent[x] = find(parent[x]);
    //         return parent[x];
    //     }
    //     public void union(int x, int y) {
    //         parent[find(x)] = find(y);
    //     }
    // }
    let h = {};
    let vals = {};
    // h{email: index in arr}, vals{0:{2:1, 0:1}}
    for (let i = 0; i < accounts.length; ++i) {
        let flag = true;
        let bufA = accounts[i];
        // h{"johnsmith@mail.com":0, "john00@mail.com":0, "johnnybravo@mail.com":1, "john_newyork@mail.com": 2}
        // ["John", "johnnybravo@mail.com"]
        for (let j = 1; j < bufA.length; ++i) {
            let cur = h[bufA[j]];
            if (cur) {
                if (flag) {
                    if (vals[cur] === undefined) {
                        vals[cur] = {};
                        vals[cur][cur] = 1
                    }
                    vals[cur][`${i}`] = 1;
                    flag = false;
                }
            } else {
                cur = i;
            }
        }
    }
    // vals{0:{2:1, 0:1}}, h{"johnsmith@mail.com":0, "john00@mail.com":0, "johnnybravo@mail.com":1, "john_newyork@mail.com": 2}

    let answer = [];

    for (let i in vals) {
        let buf = vals[i]; // {2:1, 0:1}
        answer.push([]);
        for (let index in h) {
            if (buf[h[index]]) {
                answer[answer.length - 1].push(index); // []
                delete h[index];
            }
        }

        answer[answer.length - 1].sort((a, b) => a.localeCompare(b)); // sort symbols
        answer[answer.length - 1].unshift(accounts[Number(i)][0]);
    }
    // DONT MERGE ALL ACCOUNTS
    return answer;

};