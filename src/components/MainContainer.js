import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTiltle from "./VideoTiltle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if(!movies) return;
  const mainMovie = movies(0);

  const {original_title, overview,movieId} = mainMovie
  return (
    <div>
      <VideoTiltle title={original_title} overview={overview} />
      <VideoBackground movieId={movieId}/>
    </div>
  );
};

export default MainContainer;
