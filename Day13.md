## Day #13 of Mastering JavaScript
---

  ### The Learned Concepts:
- The lessons began with a a brief mention of the const keyword, and semantic errors that accompany its usage. Const is similar to let, however it does not let variables to be reassigned, though you could still change arrays. The instructor voiced his opinion about only ising them for immutable primitive values.
- The instructor explained the concept of hoisting, disproving some myths' about the subject like the saying "let doesn't hoist", he made it clear that let infact does hoist but instead of initializing the variable to undefined like var the variable exists but is uninitialized, he demonstrated how hoisting is described (what people usually think hoisting does), declaring that it is actually different from what really happens. He mentioned the majority's opinion on hoisting, which usually dislike var hoisting but claim function hoisting is pretty useful. The instructor also talked about the origin of the TDZ error, temporal dead zone, which was actually created beacause of const(so it can't hold two different values, undefined before assigned to value and then the value itself) and then implemented for let and var as well.
- Next we talked about closures, which refers to a function's ability to retain access to its original lexical scope, even when executed outside of that scope. Closures preserve the link to the variables not the values they hold. The instructor then disscussed encapsulation (the hiding data and behaviour, control over visability) and the module pattern which highly depends on encapsulation (since modules have both private and public components) and closures. The lessons were concluded with an introduction into ES6 module syntax, which includes two different styles for importing modules.
 
  ---

 ### Coding Exercise Solutions:
 Here are my solutions for the coding exercises problems assigned for this day:

 - Advanced Scope:
    - Question #1: Change the function within the loop into an IIFE function, so that it creates a new instance everytime its called with separate variables.
    - Question #2: Move the declaration of array outside the loop.
      ```
      let array = [];
      for (let i = 0; i < 5; i++) {
      	array.push(i);
      	console.log("Current array is: ", array);
      }
      ```
    - Question #3: Change the keyword var to let for the i variable in the for loop.
      ```
      let functions = [];
      for (let i = 0; i < 5; i++) {
        functions.push(() => {
          console.log("Current value of i is:", i);
        });
      }     
      functions.forEach((func) => func());
      ```

 - Closures:
    - Question #1:
   ```
   function privateCounter(){
  	let counter = 0;
  
  	function increment(){
  		counter++;
  	}
  
  	function getCount(){
  		return counter;
  	}
  	return {increment, getCount};
    }
    
    let counter = privateCounter();
    counter.increment();
    console.log(counter.getCount());
    counter.increment();
    console.log(counter.getCount());
   ```

   - Question #2:
     ```
     function generateFibonacci(count){
    	let counter = 0;
    
    	function fibonacci(n) {
    		if (n <= 1) return n;
    		return fibonacci(n - 1) + fibonacci(n - 2);
    	}
     
    	function nextNum(){
      		if(counter >= count) return null;
      		else {
      			counter++;
      			return fibonacci(counter); }
      	}
      
      	return nextNum;
       }
      
      let genFibonacci = generateFibonacci(4);
      console.log(genFibonacci());
      console.log(genFibonacci());
      console.log(genFibonacci());
      console.log(genFibonacci());
      console.log(genFibonacci());
     ```
 
