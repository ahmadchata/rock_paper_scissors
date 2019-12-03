function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return 'rock';
    } else if (num == 1) {
        return 'paper';
    } else if (num == 2) {
        return 'scissors';
    } else {
        return 'error';
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            console.log('It\'s a draw, computer chose Rock');
            return 0;
        }
        if (computerSelection == 'paper') {
        console.log('Computer chose paper, You Lose!');
        return -1;
    }
    if (computerSelection == 'scissors') {
        console.log('Computer chose scissors, You Win');
        return 1;
    }
}
if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('Computer chose rock, you win');
            return 1;
        }
        if (computerSelection == 'paper') {
        console.log('Its\'s a draw, computer chose paper');
        return 0;
    }
    if (computerSelection == 'scissors') {
        console.log('Computer chose scissors, You Lose!');
        return -1;
    }
}
if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('Computer chose rock, You Lose!');
            return -1;
        }
        if (computerSelection == 'paper') {
        console.log('Computer chose paper, You Win!');
        return 1;
    }
    if (computerSelection == 'scissors') {
        console.log('It\'s a draw, computer chose scissors');
        return 0;
    }
}
    return 'error';
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (computerScore < 3 && playerScore <3) {
        let playerSelection = prompt('Rock, Paper or Scissors').toLowerCase();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result > 0) {
            ++playerScore;
        } else if (result < 0) {
            ++computerScore;
        }
        console.log('Computer Score is ' + computerScore + ' Player Score is ' + playerScore);

    }
    if (computerScore > playerScore) {
        document.getElementById('game').innerHTML = ('You lost the game, computer: ' + computerScore + ' Player: ' + playerScore);
        return 0;
    } else if (computerScore < playerScore) {
        document.getElementById('game').innerHTML = ('You won the game, computer: ' + computerScore + ' Player: ' + playerScore);
        return 0;
    }
}