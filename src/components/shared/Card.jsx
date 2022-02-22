import React from 'react'
import PropTypes from 'prop-types'



function Card({ children, reverse }) {
  return (
    
    // Adding a conditional className 'reverse'
    <div className={`card ${reverse && 'reverse' }`}>
      {children}
    </div>
  )
}

// Default props for Card component
Card.defaultProps = {
  reverse: false,
}

// Setting Proptypes for Card component
Card.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Card  


