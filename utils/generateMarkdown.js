


const generateMarkdown = data => {
  return `
#  ${data.projectName}
## Description
<br>
 ${data.description}
## Table of Contents
* [Installation](#installation)
* [Language](#language)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#feature)
* [Questions](#Questions)
## Installation
*Steps required to install project and how to get the development environment running:* 
<br>
 ${data.install}
## Language 
*The following programming languages were utilized when completing this project:*
<br>
${(data.language)}
## Usage
*Instructions and examples for use:*
<br>
 ${data.usage}
## Credits
<br>
 ${data.credit}
${(data.license)}
## Features
<br>
 ${data.feature}
## Contributing
 This project adheres to standards set by the <a href = https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md>Contributor Covenant</a>.<br>
Please consult this documentation before contributing to this project.
## Questions
If you have any questions regarding the development process of this application, or specific questions about contributing, feel free to reach me by email or on Github.
* Email  ${data.email}
* Github  [${data.github}](https://github.com/${data.github}) 
`;
}

module.exports = generateMarkdown;
