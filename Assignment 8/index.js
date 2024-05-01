// a) Return the length of a given string.

// function stringLength(str) {
//     return str.length;
// }

// // Example usage:
// var myString = "Hello, world!";
// console.log(stringLength(myString)); // Output will be 13
  


// b) Concatenate two strings together.
// function concatenateStrings(str1, str2) {
//     return str1.concat(str2);
// }

// // Example usage:
// var firstString = "Hello";
// var secondString = " world!";
// console.log(concatenateStrings(firstString, secondString)); // Output will be "Hello world!"


// c) Determine if a given string is empty.

// function isEmptyString(str) {
//     return str.length === 0;
// }

// // Example usage:
// var emptyString = "";
// var nonEmptyString = "Hello";

// console.log(isEmptyString(emptyString)); 
// console.log(isEmptyString(nonEmptyString)); 


// d) Count the number of vowels in a string.
// function countVowels(str) {
//     // Convert the string to lowercase to simplify the comparison
//     str = str.toLowerCase();
    
//     // Define an array of vowels
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
    
//     // Initialize a variable to store the count of vowels
//     var vowelCount = 0;
    
//     // Iterate over each character of the string
//     for (var i = 0; i < str.length; i++) {
//         // Check if the character is a vowel
//         if (vowels.includes(str[i])) {
//             // If it is, increment the vowel count
//             vowelCount++;
//         }
//     }
    
//     return vowelCount;
// }

// // Example usage:
// var myString = "Hello, how are you?";
// console.log(countVowels(myString)); 


// e) Reverse a given string.
// function reverseString(str) {
//     // Initialize an empty string to store the reversed string
//     var reversed = "";
    
//     // Iterate over each character of the string in reverse order
//     for (var i = str.length - 1; i >= 0; i--) {
//         // Append each character to the reversed string
//         reversed += str[i];
//     }
    
//     return reversed;
// }

// // Example usage:
// var myString = "Hello, world!";
// console.log(reverseString(myString)); 


// f) Check if a string is a palindrome.
// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert the string to lowercase
//     var cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
    
//     // Reverse the string
//     var reversedStr = cleanStr.split('').reverse().join('');
    
//     // Check if the original string is equal to its reversed version
//     return cleanStr === reversedStr;
// }

// var palindromeString = "A man, a plan, a canal, Panama";
// var nonPalindromeString = "Hello, world!";

// console.log(isPalindrome(palindromeString)); 
// console.log(isPalindrome(nonPalindromeString)); 

// g) Convert a string to uppercase.
// function toUpperCase(str) {
//     return str.toUpperCase();
// }

// // Example usage:
// var myString = "hello, world!";
// console.log(toUpperCase(myString)); 

// h) Find the first occurrence of a given character in a string.
// function findFirstOccurrence(str, char) {
//     return str.indexOf(char);
// }

// // Example usage:
// var myString = "Hello, world!";
// var characterToFind = "o";
// console.log(findFirstOccurrence(myString, characterToFind)) 


// i) Replace all occurrences of a given character in a string with another character.
// function replaceAllOccurrences(str, charToReplace, replacementChar) {
//     // Create a regular expression to match all occurrences of the character
//     var regex = new RegExp(charToReplace, 'g');
    
//     // Use the replace() method with the regular expression to replace all occurrences
//     return str.replace(regex, replacementChar);
// }

// // Example usage:
// var myString = "Hello, world!";
// var charToReplace = "o";
// var replacementChar = "*";
// console.log(replaceAllOccurrences(myString, charToReplace, replacementChar)); 


// j) Trim leading and trailing whitespace from a string.
// function trimWhitespace(str) {
//     return str.trim();
// }

// // Example usage:
// var myString = "   Hello, world!   ";
// console.log(trimWhitespace(myString)); 


// k) Count the number of words in a string.
// function countWords(str) {
//     // Remove leading and trailing whitespace
//     str = str.trim();
    
//     // Split the string into an array of words based on whitespace
//     var words = str.split(/\s+/);
    
//     // Return the number of words
//     return words.length;
// }

// // Example usage:
// var myString = "Hello, world! This is a test.";
// console.log(countWords(myString)); /

// l) Check if a string contains only numeric characters.
// function containsOnlyNumeric(str) {
//     // Use a regular expression to check if the string contains only numeric characters
//     return /^\d+$/.test(str);
// }

// // Example usage:
// console.log(containsOnlyNumeric("123")); // Output will be true
// console.log(containsOnlyNumeric("123abc")); // Output will be false

// m) Check if a string is a valid email address.
// function isValidEmail(email) {
//     // Regular expression pattern for validating email addresses
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
//     // Test the email against the regex pattern
//     return emailRegex.test(email);
// }

// // Example usage:
// console.log(isValidEmail("example@example.com")); // Output will be true
// console.log(isValidEmail("example@example")); // Output will be false



// n) Extract the domain name from a URL string.
// function extractDomainFromURL(url) {
//     // Regular expression pattern for extracting domain from URL
//     var domainRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im;
    
//     // Extract domain using regex
//     var match = url.match(domainRegex);
    
//     // Check if match is found and return the domain
//     if (match && match.length >= 2) {
//         return match[1];
//     } else {
//         return null; // Return null if no domain is found
//     }
// }

// // Example usage:
// console.log(extractDomainFromURL("https://www.example.com/page")); // Output will be "example.com"
// console.log(extractDomainFromURL("http://subdomain.example.co.uk/path")); // Output will be "subdomain.example.co.uk"


// o) Convert a string into title case (the first letter of each word capitalized).
// function toTitleCase(str) {
//     // Split the string into words
//     var words = str.toLowerCase().split(' ');
    
//     // Capitalize the first letter of each word
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
    
//     // Join the words back together
//     return words.join(' ');
// }

// // Example usage:
// var myString = "hello world, how are you?";
// console.log(toTitleCase(myString)); // Output will be "Hello World, How Are You?"

// p) Remove all non-alphabetic characters from a string.
// function removeNonAlphabetic(str) {
//     // Use a regular expression to remove all non-alphabetic characters
//     return str.replace(/[^a-zA-Z]/g, '');
// }

// // Example usage:
// var myString = "Hello, 123 world!";
// console.log(removeNonAlphabetic(myString)); // Output will be "Hello world"


// q) Check if a string is a valid palindrome permutation (ignoring spaces).
// function isValidPalindromePermutation(str) {
//     // Remove spaces from the string and convert to lowercase
//     str = str.replace(/\s+/g, '').toLowerCase();
    
//     // Create an object to count characters
//     var charCount = {};
    
//     // Count the occurrence of each character
//     for (var i = 0; i < str.length; i++) {
//         var char = str.charAt(i);
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
    
//     // Count the number of characters with odd counts
//     var oddCount = 0;
//     for (var key in charCount) {
//         if (charCount.hasOwnProperty(key) && charCount[key] % 2 !== 0) {
//             oddCount++;
//         }
//     }
    
//     // Check if the string can form a palindrome permutation
//     if (str.length % 2 === 0) {
//         return oddCount === 0;
//     } else {
//         return oddCount === 1;
//     }
// }

// // Example usage:
// console.log(isValidPalindromePermutation("tact coa")); // Output will be true
// console.log(isValidPalindromePermutation("hello")); // Output will be false



// r) Check if a string is an anagram of another string.
// function isAnagram(str1, str2) {
//     // Remove spaces and convert to lowercase
//     str1 = str1.replace(/\s+/g, '').toLowerCase();
//     str2 = str2.replace(/\s+/g, '').toLowerCase();
    
//     // If lengths are different, they can't be anagrams
//     if (str1.length !== str2.length) {
//         return false;
//     }
    
//     // Create character frequency maps for both strings
//     var charCount1 = {};
//     var charCount2 = {};
    
//     // Count characters in str1
//     for (var char of str1) {
//         charCount1[char] = (charCount1[char] || 0) + 1;
//     }
    
//     // Count characters in str2
//     for (var char of str2) {
//         charCount2[char] = (charCount2[char] || 0) + 1;
//     }
    
//     // Compare character frequency maps
//     for (var key in charCount1) {
//         if (charCount1[key] !== charCount2[key]) {
//             return false;
//         }
//     }
    
//     return true;
// }

// // Example usage:
// console.log(isAnagram("listen", "silent")); // Output will be true
// console.log(isAnagram("hello", "world")); // Output will be false


// s) Find the longest word in a string.
// function findLongestWord(str) {
//     // Split the string into an array of words
//     var words = str.split(/\s+/);
    
//     // Initialize variables to store the longest word and its length
//     var longestWord = "";
//     var maxLength = 0;
    
//     // Iterate over each word to find the longest one
//     for (var i = 0; i < words.length; i++) {
//         // Remove any non-alphabetic characters from the word
//         var word = words[i].replace(/[^a-zA-Z]/g, '');
        
//         // Check if the current word is longer than the longest word found so far
//         if (word.length > maxLength) {
//             longestWord = word;
//             maxLength = word.length;
//         }
//     }
    
//     return longestWord;
// }

// // Example usage:
// var myString = "Hello, world! This is a test.";
// console.log(findLongestWord(myString)); // Output will be "Hello"


// t) Perform string compression by replacing repeated characters with the character followed by the count.

// function compressString(str) {
//     // If string is empty or has only one character, return it unchanged
//     if (str.length <= 1) {
//         return str;
//     }
    
//     // Initialize variables
//     var compressed = "";
//     var currentChar = str[0];
//     var count = 1;
    
//     // Iterate over each character starting from the second one
//     for (var i = 1; i < str.length; i++) {
//         // If current character is same as previous one, increment count
//         if (str[i] === currentChar) {
//             count++;
//         } else {
//             // If current character is different, append compressed version to result
//             compressed += currentChar + count;
//             // Update current character and reset count
//             currentChar = str[i];
//             count = 1;
//         }
//     }
    
//     // Append the last character and its count to the result
//     compressed += currentChar + count;
    
//     // Return the compressed string only if it's shorter than the original string
//     return compressed.length < str.length ? compressed : str;
// }

// // Example usage:
// console.log(compressString("aabcccccaaa")); // Output will be "a2b1c5a3"
// console.log(compressString("abcdefg")); // Output will be "abcdefg" (unchanged)
