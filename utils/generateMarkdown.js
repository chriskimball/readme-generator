// TODO: Create a function that returns a license badge based on which license is passed in
const codeMarkdown = "```"

// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  let badgeLink
  switch (license) {
    case 'MIT':
      badgeLink = "https://img.shields.io/badge/license-MIT-blue.svg"
      break;
    case 'Apache 2.0':
      badgeLink = "https://img.shields.io/badge/license-Apache_2.0-blue.svg"
      break;
    case 'GPL 3.0':
      badgeLink = "https://img.shields.io/badge/license-GPLv3-blue.svg"
      break;
    case 'BSD 3':
      badgeLink = "https://img.shields.io/badge/license-BSD_3--Clause-blue.svg"
      break;
    case 'None':
      badgeLink = ""
  }
  if(badgeLink === "") {
    return ``
  } else {
    return `
[![License](${badgeLink})](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  switch (license) {
    case 'MIT':
      return `https://opensource.org/licenses/MIT`
    case 'Apache 2.0':
      return `https://opensource.org/licenses/Apache-2.0`
    case 'GPL 3.0':
      return `https://img.shields.io/badge/license-GPLv3-blue.svg`
    case 'BSD 3':
      return `https://img.shields.io/badge/license-BSD_3--Clause-blue.svg`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license === "None") {
    return `
## License

This project is currently unlicensed.`
  } else {
    return `
## License

This project is licensed under the ${license} license.`
  }
}

const renderContributorsSection = (github) => {
  return `
## Contributors

[${github}](https://github.com/${github} "${github}'s GitHub Profile")
`
}


const renderDescriptionSection = (description) => {
  return `
## Description

${description}
`
}

const renderTableOfContentsSection = () => {
return `
## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)
`
}

const renderInstallationSection = (install) => {
  return `
## Installation

To install any necessary dependencies, run the following command:

${codeMarkdown}
${install}
${codeMarkdown} 
`
}

const renderUsageSection = (usage) => {
  return `
## Usage

${usage}
`
}

const renderContributingSection = (contributing) => {
  return `
## Contributing

${contributing}
`
}

const renderTestsSection = (testing) => {
  return`
## Tests

To run tests run the following command:

${codeMarkdown}
${testing}
${codeMarkdown}
`
}

const renderQuestionsSection = (github , email) => {
  return`
## Questions

If you have any questions about the repo, open an issue or contact me directly at [${email}](mailto:${email}). You can find more of my work at [${github}](https://github.com/${github} "${github}'s GitHub Profile").
`
}


// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {

  const { github, email, title, description, license, install, testing, usage, contributing } = data

  return `# ${title}
  ${renderLicenseBadge(license)}
  ${renderContributorsSection(github)}
  ${renderDescriptionSection(description)}
  ${renderTableOfContentsSection()}
  ${renderInstallationSection(install)}
  ${renderUsageSection(usage)}
  ${renderLicenseSection(license)}
  ${renderContributingSection(contributing)}
  ${renderTestsSection(testing)}
  ${renderQuestionsSection(github, email)}
`;
}

module.exports = generateMarkdown;