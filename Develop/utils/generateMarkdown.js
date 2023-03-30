// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.licenses === "MIT License") {
    data.licenses = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (data.licenses === "APACHE 2.0") {
    data.licenses = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } 
return `# ${data.title}

## Description
${data.description}

##Table of Contents
  1. [Installation](#installation)
  2. [Features](#features)
  3. [Contributing](#contributing)
  4. [Test](#test)
  5. [Usage](#usage)
  6. [Credits](#credits)
  7. [Licenses](#licenses)
  8. [Github](#github)
  9. [Email](#email)
  
## Installation
${data.installation}

## Features
${data.features}

## Contributing
${data.contributing}

## Test
${data.test}

## Usage
${data.usage}

## Credits
${data.credits}

## Licenses
${data.licenses}

##Questions

Github: [${data.github}](https://github.com/${data.github})\n

Contact Email: ${data.email}\n

  `;
}
module.exports = generateMarkdown;
