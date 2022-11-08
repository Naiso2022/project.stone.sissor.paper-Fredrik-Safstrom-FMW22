const stone = document.querySelector('.stone');
const sissor = document.querySelector('.sissor');
const paper = document.querySelector('.paper');
const humananswer = document.querySelector('.humananswer');
const computeranswer = document.querySelector('.computeranswer');
const humanscore = document.querySelector('.humanscore');
const computerscore = document.querySelector('.computerscore');
const winner = document.querySelector('.winner');
const restartButton = document.querySelector('.restartButton');
const answerboxTwo = document.querySelector('.answerboxTwo');
const answerboxThree = document.querySelector('.answerboxThree');
const answerboxFour = document.querySelector('.answerboxFour');
const message = document.querySelector('.message')
const messageTwo = document.querySelector('.messageTwo')
const messageThree = document.querySelector('.messageThree')
const choises = document.querySelector('.choises')
const choisesTwo = document.querySelector('.choisesTwo')
let humancounter = 0;
let computercounter = 0;


stone.addEventListener('click', stonechoice);
sissor.addEventListener('click', sissorchoice);
paper.addEventListener('click', paperchoice);




function computerturn(){
     return Math.floor(Math.random() * 3) + 1;
}


function stonechoice(){

    let computerchoice = computerturn();


    if (computerchoice === 2 ) {
        answerboxTwo.classList.remove("answerboxFour");
        humananswer.textContent = 'Din gissning är sten.';
        computeranswer.textContent = 'Datorns gissning är sax.';
        winner.textContent = 'Du vann!';
        winner.style.backgroundColor = 'lightgreen';
        humancounter++;
        humanscore.textContent = humancounter;

    if (humancounter === 5) {
        answerboxTwo.classList.add("answerboxThree");
        message.classList.add("messageTwo");
        message.textContent = 'GRATTIS! DU VANN!';
        choises.classList.remove("choises");
        choises.classList.add("choisesTwo");
        setGameOver()
        }
        }

    else if (computerchoice === 3){
        answerboxTwo.classList.remove("answerboxFour");
        humananswer.textContent = 'Din gissning är sten.';
        computeranswer.textContent = 'Datorns gissning är påse.';
        winner.textContent = 'Datorn vann!';
        winner.style.backgroundColor = 'red';
        computercounter++;
        computerscore.textContent = computercounter;

    if (computercounter === 5) {
        answerboxTwo.classList.add("answerboxThree");
        message.classList.add("messageThree");
        message.textContent = 'Du förlorade!';
        choises.classList.remove("choises");
        choises.classList.add("choisesTwo");
        setGameOver()
        }
        }

    else if (computerchoice === 1){
        answerboxTwo.classList.remove("answerboxFour");
        humananswer.textContent = 'Din gissning är sten.';
        computeranswer.textContent = 'Datorns gissning är sten.';
        winner.textContent = 'Oavgjort!';
        winner.style.border = 'solid black';
        winner.style.backgroundColor = 'white';
        }

}


function sissorchoice(){

    let computerchoice = computerturn();

    if (computerchoice === 2 ) {
        answerboxTwo.classList.remove("answerboxFour");
        humananswer.textContent = 'Din gissning är sax.';
        computeranswer.textContent = 'Datorns gissning är sax.';
        winner.textContent = 'Oavgjort!';
        winner.style.border = 'solid black';
        winner.style.backgroundColor = 'white';
    }
    
    
    else if (computerchoice === 3){
        answerboxTwo.classList.remove("answerboxFour");
        humananswer.textContent = 'Din gissning är sax.';
        computeranswer.textContent = 'Datorns gissning är påse.';
        winner.textContent = 'Du vann!';
        winner.style.backgroundColor = 'lightgreen';
        humancounter++;
        humanscore.textContent = humancounter;

    if (humancounter === 5) {
        answerboxTwo.classList.add("answerboxThree");
        message.classList.add("messageTwo");
        message.textContent = 'GRATTIS! DU VANN!';
        choises.classList.remove("choises");
        choises.classList.add("choisesTwo");
        setGameOver()
        }
    }
    
    else if (computerchoice === 1){
        answerboxTwo.classList.remove("answerboxFour");
        humananswer.textContent = 'Din gissning är sax.';
        computeranswer.textContent = 'Datorns gissning är sten.';
        winner.textContent = 'Datorn vann!';
        winner.style.backgroundColor = 'red';
        computercounter++;
        computerscore.textContent = computercounter;

    if (computercounter === 5) {
        answerboxTwo.classList.add("answerboxThree");
        message.classList.add("messageThree");
        message.textContent = 'Du förlorade!';
        choises.classList.remove("choises");
        choises.classList.add("choisesTwo");
        setGameOver()
        }
        }
}


function paperchoice(){

    let computerchoice = computerturn();

    if (computerchoice === 3 ) {
        answerboxTwo.classList.remove("answerboxFour");
        humananswer.textContent = 'Din gissning är påse.';
        computeranswer.textContent = 'Datorns gissning är påse.';
        winner.textContent = 'Oavgjort!';
        winner.style.border = 'solid black';
        winner.style.backgroundColor = 'white';
        }
        
        
    else if (computerchoice === 2){
        answerboxTwo.classList.remove("answerboxFour");
        humananswer.textContent = 'Din gissning är påse.';
        computeranswer.textContent = 'Datorns gissning är sax.';
        winner.textContent = 'Datorn vann!';
        winner.style.backgroundColor = 'red';
        computercounter++;
        computerscore.textContent = computercounter;

    if (computercounter === 5) {
        answerboxTwo.classList.add("answerboxThree");
        message.classList.add("messageThree");
        message.textContent = 'Du förlorade!';
        choises.classList.remove("choises");
        choises.classList.add("choisesTwo");
        setGameOver()
        }
        }
        
    else if (computerchoice === 1){
        answerboxTwo.classList.remove("answerboxFour");
        humananswer.textContent = 'Din gissning är påse.';
        computeranswer.textContent = 'Datorns gissning är sten.';
        winner.textContent = 'Du vann!';
        winner.style.backgroundColor = 'lightgreen';
        humancounter++;
        humanscore.textContent = humancounter;

    if (humancounter === 5) {
        answerboxTwo.classList.add("answerboxThree");
        message.classList.add("messageTwo");
        message.textContent = 'GRATTIS! DU VANN!';
        choises.classList.remove("choises");
        choises.classList.add("choisesTwo");
        setGameOver();
        }
        }
}


function setGameOver() {
    restartButton.classList.remove("restartButton");
    restartButton.classList.add("displayRestartButton");
    restartButton.addEventListener('click', newGame);
}


function newGame() {
    choises.classList.add("choises");
    choises.classList.remove("choisesTwo");
    message.classList.add("choisesTwo");
    answerboxTwo.classList.remove("answerboxThree");
    answerboxTwo.classList.add("answerboxFour");
    humancounter = 0;
    computercounter = 0;
    humanscore.textContent = humancounter;
    computerscore.textContent = computercounter;
}