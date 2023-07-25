## Day #12 of Mastering JavaScript
---

  ### The Learned Concepts:
- Naming function expressions vs anonymous function expressions, the instructor gave some reasons why using named functions makes for more better and practical code, which include:
  - More reliable for self-referencing (like recursion)
  - Helpful when debugging stack traces
  - Aids in self-documenting
- The instructor also gave his opinion on why named functions are also better than the concise syntax of arrow functions.
- The instructor explains lexical scoping -scopes decided and fixed at compile time, don't change during run time, scopes being nested within each other, exists in most languages- and dynamic scoping. He introduced us to the principle of least exposure/privilege (to hide your variables in blocks) and the 3 problems it solves:
   1. Naming collision problems.
   2. Someone else can't misuse the variables.
   3. Prevents overlap, protect yourself for future refactoring.
- Then we disscussed IIFE, immediately invoked function expressions, which are used to invoke a function once or to turn statements into expressions. The instructor talked about function and block scoping and using the let keyword inside blocks instead of var.
- The instructor gave some advice about where it is best to use let and when to use var, and mentioned some differences between them, such that var can be resued in scopes while let cannot, and let is more utilized for local variables that aren't going to be used much further down in the code or for variables that are naturally blocked scope. At the end, the instructor demonstrated the use of explicit let blocks and how they could be helpful.
 
  ---
 ### Code Examples: 

 - Named function expressions example:
```
function printStudent(student){
	console.log(student.name, "(" + student.id + "):" + (student.paid? "Paid": "Not Paid"));
}

function sortByNames(student1, student2){
  if(student1.name > student2.name) return 1;
  else if(student1.name < student2.name) return -1;
  else return 0;

}

function printRecords(recordIds) {
	let students = [];
	recordIds.forEach(function addStudent(id){ students.push(studentRecords.find(student => student.id === id));});
  students.sort(sortByNames);
	students.forEach(printStudent);
}

function paidStudentsToEnroll() {
	let toEnroll = studentRecords.filter(function filterStudents(student){return student.paid && !currentEnrollment.includes(student.id);});
  let toEnrollIDs = toEnroll.map(function getID(student){return student.id});
  return [...currentEnrollment, ...toEnrollIDs];

}

function remindUnpaid(recordIds) {
  let unpaid = studentRecords.filter(function filterStudents(student){return !student.paid && recordIds.includes(student.id);});
  let unpaidIDs = unpaid.map(function getID(student){return student.id});
  printRecords(unpaidIDs);

}
```

-Arrow function example: 
```
function printRecords(recordIds) {
	let students = [];
	recordIds.forEach(id => { students.push(studentRecords.find(student => student.id === id));});
  students.sort((s1, s2) => {if(s1.name > s2.name) return 1;
  else if(s1.name < s2.name) return -1;
  else return 0;});
	students.forEach(student => console.log(student.name, "(" + student.id + "):" + (student.paid? "Paid": "Not Paid")));
}

function paidStudentsToEnroll() {
	let toEnroll = studentRecords.filter(student => student.paid && !currentEnrollment.includes(student.id));
  let toEnrollIDs = toEnroll.map(student => student.id);
  return [...currentEnrollment, ...toEnrollIDs];

}

function remindUnpaid(recordIds) {
  let unpaid = studentRecords.filter(student => !student.paid && recordIds.includes(student.id));
  let unpaidIDs = unpaid.map(student => student.id);
  printRecords(unpaidIDs);
}

```


---
 ### Coding Exercise Solutions:
 Here are my solutions for the coding exercises problems assigned for this day:
