import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const { openAIMovies, tmdbMovieResult } = useSelector((store) => store.GPT);

  return <div className="p-4 m-4 bg-black text-white bg-opacity-90">
 <div>
  {openAIMovies.map((movie, index)=>(<MovieList key={movie} title={movie} movies={tmdbMovieResult[index]}/>))}
 </div>
    </div>;
};

export default GPTMovieSuggestion;
