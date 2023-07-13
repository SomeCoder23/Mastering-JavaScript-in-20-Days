## Day #8 of Mastering JavaScript
---

  ### The Learned Concepts:
  - Today's course began with an introduction into how JavaScript achieves asynchronousity in ES5 and how everything works step by step under the hood.
  - The instructor showed the difference between JavaScript features and the web browser features and explained how JS works with the browser under the hood, mentioning some "facade" functions that are tied to the browser's features such as setTimeout and fetch. The instructer then concluded this part of the lesson with the problems and benefits of ES5's asynchronous code. 
  - Then we were introduced to one of the most important feature of ES6, promises which hold data to use later in the code, when the function is ready. He explained the use of the asynchronous, "facade" function fetch(), which gets data from the web. As well as the "then" method which helps to access the fetched data.
  - The instructor went into detail describing bit by bit how everything works under the hood, explaining the event loop, the callback queue (which hold all the ready callbacks, which are returned by the facade functions like setTimeout and aren't connected with the memory in js) and the microtask queue(which holds the functions attached to promise objects, like functions used in the fetch().then method, this queue is prioritized over the callback queue).
  - Later, we disscussed error handling with promises and their problems and benefits.
 
  ---
 ### Code Examples: 

Asynchronous examples:
 ```
function delayedGreet() {
  setTimeout(() => console.log("Welcome!"), 3000);
}

function limitedRepeat() {
  let counter = 0;
  const printHi = () => {
    counter++;
    console.log("hi for now");
    
    if(counter >= 5) clearInterval(interval);
  
  }
  const interval = setInterval(printHi, 1000);
}
 ```


---
 ### Coding Exercise Solutions:
 Here are my solutions for the coding exercises problems assigned for this day:
 [Coding Exercises](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day3-tasks/tasks.md):

 - Question #1:
```
   const executeInSequenceWithCBs = (tasks, callback) => {
    let messages = [];
    let i = 0;

    function execute(i){
        if(i >= tasks.length)
            return callback(messages);
        else {
            tasks[i](message => {
            messages.push(message);
            return execute(++i)});
        }
    }

    execute(i);
  }

 executeInSequenceWithCBs(asyncTasks, messages => console.log(messages));
```
   
- Question #2:
```
  const executeInParallelWithPromises = (apis) => {
    let results = [];

    for(let i = 0; i < apis.length; i++){
        fetch(apis[i].apiUrl)
        .then(data => {
            results.push({...apis[i], apiData: data})
            if(i === apis.length - 1) 
                return printResults(results);
        });
    }

  }

 const printResults = (results) => console.log(results); 

 executeInParallelWithPromises(apis);
  
```
   
- Question #3:
```
   const executeInSequenceWithPromises = (apis) => {
    const results = [];
    let promiseSeq = Promise.resolve();
  
    apis.forEach((api) => {
      promiseSeq = promiseSeq.then(() => {
        return fetch(api.apiUrl)
          .then((response) => response.json())
          .then((data) => {
            results.push({...api, apiData: data})
          });
      });
    });
  
    return promiseSeq.then(() => results);
  };
  
  executeInSequenceWithPromises(apis).then(results => console.log(results));
```
  
