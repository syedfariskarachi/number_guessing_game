#! /usr/bin/env node
import inquirer from "inquirer";
const random_number = Math.floor(Math.random() * 10 + 1);
async function game() {
    let playAgain;
    do {
        const answer = await inquirer.prompt([
            {
                name: "user_guess_number",
                type: "number",
                message: "Please Guess a number Between 1-10"
            },
        ]);
        if (answer.user_guess_number == random_number) {
            console.log("Congratulation you win");
        }
        else {
            console.log("You lose (Right number is = " + random_number + ")");
        }
        let again = await inquirer.prompt({
            message: "would you like to play again",
            type: "list",
            name: "play_again",
            choices: ["Yes", "No"]
        });
        playAgain = again.play_again == "Yes";
    } while (playAgain);
}
game();
// console.log(answer)
