/*  user inputs answer through prompt 

computerPlay randomly returns rock, paper, scissors



if user answer is rock and computer answer is paper, return "paper beats rock! You lose!"

else if user answer is paper and computer answer is rock, return "You win! paper beats rock!"

else if user answer is rock and computer answer is rock, return "Rock doesn't beat rock! It's a tie!"

if user answer is scissors and computer answer is rock, return "Rock beats scissors! You lose!"
else if user answer is rock and computer answer is scissors, return "Rock beats scissors! You Win!"
else if user answer is scissors and computer answer is scissors, return "sissors doesn't scissors! It's a tie!"

if user answer is paper and computer answer is scissors, return "scissors beats paper! You lose!"
else if user answer is scissors  and computer answer is paper, return "scissors beats paper! You Win!"
else if user answer is paper and computer answer is paper, return "paper doesn't beats paper! It's a tie!"

playRound plays a single round of rock paper scissors.

It takes parameters playerSelection and computerSelection

it returns a string declaring winner of the round. "Rock beats scissors! You lose!"


*/




const choices = ["rock", "paper", "scissors"];

function computerPlay() {

const random = Math.floor(Math.random() * choices.length); 

return (random, choices[random]);

}

const computerSelection = computerPlay();






function playerSelection() {

return userSelection;

}



var playerScore = parseInt(0);

var computerScore = parseInt(0);

let win = "You win!";

let lose = "You lose!";

let tie = "Tied";




function playRound(playerSelection, computerSelection) {



	    if (playerSelection === computerSelection) {

	    	return tie;
	    }




			else if (playerSelection === "rock" && computerSelection === "paper") {

				return lose;

				computerScore++;
	
				
	        }


			else if (playerSelection === "paper" && computerSelection === "rock") {
		
			return win;
			playerScore++;

			}

			

		    else if (playerSelection === "scissors" && computerSelection === "rock") {
		    computerScore++;
		    	return lose;
              

		    					

		    
		    	
		    }

		     else if (playerSelection === "rock" && computerSelection === "scissors") {
			
					    	
					    	playerScore++;
					    	return win;	    	
		    	
		    }

		    

		    else if (playerSelection === "paper" && computerSelection === "scissors") {		
		    	

		    		computerScore++;
		    		return lose;

		    	
		    }

		    else if (playerSelection === "scissors" && computerSelection === "paper") {
		    
		    			
		    	
		    	playerScore++;
		    	return win;

		    
		    }



		}




for (var i = 0; i < 5; i++) {
 	playerSelection();
computerPlay();

		
		var userSelection = prompt("Rock, Paper, Scissors").toLowerCase();

   		console.log(playRound(userSelection, computerSelection))
      console.log("your score = " + playerScore);
      console.log("Computer's score = " + computerScore);

}
  
     

