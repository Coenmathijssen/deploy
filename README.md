# Project TECH webapp | I'm down
I'm down is a datingapp created for people with a disability. With the app it's possible to find different kinds of relationship. It doesn't matter if you're looking for love, friendship or a community. The app matches your personality with a suitable match through a detailed questionnaire. The app will ask for character trades and preferences, which will be used to find someone suitable. It is also possible to chat on personal level, in groups, make videocalls, send video's and audio, and more. At last, a map functionality is included to find people nearby. Enjoy using this open source app!

## Used (and necessery sources)
- NPM
- Node.js
- EJS
- SCSS
- Express

## Installation
1. Clone the repository to your local machine.
2. Install all required NPM packages through the `npm install` command in your terminal.
3. Move inside the cloned repository using `cd` in your terminal. Now run the command `node app.js` or `nodemon app.js` in your terminal.
4. Navigate to the URL [localhost:3000](localhost:3000) in your prefered browser.

## Editing / creating new HTML pages
1. Create a new ejs file in the views folder or navigate to an existing page inside this folder.
2. Include the partials you want to include.
3. Write regular HTML inside the ejs pages.
4. Write a new route for the created ejs page in the render-pages.js file located in the routes folder. _Use the existing routes as an example to create a new one._
5. Create a new stylesheet and include this in the ejs file (inside the `<head>`)

## Editing / creating new SCSS files
1. Create a new SCSS file with a name of choice inside the static/styles folder. Otherwise, navigate to an existing one.
2. Import the necessery existing SCSS files in the right order.
3. Write your SCSS code.
4. Compile the SCSS file to browser-readable CSS using the `CMD + B` command on your mac.
5. Make sure to include the newly compiled CSS file into your corresponding EJS file. Not the otherway around!

## License
This package is licensed under the [MIT license](https://github.com/Coenmathijssen/NPM-boilerplate/blob/master/LICENSE) © [Coen Mathijssen](https://www.coenmathijssen.nl/)
