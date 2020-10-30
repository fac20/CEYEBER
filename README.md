# CEYEBER

![image](https://user-images.githubusercontent.com/48697281/97161243-723aca00-1775-11eb-9064-05ae5211ce54.png)

## Table of content

- [Intro](#Intro)
- [Team Roles](#Team-Roles)
- [Design Week](#Design-Week)
- [Built with](#Built-with)
- [Sprint One](#Sprint-One---Frontend)
- [Sprint Two](#Sprint-Two)
- [Installation](#Install-Locally-computer)
- [Project Status](#Project-status)
- [Bugs and Fixes](#Bugs-and-Fixes-requiring-attention-bug)

## Intro :wave:

[Link to Ceyeber Game](https://ceyeber.netlify.app/)

Web App for children between the ages of 8 - 16 years to test their critical thinking skills in cyber threats

This is the **Front-end**, [Back-end Repo Here](https://github.com/fac20/CEYEBER-backend)

## Team Roles

- Product Owner: Aqsa
- Scrum Facilitator: Jessica
- Quality: Jennifer
- UX/UI: My Hoa
- DevOps: Rihards

## Design Week

- [Miro](https://miro.com/app/board/o9J_kkNyd_Y=/)
- [Figma Prototype](https://www.figma.com/file/yaQqjJ4Erb8nineVf1r5SG/Ceyeber-Detective-App?node-id=176%3A434)

## Built with

- React
- JavaScript
- CSS
- Miro
- Figma

### Dependencies

- Styled components
- React router

### Continous Integration

- CircleCI
- Codecov

### Tests

- Cypress

## File Structure

- .cricleci - contains yml file with configurations for cintinouse integration
- cypress - contains end to end tests any new tests can be added to ./cypress/integration/examples path
- public - have folder which contains logo of the project which is displayed in a browser tab. Folder also contains index.html
- src
  - components - includes all the components of the game such as (forms, raiting bars, buttons, navigation menu, texts and themes)
  - images - contains all svg and jpg images of the project
  - pages - ladnig page, profile page and all the other pages goes here
  - app.js - holds all the routes and global hooks of the web app
  - app.css - have media queries, list styling and styling of images
  
## Colour Variables & Fonts
1. Base colours are in `index.css`, including fonts
2. Using theme objects in `src/components/themes.js` with styled components `ThemeProvider` to set all themes in each page component. **Theme provider only has colours, fonts have not been added**

## Sprint One - Frontend

1. Landing page - user is required to create agent, enter age and choose location
2. Rating page - user provides information about social media use and current critical thinking skills. Navigation bar with a link to training manual page and profile page and also point bar(shows current points).
3. There are three breefing pages containing instructions about a challenge
4. There are three challenges in the game
5. Badge page displays badge which user earned after succesfully resorvilng challange
6. Acceptance of the badge leads further to badgesWon page which displays avatar, all accomplished and upcoming challanges, earned badges
7. Try again page displays warning to user of what they have done wrong during the challange (user also recieves point reduction)
8. User reaches game over page if points drops below 0

### Front-end Routes

- [x] "/"
- [x] "/training-manual"
- [x] "/profile"
- [x] "/badgesWon"
- [x] "/first-case-intro"
- [x] "/first-case-task"
- [x] "/second-case-intro"
- [x] "/second-case-task"
- [x] "/third-case-intro"
- [x] "/third-case-task"
- [x] "/try-again"
- [x] "/badge"
- [x] "/game-over"

## Sprint Two - Create Backend and Update Front-end

1. [Link to Backend Repo Here] (https://github.com/fac20/CEYEBER-backend)
2. Updated front end following user testing
3. Update colour theme variables
4. Responsiveness

## Install Locally :computer:

1. Clone this repo
2. cd into repo folder
3. Run `npm install`
4. Run `npm start`

## Project status

Under development. Currently building back-end and fixing bugs

## Bugs and Fixes requiring attention :bug:

- [ ] Recording the first and second attempts possibly being overwritten
- [ ] SVGs need color variables (if you want to completely change colour scheme)
- [ ] Tests not passing on CircleCI but are passing locally
- [ ] Refactoring
- [ ] Logic of Third Case Challenge - e.g. points to be reduced if player uses one button

## Acknowledgment

Thank you Gillian from FAC18 for helping us to improve our code base and helping us with the strategic decisions related to back end development.
