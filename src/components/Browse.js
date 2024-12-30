
import Header from './Header'
import useNowPlayingHooks from "../Custom Hooks/useNowPlayingHooks";
import MainContainer from "./MainContainer";
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Custom Hooks/usePopularMoviesHooks';
const Browse = () => {
 useNowPlayingHooks()
 usePopularMovies()
  return (
    <div>
      <Header />
     < MainContainer />
     <SecondaryContainer />
 {/*

We divide our browse page into two sections 
  Main video container
    1.Video Title
    2.Video Background
  Secondary Container
    1.MovieList * n 
    2.cards * n
   
   */}
    </div>
  )
}

export default Browse
