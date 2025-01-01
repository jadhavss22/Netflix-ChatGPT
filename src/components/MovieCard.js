
import { IMG_CDN } from '../Utils/constant'

const MovieCard = ({poster_path}) => {
  if(!poster_path) return null
  return (
<div className='w-40 md:w-44 pr-4'>
  <img alt="Movie Card" src={IMG_CDN + poster_path} />
</div>
  )
}

export default MovieCard
