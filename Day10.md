## Day #10 of Mastering JavaScript
---

  ### The Learned Concepts:
  - The lessons began with an introduction of the importance of deeply understanding your JavaScript code and how it's designed to write more efficient code with less bugs, and make better usage of this language. He discussed the pillars of JavaScript, which include: types, scope, and objects.
  - We then dived into the types of values in Javascript, talking first about the primitive types: undefined, string, number, boolean, object, and symbol (new, came with ES6, used for psuedo private keys on objects), then about "types" that behave like types but aren't, such as: null, array, function, etc... He mentioned that variables don't have types only values do, as well.
  - We then discussed the typeof operator, which returns a string from a short pre-determined enum list, the instructor brought to light how it has weird behaviour sometimes, such as if used with a null value it returns "object" but with function it returns "function". He showed how it could be used to differentiate between number and bigInt, then explained the difference between undefined(variable initialized but is not yet defined), undeclared(variable has never been created), and uninitialized(variable is not yet initialized).
  - After that, the instructor talked about 3 different special values:
     - NaN: it is type of number but evaluates to invalid number, can never equal itself and returns Nan to any mathematical equation its used in.
     - isNan: used to check if number is invalid, however it coerces the passed in argument value to number, so if it is a string it evaluates to Nan, to avoid this it is better to used Number.isNan().
     - Negative 0: which can be used to indicate the direction of movement, like in games or stocks. However, it also comes with weird behaviour that could cause bugs, such as in this statement: `-0 === 0` it evaluate to true, even though that is definitely not the case, to avoid this problem use `Object.is(0, -0);` this will evaluate to false.
  - At the end, the instructor briefly mentioned fundamental objects (aka, built-in objects or natice functions), and when we should use the new keyword and when not to.
 
  ---
 ### Code Examples: 

```
//Create our own Object.is function
if(!Object.is || true){
  Object.is = (num1, num2) => {
    const checkNegativeZero = (num) => {
      return (1 / num === -Infinity);
    };

    const checkNan = (num) => {
      return num != num;
    }
    
    const isNeg1 = checkNegativeZero(num1);
    const isNeg2 = checkNegativeZero(num2);

    if(checkNan(num1) && checkNan(num2))
      return true;
    else if(isNeg1 || isNeg2)
      return isNeg1 && isNeg2;
    else return num1 == num2;
    
  }
}
```

---
 ### Coding Exercise Solutions:
 Here are my solutions for the coding exercises problems assigned for this day:

- Question #1:
```
function convertStringToNumber(input) {
  
  if(typeof input != "string")
      return {value: input, type: typeof input};
  else return +input;

}
const test = convertStringToNumber("3");
console.log(test);
console.log(convertStringToNumber(test));
```
- Question #2:
```
const checkNaN = (value) => {
 return value != value;
}
```
- Question #3:
```
function isEmptyValue(value) {
  const type = typeof value;
  if(type === "string")
    return value.length == 0;
  else if(type === "undefined")
    return true;
  else return value === null; 
}
```
- Question #4:
```
function compareObjects(input1, input2) {
  if(typeof input1 != "object" || typeof input2 != "object")
    return [input1, input2];
  else if(Object.keys(input1).length != Object.keys(input2).length) 
    return false;
  else{
      for (let key in input1) {
        if (!(input2.hasOwnProperty(key) && input2[key] === input1[key]))
            return false;
      }
      return true;
  }
}
```
- Question #5:
```
const complexCoercion = (input) => {
  let type = typeof input;
  if(type === "undefined" || input === null)
   return false;
  else if(type === "number"){
    input = String(input);
    type = "string";
  }
  if(type === "string")
    return Boolean(input);
}
```
 
