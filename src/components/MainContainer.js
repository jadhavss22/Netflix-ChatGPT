import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTiltle from "./VideoTiltle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if(!movies) return;
// First time even the store is there our "nowPlayingMovies" is null and we want to acces movies[0] that's why we write the logic.
// movie == null and !movie one and the same thing.
const mainMovie = movies(0);

  const {original_title, overview,movieId} = mainMovie
  // overview is a description of movie.
  return (
    <div>
      <VideoTiltle title={original_title} overview={overview} />
      <VideoBackground movieId={movieId}/>
    </div>
  );
};

export default MainContainer;
