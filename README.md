# 1pm-t3-course-recommender


### Project name: **UCSB Course Recommender Application**

### Description:
A web application that helps CS students choose their course by listing a list of major courses and GE courses that they can take to count towards their graduation. 
The web app will prompt the user to select their previously completed courses. Then, using the list of courses from UCSB Developer API, the app will return a list
of courses offered next quarter that they fulfill the prequisites for and are able to take the following quarter.

User role: As a student, I can use this web application to get a list of both major courses and GE courses offered at this quarter to count towards my graduation.

### Team info:

Jiarui (Jack) Zhu: gitzhujiarui

Zhiyun Zhang: JessicaZng

Ruxin Zhang: ruxin827

Justin Surmani: justinsurmani

Chandler Ott: chandlerott

Tech Stack: React + Springboot, deployed on Heroku


https://ucsb-course-recommender.herokuapp.com/


## Installation
### Prerequisites
1. Java 11 or above
  - type in```java -version```to check 
  - if it's 11 or 14 change the version of java in pom.xml
2. maven
  - install maven if not already done so

3. Node.js 
  - install by type in `npm install` in the terminal

### Dependencies
1. react modules
  - @jest
  - @babel
  - @testing-library
  - details showed in `1pm-t3-course-recommender/frontend_new/node_modules/`

2. springboot framework
  - more details in `pom.xml`
  - more things coming up in `1pm-t3-course-recommender/springboot_new/src/main/resources/`


### Installation Steps - How to run it on localhost

* TODO: Generate Auth Keys

* Create a file called .env.local in `frontend_new`
``` 
cd frontend_new 
vim .env.local
```
* Add these credentials to this file: 
```
REACT_APP_AUTH0_DOMAIN=cs148-s21-1pm-t3-course-recommender.us.auth0.com
REACT_APP_AUTH0_AUDIENCE=https://ucsb-course-recommender.herokuapp.com
REACT_APP_AUTH0_CLIENT_ID=CUI6kqw7jetBHG4coCzzt7KITafcgi0Y
```

* Then run the frontend cient
```
npm install
npm start
```

## MVP Version
### MVP Functionality
- The first page holds a list of courses offered by computer science department regularly
- The second page is a quiz for the user to check off the courses they have already taken to give out an personal schedule planning suggestion
- The personal schedule planning suggestion will be showed up on the third page

### MVP Known Problems
* Ensure Java version on local machine is compatible. If you get a build failure when running springboot-backend, check the `pom.xml` file and look for java properties tag. There, you can check if your installed version of java is compatible, or else you can change it down to 11 or 14 if required.
* Current Algorithm still need some improvement to achieve a better performance on giving out plans based on the personal information
* A more established database will be updated soon! 


## Final Version

### Final Functionality
- 
### Final Known Problems
-


## Contributing!
We are happy to embrace any contributions~ 
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
We ingerate the MIT license, can be checked out in a file called: `License.txt`
