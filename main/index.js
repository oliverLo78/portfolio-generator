const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, location, hobby, food, github, linkedin }) =>
    `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Document</title>
  </head>
  <body>
  <!-- About me -->
  <div class="container">
    <div class="section">
      <div class="row">
        <div class="grid-example col s12 center teal darken-1">
          <span class="black-text text-darken-2">
          <h4>Contact Me</h4>
          <p>Hi! My name is ${name}</p>
          <p>I am from ${location}.</p>
          <ul>
            <li>My Favorite hobby is ${hobby}</li>
            <li>My Favorite food is ${food}</li>
            <li>My GitHub username is ${github}</li>
            <li>LinkedIn: ${linkedin}</li>
          </ul>
          </span>
        </div>
      </div>
    </div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
