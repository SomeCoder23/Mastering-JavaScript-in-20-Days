## Day #4 of Mastering-JavaScript
---

  ### The Learned Concepts:

- We began today's lesson by talking about events and handlers, we discussed the addEventListener() method which takes 2 parameters, the event(click/dblclick/mouseover/mouseout) and the handler function which specifies what to do when that event occurs. The instructor then explained the event object, which could be passed into the handler function to provide us information on the element the event was performed on. 

- Next, the instructor dived into conditionals, logical operators, and loops. She demonstrated the different types of loops, how they operate and their components (for loop/ for…of loop/ while loop). Later, we talked about the map and filter methods which help process arrays in user-specified ways by looping over all the items. We went over string literals -which are strings between backticks `` that could hold variables inside ${} - and the spread syntax (...array) , as well.

- We implemented all of the new concepts we learned in our quiz project, then the instructor gave a description of our next project, a Dog Quiz game, which we later started working on and completed the first TODO.


  ---
 ### Code Examples: 

- Events and Handlers:
```
    const heading1 = document.getElementsByTagName("h1");
    heading1[0].addEventListener("mouseover", () => {
        heading1[0].textContent = "Hovering...";
    });
    heading1[0].addEventListener("mouseout", () => {
        heading1[0].textContent = "Quiz.js";
    });
```

 - Conditionals:
```
const fName = "Sarah";
const lName = "Zughyer";
if(fName.length > lName.length)
    console.log(`${fName} is longer than ${lName}.`);
else console.log(`${lName} is longer than ${fName}.`);
const isEmpty = (arr) => {
    return arr.length > 0;
}
```

- The rest of the TODOs from the quiz project:
```
// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
    for(let button of optionButtons){
        button.addEventListener("click", () => {
            
            // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element
            explanation.textContent = fact.explanation; 
            // TODO 7: Within the event handler function, 
            // Use a for loop to disable all the option buttons
            for(let button of optionButtons){
                disable(button);
            }
            // TODO 8: Within the event handler function,
            // Get the guessed value from the clicked button
            // Use a conditional to compare the guess to the fact's answer
            // and add the "correct"/"incorrect" class as appropriate
            
            if(isCorrect(button.value)){
                button.classList.add("correct");
            } else {button.classList.add("incorrect");}
        });
```
The full project => [Quiz Project](https://github.com/SomeCoder23/Mastering-JavaScript-in-20-Days/blob/main/CodeExamples/quizProject.js)

- The code we added to the [Doggo Quiz Game project](https://anjana.dev/javascript-first-steps/3-doggofetch-starter.html)
```
// TODO 1
    // Given an array of possible answers, a correct answer value, and a number of choices to get,
    // return a list of that many choices, including the correct answer and others from the array
    function getMultipleChoices(n, correctAnswer, array) {
        let choices = [correctAnswer];
        while(choices.length < n){
            let choice = getRandomElement(array);
            if(!choices.includes(choice))
                choices.push(choice);
        }
        shuffleArray(choices);
    }
```
The full project => [Doggo Quiz Game Project](https://github.com/SomeCoder23/Mastering-JavaScript-in-20-Days/blob/main/CodeExamples/DoggoGame.js)

---
 ### Coding Exercise Solutions:
 Here are my solutions for the coding exercises problems assigned for this day:
 
 -  [1st Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators)
```
function checkSign(num) {
  return (num > 0)? "positive": (num < 0)?"negative": "zero";
}
checkSign(10);
```
 -  [2nd Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code)
```
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes == 1) return names[0];
  if(strokes <= par - 2) return names[1];
  if(strokes == par - 1) return names[2];
  if(strokes == par) return names[3];
  //using the ternary operator:
  return (strokes == par + 1)? names[4]:(strokes == par + 2)? names[5]: names[6];
  return "Change Me";
  // Only change code above this line
}
golfScore(5, 4);
```
 -  [3rd Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)

[Link to 3rd exercise code.](https://github.com/SomeCoder23/Mastering-JavaScript-in-20-Days/blob/main/CodeExamples/D4_E3.js)

 -  [4th Exercise](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array)

[Link to 4th exercise code.](https://github.com/SomeCoder23/Mastering-JavaScript-in-20-Days/blob/main/CodeExamples/D4_E4.js)

---
