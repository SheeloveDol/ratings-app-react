import React from 'react'
import FeedbackItem from './FeedbackItem';

function FeedbackList({ data }) {
  if (!data || data.length === 0) {
    return <p>Sorry, we dont have any feedback as of yet.</p>
  }

  return (
    <div className='feedback-list'>
      {
        data.map((item) => (
          <FeedbackItem key={item.id} item={item}  />
        ))
      }
    </div>
  )
}

export default FeedbackList
