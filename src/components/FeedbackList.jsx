import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import React from 'react'
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackList() {
  
  const { feedback } = useContext(FeedbackContext)

  // This is in case we have no data as our default state
  if (!feedback || feedback.length === 0) {
    return <p>Sorry, we dont have any ratings as of yet.</p>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {
          feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
              <FeedbackItem key={item.id} item={item} />
            </motion.div>
          ))
        }
      </AnimatePresence>
    </div>
  )
}



export default FeedbackList 
