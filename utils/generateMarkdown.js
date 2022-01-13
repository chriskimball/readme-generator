const codeMarkdown = "```";

// Function that returns a license badge based on which license is passed in.
// If there is no license, return an empty string.
const renderLicenseBadge = (license) => {
  let badgeLink;
  switch (license) {
    case 'MIT':
      badgeLink = "https://img.shields.io/badge/license-MIT-blue.svg";
      break;
    case 'Apache 2.0':
      badgeLink = "https://img.shields.io/badge/license-Apache_2.0-blue.svg";
      break;
    case 'GPL 3.0':
      badgeLink = "https://img.shields.io/badge/license-GPLv3-blue.svg";
      break;
    case 'BSD 3':
      badgeLink = "https://img.shields.io/badge/license-BSD_3--Clause-blue.svg";
      break;
    case 'None':
      badgeLink = "";
  };
  if(badgeLink === "") {
    return ``;
  } else {
    return `
[![License](${badgeLink})](${renderLicenseLink(license)})`;
  };
};

// Function that returns the license link.
// If there is no license, return an empty string.
const renderLicenseLink = (license) => {
  switch (license) {
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
    case 'Apache 2.0':
      return `https://opensource.org/licenses/Apache-2.0`;
    case 'GPL 3.0':
      return `https://img.shields.io/badge/license-GPLv3-blue.svg`;
    case 'BSD 3':
      return `https://img.shields.io/badge/license-BSD_3--Clause-blue.svg`;
  };
};

// Function that returns the license section of README.
// If there is no license, the License section will adjust accordingly.
const renderLicenseSection = (license) => {
  if (license === "None") {
    return `
## License

This project is currently unlicensed.
`;
  } else {
    return `
## License

This project is licensed under the ${license} license.
`;
  };
};

// Function that returns the contributors section of README.
const renderContributorsSection = (github) => {
  return `
## Contributors

[${github}](https://github.com/${github} "${github}'s GitHub Profile")
`;
};

// Function that returns the description section of README.
const renderDescriptionSection = (description) => {
  return `
## Description

${description}
`;
};

// Function that returns the Table of Contents section of README.
const renderTableOfContentsSection = () => {
  return `
## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)
`;
};

// Function that returns the installation section of README.
const renderInstallationSection = (install) => {
  return `
## Installation

To install any necessary dependencies, run the following command:

${codeMarkdown}
${install}
${codeMarkdown} 
`;
};

// Function that returns the usage section of README.
const renderUsageSection = (usage) => {
  return `
## Usage

${usage}
`;
};

// Function that returns the contributing section of README.
const renderContributingSection = (contributing) => {
  return `
## Contributing

${contributing}
`;
};

// Function that returns the testing section of README.
const renderTestsSection = (testing) => {
  return`
## Tests

To run tests run the following command:

${codeMarkdown}
${testing}
${codeMarkdown}
`;
};

// Function that returns the questions section of README.
const renderQuestionsSection = (github , email) => {
  return`
## Questions

If you have any questions about the repo, open an issue or contact me directly at [${email}](mailto:${email}). You can find more of my work at [${github}](https://github.com/${github} "${github}'s GitHub Profile").
`;
};


// Function to generate markdown for README based off render functions for each section.
const generateMarkdown = (data) => {

  // Deconstructing inquirer data into readable variables.
  const { github, email, title, description, license, install, testing, usage, contributing } = data;

  // Markdown template literal string
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
};

module.exports = generateMarkdown;