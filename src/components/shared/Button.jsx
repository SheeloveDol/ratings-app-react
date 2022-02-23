// Custom button
import React from 'react'
import PropTypes from 'prop-types'


function Button({ isDisabled, children, version, type  }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

// Setting default props for Button
Button.defaultProps = {
  version: 'primary',
  isDisabled: false,
  type: 'button',
}

// Setting propTypes for Button
Button.propTypes = {
  isDisabled: PropTypes.bool,
  version: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
}

export default Button
