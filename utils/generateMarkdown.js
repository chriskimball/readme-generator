/* // "MIT", https://opensource.org/licenses/MIT
"Apache 2.0", https://opensource.org/licenses/Apache-2.0
"GPL 3.0", https://www.gnu.org/licenses/gpl-3.0
"BSD 3", https://opensource.org/licenses/BSD-3-Clause


"None"
// 

*/ 
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
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
    return `[![License](${badgeLink})](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
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
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;


/*

What is your GitHub username? github
What is your email address? email
What is your project's name? title
Please write a short description of your project. description
What kind of license should your project have? license
What command should be run to install dependencies? install
What command should be run to run tests? testing
What does the user need to know about using the repo? usage
What does the user need to know about contributing to the repo? contributing

*/