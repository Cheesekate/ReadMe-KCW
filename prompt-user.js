const inquirer = require("inquirer");
module.exports = function () {
    return inquirer.prompt([
        {
            name: "username",
            type: "input",
            message: "What is your GitHub Username?",
        },
        {
            name: "project",
            type: "input",
            message: "What is your project name?",
        },
        {
            name: "description",
            type: "input",
            message: "Please, give a description of your project:"
        },
        {
            name: "install",
            type: "input",
            message: "What are the steps for installing?",
        },
        {
            name: "usage",
            type: "input",
            message: "How do you use this repo?",
        },
        {
            name: "credits",
            type: "input",
            message: "Who is credited?",
        },
        {
            name: "list",
            type: "license",
            message: "Pick a license:",
            choices: ["Mozilla", "Zlib", "IBM"],
        },
        {
            name: "test",
            type: "input",
            message: "What commands do I need to run?",
        },


    ]);
};