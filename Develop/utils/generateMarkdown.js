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
  * [Instilation](#Instilation)
  * [Usage](#Contributing)
  * [Instilation](#Licence)
  * [Instilation](#Questions)
  
  # ${data.title}
   ## Description ${data.description} 
  ## Initialisation ${data.initialisation} 
  ## Usage ![](${data.usage})
  ## Contributing ${data.contributing}
  ## Licence ${data.licence}
  ## Questions ${data.github_name} \n GitHub profile: ${data.github_profile_link} \n email: ${data.email}`;
  

  return(template);
}

module.exports = generateMarkdown;
