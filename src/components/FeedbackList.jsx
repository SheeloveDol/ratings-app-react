import { motion, AnimatePresence } from 'framer-motion'
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
      <AnimatePresence>
        {
          data.map((item) => (
            <motion.div
              key={item.id}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
              <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
            </motion.div>
          ))
        }
      </AnimatePresence>
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
