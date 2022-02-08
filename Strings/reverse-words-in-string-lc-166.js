/**
 * Time O(n)
 * Space O(1)
 */
 var reverseWords = function(s) {
    return s.split(' ').reverse().filter(item => item.length > 0).join(' ')
 };