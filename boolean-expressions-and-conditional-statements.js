/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = true;
let hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?: ");
if (choice === 'mountains') {
  let torchChoice = readline.question("Is your torch lit? y / n: ");
  if (torchChoice === 'y') {
    hasTorch = true;
  } else {
    hasTorch = false;
  }
} else {
  let mapChoice = readline.question("Do you have a map? y / n: ");
  if (mapChoice === 'y') {
    hasMap = true;
  } else {
    hasMap = false;
  }
}

if (choice === "mountains" && hasTorch) {
  console.log("You can safely navigate through the dark mountains.");
  console.log("You come across an abandoned cabin.");
  let cabinInput = readline.question("Do you enter? y / n: ");
  if (cabinInput === 'y') {
    let itemChoice = readline.question(`You enter the cabin and find a chest with items inside.
A hatchet, a mystery elixer, or a water bottle.
You have room in your bag for one item.
Which item to do you choose?: `);
    console.log(`${itemChoice.charAt(0).toUpperCase() + itemChoice.slice(1)} has been added to your bag, good choice!`);
  } else {
    console.log("You continue the journey through the mountains.");
  }
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" && hasMap) {
  console.log("You find your way to the village.");
  let pubEntryChoice = readline.question(`You come across the local pub.
Do you enter? y / n: `);
  if (pubEntryChoice === 'y') {
    console.log(`You enter the pub and order an ale.`);
  } else {
    console.log("You continue walking through the village.");
  }
} else {
  console.log("You get lost and wander aimlessly.");
}



/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/