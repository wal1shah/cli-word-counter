#! /usr/bin/env node
import inquirer from "inquirer";

const answer: {
  sentence: string;
} = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: "Please write a sentence to count its words:"
  }
  
]);

const words = answer.sentence.trim( ).split(" ")
console.log(words)
console.log(`Your sentence has ${words.length} no of words.`)
