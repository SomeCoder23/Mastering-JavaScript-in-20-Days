## Day #5 of Mastering JavaScript
---

  ### The Learned Concepts:
- The first lessons consisted of learning about loading data from APIs with the help of the fetch function, promises -which have 3 states, pending, resolved, and rejected-, and the await operator which waits for a promise to return a result.
- Next, we learned about destructuring objects and arrays to declare more than one variable at once as well as the split() function which splits a string into separate parts according to the parameter passed in. We then put to test what we learned by completing more tasks in the dog quiz project.
- The instructor discussed async functions, which need to be awaited to obtain the result of the returned promise. We continued on to solve the rest of the TODOs in the doggo quiz project.
- Afterward, we discussed modules, and the import/ export functions which help us split up our code into separate files, as well as help with reusing the code. We talked about debugging with console.log/warn/error, then the instructor demonstrated how to utilize the browser debugger with breakpoints and the `debugger;` statement. She also introduced us to the try/catch error handling syntax. The lessons were concluded with discussions about different frameworks, Vanilla JavaScript, and a quick review of the many topics we covered in the course.

 
  ---
 ### Code Examples: 

 -The code we added to the doggo project:
```
// TODO 2
    // Given a URL such as "https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg"
    // return the breed name string as formatted in the breed list, e.g. "standard poodle"
    function getBreedFromURL(url) {
        let urlParts = url.split("/");
        //Destructuring Ex:
        let [breed1, breed2] = urlParts[4].split("-");
        return [breed2, breed1].join(" ").trim();
        
    }


    // TODO 3
    // Given a URL, fetch the resource at that URL, 
    // then parse the response as a JSON object,
    // finally return the "message" property of its body
    async function fetchMessage(url) {
        const response = await fetch(url);
        const {message} = await response.json();
           return message;
        /*fetch(url).then(async response => {
           const {message} = await response.json();
           return message;
       });*/
       
   }

    // Function to add the multiple-choice buttons to the page
    function renderButtons(choicesArray, correctAnswer) {

        // Event handler function to compare the clicked button's value to correctAnswer
        // and add "correct"/"incorrect" classes to the buttons as appropriate
        function buttonHandler(e) {
            if (e.target.value === correctAnswer) {
                e.target.classList.add("correct");
            } else {
                e.target.classList.add("incorrect");
                document.querySelector(`button[value="${correctAnswer}"]`).classList.add("correct");
            }
        }

        const options = document.getElementById("options"); // Container for the multiple-choice buttons

        // TODO 4
        // For each of the choices in choicesArray,
        for(let choice of choicesArray){
            let button = document.createElement("button");
            button.name = choice;
            button.value = choice;
            button.textContent = choice;
            button.addEventListener("click", buttonHandler);
            options.appendChild(button);
        }
        
    }

    // TODO 5
    // Asynchronously call the loadQuiz Data() function,     
    // Then call renderQuiz() with the returned imageUrl, correctAnswer, and choices 
    const [imgUrl, answer, choices] = await loadQuizData();
    renderQuiz(imgUrl, answer, choices);
```
The full project => [Doggo Quiz Game Project](https://github.com/SomeCoder23/Mastering-JavaScript-in-20-Days/blob/main/CodeExamples/DoggoGame.js)

---
 ### Coding Exercise Solutions:
 Here is my solution for the assignment of the day:

 [Go to Rick and Morty Characters List Page](https://github.com/SomeCoder23/Mastering-JavaScript-in-20-Days/tree/main/CodeExamples/Rick%26MortyAssignment)
 
