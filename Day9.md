## Day #9 of Mastering JavaScript
---

  ### The Learned Concepts:
  - Today's lesson began with a thorough introduction about OOP, objects and classes, their importance to programming, and how they make coding more easier, efficient, and more readable.
  - We were introduced to objects and dot notation. The instructor demonstrated how to create an object, and how to make working with them more efficient by generalizing them to avoid breaking the DRY principle, for which he mentioned multiple solutions.
    - Generating objects by functions.
    - The prototype chain. The instructor disscussed the hidden `__proto__` property, the implicit .this parameter to access objects, the default .prototype property, the hasOwnProperty() method to check if an object has a certain property. The instructor later explained in detail what would happen if we tried to access an objects property with this inside a function inside the function it was called with, in which case it would return to pointing to it's default value, the global object, he offered a solution for that as well, however if the second function is an arrow function apperently this problem does not occur.
    - The third solution is using the `new` keyword, which automates all the hard work. He thoroughly explained how it works behind the scenes, from automatically creating a new empty object, storing it into the this parameter, setting `__proto__` to point to the function which is being run, and then finally automatically returning `this`. We then discussed the benefits and problems of this solution.
    - The last solution was to use classes, via the `class` keyword. It works the same as `new` behind the scenes, however it makes code more readable and helps to write less code.
 
  ---
 ### Code Examples: 

I'm sleepy 

---
 ### Coding Exercise Solutions:
 Here are my solutions for the coding exercises problems assigned for this day:
