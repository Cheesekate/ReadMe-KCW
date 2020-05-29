const fs = require("fs");
const buildTemplate = require("./utils/generate_md");
const promptUser = require("./utils/prompt-user");
const api = require("./utils/api")



async function init() {
    const user = await promptUser();
    console.log(user);
    const README = buildTemplate(user);
    fs.writeFile("newREADME.md", README, function (err) {
        if (err) {
            throw err;
        }
        console.log("Success!");
    });
}

init();