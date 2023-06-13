# **_Gym Hub_**

![Front](/src/assets/readme_images/front.png)

Gym Hub is a wb application that allows users to sign up and create a profile. Users can then create a workout routine/ share training images and exercises. Users can also view other users' profiles follow them and like their posts. A user can also comment on a post to interact with other users. Take part of the Gym Hub community and share your fitness journey with others.

You can view the live website [here](https://gymhub-app.herokuapp.com/)

For the backend repository click [here]( https://github.com/jensalindgren/drf-api-backend)

The backend is hosted on [Heroku](https://www.heroku.com/) Just like the frontend. [here](https://drf-api-backend.herokuapp.com/)

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
    - [Sign Page](#sign-page)
    - [Home Page](#home-page)
    - [Profile Page](#profile-page)
    - [Create Post Page](#create-post-page)
    - [Post Page](#post-page)
    - [Feed Page](#feed-page)
    - [Post Edit Page](#post-edit-page)
    - [Comment page](#comment-page)
    - [Comment Edit Page](#comment-edit-page)
    - [Event Page](#event-page)
    - [Event Edit Page](#event-edit-page)
    - [Event Create Page](#event-create-page)
    - [Page Not Found](#page-not-found)
    - [Like Page](#like-page)
    - [Change Password Page](#change-password-page)
    - [Change Username Page](#change-username-page)
    - [Change Profile Page](#change-profile-page)
    - [Notifications](#notifications)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks, Libraries \& Programs Used](#frameworks-libraries--programs-used)
    - [NPM Packages Used](#npm-packages-used)
    - [Other Resources Used](#other-resources-used)
  - [Testing](#testing)
    - [Code Validation](#code-validation)
    - [Accessibility Testing](#accessibility-testing)
    - [LightHouse Testing](#lighthouse-testing)
    - [Responsiveness Testing](#responsiveness-testing)
    - [Manual Testing](#manual-testing)
    - [Deployment](#deployment)
  - [Credits](#credits)
    - [Media and Content](#media-and-content)
    - [Acknowledgements](#acknowledgements)

## Objective

I was striving to create a web application that allows users to create a profile and share their fitness journey with others. Users can create a workout routine and share it with others. See if I can push my self to create a full stack application using React and Django Rest Framework.

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

The fonts chosen for this project have been a combination of both DM Sans, Sans-Serif and Lato. I have used DM Sans for the main headings and Sans-Serif for the sub headings and Lato for the body text. I have used a combination of both Sans-Serif and Lato for the navigation bar and footer. I have used a combination of both light and dark colors to give the application a modern look and feel.

### Colour Scheme

 I have used a combination of colors for this project. I have used a combination of both light and dark colors to give the application a modern look and feel.
    Main colors used:
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
| Update     | I can update my profile information such as my first name, last name and profile image                                               | &check; |
| Delete     | I can filter my search when looking for a post, or profile                                                                           | &check; |
| Delete     | I can delete my own comments, post, likes, follows,                                                                                  | &check; |


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

The Screen shots below show the existing features of the application. They are taken with
Chrome Dev Tools. And taken full screenshot so you can see the whole page. And the infinite scroll.

### Navigation Bar

The navigation bar is a key feature of the application. It allows users to navigate to different pages of the application. The navigation bar is responsive and will collapse into a hamburger menu when the screen size is reduced. The navigation bar also displays different links depending on whether the user is logged in or not. If the user is logged in they will be able to view their profile page, create a post, view all events, log out of the application. If the user is not logged in they will be able to view the gym hub page, login page, sign up page. You have to be sign in to view your profile page, create a post, view all events, log out of the application. And more content will be available to you once you have logged in. You can edit password, username, and your profile from the navbar.

![NavBar](/src/assets/readme_images/navbar.png)

### Footer

Footer just show the copy right of the website. Some social media links are also available in the footer.

![Footer](/src/assets/readme_images/footer.png)

### Search Bar

The search bar is a key feature of the application. It allows users to search for posts, profiles, likes. The search bar is responsive and will collapse into a hamburger menu when the screen size is reduced.

![SearchBar](/src/assets/readme_images/searchbar.png)

### Gym Hub Page

The gym hub page is the landing page of the application. It displays a welcome message to the user and a brief description of the application. It will give the user a choice to sign in or sign up. 

![GymHub](/src/assets/readme_images/gymhub.png)

### Sign Up Page

The sign up page allows users to create an account. The user will be required to enter a username and password. After the user is registered they will be redirected to the login page. And will be able to login to the application.

![SignUp](/src/assets/readme_images/signup.png)

### Sign Page

The login page allows users to login to the application. The user will be required to enter a username and password. After the user is logged in they will be redirected to the home page. And will be able to view the the application and its content.

![Login](/src/assets/readme_images/login.png)

### Home Page

Home page can you view all the content of the application. You can view all the latest posts and it has a the pages that displays content have infinite scroll. You have a search bar so you look after a title. A profile.

![Home](/src/assets/readme_images/home.png)

### Profile Page

The profile page allows users to view their profile information. The user will be able to view their username, first name, last name, avatar image. You can follow other users from this page. You can also view all the posts that you have created.

![Profile](/src/assets/readme_images/profile.png)

### Create Post Page

The create post page allows users to create a post. The user will be required to enter a title, content, image. After the user has created a post they will be redirected to the post page. And will be able to view the post they have created.

![CreatePost](/src/assets/readme_images/createpost.png)

### Post Page

The post page allows users to view a post. The user will be able to view the title, description, image, likes, comments. You can like a post from this page. You can also comment on a post from this page. And edit/delete it if you created the post.

![Post](/src/assets/readme_images/post.png)

### Feed Page

The feed page is for the profiles you have followed. All the latest content form you favorite profiles will be displayed here. You can like a post from this page. You can also comment on a post from this page. And like.

![Feed](/src/assets/readme_images/feed.png)

### Post Edit Page

The post edit page allows users to edit a post. The user will be required to enter a title, description, image. After the user has edited a post they will be redirected to the post page. And will be able to view the post they have edited.

![PostEdit](/src/assets/readme_images/postedit.png)


### Comment page

The comment page is the same as the post page allows users to view a comment. The user will be able to view the comment, like. And edit/delete it if you created the comment.

![Comment](/src/assets/readme_images/comment.png)

### Comment Edit Page

The comment edit page allows users to edit a comment. The user will be required to enter a comment. After the user has edited a comment they will be redirected to the home page. And will be able to view the comment they have edited.

![CommentEdit](/src/assets/readme_images/commentedit.png)

### Event Page

The event page allows users to view a event. The user will be able to view the title, description, image, And edit/delete it if you created the event. Or is staff.

![Event](/src/assets/readme_images/event.png)

### Event Edit Page

You can edit the event from this page. You can edit the title, description, image. After the user has edited a event they will be redirected to the event page. And will be able to view the event they have edited.

![EventEdit](/src/assets/readme_images/eventedit.png)

### Event Create Page

If you are a staff member you can create a event from this page. You can create the title, description, image. After the user has created a event they will be redirected to the home page. And will be able to view the event they have created.

![EventCreate](/src/assets/readme_images/eventcreate.png)

### Page Not Found

A 404 page is displayed if the user tries to access a page that does not exist.

![404](/src/assets/readme_images/404.png)

### Like Page

The like page allows users to view all the favorite post the like. You can search for a post that you have liked. Just type in title or profile name.

![Like](/src/assets/readme_images/likes.png)

### Change Password Page

The change password page allows users to change their password. The user will be required to enter a new password. After the user has changed their password they will be redirected to the home page. And will be able to view the application and its content.

![ChangePassword](/src/assets/readme_images/password.png)

### Change Username Page

The change username page allows users to change their username. The user will be required to enter a new username. After the user has changed their username they will be redirected to the home page. And will be able to view the application and its content.

![ChangeUsername](/src/assets/readme_images/name.png)

### Change Profile Page

The change profile page allows users to change their profile information. The user will be required to enter a name,  som information and profile image. After the user has changed their profile information they will be redirected to the profile page. And will be able to view the application and its content.

![ChangeProfile](/src/assets/readme_images/bio.png)

### Notifications 

As a user you will be able to view notifications. You will be able to view notifications when you perform a action. Such as failing to login in or out. The color will be red. If you perform a action that is not successful. The color will be green. When you perform a action that is successful. It will have a small timer that will disappear after a few seconds. Or you can click the close button to close it.

![Notifications](/src/assets/readme_images/error.png)
![Notifications](/src/assets/readme_images/check.png)

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

### Accessibility Testing

I put the website through the to test if there was any conflicting contrast issues with the colours selected but found no errors.

![Contrast](/src/assets/readme_images/color.png)

### LightHouse Testing

I put the website through the [LightHouse](https://developers.google.com/web/tools/lighthouse) testing tool in Google Chrome DevTools to test the performance, accessibility, best practices and SEO of the website. I can see that I need to improve on the performance of the website. The big pictures are causing the website to load slowly. I will need to compress the images to improve the performance of the website in the future.

![LightHouse](/src/assets/readme_images/1.png)
![LightHouse](/src/assets/readme_images/2.png)
![LightHouse](/src/assets/readme_images/3.png)
![LightHouse](/src/assets/readme_images/4.png)

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

| Page                 | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities. And Possible outcomes on sites below.      | Pass/Fail |
| -------------------- | --------------------------------------------------------------------------------------------------------------------| --------- |
| Home                 | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Login                | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Sign in              | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Sign out             | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Gym Hub              | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Register             | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Profile              | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Profile Edit         | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Profile Password     | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Profile Username     | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Profile Follow       | Having some problem with following some accounts I get a 400 or 500 error depends on the user. Some times it works  | Fail      |
| Profile Unfollow     | Having some problem with unfollowing some accounts I get a 400 or 500 error depends on the user. Some times it works| Fail      |
| Feed                 | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Post                 | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Post Edit            | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Post Delete          | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Post Like            | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Post Unlike          | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Post Comment         | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Post Comment Edit    | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Post Comment Delete  | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Event                | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Event Edit           | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Event Delete         | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Comments             | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Comments Edit        | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Comments Delete      | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Search Bars          | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Navbar               | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Footer               | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| 404 Page             | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |
| Logo                 | Tested Links, Buttons, Text, Fields, All the basic Crud functionalities.                                            | Pass      |

The website has been tested on the following browsers:
Chrome | Firefox | Safari | Opera | Edge

I feel a bit disappointed that I couldn't get the follow and unfollow buttons to work properly.
I will have to come back to this in the future and try to fix it. Other than that I'm happy with the outcome of the project.

### Deployment

The project was deployed to [Heroku](https://www.heroku.com). The deployment process is as follows:

Firstly we need to create a new repository in [GitHub](https://github.com/) where our project files will be located

- Navigate to [GitHub](https://github.com/)
- Create a new repository with no template


Once you've created your new empty repository, we need to pull this repository down onto our local machine. Throughout the course I have used [VSCode](https://code.visualstudio.com/) to create and manage my projects instead of GitPod so I will be demonstrating the process with [VSCode](https://code.visualstudio.com/).

- Copy either the HTTPS or SSH URL that has just been generated by [GitHub](https://github.com/)


Now we need to open up a command prompt to pull this empty repository down onto our machine

- Open a CMD
- CD to a location you wish to store this project

Now we need to initialize this project as a [React](https://reactjs.org/) project

- Open up a new [GitBash](<https://en.wikipedia.org/wiki/Bash_(Unix_shell)>) terminal within the project
- Type in **npx create-react-app . --use-npm**

Once completed, you can test your new [React](https://reactjs.org/) application is working by typing **npm start** in the terminal

Now we can push our new project to our [GitHub](https://github.com/) repository

- **git add .**
- **git commit -m "Initial commit"**
- **git push**

Now it's time to deploy our new project live for everyone to see on [Heroku](https://www.heroku.com)

- Navigate to [Heroku](https://www.heroku.com)
- Click **New app**
- Fill in the relevant information
- Click **Create app** once you are happy

Now we need to link our [Heroku](https://www.heroku.com) application with our [GitHub](https://github.com/) project

- Click the **Deploy** tab
- Choose **GitHub**
- Search for your repository
- Once found, click **Connect**

Finally, we can deploy our connected projected for everyone to see.

You can either choose **Enable Automatic Deploys** or **Deploy Branch**. I chose to deploy my application manually when I was ready instead of automatic deployments

- Click **Deploy Branch** and wait for it to build

Your new [React](https://reactjs.org/) application is now successfully deployed to [Heroku](https://www.heroku.com)


## Credits

This is last project for my Code Institute Full Stack Web Development course. I have used the knowledge I have gained from the course to create this project. Im so happy I started this journey and I'm looking forward to the future.

### Media and Content

All the images used in this project were taken from my own personal collection. Fom my own company website and social media accounts. [here](https://swedenathletes.com/)

### Acknowledgements

- I would like to thank my mentor for all the help and support he has given me throughout this course.
  Marcel is a great mentor and I'm so happy I got him. He has helped me a lot and I'm very grateful for that.

- I would like to thank my family for all the support they have given me throughout this course.
- My soon to be wife for all the support and help she has given me throughout this course.