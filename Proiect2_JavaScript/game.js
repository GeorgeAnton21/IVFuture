

const deck = document.querySelectorAll('.card');
deck.forEach(card => card.addEventListener('click', flipCard));

shuffleDeck(); // randomizes the board before each game



let player1frame = document.getElementById('player1');
const player2frame= document.getElementById('player2');
const displayScore1 = document.querySelector('#score1');
const displayScore2 = document.querySelector('#score2');
let gameOverMsg = document.querySelector('#memoryID');
const movesText= document.getElementById('moves');
const movesText2= document.getElementById('moves2');
let win = document.getElementById(`win`);




let score1 = 0;
let score2 = 0;
let isFirstCard = false;
let first, second;
let isBoardClosed = false;
let p1Turn = true;
let singleplayer=false;
let moves = 0;
let moves2 = 0;

/**
 * Shuffles the deck so that each game has a completely different board
 */
function shuffleDeck(){
    deck.forEach(card => {
        let randomIndex = Math.floor(Math.random()*54);
        card.style.order = randomIndex;
    });

    console.log(window.location.href);

}

function singlePlayer(){
    singleplayer=true;
}


function addHide(){
  console.log('sunt in add');
    for(let i=0; i<4; i++){
        deck[i].classList.add('hide');
    }
    shuffleDeck();
}

function showCards(){
    console.log('sunt in remove');
      for(let i=0; i<deck.length; i++){
          deck[i].classList.remove('hide');
      }
      shuffleDeck();
  }

player1frame.style.border = `5px solid green`;


function flipCard(){
    if (isBoardClosed) return;
    if (this === first) return;
    
    this.classList.add('flip');

    if (!isFirstCard){
        isFirstCard = true; //first click
        first = this; // 'this' = the element that has fired the event
        return
    }
       
    isFirstCard = false; //second click
    second = this;

    if(singleplayer){
        score1 +=2;
        displayScore1.textContent = score1.toString();
    }

    // if the second card has been chosen, check if they match
    checkMatch();
}

function checkMatch(){

    if (first.dataset.id == second.dataset.id) {
        //so cards cannot be clicked again
        first.removeEventListener('click', flipCard);
        second.removeEventListener('click', flipCard);
        removeCards(first,second);

        resetBoard();

        if (p1Turn) {
            score1 +=2;
            moves++;
            movesText.textContent=moves.toString();            
            displayScore1.textContent = score1.toString();
        }
        else {
            score2 +=2;
            moves2++;
            movesText2.textContent=moves2.toString(); 
            displayScore2.textContent = score2.toString();  
        }
        checkGameOver();
    } 
    else{
        //if the cards are not a match then turn them over again
        isBoardClosed = true;
        setTimeout(() => {
        first.classList.remove('flip');
        second.classList.remove('flip');
        isBoardClosed = false;
        resetBoard();
        }, 1000);
        if (p1Turn){
            moves++;
            movesText.textContent=moves.toString(); 
            p1Turn = false;
            player1frame.style.border=`none`;
            player2frame.style.border=`5px solid red`;
        }
        else if (!p1Turn){
            moves2++;
            movesText2.textContent=moves2.toString(); 
            p1Turn = true;
            player2frame.style.border=`none`;
            player1frame.style.border=`5px solid green`;
        }  
    }
}




/**
 * Removes correctly found matching cards from the board
 * @param {*} first 
 * @param {*} second 
 */
function removeCards(first, second){
        setTimeout(() => {
        first.innerHTML = "";
        first.style.backgroundImage = "none";
        first.style.backgroundColor = "transparent";
        second.innerHTML = "";
        second.style.backgroundImage = "none";
        second.style.backgroundColor = "transparent";
        
        }, 600);
}

/**
 * Prevents more than 2 cards being flipped over at once since it is against the rules
 */
function resetBoard(){
    first = null;
    second = null;
    isFirstCard = false;
    isBoardClosed = false;
}

function restartGame(){
    shuffleDeck();
    first.classList.remove('flip');
    second.classList.remove('flip');
}

function checkGameOver(){ // game is over if either player gets 10 points
    if (score1 == 10){
       win.innerHTML=`Bine lucrat tinere Padawan.`;
       setTimeout(() =>{shuffleDeck(); location.reload();}, 5000);

    }
    else if (score2 == 10){
       win.innerHTML=`Orginul jedi a disparut iar voi sunteti urmatorii.`
       setTimeout(() =>{shuffleDeck(); location.reload();}, 5000);

    }
}