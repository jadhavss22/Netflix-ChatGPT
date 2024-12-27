
import { useSelector } from "react-redux";
import useTrailerVideo from "../Custom Hooks/useTrailerVideo";


const VideoBackground = ({movieId}) => {
 
 const videoTrailer = useSelector(strore => strore.movies?.videoTrailer)
  // There is no trailer data present in nowPlaying api response so we'll go to TMDB and inside movies---> video section.we get video
  // of the movie we want but requires movie id which get from nowPlaying api this need to pass inside video section of path pattern in response we get
  // multiple videos related to movie but we need movie trailer so check for 'type' attribute and value as Trailer.

  useTrailerVideo(movieId)
// passing movieId into useTrailerVideo hook is fetching movie, finding trailer, filtering video and update the store
  return (
    <div>
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+ videoTrailer?.key}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
