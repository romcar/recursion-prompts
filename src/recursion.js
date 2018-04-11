/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if(n < 0){
    return null;
  }

  if(n === 0){
    return 1;
  }
  return n * factorial (n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if(array.length === 0){
    return 0;
  }

  if(array.length === 1){
    return array[0];
  }

  let temp = array.slice();
  let int = temp.pop();
  let x = temp.length;

  temp[x-1] = int + temp[x-1];
  return sum(temp);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var total = 0;

  //for each item
  array.forEach(function(item){
    //check if its a number
    if(typeof item === 'number'){
      //add that number to the total
      total += Number(item);
    }

    //if the element is an array
    if(Array.isArray(item)){
      //pass the elemnt recursively and add the return to the total.
      total = Number(total + arraySum(item));
    }
  });
  return total;
};

// 4. Check if a number is even.
var isEven = function(n) {
  //if n is negative step is +2 if n is positive step is -2.
  //Our goal is to reach exactly 0
  let step = n < 0 ? (2) : (-2);

  //base case
  if(n === 0){
    return true;
  } else if( n === 1 || n === -1){
    //if it doesn't quite reach zero, then its odd.
    return false;
  }
  //recursive step
  return isEven(n + step);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //is n negative or positive?
  let step = n < 0 ? (1) : (-1);

  // is n = 0? if not use step to increment/decrement
  n = n === 0 ? n : n + step;

  let sum = n;
  //base case
  if(n === 0){
    return sum;
  }
  //recursive call
  return sum + sumBelow(n);

}

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  let int = [];
  let step = x < y ? 1 : (-1);
  if(x == y){
    return int;
  } else {
    x = x + step;
    if(x != y){
      int.push(x);
      return int.concat(range(x, y));
    }
    return int;
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  return exp == 0 ? 1: exp > 0 ? base * exponent(base, exp - 1) :1./( base / exponent(base, exp + 1));
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //divide n by 2 if its not less than or equal to 0, if you get to n being 1 after
  //dividing it by 2 a few times.
  return n <= 0 ? false : n === 1 ? true : powerOfTwo(n/2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if(string.length === 0){
    return '';
  }
  let char = string.substring(0,1);
  string = string.replace(char, '');
  return reverse(string) + char;  
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //base case 
  if(string.length === 1 || string.length === 0){
    return true;
  }

  //first and last character plus character removal
  let fChar = string.substr(0,1).toLowerCase();
  string = string.substring(1,).toLowerCase();
  let lChar = string.substr(-1);
  string = string.substr(0, string.length - 1);

 
  return fChar === lChar ? palindrome(string) : false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if(y === 0){
    return NaN;
  }

  if(x < 0) {
    return -modulo(-x, y);
  }
  if(y < 0){
    return modulo(x, -y);
  }
  if(y > x){ 
    return x;
  }

  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
  //base case.
  //if both x and y are negative the product is positive
    //if x is negative and y is positive the product is negative 
    //if y is negative and x is positive the product is negative 
  //if both x and y are positive

var multiply = function(x, y) {
  let sum = 0;

  if( y === 0){
    return sum;
  }

  if(x < 0 && y < 0){
    x = -x;
    y = -y;
    sum = x;
    return sum + multiply(x, y - 1);
  } else if(x < 0 && y > 0){
    sum = x;
    return sum + multiply(x, y - 1);
  } else if(y < 0 && x > 0){
    sum = -x;
    y = -y;
    return sum + multiply(-x, y - 1);
  }
  sum = x;
  return (sum + multiply(x , y - 1));
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
//The test have a ~~ double Not Bitwise operator so only floored answers are accepted. No remainders

var count;
var divide = function(numerator, denominator) {
  count = 0;
  if(numerator < denominator){
    return 0;
  }
  if(denominator === 0){
    return NaN
  }
  if(denominator < 0){
    divide(numerator + denominator, denominator);
  } else {
    divide(numerator - denominator, denominator);
    count++;
  }
  return count;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

/*
  The greatest common divisor between two numbers can be found if you recursively subtract the other
  number depending on if x or y is larger

  if they are the same then return x
  if x is greater than y subtract y from x 
  if y is greater than x subtract x from y

  the point is to subtract from each other until they reach the same number*/


var gcd = function(x, y) {
  if(x < 0 || y < 0){
    return null;
  }
  if( x === y){
    return x;
  } else if ( x > y){
    return gcd(x - y, y);
  } else {
    return gcd( x, y - x);
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //if both strings length recursively becomes 0 then we have matching strings
  if(str1.length === 0 && str2.length === 0){
      return true;
  }
  //remove first characters and compare them and the length of the remaining strings
  if(str1[0] === str2[0] && str1.length !== 0 && str2.length !== 0){
    //recursive step with a parameter of the original string minus the first character
    return compareStr(str1.substr(1), str2.substr(1));
  } else {
    //if both lengths are not equal to 0 then they fail. Not the same length
    return false;
  }
  
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  let ar = [];
  //base case
  if (str.length === 0){
    return ar;
  }
  //push and remove first character of string into array then recursively call with substring
  ar.push(str[0]);
  //making sure to concat all the calls to the stack when the pop back out.
  return ar.concat(createArray(str.substr(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  let reversed = [];
  if(array.length === 0){
    return reversed;
  }
  reversed.push(array.pop());
  return reversed.concat(reverseArr(array));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  let result = [];
  if(length === 0){
    return result;
  }
  result.push(value);
  return result.concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  let result = [];
  if(n === 0){
    return result;
  }

  if(n%3 === 0 && n%5 === 0){
    result.push('FizzBuzz');
  } else if( n %3 === 0){
    result.push('Fizz');
  } else if( n %5 === 0){
    result.push('Buzz');
  }else {
    result.push(n.toString(10));
  }
  return fizzBuzz(n - 1).concat(result);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var count;
var countOccurrence = function(array, value) {
  count = 0;
  if (array.length === 0){
    return count;
  }
  if(array.shift() === value){
    count += 1;
    return count + countOccurrence(array, value);
  } else {
    return count + countOccurrence(array, value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  let result = [];
  let temp = array.slice();
  if(array.length === 0){
    return result;
  }

  result.push(callback(temp.shift()));
  return result.concat(rMap(temp, callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  //set counter to 0
  count = 0;

  //iterate through the object
  for(var x in obj){
    //check the keys name and compare it to the value given
    if( x === key){
      count++;
    }
    
    //is the value of that key equal to an object? If so resend it through the function
    if(obj[x].constructor === {}.constructor){
      //recursive step
      count = count + countKeysInObj(obj[x], key);
    }
  }
  
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  count = 0; //reset counter

  //iterate through object
  for(var x in obj){
    //check the current value for equality
    if(obj[x] === value){
      count++;
    }
    //check to see if the value is an object if so recurse it.
    if(obj[x].constructor === {}.constructor ){
      count = count + countValuesInObj(obj[x], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  //iterate through object
  for(var key in obj){

    //if the object at this key is holding another object recurse the function 
    //making the value of the return the objs new value
    if(obj[key].constructor === {}.constructor){
      obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
    }

    //if the key is the correct one we are looking for, make a new property with the newKey
    //name and place the value of the old key into it then delete the old key. 
    if(key === oldKey){
      obj[newKey] = obj[key];
      delete obj[key];
    } 
  }//finish iteration

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  //n = 0 theres nothing to do.
  if (n <= 0){
    return null;
  }

  //n = 1? return [0, 1]. This way we can take into account the zero
  if (n ===  1){
    //we want an array of values so we return an array as the base case 
    return [0, 1];
  } else {
    //this array gets placed in here
    let fib = fibonacci(n - 1);
    //them more calculations are pushed in before they are returned to the stack that called them.
    fib.push(fib[fib.length - 1]+ fib[fib.length -2]);
    return fib;
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //no negatives
  if( n < 0){
    return null;
  }

  if( n === 0 ){
    return 0;
  } else if( n === 1 ){
    return 1;
    //I did 3 instead of two because the fibonacci number for n = 3 is 2 which is just n - 1
  } else if( n <=3){
    return n - 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }


};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  //create temp array
  let temp = [];

  //base case: if array.length = 0
  if(array.length === 0){
    return temp;
  }

  //remove first item
  let word = array.shift();
  //capitalize word and push into temp
  temp.push(word.toUpperCase());
  //return concat of recursive method with rest of array (recursive)
  return temp.concat(capitalizeWords(array));

  //completed in 1 shot
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  //create temp array
  let temp = [];
  //base case: if array.lengt = 0
  if(array.length === 0){
    return temp;
  }
  //shift the first element in array
  let word = array.shift();
  //capitalize the first letter  in that element and push it into temp
  word = word.substr(0, 1).toUpperCase() + word.substr(1);
  temp.push(word);
  //recursily concat and return the rest of the array using the same function
  return temp.concat(capitalizeFirst(array));
  //done in 1 shot
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  //init sum to 0
  let sum = 0;

  //iterate through object
  for(var key in obj){
    //if the value is an object break it down recursively
    if(obj[key].constructor === {}.constructor){
      sum = sum + nestedEvenSum(obj[key]);
    }

    // if its a number check if its even and add to sum
    if(typeof obj[key] === 'number'){
      if(obj[key]%2 === 0){
        sum += obj[key];
      }
    }
  }
  //return sum last of all.
  return sum;
  //done in 1 run.
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  //create temp array
  let temp = [];

  //base case
  if(array.length === 0){
    return temp;
  }

  //iterate through array
  for(var x = 0; x < array.length; x++){
    //if the array is another array recurse and concat answers
    if(array[x].constructor === [].constructor){
      //I keep forgetting that temp.concat does not modify the array. It returns a new
      //concatted array
      temp = temp.concat(flatten(array[x]))
    } else {
      //if the element is not an array push it into the temp
      temp.push(array[x]);
    }
  }
  //lastly return temp
  return temp;

};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  //if the object is undefined, define it. 
  obj = typeof obj === 'undefined' ? {} : obj;

  //base case just in case 
  if(str.length === 0){
    return obj;
  }
  //grab the first letter of the string
  let firstLetterOfString = str.substr(0,1);
  //if it already exists add one to it.
  if(obj.hasOwnProperty(firstLetterOfString)){
    obj[firstLetterOfString] += 1;
    //send the rest of the string in to get checked minus first letter
    return letterTally(str.substr(1), obj);
  } else {
    //if its not a property of the object add that property to it and 
    //initialize it to 1
    obj[firstLetterOfString] = 1;
    //then pass the rest of the string in recursively
    return letterTally(str.substr(1), obj);
  }
  //return obj when finished
  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  let temp = list.slice();
  //if the list is empty return empty array
  if(temp.length === 0){
    return [];
  }
  //if the first item and the second item are not the same then 
  //add the first item into an explicit array and concat the rest
  //recursively
  if(temp[0] !== temp[0+1]){
    return [temp[0]].concat(compress(temp.slice(1)));
  } else {
    //if they are the same then do not add the first item and concat the 
    //rest recursively
    return [].concat(compress(temp.slice(1)));
  }
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  //base case: if the item length = 0 add the aug
  if(array.length === 0){
    return array.concat([aug]);
  }

  //iterate through the array
  for(var x = 0; x < array.length; x++){
    //if the element is an array
    if(Array.isArray(array[x])){
      //make that element the return value of the recursive function.
      /*this passes the element to the array removing a layer of the array brackets
      and the aug as parameters. Once we reach a point where we can actually read 
      the values we concat the aug to the array.*/
      array[x] = augmentElements(array[x], aug);
    } else {
      return array.concat([aug]);
    }
  }

  return array;

};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
