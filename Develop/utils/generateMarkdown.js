// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const template =  `
  # ${data.title}

  * [Instilation](#Instilation)
  * [Usage](#Contributing)
  * [Instilation](#Licence)
  * [Instilation](#Questions)
  
   ## Description
   
   ${data.description} 

  ## Initialisation
  
  ${data.initialisation} 

  ## Usage 
  
  ![](${data.usage})

  ## Contributing 
  
  ${data.contributing}

  ## Licence 
  
  ${data.licence}
  ## Questions 
  
  Github name: ${data.github_name} 
  GitHub profile: ${data.github_profile_link} 
  email: ${data.email}`;
  

  return(template);
}

module.exports = generateMarkdown;
