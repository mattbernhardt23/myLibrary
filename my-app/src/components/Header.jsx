import PropTypes from 'prop-types'

function Header({text}) {

  return (
    <header >
        <div className="header">
        <h1>My Library</h1>
        <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "What's Your Favorite Book?",
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}
 
export default Header