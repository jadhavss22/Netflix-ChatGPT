import Header from "./Header";
import useNowPlayingHooks from "../Custom Hooks/useNowPlayingHooks";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Custom Hooks/usePopularMoviesHooks";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlayingHooks();
  usePopularMovies();
  const GptToggle = useSelector((store) => store.GPT?.showGptSearch);
  return (
    <div>
      <Header />
      {GptToggle ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

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
  );
};

export default Browse;
