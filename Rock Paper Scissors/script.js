let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genComputerChoice = () => {
    // rock, paper, scissors
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3); // generates a number between 0 and 2 
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("User choice:", userChoice );
    // Generate computer choice --> modular
    const compChoice =  genComputerChoice();
    // console.log("Computer choice:", compChoice );

    if(userChoice === compChoice) {
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        // console.log("choice clicked:", choice.id );
        const userChoice = choice.id;
        playGame(userChoice);
    });
});