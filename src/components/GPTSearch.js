import { backGroundImg } from "../Utils/constant"
import GPTMovieSuggestion from "./GPTMovieSuggestion"
import GPTSearchBar from "./GPTSearchBar"


const GPTSearch = () => {
  return (
    <div>
     <div className="absolute -z-10">
        <img
          src={backGroundImg}
          alt="backgroundLogo"
        />
      </div>
        <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  )
}

export default GPTSearch
