import React from 'react'
import { FaStar, FaStarHalf, FaRegStar} from 'react-icons/fa'

const Rating = ({rating, reviews}) => {

  return (
    <div className='rating'>
      <span>
        { rating >= 1 ? <FaStar /> : rating >= 0.5 ? <FaStarHalf /> : <FaRegStar />}
      </span>
      <span>
        { rating >= 2 ? <FaStar /> : rating >= 1.5 ? <FaStarHalf /> : <FaRegStar />}
      </span>
      <span>
        { rating >= 3 ? <FaStar /> : rating >= 2.5 ? <FaStarHalf /> : <FaRegStar />}
      </span>
      <span>
        { rating >= 4 ? <FaStar /> : rating >= 3.5 ? <FaStarHalf /> : <FaRegStar />}
      </span>
      <span>
        { rating >= 5 ? <FaStar /> : rating >= 4.5 ? <FaStarHalf /> : <FaRegStar />}
      </span>

      <span className="rating-text">
        { reviews & reviews } reviews
      </span>
    </div>
  )
}

export default Rating