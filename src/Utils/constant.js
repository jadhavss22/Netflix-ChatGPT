
// Add security to apikey we use .env file

export const netflixLogo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const photoURLImg = "https://static-00.iconduck.com/assets.00/octocat-icon-2048x2026-e09tqqg5.png"

export const apiAuthorisation = {

    method:"GET" ,
    headers:{
        Authorization: "Bearer"+process.env.REACT_APP_apiAuthorisation,
        accept: "application/json"
    }
}

export const IMG_CDN = `https://image.tmdb.org/t/p/w200/`
export const backGroundImg = `https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg`

export const supported_languages = [{
    identifier :"en",
    name:"englih"
},
{
    identifier :"ma",
    name:"marathi"
},{
    identifier :"it",
    name:"italian"
}
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY 
