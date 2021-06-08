# 1pm-t3-course-recommender


## Project name: **UCSB Course Recommender Application**

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

## Deployment

https://ucsb-course-recommender.herokuapp.com/

## Installation
see in ./docs/DEPLOY.md 

https://github.com/ucsb-cs148-s21/1pm-t3-course-recommender/blob/main/docs/DEPLOY.md

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
- The initial landing page contains a description of the application and a link to view courses offered next quarter or take the course survey
- The course list page shows a list of all computer science courses offered next quarter taken directly from the UCSB Developer API
- The course survey page has a check list of all important prerequisite courses for the CS major, upon completion you will be redirected to the recommended courses page
- The recommended courses page offers a list of courses you are eligible to take based on the information you provided in the course survey
- The profile page is available after logging in to the application with your @ucsb.edu email
### Final Known Problems
* Current survey algorithm could be improved to fix the problem of equivalent prerequisites not shown in the course survey


## Contributing!
We are happy to embrace any contributions~ 
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Materials for Final version 2.0 release

### Design Document (also found in `docs/DESIGN.md`)
https://docs.google.com/document/d/1zcPZ-XNMXE1buxg1-PtYqenhxwRqQR91ucPJp0PrHEs/edit?usp=sharing

### User Manual (also found in `docs/MANUAL.md`)
https://docs.google.com/document/d/1DYoyfdU3NEk_y0oyIznjWPXkmXzYKl6xjlp__9z-V4k/edit?usp=sharing

### Final Presentation link (also found in `teams/FINAL_PRESENTATION.md`)
https://youtu.be/kpc7oCals_k

## License
We integrated the MIT license, which can be checked out in a file called: `License.txt`
