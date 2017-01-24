// Declaring our variable's for this exercise

        // Input is pulled from "btn" Click
var userInput = document.getElementById("btn")  // This will pull the values from the form

var height;
/* ^^^^Changed rowHeight to height => More readable */

var characterCount;
/* ^^^^characterCount value */

var tree;
/* ^^^ This will be given the value of our spaces and characters */

var spaces;

function growTree() {
  height = parseFloat(document.getElementById("rowHeight").value)
  character = document.getElementById("character").value;
  var character_Number = 1
  var emptySpaces = height
    // ^^^^ We start the process by making the var emptySpaces = the input height
  if (character.length === 1 && height > 0) {
    /// ^^^^ WILL NOT EXECUTE WITHOUT PROPER INPUT
    for (var i = 0; i < height; i++) {
        // ^^^ common iteration with counter i = 0 up to 1 < height
      spaces = " ".repeat(emptySpaces);
          //  This is going to give us the amount of spaces to begin with and manipulate
      var character_Placement = character.repeat(character_Number);
          // gives us the amount of characters needed
      tree = spaces + character_Placement;
        // combines the spaces and characters
      console.log("Please :", tree);
      emptySpaces -= 1;
      character_Number += 2;
      // NOW FOR THE NEXT LOOP We take away the first space and push 2 more
    }
}
  else {
    alert("Please enter a Number greater than 0 for the height and a single character");
    clear()
  }
}

btn.addEventListener("click", growTree);
