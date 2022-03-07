import React from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'



// This component is where we display the number of Reviews and the average rating. We get our props { data } from App.js

function FeedbackStats() {
  // Using useContext to get our props instead of drilling them in
  const { feedback } = useContext(FeedbackContext)


  // Calculating the average rating of feedbacks
  let averageRatings = feedback.reduce((acc, cur) =>{
    return acc + cur.rating
  }, 0) / feedback.length
  
  // Fixing averageRatings to just one decimal place and to replace trailing zeros
    averageRatings = averageRatings.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRatings) ? 0 : averageRatings}</h4>
    </div>
  )
}

// Setting PropTypes for FeedbackStats
// Deleted proptypes settings because we are now using useContext to get our props

export default FeedbackStats
