// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectTitle}

  ${data.license === "MIT" ? "![MIT](https://img.shields.io/badge/license-MIT-green)" :  
    data.license === "Apache2.0" ? "![APACHE](https://img.shields.io/badge/License-Apache%202.0-blue.svg)" :
    data.license === "GPLv3" ? "![GPL](https://img.shields.io/badge/License-GPL%20v2-blue.svg))" :
    ""
  }

## Description
${data.projectDes}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contributing)
- [Testing Guidelines](#testing)
- [License](#licenses)
- [Questions](#questions)


## Installation <a name="installation"></a>

Please use the following installation instructions in your terminal:
{data.install}


## Usage <a name="usage"></a>

Please use the following command line in your terminal to initiate:
{data.usage}


## Contribution Guidelines <a name="contributing"></a>

data.contribution


## Testing Guidelines <a name="testing"></a>

data.testing


## Licenses <a name="licenses"></a>

This project uses  ${data.license === "MIT" ? "```Massachusetts Institute of Technology```" :  
                     data.license === "Apache2.0" ? "```Apache 2.0```" :
                     data.license === "GPLv3" ? "```General Public License v3.0```" :
                     "no licenses."
                    }

## Questions <a name="questions"></a>

- Questions? Please [Email Me](mailto:${data.email}).
- Please check my [GitHub](${data.username}) for more projects!
`;
}

module.exports = generateMarkdown;


