## Day #7 of Mastering JavaScript
---

  ### The Learned Concepts:
  - Todays course is all about closures, which are one of the most important concepts in JavaScript. We began with an introduction about what closures are and how JavaScript makes use of them. Closures grant functions persistant memories or assciated cashe which helps adds the memorization feature to functions. This aids greatly in writing more professional code and functions, and comes with many many practical applications which we disscussed as well. And this all depends on a function returning a function.
  - Once you assign a variable a function returned from another function, it becomes saved in that larger scope to use later on. It cuts all relations to the original function which returned it, however, all associated data gets saved with the returned funciton, in what is sometimes refered to as a "backpack", or in more technical terms, Closed Over Variable Environment (COVE). This feature could also be called Persistent Lexical Scoped Referenced Data (P.L.S.R.D).
  - The instructor explained how the scoping in JavaScript is lexical(the physical positioning on the page) and static, which means that what data could be accessed by a function depends on where it is saved.
  - Multiple closure instances were also discussed, the instructor explained in great detail how multiple closure instances don't affect eachother and how each new instance creates its own "backpack" to store its data, which could only be accessed by the function itself. 
  ---
 ### Code Examples: 

 Closures:
 ```
 function createFunction(){
    function hello(){
        console.log("hello");
      }
      
      return hello;
}

const function1 = createFunction();
function1();

function addByX(x) {
  function add(num){
    return x + num;
  }
  
  return add;

}

 const addByTwo = addByX(2);
 console.log(addByTwo(1)); // => should return 3
 console.log(addByTwo(2)); // => should return 4
 ```


---
 ### Coding Exercise Solutions:
 Here are my solutions for the coding exercises problems assigned for this day:
 
 [Coding Exercises](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md)
 - Question #1
 ```
const createCounter = start => {

    function increment(){
        return ++start;
    }
    return increment;
 }

const count = createCounter(3);
console.log(count());
 ```
- Question #2
 ```
 const calculateAverage = nums => {

    function averageCalc(){
        let sum = 0;
        nums.forEach(num => sum += num);
        return sum / nums.length;
    }
    return averageCalc;
}

const average = calculateAverage([1, 2, 3, 4, 5]);
console.log(average());
 ```
- Question #3
 ```
 const powerOf = base => {

    function power(exp){
        let answer = 1;
        for(let i = 0; i < exp; i++){
            answer *= base;
        }
        return answer;
    }
    return power;
}

const calculate = powerOf(2);
console.log(calculate(4));

 ```
- Question #4
 ```
const compose = functions => {

    functions.reverse();

    function applyFuns(value){
        let result = value;
        functions.forEach(func => result = func(result));
        return result;
    }

    return applyFuns;
}

const multiplyBy2 = num => num * 2;
const factorial = num => {
    let answer = 1;
    for(let i = 1; i <= num; i++)
        answer *= i;
    return answer;
}

const someFunc = compose([multiplyBy2, num => --num, factorial]);
console.log(someFunc(4)); //should be 46
 ```
--- 

