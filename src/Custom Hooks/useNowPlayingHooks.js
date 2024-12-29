import { useEffect } from "react";
import { apiAuthorisation } from '../Utils/constant';
import { addNowPlayingMovies } from '../Utils/movieSlice';
import { useDispatch } from "react-redux";

const useNowPlayingHooks = () => {
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing",apiAuthorisation)
      const json = await data.json()
      console.log(json.result);
      dispatch(addNowPlayingMovies(json.result))
    }
  
    useEffect(() =>{
      getNowPlayingMovies()
    },[])
}

export default useNowPlayingHooks