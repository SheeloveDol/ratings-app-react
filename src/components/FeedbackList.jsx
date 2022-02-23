import React from 'react'
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'


function FeedbackList({ data, handleDelete }) {

  // This is in case we have no data as our default state
  if (!data || data.length === 0) {
    return <p>Sorry, we dont have any ratings as of yet.</p>
  }

  return (
    <div className='feedback-list'>
      {
        data.map((item) => (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))
      }
    </div>
  )
}

// Setting propTypes for FeedbackList with the shape of the array included
FeedbackList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}


export default FeedbackList
