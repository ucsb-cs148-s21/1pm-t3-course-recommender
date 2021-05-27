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


## Installation Steps - How to run it on localhost

* Create a file called .env.local in `frontend_new`
``` 
cd frontend_new 
vim .env.local
```
* Add these credentials to this file: 
```
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_AUDIENCE=
REACT_APP_AUTH0_CLIENT_ID=
```

* Then run the frontend cient
```
npm install
npm start
```
