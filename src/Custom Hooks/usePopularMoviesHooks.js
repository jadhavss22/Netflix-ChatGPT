import { useEffect } from "react";
import { apiAuthorisation } from '../Utils/constant';
import { addPopularMovies } from '../Utils/movieSlice';
import { useDispatch, useSelector } from "react-redux";

const usePopularMovies = () => {
  const popularMovies = useSelector((store)=>store.movies.popularMovies)

    const dispatch = useDispatch()
    const getPopularMovies = async () => {
      const data = await fetch("'https://api.themoviedb.org/3/movie/popular&page=1",apiAuthorisation)
      const json = await data.json()
      console.log(json.result);
      dispatch(addPopularMovies(json.result))
    }
  
    useEffect(() =>{
  !popularMovies && getPopularMovies()
    },[])
}

export default usePopularMovies