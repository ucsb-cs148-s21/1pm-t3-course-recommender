# 1pm-t3-course-recommender


Project name: UCSB Course Recommender Application

Description:
A web application that helps CS students choose their course by listing a list of major courses and GE courses that they can take to count towards their graduation. 
The web app will prompt the user to select their previously completed courses. Then, using the list of courses from UCSB Developer API, the app will return a list
of courses offered next quarter that they fulfill the prequisites for and are able to take the following quarter.

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

3. Configure the `localhost.JSON` file. Copy the `loalhost.JSON.Sample` from the repo and rename the copy to `localhost.JSON`. Go to https://github.com/settings/applications/new to get a new OAuth App. Then, copy and paste the ClientID and ClientSecret into the `localhost.JSON`.

## How to run it on localhost

`cd` into `backend`

`. env.sh`

`mvn spring-boot:run` then go to http://localhost:8080
