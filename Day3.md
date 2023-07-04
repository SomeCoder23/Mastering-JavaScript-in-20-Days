## Day #3 of Mastering JavaScript
---

  ### The Learned Concepts:
  - The instructor provided an overview of the quiz project we are going to implement over the next courses. We started coding the first TODOs related with the newly learned concepts from previous lectures.
  - We discussed functions in great detail, going over arguments, parameters (and naming them), return values and functions with no return value. Arrow functions were explained as well, with a few excercises given to sum up all we leaned about functions at the end. Then we added some new functions to our quiz project -the code is provided below.
  - The instructor thoroughly explained scopes, demonstrating how variables can be accessed in a certain scope as well as the difference between global and local scopes with various examples. She discussed the function and block scopes, and compared between var and let concerning scopes. They behave the same according to function scopes, however, when using var variables in block scopes they behave differently than let variables.
  ---
 ### Code Examples: 

 - The code we added to the [quiz project](https://anjana.dev/javascript-first-steps/2-jsquiz-starter.html):
 ```
 // TODO 1: Declare & assign variables pointing to the corresponding element(s)
    const statement = document.getElementById("statement");
    const optionButtons = document.getElementById("options").children;
    const explanation = document.querySelector("#explanation");

    // TODO 2: Declare & assign a variable called fact
    let fact = {
        statement: "const variables are mutable",
        answer: false,
        explanation: "Variables declared with const can't be changed, they are constant, immutable."
    }
   
    // TODO 3: Set the text of the statement element to the fact's statement
    statement.textContent = fact.statement;  

    // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
    const disable = (button) => button.setAttribute("disabled", "");
    function enable(button) {
        button.removeAttribute("disabled");
    }


    // TODO 5: Declare an isCorrect function that compares a guess to the right answer
    const isCorrect = (guess) => guess == fact.answer.toString();
```
The full project => [Quiz Project](https://github.com/SomeCoder23/Mastering-JavaScript-in-20-Days/blob/main/CodeExamples/quizProject.js)

- Scope code examples:
```
  let globalVar = "This is a global variable"; 
  function narrowScope() {
    console.log(globalVariable);
    let localVar = "This is a variable from within the function.";
   }
   narrowerScope();
   console.log(localVar); //we will get an error here: localVar not defined
```

---
 ### Coding Excercise Solutions:
 Here are my solutions for the coding exercises problems assigned for this day:
 -  [1st Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)
 ```
function timesFive(num){
  return num * 5;
}
```

 -  [2nd Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions)
 ```
// Declare the myGlobal variable below this line

const myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

 -  [3rd Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/local-scope-and-functions)
 ```
function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
 -  [4th Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs--local-scope-in-functions)
 ```
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
```
 -  [5th Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line)
 ```
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  let removedItem = arr.shift();
  return removedItem;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```
---
