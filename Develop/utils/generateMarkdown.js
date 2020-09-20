// function to generate markdown for README
function generateMarkdown(data) {
  readme = `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  *[Installation](#installation)  
  *[Usage](#usage)  
  *[Contributing](#contributing)  
  *[License](#license)  
  *[Tests](#tests)  
  *[Questions](#questions)  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## License
  ${data.license}  
 
  ## Tests
  ${data.tests}

  ## Questions
  Email: ${data.email}  
  GitHub: ${data.github}  
  `;

  return readme;
}

module.exports = generateMarkdown;
