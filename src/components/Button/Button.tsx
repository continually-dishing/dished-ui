import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
function Button({handleClick }: any) {

    return(
    <button className='general-button' onClick={handleClick}>Generate!</button>
    );

}

Button.propTypes = {
    handleClick: PropTypes.func
  }

  export default Button