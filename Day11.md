## Day #11 of Mastering JavaScript
---

  ### The Learned Concepts:

- Todays lessons began with a talk about Typescript and Flow which grant JavaScript(a dynamic type system) static typing functionality. We discussed their benefits/pros (catching type related mistakes, communitcating type intent, providing IDE feedback, they are familiar to other languages' type systems, they are growing more popular, very sophisticated) ,and their cons(inferencing is best-guess not guarantee, annotations are optional, theres uncertainty in the parts which aren't typed, non-JS-standard syntax, they require a build process, they can be intimidating to beginners, they focus more on static types than value types). The instructor concluded this section with his opinion on the topic.
- Then we dived into scopes and lexaical scope in Javascript, with some mention about compilier theory and how JS compiles the code and sorts variables onto different scopes. The instructor used a metophor to help with understanding this concept, which showed how scopes are like colored buckets and variables are colored marbles which get sorted into their correct bucket, and all this sorting of variables and determining their scope happens at compile time not run-time. The instructor explained step by step what happens durring compile time(declaration of variables) and execution time(assigning variables/ target and source references). He also mentioned dynamically creating a variable declaration at run-time, which creates a global variable.
- Next, the instructor explained "strict mode", which does not allow undeclared variables to create declarations dynamically (returns reference error). We also talked about the different meanings of undefined (variable exists but has no value) and undeclared(variable does not exist).
 
  ---

 ### Coding Exercise Solutions:
 Here are my solutions for the coding exercises problems assigned for this day:

- Static Typing:
  - Question #1:
```
```

- Scope and hoisting questions:
   - Question #1: The answer is 'D' because variables declared with with either let and const are blocked scoped, hence they do not exist outside the curly brackets, unlike var which does. The program stops executing after a reference error and so there is only one.
   - Question #2: The answer is 'A' because only variables declared with var have the hoisting feature (let does but variable becomes uninitialized), and so variable a is initialized as undeclared since it hasn't been assigned to a value yet.
   - Question #3: The answer is 'C' because only var is not block scoped and so when 'a' is declared within the if-statement the outer 'a' changes as well.
 

