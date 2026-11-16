// ===== Part 1: Coding Questions =====

// ===== Question 1 =====
console.log("===== Question 1 =====");
const text = "123";
const number = Number(text);
console.log(number + 7);
//or
const parseNumber = parseInt(text);
console.log(parseNumber + 7);

// ===== Question 2 =====
console.log("===== Question 2 =====");
function checkFalsy(value) {
    if (!value) return "Invalid";
    return value;

}
console.log(checkFalsy(0));
console.log(checkFalsy(5));

// ===== Question 3 =====
console.log("===== Question 3 =====");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// ===== Question 4 =====
console.log("===== Question 4 =====");
const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(function (n) {
    return n % 2 === 0;
});
console.log(evens);


// ===== Question 5 =====
console.log("===== Question 5 =====");
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(mergeArrays(array1, array2));

// ===== Question 6 =====
console.log("===== Question 6 =====");
function dayName(number) {
    switch (number) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid day number";
    }
}
console.log(dayName(1));
console.log(dayName(7));

// ===== Question 7 =====
console.log("===== Question 7 =====");
const words = ["a", "ab", "abc"];

const lengths = words.map(word => word.length);

console.log(lengths);
// ===== Question 8 =====
console.log("===== Question 8 =====");
function checkDivisibility(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both";
    }
    return "Not divisible by both";
}

console.log(checkDivisibility(15));
// ===== Question 9 =====
console.log("===== Question 9 =====");
const square = (num) => num * num;
console.log(square(5));

// ===== Question 10 =====
console.log("===== Question 10 =====");
const person = {
    name: "John",
    age: 25
};

function getPersonInfo(person) {
    const { name, age } = person;

    return `${name} is ${age} years old`;
}

console.log(getPersonInfo(person));

// ===== Question 11 =====
console.log("===== Question 11 =====");
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// ===== Question 12 =====
console.log("===== Question 12 =====");
function getMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

getMessage().then(message => {
    console.log(message);
});
// ===== Question 13 =====
console.log("===== Question 13 =====");
function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

console.log(findLargest([1, 3, 7, 2, 4]));
// ===== Question 14 =====
console.log("===== Question 14 =====");
function getKeys(obj) {
    return Object.keys(obj);
}

const employee = {
    name: "John",
    age: 30
};

console.log(getKeys(employee));

// ===== Question 15 =====
console.log("===== Question 15 =====");
function splitWords(str) {
    return str.split(" ");
}
console.log(splitWords("The quick brown fox"));

// ===== Part 2: Essay Questions =====
/*
1. forEach vs for...of

forEach:
- It is used to run a function on each element of an array.
- It does not return a new array.
- You cannot use break or continue inside it.

for...of:
- It is used to loop over the elements of any iterable, like arrays and strings.
- You can use break and continue.
- It gives you more control over the loop.

When to use each:
- Use forEach when you want to do something with every element in an array.
- Use for...of when you need to stop the loop early (break), skip elements (continue),
  use await inside the loop, or loop over something that is not an array, like a string.

Example:
const nums = [1, 2, 3, 4, 5];

for (const n of nums) {
    if (n === 3) break;
    console.log(n); 
}

nums.forEach((n) => {
    if (n === 3) break; 
});
////////////////////////////////////////////////////////////////////////////
2. Hoisting and the Temporal Dead Zone (TDZ)

Hoisting:
- Hoisting means JavaScript moves variable and function declarations
  to the top of their scope during compilation.

Example:
console.log(x); // undefined
var x = 10;

sayHi(); // "Hi"
function sayHi() {
    console.log("Hi");
}

Temporal Dead Zone (TDZ):
- TDZ is the period between entering a scope and initializing a let or const variable.
  Accessing the variable during this period causes an error (ReferenceError).

Example:
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
////////////////////////////////////////////////////////////////////////////
3. == vs ===

- == compares two values after performing type conversion if necessary.
- === compares both value and data type without type conversion.

Example:
5 == "5";  // true
5 === "5"; // false
////////////////////////////////////////////////////////////////////////////
4. try-catch

try-catch is used to handle errors and prevent the program from stopping unexpectedly.
- try: Contains the code that might cause an error.
- catch: Handles the error if one occurs.

Why it is important in async operations:
- Asynchronous operations like API requests may fail due to network errors
  or server problems. try-catch allows us to handle these errors properly.

Example:
try {
    JSON.parse("{bad json}");
} catch (error) {
    console.log("Error:", error.message);
}

Async example:
async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Request failed:", error.message);
    }
}
////////////////////////////////////////////////////////////////////////////
5. Type conversion vs coercion

- Type conversion: changing a data type manually using JavaScript functions.
- Type coercion: JavaScript automatically converts one data type into another
  during an operation.

Example:
Number("5") + 2; // 7    (conversion)
"5" + 2;         // "52" (coercion)
*/
