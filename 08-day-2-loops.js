/*
 * Complete the vowelsAndConsonants function.
 * It has one parameter, a string, 's', consisting of lowercase English alphabetic letters (i.e., a through z).
 * 
 * The function must do the following:
 * First, print each vowel in 's' on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in 's'.
 * Second, print each consonant (i.e., non-vowel) in 's' on a new line in the same order as it appeared in 's'.
 * 
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let c = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
      console.log(s[i]);
    }
    else { 
      c += s[i];
    }
  }
  for (let j = 0; j < c.length; j++) {
    console.log(c[j]);
  }
};