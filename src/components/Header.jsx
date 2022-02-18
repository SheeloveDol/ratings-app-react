// We import Proptypes in order to control the type of inputs we receive for our props
import PropTypes from 'prop-types'


function Header({title}) {
  return (
    <header>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  )
}

// Default props for my Header component
Header.defaultProps = {
  title: 'My Default Title'
}

//Here is where we specify the propType
Header.propTytes = {
  title: PropTypes.string
}

export default Header

