# Installation Steps - How to run it on localhost

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
