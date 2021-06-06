# Installation
## Prerequisites
1. Java 11 or above
  - type in```java -version```to check 
  - if it's 11 or 14 change the version of java in pom.xml
2. maven
  - install maven if not already done so

3. Node.js 
  - install by type in `npm install` in the terminal

## Dependencies
1. react modules
  - @jest
  - @babel
  - @testing-library
  - details showed in `1pm-t3-course-recommender/frontend_new/node_modules/`

2. springboot framework
  - more details in `pom.xml`
  - more things coming up in `1pm-t3-course-recommender/springboot_new/src/main/resources/`

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
