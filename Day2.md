## Day #2 of Mastering JavaScript
---

  ### The Learned Concepts:
  - Todays lesson began with discussing expressions and variables. We got to know their definitions and how they are connected, we also learned how JavaScript evaluates expressions step by step. The instructor introduced variables, explaining their declaration and assignment to values in detail, as well as valid names for variables. We also compared between var, let and const.
    
  - The next lesson consisted of learning about arrays, how they are arranged and evaluated by JavaScript, and mutability. The instructor also mentioned various methods that can be performed on arrays, such as: pop, push, sort, join, etc... She differentiated between the push() and concat() functions, and between mutable(arrays) and immutable(string) data.

  - We then explored objects, explaining their properties(properties pointing to values or methods), comparing between objects and strings, we were also given some examples of built-in objects (e.g. document, console, math). The instructor visualized what happend when objects are created or accessed. She also introduced us to `this` and nested objects. At the end we implented what we learned on a tic-toe demo on the browser, with DOM.
  ---
 ### Code Examples: 

Expressions & Variables:
- `const test = "This can't be changed";`
- `let test2 = "This can be changed";`
- `let item = document.getElementById("item");`
- `var answer = 8 * (7 + 9) / (5 - 3);`

Arrays
```
let myArray = ["hello", 12, "bye", 0.2, false];
console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray.indexOf(0.2));
console.log(myArray.includes("Everything"));
let lastItem = myArray.pop();
myArray.push("something");
console.log(myArray);
console.log("Last Item: " + lastItem);
console.log("Sorted Array: " + myArray.sort());
console.log(myArray.join(" / "));
console.log(myArray.concat(["newItem", 80]));
```
Objects
```
const myObject = {
    name: "Sarah Zughyer",
    age: 21,
    address: { city: "Hebron", country: "Palestine"},
    hobbies: ["sleeping", "watching movies", "reading novels"],
    greet: function(){ console.log("Hello! My name is " + this.name+ "!") }
}
console.log(myObject);
myObject.greet();
myObject['hobbies'].push("playing games");
myObject.favoriteColor = "Teal";
console.log(myObject);
```

---
 ### Coding Excercise Solutions:
 Here are my solutions for the coding exercises problems assigned for this day:
 -  [1st Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup)
 ```
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
    for(let i = 0; i < contacts.length; i++){
      if(contacts[i]["firstName"] === name){
        if(contacts[i].hasOwnProperty(prop))
          return contacts[i][prop];
        else return "No such property";
      }

    }
    return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
```

 -  [2nd Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice)
 ```
function forecast(arr) {
  // Only change code below this line
  return arr.slice(2, 4);
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

 -  [3rd Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator)
 ```
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());
```
---
