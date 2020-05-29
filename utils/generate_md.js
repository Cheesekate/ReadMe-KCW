module.exports =
    function (answers, gitInfo) {
        const email = gitInfo.email || "No email"


        return `
        # ${answers.project}

        ## Description
        
        ${answers.description}

        ## Table of Contents

        *[Install](#install)
        *[Usage](#usage)
        *[Authors](#credits)
        *[Licenses](#license)
        *[Tests](#test)
        *[Questions](#questions)

        ## Installation

        ${answers.install}

        ## Usage

        ${answers.usage}

        ## Authors
        ${answers.credits}

        ##Licenses
        Our product uses ${answers.list} license.
        <img src="https://img.shields.io/badge/License-${userInput.license}-ff69b4"/>


        ##Tests
        ${answers.test}

        ## Questions

        If you have a question pretaining to this repo please contact us at: ${email}

        GitHub User Information: ${gitInfo.login}

        `;


    };