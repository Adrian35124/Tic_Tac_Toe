let cells = document.querySelectorAll(".row>div");
console.log(cells);
let announceDiv = document.getElementsByClassName("announce")[0];
let announceDraw = document.getElementsByClassName("draw")[0];
// IndexPositons are 0-8
//0: top left
//1: top middle
//2: top right
//3: center left
//4: center middle
//5: center right
//6: bottom left
//7: bottom middle
//8: bottom right
let playerTurn = true;
const players = [
  {
    name: "P1",
    playerType: "⚽",
  },
  {
    name: "P2",
    playerType: "🏀",
  },
];
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}
function cellClicked() {
  console.log(this.innerHTML);
  console.log(this.id);
  if (playerTurn && this.innerHTML == "") {
    event.target.textContent = "⚽";
    playerTurn = false;
  } else if (!playerTurn && this.innerHTML == "") {
    event.target.textContent = "🏀";
    playerTurn = true;
  } 
  checkWin();
}
function checkWin() {
  if (
    cells[0].textContent === cells[1].textContent &&
    cells[1].textContent === cells[2].textContent &&
    (cells[0].textContent === "⚽" || cells[0].textContent === "🏀")
  ) {
    if (playerTurn === true) {
      announceDiv.textContent = `🏀 Win!`;
    } else {
        announceDiv.textContent = `⚽ Win!`;
    }
  }

  if (
    cells[3].textContent === cells[4].textContent &&
    cells[4].textContent === cells[5].textContent &&
    (cells[3].textContent === "⚽" || cells[3].textContent === "🏀")
  ) {
    if (playerTurn === true) {
        announceDiv.textContent = `🏀 Win!`;
      } else {
          announceDiv.textContent = `⚽ Win!`;
      }
  }
  if (
    cells[6].textContent === cells[7].textContent &&
    cells[7].textContent === cells[8].textContent &&
    (cells[6].textContent === "⚽" || cells[6].textContent === "🏀")
  ) {
    if (playerTurn === true) {
        announceDiv.textContent = `🏀 Win!`;
      } else {
          announceDiv.textContent = `⚽ Win!`;
      }
  }
  if (
    cells[0].textContent === cells[3].textContent &&
    cells[3].textContent === cells[6].textContent &&
    (cells[0].textContent === "⚽" || cells[0].textContent === "🏀")
  ) {
    if (playerTurn === true) {
        announceDiv.textContent = `🏀 Win!`;
      } else {
          announceDiv.textContent = `⚽ Win!`;
      }
  }
  if (
    cells[1].textContent === cells[4].textContent &&
    cells[4].textContent === cells[7].textContent &&
    (cells[1].textContent === "⚽" || cells[1].textContent === "🏀")
  ) {
    if (playerTurn === true) {
        announceDiv.textContent = `🏀 Win!`;
      } else {
          announceDiv.textContent = `⚽ Win!`;
      }
  }
  if (
    cells[2].textContent === cells[5].textContent &&
    cells[5].textContent === cells[8].textContent &&
    (cells[2].textContent === "⚽" || cells[2].textContent === "🏀")
  ) {
    if (playerTurn === true) {
        announceDiv.textContent = `🏀 Win!`;
      } else {
          announceDiv.textContent = `⚽ Win!`;
      }
  }
  if (
    cells[0].textContent === cells[4].textContent &&
    cells[4].textContent === cells[8].textContent &&
    (cells[0].textContent === "⚽" || cells[0].textContent === "🏀")
  ) {
    if (playerTurn === true) {
        announceDiv.textContent = `🏀 Win!`;
      } else {
          announceDiv.textContent = `⚽ Win!`;
      }
  }
  if (
    cells[3].textContent === cells[5].textContent &&
    cells[5].textContent === cells[7].textContent &&
    (cells[3].textContent === "⚽" || cells[3].textContent === "🏀")
  ) {
    if (playerTurn === true) {
        announceDiv.textContent = `🏀 Win!`;
      } else {
          announceDiv.textContent = `⚽ Win!`;
      }
  } 
    if (
        cells[0].textContent != '' 
    && cells[1].textContent != '' 
    && cells[2].textContent != "" 
    && cells[3].textContent != "" 
    && cells[4].textContent != "" 
    && cells[5].textContent != "" 
    && cells[6].textContent != "" 
    && cells[7].textContent != "" 
    && cells[8].textContent != "") { 
        announceDraw.textContent = "Draw NO WINNERS!";
      
    }
}
//  const wincombos = [
//  [0, 1, 2], //0
//  [3, 4, 5], //1
//  [6, 7, 8], //3
//  [0, 3, 6], //4
//  [1, 4, 7], //5
//  [2, 5, 8], //6
//  [0, 4, 8], //7
//  [3, 5, 7], //8

// HINTS!
// Use the comparison operators (===) to determine if something is a X or O
// Use if else statements to toggle the player.
// USE ! cells[0].text to find out if we have a winnner!
