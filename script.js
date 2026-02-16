let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return arr[randomNumber];
}
function getHumanChoice() {
  let choice = " ";
  choice = prompt(`Enter your choice`);
  return choice.toLowerCase();
}
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice)
    console.log("tie");
  else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ){
    console.log(`You lose! ${computerChoice} beats ${humanChoice} `);
    computerScore=computerScore+1;
  }
  else {
    console.log(`You win! ${humanChoice} beats ${computerChoice} `);
    humanScore=humanScore+1;
  }
}
function playGame(){

    let rounds=5;
    while(rounds){

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        rounds-=1;
    }
    if(humanScore > computerScore)
        console.log("the Winner is human");
    else if (humanScore < computerScore)
        console.log("the Winner is computer");
    else 
        console.log("Tie");


}
