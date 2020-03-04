# :musical_score: Rockfeller 2.0: 


## Overview

This is a full web application built on react and redux, it allows users to search
tickets from ticketmaster.

Although the application is far from finish you can view a small demo here
[here](https://rockfeller.herokuapp.com/).


## Homepage
![HomePage](screenshots/main.jpg)

## Functionality
On the Front End, the app uses `React` JavaScript Framework with `React Router` and `Redux`. And for styling, `styled-components` so our styling only loads with its respective react component.

On the Back End, the app uses `NodeJS`. For the database the app is using `postgreSQL`. `Express` is used as the router, and `bcrypt-js` for hashing user passwords. Additionally I am using `redux-saga` that allows for manipulation of the api data from `ticketmaster`.



## Cloning down the repo
If you wish to clone the app down to your local machine...
  1. Ensure that you have postgreSQL set up on your laptop as well as Node.
  2. The database is called Rockfeller, more info can be found in the `server/database` folder in the root of the project.
  3. Once you are set up, `cd` into this repo and run `npm install`.
  4. Afterward, run `npm start`.
  5. Then, navigate to `localhost:3000` in your browser.



## Screenshots

### Search for any events
![Main](screenshots/main.jpg)

### Animation made easy with react
![Openmain](screenshots/openmain.jpg)

### Search for tickets of your favorite artist
![BrunoSearch](screenshots/brunosearch.png)

### Mobile Look
![MobileSearch](screenshots/rockgenremobile.png)


## Current version details
    The web application is far from finish so there might still be bugs on the demo. Additionally there are still a ton of features to be added.

## Future Updates
  1. User profile, that shows friendlist, shows attended, and favorited.
  2. Ability to add friends and insta message them.
  3. Top upcoming popular shows.


## Authors

* **Gerardo Mestanza** - *Solo Project* - [GerardoM](https://github.com/Gmes23)
