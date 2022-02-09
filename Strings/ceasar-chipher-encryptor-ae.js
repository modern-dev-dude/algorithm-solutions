/**
 * Time O(n)
 * Space O(n)
 * Takes the string char codes adds the key mod then finds the char at that code. 
 */
function caesarCipherEncryptor(string, key) {
  // Write your code here.
	let res = '';
	key = (key > 25)? Math.floor(key % 26)  : key
	for(let i =0; i < string.length; i++){
		const newLetterCode = string.charCodeAt(i) + key;
		res += (newLetterCode <= 122)?  String.fromCharCode(newLetterCode): String.fromCharCode(96 + (newLetterCode % 122 )) 
	}
  return res;
}
