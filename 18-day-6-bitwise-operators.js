/*
 * 'S' is a sequence of distinct integers from '1' to 'n' (i.e., {1, 2, ..., n}).
 * Return the maximum bitwise AND value of any two integers ('a' & 'b') where 'a' < 'b' and the value is less than integer 'k'.
 * 
 * Parameter(s):
 * n: The last integer in sequence 'S'
 * k: An integer
 */
function getMaxLessThanK(n, k) {
    let max = 0;
    for (let a = 1; a < n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let bitwiseAnd = a & b;
            if (bitwiseAnd < k && max < bitwiseAnd) {
                max = bitwiseAnd;
            };
        };
    };
    return max;
};