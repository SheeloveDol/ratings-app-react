import React from 'react'
import PropTypes from 'prop-types'



// This component is where we display the number of Reviews and the average rating. We get our props { data } from App.js

function FeedbackStats({ data }) {
  // Calculating the average rating of feedbacks
  let averageRatings = data.reduce((acc, cur) =>{
    return acc + cur.rating
  }, 0) / data.length
  
  // Fixing averageRatings to just one decimal place and to replace trailing zeros
    averageRatings = averageRatings.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className='feedback-stats'>
      <h4>{data.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRatings) ? 0 : averageRatings}</h4>
    </div>
  )
}

// Setting PropTypes for FeedbackStats
FeedbackStats.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackStats
