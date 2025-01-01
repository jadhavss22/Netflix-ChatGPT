import { useEffect, useDispatch, useSelector } from "react";
import { apiAuthorisation } from "../Utils/constant";
import { addVideoTrailer } from "../Utils/movieSlice";

const useTrailerVideo = (movieId) => {
  const trailerVideo = useSelector((store)=>store.movies.trailerVideo)

  const dispatch = useDispatch();
  const getMovieVieo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +movieId+ "/videos",
      apiAuthorisation
    );

    const json = await data.json();
    // inthe json response we got 15 videos out of we want only type ="Trailer" here is the use of Array method 'filter()'
    const filterVideo = json.results.filter(
      (video) => video.type === "Trailer"
    );
    // What if in the result there is no trailer type present then use case below.
    const trailer = filterVideo.length ? filterVideo[0] : json.results[0];
    dispatch(addVideoTrailer(trailer)); 

  };
  useEffect(() => {
  !trailerVideo && getMovieVieo();
  }, []);
};

export default useTrailerVideo;
