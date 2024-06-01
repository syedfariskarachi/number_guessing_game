#! /usr/bin/env node
import inquirer from "inquirer"
const random_number = Math.floor(Math.random()*10+1);
async function game() {
  let play_again;  
  
  do {
  
  const answer = await inquirer.prompt([
    {
      name:"user_guess_number",
    type:"number",
    message:"Please Guess a number Between 1-10"
  },
])

  if(answer.user_guess_number==random_number){
      console.log("Congratulation you win")
  }
  else{
      console.log("You lose (Right number is = "+random_number+")")
  }
  let again=await inquirer.prompt({
    message:"would you like to play again",
    type:"list",
    name:"play_again",
    choices:["Yes","No"]
  })
  play_again=again.play_again=="Yes"
} while (play_again);
}
game()
// console.log(answer)