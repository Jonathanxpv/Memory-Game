let gameContainer = document.getElementById("game");
let card1 = "";
let card2 = "";
let cardsFlipped = 0;
let noClick = false;
let gameStarted = false;

btn.addEventListener("click", startGame)

function startGame (event){
  gameStarted = true;
  let timeRemaining = 31;
  const timer = setInterval(function() {
    timeRemaining--;
    document.getElementById('time').innerHTML= timeRemaining;
    if (timeRemaining === 0) {
      clearInterval(timer);
      alert("Time's up!");
    }
  }, 1000);
}


//Could not get reset button to function due to time constraints.  

  





const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "pink",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "pink"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);
createDivsForColors(shuffledColors);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}



// TODO: Implement this function!
function handleCardClick(event) {
  if (!gameStarted) return;
    if (noClick) return;
    if (event.target.classList.contains("flipped")) return;
    

    let currentCard = event.target;
    currentCard.style.backgroundColor = currentCard.classList[0];

    if (!card1 || !card2) {
        currentCard.classList.add("flipped");
        card1 = card1 || currentCard;
        card2 = currentCard === card1 ? "" : currentCard;
        
      }
      
      if (card1 && card2) {
        noClick = true;
        
        let gif1 = card1.className;
        let gif2 = card2.className;
    
        if (gif1 === gif2) {
          cardsFlipped += 2;
          card1.removeEventListener("click", handleCardClick);
          card2.removeEventListener("click", handleCardClick);
          card1 = null;
          card2 = null;
          noClick = false;
         
        } else {
          setTimeout(function() {
            card1.style.backgroundColor = "";
            card2.style.backgroundColor = "";
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            card1 = null;
            card2 = null;
            noClick = false;
          }, 1000);
          
        }{
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  if (cardsFlipped === COLORS.length) alert("YOU WIN!");
}



      }}
      let resetButton = document.getElementById("resetButton");

      resetButton.addEventListener("click", function() {
        // Reset variables
        gameStarted = false;
        card1 = "";
        card2 = "";
        cardsFlipped = 0;
        noClick = false;
      
        // Remove flipped class from all cards
        let allCards = document.querySelectorAll(".flipped");
        allCards.forEach(card => {
          card.style.backgroundColor = "";
          card.classList.remove("flipped");
        });
      
        // Shuffle and recreate cards
        shuffledColors = shuffle(COLORS);
        gameContainer.innerHTML = ""; // Clear the game container
        createDivsForColors(shuffledColors);
      
        // Reset timer
        clearInterval(timer);
        document.getElementById('time').innerHTML = 30;
      });