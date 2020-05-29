const fs = require("fs");
const buildTemplate = require("./generate_md");
const promptUser = require("./prompt-user");

async function init() {
    const user = await promptUser();
    console.log(user);
    const README = buildTemplate(user);
    fs.writeFile("README.md", README, function (err) {
        if (err) {
            throw err;
        }
        console.log("Success!");
    });
}

init();