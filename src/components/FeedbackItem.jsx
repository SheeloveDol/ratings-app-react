import React from 'react'
// import {useState} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'


function FeedbackItem({ item }) {
  // Setting up a component-level state for 'rating' and 'text'
    // const [rating, setRating ] = useState(9);
    // const [text, setText] = useState('This is a ratings example')
  
  // Instead of hardcoding the data, we are now getting our data from our props

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

// Setting propTypes for FeedbackItem
FeedbackItem.propTypes = {
  item: PropTypes.object,
}

export default FeedbackItem
