# **_Gym Hub_**

Gym Hub is a wb application that allows users to sign up and create a profile. Users can then create a workout routine/ share training images and exercises. Users can also view other users' profiles fololow them and like their posts. A user can also comment on a post to interact with other users. Take part of the Gym Hub community and share your fitness journey with others.

## Contents

- [**_Gym Hub_**](#gym-hub)
  - [Contents](#contents)
  - [Objective](#objective)
  - [User Experience UX](#user-experience-ux)
    - [Project Goals](#project-goals)
    - [User Stories](#user-stories)
  - [Components](#components)
  - [Design Choices](#design-choices)
    - [Typography](#typography)
    - [Colour Scheme](#colour-scheme)
  - [Project Management](#project-management)
    - [GitHub Project Board](#github-project-board)
  - [Permissions](#permissions)
    - [User Permissions](#user-permissions)
    - [Staff Permissions](#staff-permissions)
  - [Existing Features](#existing-features)
    - [Navigation Bar](#navigation-bar)
    - [Footer](#footer)
    - [Search Bar](#search-bar)
    - [Gym Hub Page](#gym-hub-page)
    - [Sign Up Page](#sign-up-page)
    - [Login Page](#login-page)
    - [Home Page](#home-page)
    - [Profile Page](#profile-page)
    - [Create Post Page](#create-post-page)
    - [Post Page](#post-page)
    - [Post Edit Page](#post-edit-page)
    - [Comment page](#comment-page)
    - [Comment Edit Page](#comment-edit-page)
    - [Event Page](#event-page)
    - [Event Edit Page](#event-edit-page)
    - [Event Create Page](#event-create-page)
    - [Page Not Found](#page-not-found)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks, Libraries \& Programs Used](#frameworks-libraries--programs-used)
    - [NPM Packages Used](#npm-packages-used)
    - [Other Resources Used](#other-resources-used)
  - [Testing](#testing)
    - [Code Validation](#code-validation)
    - [Responsiveness Testing](#responsiveness-testing)
    - [Manual Testing](#manual-testing)
    - [Deployment](#deployment)
  - [Credits](#credits)
    - [`npm run build` fails to minify](#npm-run-build-fails-to-minify)

## Objective

I inteded to create a web application that allows users to create a profile and share their fitness journey with others. Users can create a workout routine and share it with others. Users can also view other users' profiles and follow them. Users can also like and comment on other users' posts.

## User Experience UX

### Project Goals

1. To create a web application that allows users to create a profile and share their fitness journey with others.
2. Ensure the project is fully responsive to cater for all user device screen sizes
3. Design an intuitive layout that promotes a positive user experience
4. Give the application a clean and modern look and feel
5. Allow users to create a post and share it with others
6. Allow users to view other users' profiles and follow them
7. Allow users to like and comment on other users' posts
8. Allow user to delete their own posts, comments and likes
9. Allow website staff to create a event. So the end user can view the event and be able to take part in it.
10. Allow website staff to delete events
11. Ensure users don't have access to staff member features
12. 


### User Stories

| User type            | User story                                                                                                                           | State   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| As a logged out user | I can create a new account via the sign up page which can be accessed via the navigation bar                                         | &check; |
| As a logged out user | I can view all post clicked will navigate me to the post page which displays information about that post                             | &check; |
| As a logged out user | I should be able to log into the website when I have created a valid account                                                         | &check; |
| As a logged out user | I can filter my search when looking for a post                                                                                       | &check; |
| As a logged in user  | I can leave a comment about a training or relevant content on the post page                                                          | &check; |
| As a logged out user | I can view all comments left by users on a post page but not be able to comment until I have created an account                      | &check; |
| As a logged in user  | I can delete a comment that I have created on the post page                                                                          | &check; |
| As a logged in user  | I should be able to log out of the website                                                                                           | &check; |
| As a logged in user  | I can view my profile page that displays information about my profile                                                                | &check; |
| As a logged in user  | I can update my profile information such as my first name, last name and avatar image                                                | &check; |
| As a staff member    | I must have the ability to delete a post if necessary                                                                                | &check; |
| As a staff member    | I must have the ability to create a event.                                                                                           | &check; |
| As a staff member    | I must have the ability to delete a event.                                                                                           | &check; |
| As a staff member    | I must have the ability to delete a comment if necessary                                                                             | &check; |

## Components

This project is using React which allows for the re-use of components throughout the application. A react component is able to perform a multitude of operations such as render elements on a page, display data, handle events/user interactions, communicate to other components via props and much more.

See the components below:

## Design Choices

### Typography

The fonts chosen for this project have been a combination of both DM Sans, Sans-Serif and Lato. 

### Colour Scheme

 I have used a combination of colours for this project. I have used a combination of both light and dark colours to give the application a modern look and feel.
    Main colours used:
    #3e40465d;
    #cfced3;

## Project Management

### GitHub Project Board

To manage this project I have used a GitHub project board. This allowed me to create a backlog of tasks that needed to be completed. I was able to create a list of tasks that needed to be completed and assign them to a specific milestone. I was also able to create a list of tasks that were in progress and completed. This allowed me to keep track of my progress throughout the project.

## Permissions

For this project I have used a combination of permissions to allow users to access certain features of the application. I have used the following permissions:

### User Permissions

| Permission | User Story                                                                                                                           | State   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Create     | I can create a new account via the sign up page which can be accessed via the navigation bar                                         | &check; |
| Create     | I can create a new post, comment, like, follow                                                                                       | &check; |
| Read       | I can view all post clicked will navigate me to the post page which displays information about that post                             | &check; |
| Read       | I can view all comments, likes on a post.                                                                                            | &check; |
| Read       | I can view all comments left by users on a post page but not be able to comment until I have created an account                      | &check; |
| Read       | I can view my profile page that displays information about my profile                                                                | &check; |
| Read       | I can view other users profile page that displays information about their profile, and follow them so I can keep track of them       | &check; |
| Read       | I can view all events                                                                                                                | &check; |
| Update     | I should be able to log into the website when I have created a valid account                                                         | &check; |
| Update     | I should be able to log edit my own post, comments                                                                                   | &check; |
| Update     | I can update my profile information such as my first name, last name and avatar image                                                | &check; |
| Delete     | I can filter my search when looking for a post, or profile                                                                           | &check; |
| Delete     | I can delete my own comments, post, likes, follows,                                                                                  | &check; |
| Delete     | I can delete a account I created                                                                                                     | &check; |

### Staff Permissions

| Permission | User Story                                                                                                                           | State   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Create     | I must have the ability to create a event.                                                                                           | &check; |
| Create     | I can create a new account via the sign up page which can be accessed via the navigation bar                                         | &check; |
| Create     | I can create a new post, comment, like, follow                                                                                       | &check; |
| Read       | I must have the ability to view all events.                                                                                          | &check; |
| Read       | I can view all post clicked will navigate me to the post page which displays information about that post                             | &check; |
| Read       | I can view all comments, likes on a post.                                                                                            | &check; |
| Read       | I can view all comments left by users on a post page but not be able to comment until I have created an account                      | &check; |
| Read       | I can view my profile page that displays information about my profile                                                                | &check; |
| Read       | I can view other users profile page that displays information about their profile, and follow them so I can keep track of them       | &check; |
| Read       | I can view all events                                                                                                                | &check; |
| Update     | I must have the ability to update a event.                                                                                           | &check; |
| Update     | I should be able to log into the website when I have created a valid account                                                         | &check; |
| Update     | I should be able to log edit my own post, comments                                                                                   | &check; |
| Update     | I can update my profile information such as my first name, last name and avatar image                                                | &check; |
| Delete     | I must have the ability to delete a event.                                                                                           | &check; |
| Delete     | I can filter my search when looking for a post, or profile                                                                           | &check; |
| Delete     | I can delete my own comments, post, likes, follows,                                                                                  | &check; |


## Existing Features

### Navigation Bar

The navigation bar is a key feature of the application. It allows users to navigate to different pages of the application. The navigation bar is responsive and will collapse into a hamburger menu when the screen size is reduced. The navigation bar also displays different links depending on whether the user is logged in or not. If the user is logged in they will be able to view their profile page, create a post, view all events, log out of the application. If the user is not logged in they will be able to view the gym hub page, login page, sign up page. You have to be sign in to view your profile page, create a post, view all events, log out of the application. And more content will be available to you once you have logged in.

### Footer

Footer just show the copy right of the website. Some social media links are also available in the footer.

### Search Bar

The search bar is a key feature of the application. It allows users to search for posts, profiles, events. The search bar is responsive and will collapse into a hamburger menu when the screen size is reduced.

### Gym Hub Page

The gym hub page is the landing page of the application. It displays a welcome message to the user and a brief description of the application. It will give the user a choice to sign in or sign up. 

### Sign Up Page

The sign up page allows users to create an account. The user will be required to enter a username and password. After the user is registered they will be redirected to the login page. And will be able to login to the application.

### Login Page

The login page allows users to login to the application. The user will be required to enter a username and password. After the user is logged in they will be redirected to the home page. And will be able to view the the application and its content.

### Home Page

Home page can you view all the content of the application. You can view all the posts, events, profiles. You can search for posts, events, profiles.

### Profile Page

The profile page allows users to view their profile information. The user will be able to view their username, first name, last name, avatar image. You can follow other ueers from this page. You can also view all the posts that you have created.

### Create Post Page

The create post page allows users to create a post. The user will be required to enter a title, description, image. After the user has created a post they will be redirected to the home page. And will be able to view the post they have created.

### Post Page

The post page allows users to view a post. The user will be able to view the title, description, image, likes, comments. You can like a post from this page. You can also comment on a post from this page. And edit/delete it if you created the post.

### Post Edit Page

The post edit page allows users to edit a post. The user will be required to enter a title, description, image. After the user has edited a post they will be redirected to the home page. And will be able to view the post they have edited.

### Comment page

The comment page allows users to view a comment. The user will be able to view the comment, likes. You can like a comment from this page. And edit/delete it if you created the comment.

### Comment Edit Page

The comment edit page allows users to edit a comment. The user will be required to enter a comment. After the user has edited a comment they will be redirected to the home page. And will be able to view the comment they have edited.

### Event Page

The event page allows users to view a event. The user will be able to view the title, description, image, likes, comments. You can like a event from this page. You can also comment on a event from this page. And edit/delete it if you created the event.

### Event Edit Page

You can edit the event from this page. You can edit the title, description, image. After the user has edited a event they will be redirected to the home page. And will be able to view the event they have edited.

### Event Create Page

If you are a staff member you can create a event from this page. You can create the title, description, image. After the user has created a event they will be redirected to the home page. And will be able to view the event they have created.

### Page Not Found

A 404 page is displayed if the user tries to access a page that does not exist.

## Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [React](https://reactjs.org/)
2. [Bootstrap](https://getbootstrap.com/)
3. [Font Awesome](https://fontawesome.com/)
4. [Google Fonts](https://fonts.google.com/)

### NPM Packages Used

1. [axios](https://www.npmjs.com/package/axios)
2. [react-router-dom](https://www.npmjs.com/package/react-router-dom)
3. [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
4. [react-router-bootstrap](https://www.npmjs.com/package/react-router-bootstrap)
5. [react-modal](https://www.npmjs.com/package/react-modal)
6. [react-paginate](https://www.npmjs.com/package/react-paginate)
7. [react-scripts](https://www.npmjs.com/package/react-scripts)
8. [react-bootstrap-icons](https://www.npmjs.com/package/react-bootstrap-icons)
9. [react infinite scroll component](https://www.npmjs.com/package/react-infinite-scroll-component)
10. [react-notifications-component](https://www.npmjs.com/package/react-notifications-component)
11. [util](https://www.npmjs.com/package/util)
12. [react-icons](https://www.npmjs.com/package/react-icons)
13. [JWT](https://www.npmjs.com/package/jwt-decode)
14. [Web Vitals](https://www.npmjs.com/package/web-vitals)
15. [Node Sass](https://www.npmjs.com/package/node-sass)

### Other Resources Used

- [Favicon](https://favicon.io/) - Used to create the favicon.
- [VSCode](https://code.visualstudio.com/) - Used to create and edit the website.
- [GitHub](https://github.com/) - Used to host and deploy the website as well as manage the project.
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Used to test responsiveness and debug.
- [Responsive Design Checker](https://www.responsivedesignchecker.com/) - Used to test responsiveness.
- [Heroku](https://dashboard.heroku.com) - Used to deploy the website
- [JSHint Validation](https://jshint.com/) - Used to validate JavaScript code

## Testing

### Code Validation

- [W3C HTML Validator](https://validator.w3.org/) - Used to validate HTML code.

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - Used to validate CSS code.

- [JSHint Validation](https://jshint.com/) - Used to validate JavaScript code.

### Responsiveness Testing
  I've conducted responsive testing for all pages for the following devices.

- iPhone SE
- iPhone XR
- iPhone 12 Pro
- Pixel 5
- Samsung Galaxy S8
- Samsung Galaxy S20 Ultra
- iPad Air
- iPad Mini
- Surface Pro 7
- Surface Duo
- Galaxy Fold
- Samsung Galaxy A51/71
- Nest Hub
- Nest Hub Max


### Manual Testing

| Page                 | Expected Result                                                                                                   | Pass/Fail |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- | --------- |

### Deployment

The project was deployed to [Heroku](https://www.heroku.com). The deployment process is as follows:

1. Create a [Heroku](https://www.heroku.com) account.
2. Create a new app and give it a name and select the region.
3. Click on the deploy tab and select GitHub as the deployment method.
4. Search for the repository you want to deploy from and click connect.
5. Click on the settings tab and click on the reveal config vars button.
6. Add the following config vars:
7. Click on the deploy tab and scroll down to manual deploy and click on the deploy branch button.
8. Once the build is complete click on the view button to view the deployed website.
9. The website has now been deployed.

10. To clone the repository to your local machine follow these steps:
11. Click on the code button.
12. Copy either the HTTPS or SSH URL that has just been generated by [GitHub](
13. Open Git Bash.
14. Change the current working directory to the location where you want the cloned directory to be made.
16. Type git clone, and then paste the URL you copied earlier.
17. Press Enter. Your local clone will be created.
    
18. To run the project locally follow these steps:
19. Open Git Bash.
20. Change the current working directory to the location where you cloned the repository.
21. Type npm install to install all the required dependencies.
22. Type npm start to run the project locally.
23. The project will now run locally on your machine.
    
24. To deploy the project to GitHub pages follow these steps:
25. Create a [GitHub](
26. Click on the code button.
27. Copy either the HTTPS or SSH URL that has just been generated by [GitHub](
28. Open Git Bash.
29. Change the current working directory to the location where you cloned the repository.
30. Type git remote add origin, and then paste the URL you copied earlier.
31. Press Enter. Your local clone will now be connected to the GitHub repository.
32. Type git push -u origin main to push the project to GitHub.
33. The project will now be deployed to GitHub pages.
    

## Credits



### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
