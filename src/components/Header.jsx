// We import Proptypes in order to control the type of inputs we receive for our props
import PropTypes from 'prop-types'


function Header({title, bgColor, textColor}) {
  
  // Testing out some styles
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }


  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  )
}

// Default props for my Header component
Header.defaultProps = {
  title: 'Ratings Plus',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: "#ff6a95",

}

//Here is where we specify the propType
Header.propTytes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header

