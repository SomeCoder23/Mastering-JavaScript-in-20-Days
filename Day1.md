## Day #1 of Mastering JavaScript
---

  ### The Learned Concepts:
  *   Today being the first day in my mastering javaScript journey, the course I watched on Frontend Masters started with an introduction to the language, it's definition, and how it relates to HTML/CSS while also mentioning it's history and how it was created years ago. 
  * The next part of the course dived into DOM, Document Object Model. The instructor explained many different functions related to the "document" object. We learned how to maniplulate and edit the html/css of a page via the console on the browser.
  
  * The instructor disscussed the various values, data types and operators of JavaScript, explored the two different kinds of data types, primitive (numbers/strings/booleans/null/undefined) and objects, helped us differentiate between null and undefined as well as between the == operator and === operator. She also demonstrated the use of a few built-in functions on strings(e.g. indexof, includes...etc.).
  
 ### Code Examples: 
 DOM functions we used in the browser:
- `document.title`
- `document.body`
- `document.body.children`
- `document.getElementById("id");`
- `document.querySelector("#id")`
- `document.getElementsByTagName("name")`
- `document.querySelectorAll("name")`
- `document.getElementsByClassName("class")`
- `document.querySelectorAll(".class")`
- `document.getElementsByTagName("name").length`
- `document.getElementsByTagName("name").textContent`

 How to manipulate elements in the browser with DOM:
- `document.title = "My Title";`
- `document.getElementById("id").textContent = "My Content";`
- `document.getElementById("id").append("...some words.");`

 Working with strings:
- `"Hello, World!".indexOf("e");`
- `"Hello, World!".includes("Hello");`
- `"Hello, World!".startsWith("Hell");`
 ### Coding Excercise Solutions:
 Here are my solutions for the coding exercises problems assigned for this day:
 -  [1st Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication)
 ``` let a = 5;
let b = 12;
let c = 4.6;
a *= 5;
b *= 3;
c *= 10;  ```

 -  [2nd Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator)
 ```let myStr ="This is the first sentence. ";
myStr += "This is the second sentence."```

 -  [3rd Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-bracket-notation-to-find-the-nth-to-last-character-in-a-string)
 ``` // Setup
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];  ```
 
