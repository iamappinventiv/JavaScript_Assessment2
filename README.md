# JavaScript_Assessment2
------------------------------------------------
# Question:1
## How do you check if an element exists in an array?

```javascript
// To check if an element exists in an array
const arr = [1,3,5,6,7,8,9,10,11,12]
console.log(arr.includes(9));

// Check if an element does not exist in an array

const arr1 =[1,3,5,6,7,8,9,10,11,12]
console.log(arr.includes(2));

// Output:
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
true
false

```
Explanation:

- We can use the includes() method in JavaScript to check if an item exists in an array

* The includes() method returns true if an array contains a specified value.

* The includes() method returns false if the value is not found.

* The includes() method is case sensitive.

------------------------------------------------
------------------------------------------------
# Question:2 
## What is the difference between .map() and .forEach()?

- Explanation: The map method receives a function as a parameter. Then it applies it on each element and returns an entirely new array populated with the results of calling the provided function.
This means that it returns a new array that contains an image of each element of the array. It will always return the same number of items.
```javascript
// Use case of Map function
const arr = [5, 4, 3, 2, 1]
console.log(arr.map(x => x * x));

// Output:
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
[ 25, 16, 9, 4, 1 ]
```
- Like map , the forEach() method receives a function as an argument and executes it once for each array element. However, instead of returning a new array like map, it returns undefined.

```javascript
// use case of forEach() function

const arr = [
  { id: 1, name: "Shivam" },
  { id: 2, name: "Kaif" },
  { id: 3, name: "Shubham" },
]

arr.forEach(element => console.log(element.name))

// Output:
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
Shivam
Kaif
Shubham

```
- Difference between ```map() ``` and  ```forEach()``` is the returning value. The ``` forEach() ``` method returns undefined and map() returns a new array with the transformed elements. Even if they do the same job, the returning value remains different.

```javascript
const arr = [1, 2, 3, 4, 5]
console.log(arr.forEach(x => x * x));
console.log(arr.map(x => x * x));

//Output
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
undefined
[ 1, 4, 9, 16, 25 ]
```
------------------------------------------------
------------------------------------------------
# Question 3

## What is the difference between .filter() and .find()?
Explanation: First We see that what they are 
``` filter() ``` method
- This method returns all the elements of the array that satisfy the condition specified in the callback function.
Example:
```javascript
const x = [1, 2, 3, 4, 5];
const y = x.filter(x => x * 2 === 2);
console.log(y);

//Output
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js                  
[ 1 ]
```
- If you check out the output of the above example, the value of y is an array of 1 element that satisfies the condition. This is because the filter() method iterates over all elements of the array and then returns a filtered array which satisfy the condition specified.
- Now , Moving On Next Method
 What is the ```find()``` method?
 - This method returns first element of the array that satisfies the condition specified in the callback function.
 Example:
 ```javascript
 const x = [1, 2, 3, 4, 5];
 const y = x.find(x => x * 2 === 2);
 console.log(y);

 // Output:
 mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
 1
 ```
 - Now, if we see the output of the example, the value of y is 1. This is because the ```find()``` method searches for first element in the array that satisfies the condition specified.

 - The main differences between above examples is:
 * 1. ```filter()``` returns an array containing the element that satisfies the condition, but ```find() ```returns the element itself that satisfies the condition. 
 * 2. In ```filter()```, whole array is iterated despite the fact that the element being searched for is present at the beginning. But in ```find()```, as soon as the element that satisfies the condition is found, it gets returned.
------------------------------------------------
------------------------------------------------
# Question 4
## How do we check if a key exists in a JavaScript object?
Explanation: We can use the JavaScript ```in```operator to check if a specified property/key exists in an object. It has a straightforward syntax and returns ``true`` if the specified property/key does not exists it return ``false``.
* The syntax when using the ```in``` operator is:
```javascript
'keys' in obj
```
* Suppose we have an object which contains a user's details:

```javascript
let user = {
  name: "Shivam Shukla",
  age: 23
};
console.log('name' in user); // Returns true
console.log('birth' in user);// Returns false

// Output
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
true
false
```
Here If key exist it return `true` otherwise `false` .


------------------------------------------------
------------------------------------------------
# Question 5
## What is the output of the following code? Why?
``` javascript
var a = 3; 
var b = { a: 9, b: ++a }; 
console.log(a + b.a + ++b.b);

// Output
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js                  
18
```
- Explanation: Prefix operator increments the number and then returns it. 
  So the following expression will be calculated  as 4 + 9 + 5 = 18
------------------------------------------------
------------------------------------------------
# Question 6
##  What is the output of the following code? Why?

```javascript
const arrayOfOddNumbers = [1, 3, 5]; 
arrayOfOddNumbers[100] = 199; 
console.log(arrayOfOddNumbers.length);

// Output
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
101
```
- Explanation: The reason for this solution is as follows: 
JavaScript places `empty` as a value for indices 3 - 99.
That's why, when we set the value of the 100th index, the array looks like:
```javascript
    [1, 3, 5 , empty x 97 , 199]
```
We get the lenght as 101

------------------------------------------------

------------------------------------------------
# Question 7
## What is the output of the following code? Why?
```javascript
function checkAge(data) { 
    if (data === { age: 18 }) 
       { 
         console.log('You are an adult!'); 
       }
   else if (data == { age: 18 }) 
       { 
         console.log('You are still an adult.'); 
       } else { 
           console.log(`Hmm.. You don't have an age I guess`); 
       } 
      } 
    checkAge({ age: 18 });
// Output 
 mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
 Hmm.. You don't have an age I guess

```
- Explanation
When testing equality, primitives are compared by their value, while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory.

The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.

This is why both ``{ age: 18 } === { age: 18 }`` and ```{ age: 18 } == { age: 18 }``` return false.

------------------------------------------------
------------------------------------------------
# Question 8
## Remove Duplicate Items from Array using reduce function.

Explanation:
``` javascript
let arr = ["shivam", "shubham", "danish",
"saurabh", "shivam", "kaif", "shubham", "danish"];

function removeDuplicates(arr) {
let unique = arr.reduce(function (acc, curr) {
if (!acc.includes(curr))
    acc.push(curr);
return acc;
}, []);
return unique;
}
console.log(removeDuplicates(arr));
// Output:
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
[ 'shivam', 'shubham', 'danish', 'saurabh', 'kaif' ]

 ```
 * In the `reduce()` method, the array elements are reduced and combined into a final array based on the reducer function we pass.

 ------------------------------------------------
 ------------------------------------------------
 # Question 9 
 ## Sort an array of strings by length.
```javascript

Input: ["Testing", "The", "Code"]
Output: [“The", "Code", "Testing"]

// Code 

const arr = ["Testing", "The", "Code"]
arr.sort(function(a, b){
    return a.length - b.length;
  });
console.log(arr);

// Output:
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js     
[ 'The', 'Code', 'Testing' ]
```
- Explanation - In this Simple way we use `sort()` method on the arr of strings . The `sort` method takes comparison
  function as an argument , which compares two element of the array and determines their order. this comparison fn `(a,b) => a.length - b.length ` compares the lenght by subtraction , we got ascending order based on string. 
 ------------------------------------------------
 ------------------------------------------------
 # Question 10 
 ## Write a JavaScript function to check whether an `input` is an array or not.
 Explanation: In JS we check variable is an array by using 3 methods , these are:
* Using `isArray()` method
* Using `instanceof` operator 
* Using  checking the `constructor` type 
### Method 1. `isArray()` Method
Example 1: In this example, we will check if a given variable is an array or 
not using the` isArray()` method in JavaScript.
```javascript
function checkArray() {
  let str = "This is a string";
  let arr = [10, 20, 30, 40];

  let ans = Array.isArray(str);
  console.log("Output for String: " + ans);
  ans = Array.isArray(arr);
  console.log("Output for Array: " + ans);
}

checkArray();

// Output
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
Output for String: false
Output for Array: true

```
- It returns a true boolean value if the variable is an array and a false if it is not.

### Method 2 Using JavaScript `instanceof` operator
- Example: In this example, we will check if a given variable is an array or not using the instanceof operator in JavaScript. 
```javascript
function checkArray() {
  let str = "This is a string";
  let arr = [10, 20, 30, 40];

  let ans = str instanceof Array;
  console.log("Output for String: " + ans);
  ans = arr instanceof  Array;
  console.log("Output for Array: " + ans);
}

checkArray();

// Output
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
Output for String: false
Output for Array: true
```

- It returns a true boolean value if the variable is an array and a false if it is not.
### Method 3: Checking the constructor property of the variable
Example 3: In this example, we will check if a given variable is an array or 
not using the` constructor` method in JavaScript.
```javascript
function checkArray() {
  let str = "This is a string";
  let arr = [10, 20, 30, 40];

  let ans = str.constucture === Array;
  console.log("Output for String: " + ans);
  ans = arr.constucture ===  Array;
  console.log("Output for Array: " + ans);
}

checkArray();
// Output
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
Output for String: false
Output for Array: true
```
- It returns a true boolean value if the variable is an array and a false if it is not.
 ------------------------------------------------
 ------------------------------------------------
 # Question 11 
 ## Write a JavaScript function to sort the following array of objects by title value. 
### Sample object : 
 var library = [ { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} ];

 ```javascript
    var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];
let sortByTitle = library.sort((a,b) => a.title > b.title ? 1 : -1);  // Sort() method to sort array of objects by title value
console.log(sortByTitle);

// Output
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
[
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    libraryID: 3245
  },
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 }
]
```

 ------------------------------------------------
 ------------------------------------------------
 # Question 12
 ## Write a program to derive the provided output:-
 * Input: var arrOfObj=[{name: 'Rohan', physics: 20, chemistry: 18, math: 26}, {name: 'Geeta', physics: 29, chemistry: 30, math:  22}, {name: 'Kunal', physics: 27, chemistry: 25, math: 21}, {name: 'Abhishek', physics: 21, chemistry: 26, math: 23},   {name: 'Aashish', physics: 25, chemistry: 16, math: 18}];
 * Output: { Rohan: 64, Geeta: 81, Kunal: 73, Abhishek: 70, Aashish: 59 }
 
 ```javascript
 var arrOfObj = [
  { name: "Rohan", physics: 20, chemistry: 18, math: 26 },
  { name: "Geeta", physics: 29, chemistry: 30, math: 22 },
  { name: "Kunal", physics: 27, chemistry: 25, math: 21 },
  { name: "Abhishek", physics: 21, chemistry: 26, math: 23 },
  { name: "Aashish", physics: 25, chemistry: 16, math: 18 },
];
var totalMarks = {};

for (var i = 0; i < arrOfObj.length; i++) {
  var student = arrOfObj[i];
  var total = student.physics + student.chemistry + student.math; // Adding Marks of student
  totalMarks[student.name] = total;
}

console.log(totalMarks);

// Output
 mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js                  
{ Rohan: 64, Geeta: 81, Kunal: 73, Abhishek: 70, Aashish: 59 }
 ```

 ------------------------------------------------
 ------------------------------------------------
 # Question 13
 ## Write a JavaScript function to filter false, null, 0 and blank values from an array.
 Input: [“Test”, true, null, false, 0]
 Output: [“Test”, true]
 ```javascript
 function filterValues(array) {
    return array.filter((item) => item ); // filtered Null ,false , 0
    }
    var array =  ["Test", true, null, false, 0]
    console.log(filterValues(array));  
 // Output
  vmac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
  [ 'Test', true ]
 ```
 ------------------------------------------------
 ------------------------------------------------
 # Question 14
 ## Write a JavaScript program to count the number of arrays inside a given array.

  Input: [2,8,[6],3,3,5,3,4,[5,4]]
  Output: 2

  ```javascript
  const countArrays = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {  // Count no. of array
      count++;
    }
  }
  return count;
};

console.log(countArrays([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]]));

// Output 
  mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
  2 

  ```

 ------------------------------------------------
