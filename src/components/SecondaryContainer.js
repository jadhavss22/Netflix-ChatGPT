import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
   <div className="bg-black">
     <div className="-mt-52 pl-12 relative z-20">
       <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
       <MovieList title={"Popular"} movies={movies.popularMovies}/>
       {/* <MovieList title={"Trending"} movies={movies.trendingMovies}/> */}
       {/* <MovieList title={"Upcoming"} movies={movies}/> */}
{/* 
MovieList - Popular 
    > MovieCard * n
          - NowPlaying   
          - Trending   
          - Horror   
*/}
    </div>
    </div>
  );
};

export default SecondaryContainer;
