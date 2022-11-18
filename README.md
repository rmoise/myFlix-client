<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/rmoise/simple-js-app">
    <img src="img/logo-readme.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">myFlix-client-Technical Case Study</h1>

  <p align="center">
    <a href="https://myflix-movie-client-react.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/rmoise/myFlix-client/issues">Report Bug</a>
    ·
    <a href="https://github.com/rmoise/myFlix-client/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#objective">Objective</a>
        <li><a href="#context">Context</a></li>
    </li>
    <li><a href="#the-5-ws">The 5 Ws</a></li>
       <li><a href="#user-stories">User Stories</a></li>
        <li><a href="#features-and-requirements">Features and Requirements</a></li>
        <ul>
        <li><a href="#essential-views-and-features">Essential Views and Features</a>
    </li>
    </ul>
     <li><a href="#technical-requirements">Technical Requirements</a>
    <li><a href="#built-with">Built With</a></li>
     <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## Objective

Build a movie client-side app with React as Front-End and using a REST API as Back-End.

[![myFlix client screenshot][product-screenshot]](https://myflix-movie-client-react.netlify.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Context

Client-side development hasn’t always been so prominent. In the past, web pages would be generated on the server-side and sent to the browser, resulting in a poor user experience. But thanks to modern browsers and libraries such as React, the client-side of an application is today considered to be just as important as the server-side.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## The 5 W's

1. Who — The users of your movie application. They will be movie enthusiasts who enjoy reading information about different movies
2. What — A single-page, responsive application with routing, rich interactions, several interface views, and a polished user experience. The client-side development in this project supports the existing server-side code (REST API and database) by facilitating user requests and rendering the response from the server-side via several different interface views
3. When — Users will be able to use the Movie App whenever they want to read information about different movies or update their user data — for instance, their list of "Favorite Movies"
4. Where — The application is hosted online. The Movie application itself is responsive and can be used anywhere and on any device, giving all users the same experience
5. Why — Movie enthusiasts should be able to access information about different movies, directors, and genres, whenever they want to. Having the ability to save lists of favorite movies will ensure users always have access to the films they want to watch or recommend to their peers.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## User Stories

- As a user, I want to be able to access information on movies, directors, and genres so that I can learn more about movies I've watched or am interested in
- As a user, I want to be able to create a profile so I can save data about my favorite movies.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features and Requirements
### Essential Views and Features

Main view

- Returns a list of ALL movies to the user (each listed item with an image, title, and description)
- Sorting and filtering
- Ability to select a movie for more details

Single movie view

- Returns data (description, genre, director, image) about a single movie to the user
- Allows users to add a movie to their list of favorites

Login view

- Allows users to log in with a username and password
- Registration view
- Allows new users to register (username, password, email, birthday)

Genre view

- Returns data about a genre, with a name and description
- Displays example movies

Director view

- Returns data about a director (name, bio, birth year, death year)
- Displays example movies

Profile view

- Allows users to update their user info (username, password, email, date of birth)
- Allows existing users to deregister
- Displays favorite movies
- Allows users to remove a movie from their list of favorites

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technical Requirements

- The application must be a single-page application (SPA)
- The application must use state routing to navigate between views and share URLs
- The application must give users the option to filter movies
- The application must give users the option to sort movies
- The application must initially use Parcel as its build tool
- The application must be written using the React library and in ES2015+
- The application must be written with React-Redux (hence respecting the Flux pattern)
- The application must use Bootstrap as a UI library for styling and responsiveness
- The application must contain a mix of class components and function components
- The application may be hosted online.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<!-- prettier-ignore -->
* [![React][react.org]][react-url]
* [![React-Redux][react-redux.org]][react-redux-url]
* [![Bootstrap][bootstrap.com]][bootstrap-url]
* [![Netlify Status](https://api.netlify.com/api/v1/badges/974b109e-2090-4460-9490-350a84f313f9/deploy-status)](https://app.netlify.com/sites/myflix-movie-client-react/deploys)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

<!-- prettier-ignore -->
* [themoviedb.org](https://www.themoviedb.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[react.org]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org
[react-redux.org]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[react-redux-url]: https://react-redux.js.org
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[product-screenshot]: img/myFlix-screenshot.png
