
import { IMG_CDN } from '../Utils/constant'

const MovieCard = ({poster_path}) => {
  return (
<div className='pr-4'>
  <img alt="Movie Card" src={IMG_CDN+poster_path} />
</div>
  )
}

export default MovieCard
