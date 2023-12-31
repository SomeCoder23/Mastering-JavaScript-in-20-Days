<!DOCTYPE html>
<!-- saved from url=(0063)https://anjana.dev/javascript-first-steps/2-jsquiz-starter.html -->
<html lang="en-US"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <title>Quiz.js</title>
    <style>
        body {
            margin: 1rem auto;
            padding: 3rem;
            font-family: sans-serif;
        }
        header {
            width: 50%;
            margin: 1em auto;
        }
        main {
            min-width: 25rem;
            max-width: 50%;
            margin: 0px auto;
            display:flex; 
            flex-direction: column;
        }
        #statement {
            border: 1px solid black;
            border-radius: 0.5rem;
            box-shadow: 5px 5px 5px gray;
            padding: 1rem;
            font-size: x-large;
            text-align: center;
            margin: 1rem 0px;
            min-height: 2em;
        }
        #explanation {
            padding: 1rem;
            text-align: center;
        }
        #options {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        button {
            padding: 0.5rem;
            font-size: medium;
            border-radius: 5px;
        }
        .correct {
            background-color: lightgreen;
        }
        .incorrect {
            background-color: lightpink;
        }
    </style>
  </head>
  <body data-new-gr-c-s-check-loaded="14.1113.0" data-gr-ext-installed="">
    <header>
    <h1>Quiz.js</h1>
    <p>Do you know JS? Find out!</p>
    </header>

    <main>
    <div id="statement">
        
    </div>

    <div id="options">
        <button name="true" value="true">true</button>
        <button name="false" value="false">false</button>
    </div>

    <div id="explanation">

    </div>

    </main>

  

  <script type="text/javascript">


    // TODO 1: Declare & assign variables pointing to the corresponding element(s)
    const statement = document.getElementById("statement");
    const optionButtons = document.getElementById("options").children;
    const explanation = document.querySelector("#explanation");

    // TODO 2: Declare & assign a variable called fact
    let fact = {
        statement: "const variables are mutable",
        answer: false,
        explanation: "Variables declared with const can't be changed, they are constant, immutable."
    }
   
    // TODO 3: Set the text of the statement element to the fact's statement
    statement.textContent = fact.statement;  

    // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
    const disable = (button) => button.setAttribute("disabled", "");
    function enable(button) {
        button.removeAttribute("disabled");
    }


    // TODO 5: Declare an isCorrect function that compares a guess to the right answer
    const isCorrect = (guess) => guess === fact.answer.toString();


    //Events and Handlers exercise:
    const heading1 = document.getElementsByTagName("h1");
    heading1[0].addEventListener("mouseover", () => {
        heading1[0].textContent = "Hovering...";
    });
    heading1[0].addEventListener("mouseout", () => {
        heading1[0].textContent = "Quiz.js";
    });

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
    

            

    }

  </script>

</body><grammarly-desktop-integration data-grammarly-shadow-root="true"><template shadowrootmode="open"><style>
  div.grammarly-desktop-integration {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select:none;
    user-select:none;
  }

  div.grammarly-desktop-integration:before {
    content: attr(data-content);
  }
</style><div aria-label="grammarly-integration" role="group" tabindex="-1" class="grammarly-desktop-integration" data-content="{&quot;mode&quot;:&quot;limited&quot;,&quot;isActive&quot;:false,&quot;isUserDisabled&quot;:false}"></div></template></grammarly-desktop-integration></html>
