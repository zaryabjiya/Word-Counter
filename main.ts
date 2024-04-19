#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta.bold("\n\t ***WELCOME TO THE WORD COUNTER*** \n"))
console.log("=".repeat(50));

let result = await inquirer.prompt(
    [
        {
        name: "sentance",
        type: "input",
        message: chalk.yellow("Please Enter a Sentance")
        }
    ]
);

let words = result.sentance.trim().split(" ");

console.log("=".repeat(50));

console.log(chalk.bold.green("Sentance Words:"));
console.log(words)

console.log(chalk.bold(`\n - Words Count: ${chalk.cyan(words.length)}`));






