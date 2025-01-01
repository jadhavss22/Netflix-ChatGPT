import { useDispatch, useSelector } from "react-redux";
import language from "../Utils/LanguageConst.js/languageConst";
import { useRef } from "react";
import openai from "./openai";
import { apiAuthorisation } from "../Utils/constant";
import { addGptMovies } from "../Utils/GPTSearchSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch()
  const fetchLanguage = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movieName)=>{
  const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName,apiAuthorisation)
  const json = data.json()
   return json.results
  }

  const handleGPTSearch = async () => {
    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query :"+searchText.current.value
   +"only give me names of five movies"
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
      
    });
   
    // const gptMovies = chatCompletion.choices?.[0]?.message?.content);

    // Result is : "Andaz Apna Apna","Hera Pheri","Padosan","Janne Bhi Do Yaaro"
    const gptMovies = chatCompletion.choices?.[0]?.message?.content.split(",");
    console.log(gptMovies); 
// gptMovies result = ["Andaz Apna Apna","Hera Pheri","Padosan","Janne Bhi Do Yaaro"]

// For each movie I will search TMDB API 

    const promiseArray = gptMovies.map((movie)=>  searchMovieTMDB(movie))
  // promiseArray is : [promise, promise, promise, promise, promise]

// movie is the name of MovieName pass inside searchMovieTMDB().It will call for five times and give results inside gptMovies
// but it won't give result immediately becz 'searchMovieTMDB' is an async function.
// Reason : map function will not wait for one call get finish. the searchMovieTMDB() will 
// take time to return result in that time it will give five promises not the result and promises take time to get resolve.

const tmdbResult = await Promise.all(promiseArray)  

//  Promise.all() take the array of promise and the program is waiting due to promise.all() get finished
//  it completed only when all promises are resolved and then get result.
    dispatch(addGptMovies({openAIMovies:gptMovies,tmdbMovieResult:tmdbResult}))
};

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={language[fetchLanguage].gptSearchPlaceholder}
        />
        <button 
          onClick={handleGPTSearch}
          className="col-span-3 py-2 px-3 bg-red-700 text-white rounded-lg"
        > 
          {language[fetchLanguage].search}
        </button>
        {/* Show Shimmer UI after click on button */}
      </form>
    </div>
  );
};

export default GPTSearchBar;
