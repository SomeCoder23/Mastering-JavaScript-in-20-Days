## Day #6 of Mastering JavaScript
---

  ### The Learned Concepts:
  - The course started with the instructor defining the agenda, main concepts and purpose of the course.
  - We discussed the core components/principles of JavaScript, which include:
      - Memory: To store data or even code to run later (functions).
      - Thread of Execution: To read code line by line and run the program and functions, to create execution contexts for functions which hold all data used for that single function and deletes them once done.
      - Call Stack: To keep track of the running functions and where the thread of execution currently is.
  - We then discussed the importance of generalizing functions to avoid breack the DRY (Don't Repeat Yourself) principle, we can achieve that in multiple ways, using higher order functions and callbacks being one of the most efficient. Higher order functions are functions that take other functions as parameters or pass out a function, while a callback function is the function passed in to the higher order function.
  - The instructor explained anonymous and arrow functions, how they work under the hood, and how they increase legibility.
  - Lastly, he emphasized the importance and effectiveness of pair programming to become a more successful software engineer by verbalizing to others your code in an understandable manner and other ways. He cautioned about falling into one of the two bad types of programmers:
       - The Researcher: The one who reads a lot about the problem or concept without doing much coding to fix it.
       - The Stack Overflower: The one who copies and pastes the code of the internet trying to find the solution without really understanding it.
 
  ---
 ### Code Examples: 

  - Higher Order Functions & Callbacks:
    ```
    function forEach(array, callback) {
      array.forEach(item => callback(item));
    }

    function reduce(array, callback, initialValue) {
      array.forEach(item => initialValue += callback(item))
        return initialValue;
     }
  
    console.log(reduce([1, 4, 2, 3], num => num * 2, 1));
    ```


---
 ### Coding Exercise Solutions:
 Here are my solutions for the coding exercises problems assigned for this day:
 
 -  [1st Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)
```
const squareList = arr => {
  let newArr = arr.filter(num => num > 0 && Number.isInteger(num));
  newArr = newArr.map(num => num*num);
  return newArr;
};
```

 -  [2nd Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)
```
function urlSlug(title) {
 title = title.toLowerCase();
 title = title.trim();
 let url = title.split(/\s+/);
 return url.join("-");

}

```

 -  [3rd Exercise](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day1-tasks/tasks.md)
     - Question 1: Functions and Callbacks:
      ```
      const mapAsync = (arr, callback) => {
    return new Promise((resolve, reject) => {
        const newArr = arr.map(item => callback(item));
        resolve(newArr);

        if(newArr.length <= 0) 
            reject("Error: Failed to map array or passed in array empty."); 
        });
      }
      
      const someArray = [3, 12, 10, 2.5];
      console.log("Original Array:"); 
      console.log(someArray);
      const squareNum = (num) => num * num;
      mapAsync(someArray, squareNum)
          .then(answer => {
              let result = answer;
              console.log("New Array: ");
              console.log(result);
          })
          .catch(error => console.log(error));
      ```
     - Question 2: Call Stack and Recursion
    ```
    const sumRange = (start, end) => {
      if(end - start === 1) return end + start;
  
      else return end + sumRange(start, --end);
    }
    
    console.log(sumRange(1, 5)); //should be 15
    ```
—
