import { useSelector } from "react-redux"
import language from "../Utils/LanguageConst.js/languageConst"


const GPTSearchBar = () => {
  const fetchLanguage = useSelector((store)=>store.config.lang)
  return (
    <div>
      <form className='w-1/2 bg-black grid grid-cols-12'>
  <input type="text" className="p-4 m-4 col-span-9 rounded-lg" placeholder={language[fetchLanguage].gptSearchPlaceholder}/>
  <button className="col-span-3 py-2 px-3 bg-red-700 text-white rounded-lg">{language[fetchLanguage].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
