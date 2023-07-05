Skip to content
SomeCoder23
/
Mastering-JavaScript-in-20-Days

Type / to search
Command palette
Create new...
Issues
Pull requests
You have no unread notifications
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Open a pull request
Create a new pull request by comparing changes across two branches. If you need to, you can also .
 
...
 
  Able to merge. These branches can be automatically merged.
@SomeCoder23
Update Day4.md
 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue, pull request, or discussion
Add saved reply
Slash commands
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
Remember, contributions to this repository should follow our GitHub Community Guidelines.
Reviewers
No reviews
Assignees
No one—
Labels
None yet
Projects
None yet
Milestone
No milestone
Development
Use Closing keywords in the description to automatically close issues

Helpful resources
GitHub Community Guidelines
 1 commit
 1 file changed
 1 contributor
Commits on Jul 5, 2023
Update Day4.md

@SomeCoder23
SomeCoder23 committed 11 minutes ago
Copy the full SHA
View commit details
Browse the repository at this point in the history
Showing  with 73 additions and 0 deletions.
  73 changes: 73 additions & 0 deletions73  
Day4.md
@@ -2,10 +2,83 @@
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
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Comparing main...SomeCoder23-patch-1 · SomeCoder23/Mastering-JavaScript-in-20-Days
