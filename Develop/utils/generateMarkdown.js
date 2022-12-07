// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (license === 'APACHE 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if (license === 'BSD 3'){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
   return '';
  
}


// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !==  'None') {
    return `## License
    
    This project was licensed with the ${license} license`
  }
  return `N/A`;
}

function generateMarkdown(data) {
  const template =  `
  # ${data.title} ${renderLicenseBadge(data.license)}

  ## Table of contents

  * [Description](#Description)
  * [Instilation](#Instilation)
  * [Usage](#Usage)
  * [Contributors](#Contributing)
  * [Tests](#Tests)
  * [Lisence](#License)
  * [Questions](#Questions)
  
  
  ## Description
   
   ${data.description} 

 
  ## Initialisation
  
  ${data.initialisation} 

  ## Usage 
  
  ${data.usage}

  ## Contributing 
  
  ${data.contributing}

  ## Tests

  ${data.test_instructions}

  ${renderLicenseSection(data.license)}

  ## Questions 

  Any questions about the current project please visit:
  
  Github name: ${data.github_name} 

  GitHub profile: ${data.github_profile_link} 

  or contact
  email: ${data.email}`;
  

  return(template);
}

module.exports = generateMarkdown;

