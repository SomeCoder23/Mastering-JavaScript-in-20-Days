## Day #4 of Mastering JavaScript
---

  ### The Learned Concepts:
 
  ---
 ### Code Examples: 


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
