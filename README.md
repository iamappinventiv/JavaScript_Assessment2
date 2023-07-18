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

We can use the includes() method in JavaScript to check if an item exists in an array

* The includes() method returns true if an array contains a specified value.

* The includes() method returns false if the value is not found.

* The includes() method is case sensitive.

------------------------------------------------
------------------------------------------------
# Question:2 
## What is the difference between .map() and .forEach()?

Explanation: The map method receives a function as a parameter. Then it applies it on each element and returns an entirely new array populated with the results of calling the provided function.
This means that it returns a new array that contains an image of each element of the array. It will always return the same number of items.
```javascript
// Use case of Map function
const arr = [5, 4, 3, 2, 1]
console.log(arr.map(x => x * x));

// Output:
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
[ 25, 16, 9, 4, 1 ]
```
Like map , the forEach() method receives a function as an argument and executes it once for each array element. However, instead of returning a new array like map, it returns undefined.

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
Difference between ```map() ``` and  ```forEach()``` is the returning value. The ``` forEach() ``` method returns undefined and map() returns a new array with the transformed elements. Even if they do the same job, the returning value remains different.

```javascript
const myAwesomeArray = [1, 2, 3, 4, 5]
console.log(myAwesomeArray.forEach(x => x * x));
console.log(myAwesomeArray.map(x => x * x));

//Output
mac@macs-MacBook-Pro JavaScript_Assessment2 % node index.js
undefined
[ 1, 4, 9, 16, 25 ]
```
------------------------------------------------