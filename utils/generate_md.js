function generateBadge(license) {
    if (license === "MIT/Apache") {
        return `##Licenses
        Our product uses MIT/Apache license.
        <img src="https://img.shields.io/badge/License-/apm/l/:packageName-ff69b4"/>`

    }
    if (license === "MIT") {
        return `##Licenses
        Our product uses MIT license.
        <img src="https://img.shields.io/badge/License/dub/l/:packageName-ff69b4"/>`

    }
    if (license === "GPL") {
        return `##Licenses
        Our product uses GPL license.
        <img src="https://img.shields.io/badge/License-/cran/l/:packageName-ff69b4"/>`

    }
};

module.exports =
    function (answers, gitInfo) {
        const email = gitInfo.email || "No email"


        return `
        # ${answers.project}

        ## Description
        \`\`\`
        ${answers.description}

        ## Table of Contents

        *[Install](#install)
        *[Usage](#usage)
        *[Authors](#credits)
        *[Licenses](#license)
        *[Tests](#test)
        *[Questions](#questions)
        \`\`\`
        ## Install

        ${answers.install}

        ## Usage

        ${answers.usage}

        ## Authors
        ${answers.credits}

        ##Licenses

        ${generateBadge(answers.license)}


        ##Tests
        ${answers.test}

        ## Questions

        If you have a question pretaining to this repo please contact us at: ${email}

        GitHub User Information: ${gitInfo.login}

        `;


    };


