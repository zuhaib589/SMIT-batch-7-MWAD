// 1. Write a JS code to print numbers from 1 to 10

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }

//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



  

// 2. Write a JS code to print Even numbers in given array

 /* arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  } 
  */

// 3. Write a JS code to delete all occurrence of element in given array

/* function deleteAllOccurrences(arr, element) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== element) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const elementToDelete = 5;
  
  const modifiedArray = deleteAllOccurrences(numbers, elementToDelete);
  console.log(modifiedArray); */

//   4. Write a JS code to find the power of a number using for loop
/*
function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
      result *= base;
  }
  return result;
}

const base = 2;
const exponent = 3;
const result = power(base, exponent);
console.log(`${base} raised to the power of ${exponent} is ${result}`); */


 /* 5. Write a JS code to print a pattern using for loop

 function printPattern(rows) {
  for (let i = 1; i <= rows; i++) {
      let pattern = "";
      for (let j = 1; j <= i; j++) {
          pattern += j + " ";
      }
      console.log(pattern);
  }
}

const rows = 8;
printPattern(rows); */


 /* 6. Write a JS code to find the no of digits in a number

 function countDigits(number) {
  return number.toString().length;
}

const number = 12345;
const digitCount = countDigits(number);
console.log(`The number of digits in ${number} is: ${digitCount}`); */


/*  7. Write a JS code to calculate the sum of digits in a number


function sumOfDigits(number) {
  let sum = 0;
  // Convert the number to a string to iterate over its digits
  const numString = number.toString();
  
  // Iterate over each digit using a for loop
  for (let i = 0; i < numString.length; i++) {
      // Convert each digit back to a number and add it to the sum
      sum += parseInt(numString[i]);
  }
  
  return sum;
}


const number = 12345;
const digitSum = sumOfDigits(number);
console.log(`The sum of digits in ${number} is: ${digitSum}`); */



/*
 8. Write a JS code to find the largest number in an array

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max=arr[0];

for (let i = 1; i <arr.length; i++) {
    if (arr[i] > max) {
        max=arr[i] ;   
    }
      }

      console.log(max); */

     /* 9. Write a JS code to print the Fibonacci series for a given value of N


      function fibonacciSeries(n) {
        let fibSeries = [];
        let a = 0, b = 1, temp;
    
        if (n >= 1) {
            fibSeries.push(a);
        }
        if (n >= 2) {
            fibSeries.push(b);
        }
    
        for (let i = 3; i <= n; i++) {
            temp = a + b;
            fibSeries.push(temp);
            a = b;
            b = temp;
        }
    
        return fibSeries;
    }
    
    // Example usage:
    const N = 10;
    const series = fibonacciSeries(N);
    console.log(`Fibonacci series for N = ${N}:`, series.join(', ')); */
    

  /*    10. Write a JS code to find duplicate values in a given array


      function findDuplicates(arr) {
        let duplicates = [];
        // Loop through each element in the array
        for (let i = 0; i < arr.length; i++) {
            // Loop through the rest of the array to compare with the current element
            for (let j = i + 1; j < arr.length; j++) {
                // If a duplicate is found, and it's not already in the duplicates array, add it
                if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                    duplicates.push(arr[i]);
                    break; // Break to avoid adding the same duplicate multiple times
                }
            }
        }
        return duplicates;
    }
    
    // Example usage:
    const array = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 1];
    const duplicateValues = findDuplicates(array);
    console.log("Duplicate values in the array:", duplicateValues); */

    /* 11. Write a JS code for Linear search algorithm


    function linearSearch(arr, target) {
      for (let i = 0; i < arr.length; i++) {
          // If the current element equals the target, return its index
          if (arr[i] === target) {
              return i;
          }
      }
      // If the target is not found, return -1
      return -1;
  }
  
  // Example usage:
  const array = [3, 1, 4, 7, 2, 8, 5];
  const target = 7;
  const index = linearSearch(array, target);
  
  if (index !== -1) {
      console.log(`The target ${target} is found at index ${index}.`);
  } else {
      console.log(`The target ${target} is not found in the array.`);
  } */
  


  /* 12. Write a JS code for Binary search algorithm


  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // If the target is found at the middle index, return its index
        if (arr[mid] === target) {
            return mid;
        }
        // If the target is greater than the middle element, update left pointer
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        // If the target is smaller than the middle element, update right pointer
        else {
            right = mid - 1;
        }
    }

    // If the target is not found, return -1
    return -1;
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 7;
const index = binarySearch(array, target);

if (index !== -1) {
    console.log(`The target ${target} is found at index ${index}.`);
} else {
    console.log(`The target ${target} is not found in the array.`);
} */
 