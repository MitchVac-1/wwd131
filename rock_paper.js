// List of all possible moves the player or Gladiator can choose
const moves = ["stone", "parchment", "blade"];



// Used to display nicer text instead of the raw move names
const moveInfo = {
    stone: "Stone",
    parchment: "Parchment",
    blade: "Blade"
};



// Object that stores the whole game state (scores + history)
let game = {
    player: 0,
    computer: 0,
    history: [],
    
    // Updates the scoreboard based on who won the round
    updateScores: function (winner) {

        console.log("Updating scores… Winner was:", winner);

        if (winner === "player") {
            this.player++;
        } else if (winner === "computer") {
            this.computer++;
        }

        console.log("New scores → Player:", this.player, "Gladiator:", this.computer);

        playerScore.textContent = this.player;
        computerScore.textContent = this.computer;
    },

    // Saves each round into the history array 
    recordRound: function (player, computer, winner) {

        console.log("Recording round:", { player, computer, winner });

        let round = {
            playerMove: player,
            computerMove: computer,
            winner: winner
        };

        this.history.push(round);
        renderHistory(this.history); //This should update the history log yet it does not. Fix if you have time.

        console.log("Full history now:", this.history);

    
    }
};



// Grabbing all the elements from the page so we can update them
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const roundText = document.querySelector("#roundText");
const winnerText = document.querySelector("#winnerText");
const buttons = document.querySelectorAll(".choice");
const resetBtn = document.querySelector("#resetGame");



// Randomly picks one of the three moves for the Gladiator
function computerMove() {
    let index = Math.floor(Math.random() * moves.length);
    let choice = moves[index];

    console.log("Gladiator chose:", choice);

    return choice;
}



// Checks who won the round based on the two moves
function checkWinner(player, computer) {

    console.log("Checking winner… Player:", player, "Gladiator:", computer);

    if (player === computer) {
        console.log("Result: draw");
        return "draw";
    }

    // Player win conditions
    if (
        (player === "stone" && computer === "blade") ||
        (player === "parchment" && computer === "stone") ||
        (player === "blade" && computer === "parchment")
    ) {
        console.log("Result: player wins");
        return "player";
    }

    console.log("Result: Gladiator wins");
    return "computer";
}



// Creates one line of HTML for the round history list
function roundTemplate(round) {
    return `<li>You: ${moveInfo[round.playerMove]} vs Gladiator: ${moveInfo[round.computerMove]} (${round.winner})</li>`;
} //scrap the round history list idea.



// Runs one full round of the game when the player clicks a button
function playRound(playerChoice) {

    console.log("Player clicked:", playerChoice);

    const computerChoice = computerMove();
    const winner = checkWinner(playerChoice, computerChoice);

    // Update round text
    roundText.textContent =
        `You chose ${moveInfo[playerChoice]}. Gladiator chose ${moveInfo[computerChoice]}.`;

    // Winner message
    const messages = {
        player: "You win the round!",
        computer: "Gladiator wins the round.",
        draw: "It's a draw."
    };

    winnerText.textContent = messages[winner];

    game.updateScores(winner);
    game.recordRound(playerChoice, computerChoice, winner);
}



//Buttons and start round
buttons.forEach(button => {
    button.onclick = () => {
        playRound(button.dataset.move);
    };
});




// Resets the entire game back to zero
resetBtn.addEventListener("click", function () {

    console.log("Resetting game");

    game.player = 0;
    game.computer = 0;
    game.history = [];

    playerScore.textContent = 0;
    computerScore.textContent = 0;
    roundText.textContent = "Game reset. Click a button to start.";
    winnerText.textContent = "";

    console.log("Game reset complete.");
});
