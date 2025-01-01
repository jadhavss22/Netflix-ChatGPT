import { backGroundImg } from "../Utils/constant"
import GPTMovieSuggestion from "./GPTMovieSuggestion"
import GPTSearchBar from "./GPTSearchBar"


const GPTSearch = () => {
  return (
    <>  
    <div className="fixed -z-10">
        <img className="h-screen object-cover"
          src={backGroundImg}
          alt="backgroundLogo"
          />
      </div>
         <div className="">
        <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
    </>
  )
}

export default GPTSearch
