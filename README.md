# 1pm-t3-course-recommender


Project name: UCSB Course Recommender Application

Description:
A web application that helps CS students choose their course by listing a list of major courses and GE courses that they can take to count towards their graduation. 
The web app will prompt the user to select their previously completed courses. Then, using the list of courses from UCSB Developer API, the app will return a list
of courses offered next quarter that they fulfill the prequisites for and are able to take the following quarter.

User role: As a student, I can use this web application to get a list of both major courses and GE courses offered at this quarter to count towards my graduation.

Team info:

Jiarui (Jack) Zhu: gitzhujiarui

Zhiyun Zhang: JessicaZng

Ruxin Zhang: ruxin827

Justin Surmani: justinsurmani

Chandler Ott: chandlerott

Tech Stack: React + Springboot, deployed on Heroku


https://secure-mesa-73901.herokuapp.com/


## Prerequisites
1. Java 11 or above

2. maven

3. Node.js (`npm install`)

## How to run it on localhost

* Run the backend API first

```
cd springboot_new
mvn clean install
mvn spring-boot:run
```

* Then run the frontend cient (with a second terminal window)

```
cd frontend_new
npm start
```
