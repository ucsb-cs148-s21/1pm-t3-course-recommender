# Installation
## Prerequisites
Node.js 
  - install by type in `npm install` in the terminal

## Dependencies
1. react modules: 
  node-modules that would be installed automatically by `npm install`
  - @jest
  - @babel
  - @testing-library


## Authorization
In order to make the API calls on localhost you must apply for a UCSB Developer Account and obtain an API key here https://developer.ucsb.edu/.


## Installation Steps - How to run it on localhost
* first clone the repo from github: 
```
git clone git@github.com:ucsb-cs148-s21/1pm-t3-course-recommender.git
```
or 
```
git clone https://github.com/ucsb-cs148-s21/1pm-t3-course-recommender.git
```
* then go to the frontend repository:
```
cd 1pm-t3-course-recommender/frontend_new
```

* Create a file in the frontend_new directory named ".env.local"
```
vim .env.local
```

* Add the following lines to the file replacing "YOUR_UCSB_API_KEY_GOES_HERE" with the your actual UCSB API key.

```
REACT_APP_AUTH0_DOMAIN=cs148-s21-1pm-t3-course-recommender.us.auth0.com
REACT_APP_AUTH0_AUDIENCE=https://ucsb-course-recommender.herokuapp.com
REACT_APP_AUTH0_CLIENT_ID=CUI6kqw7jetBHG4coCzzt7KITafcgi0Y
REACT_APP_UCSB_API_KEY=YOUR_UCSB_API_KEY_GOES_HERE
```
* Then back in the frontend_new directory, run the frontend cient
```
npm install
npm start
```
