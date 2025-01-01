# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Netflix GPT
  > Create React App
  > Configured TailwindCSS
  > Header
  > Routing
  > Login Form
  > Sign Up Form
  > Form Validation
  > useRef Hook
  > Firebase Setup
  > Deploying(Using Google Firebase) App to production follow below steps. 
    - npm i firebase
    - npm i -g firebase-tools
    - firebase login
    - firebase init
  After this command you have options choose **Hosting github option deploy** enter space bar and ENTER key then select **Use an existing project** after selecting your project 
     1. What do you want to use as your public directory? ---->  build
     2.Configure as single-page app ( rewrite all urls to /index.html)? -----> NO  
     3. Set up automatic build and deploy with Github ---> NO
     4.Before Deploy my project you need to Build your project ===> "npm run build"
     5.To deploy use command ==> "firebase deploy "
     6.In the terminal gives error as 
**Error:** It looks like you haven't created a Realtime Database instance in this project before. Please run "firebase init database" to create your default Realtime Database instance.

 `Solution:` To add file for firebase database configuration
    
    7.firebase init database command after this there are some questions
    i.You are initializing within an existing Firebase project directory? Are you ready to proceed --> Yes
    ? It seems like you haven’t initialized Realtime Database in your project yet. Do you want to set it up? 
  `-->`  Yes
    ? Please choose the location for your default Realtime Database instance:
     `asia-southeast1/Us`
    ? File No already exists. Do you want to overwrite it with the Realtime Database Security Rules for netflix-chatgpt-c29ad-default-rtdb from the Firebase console?
  `-->`  Yes

  > Create SignUp User Account
  > Implement Sign In User Api.
  > Created Redux Store with userSlice.
  > Implemented Sign Out.
  > Update Profile (added display Name and photo).
  > BugFix : Sign Up user displayName and profile picture update.
  > BugFix : If user not logged In redirect /browse to Login Page and vice-versa.
  > Unsubscribe to the onAuthStateChanged callback.
  > Add hardcoded values to the constant file.
  > Register TMDB API and create an app , get access token 
  > Get data from TMDB now playing movies list api.
  > Custom hooks for Now Playing Movie.
  > Create Movie slice Update store with movie data.
  > Planning for MainContainer and SecondaryContainer.
  > Fetch data and Update store with trailer video.
  > Embeded video make it autoplay and mute and tailwind classes for main container.
  > Build Secondary Component.
  > Build Movie List and Movie Card.
  > TMDB Image CDN URL.
  > Created Popular Movie Custom Hook.
  > GPT Search Page and Search bar with multi-language feature.(BONUS)
  > Get Open AI api key and GPT Search API call.
  > Fetched gptMovieSuggestion from TMDB.
  > Created gptSlice added data.
  > Reused MovieList component to make movie suggestion container.
  > Memoization
  > Added .env file and added to gitignore.
  > Make application Responsive


# Featurand 
  > Login / Sign Up 
    - Sign In / Sign Up form
    - Redeirects to Browse page

  > Browse ( after authentication )
    - Header
    - Main movie 
      * Movie Trailer in Background
      * Tiltle and Description 
      * Movie Suggestion 
          ~ Movie List * N

  > NetflixGPT 
    - Search Bar
    - Movie Suggestions

1.Paste three commands in vscode :
    git remote add origin git@github.com:jadhavss22/Netflix-GPT.git
    git branch -M main/Netflix-gpt
    git commit -m "code_desc"
    git push -u origin main/Netflix-gpt
Once you pushed all the code is comes in your repopsitory.
    To add userName ==> git config --global user.name "jadhavss22"
    To add email ==>    git config --global user.email "sarthaksjadhav3@gmail.com"

2.Create a folder in src for components
3.Install and Configure Tailwind CSS.
4.Deploy project URL : `https://netflix-chatgpt-c29ad.firebaseapp.com`
5.APIkey for TMDB api to access movies : 
  > sign up tmdb movie and go to 'More' section inside there is 'API' fill details you will get below info :
  `Apiket token` : eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzY2YjFlODAzYjBiZWVkN2ZkNjY5MzE3NzE4ODhlZCIsIm5iZiI6MTczNDg2NDExNy40OTQwMDAyLCJzdWIiOiI2NzY3ZWNmNTFiMDZjNWYyOGI3NGQyNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jiowgon1hBy9Jwws1jbFZWRfgh_sHr977CDtOB2AznE





