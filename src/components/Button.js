import React from 'react'
import PropTypes from 'prop-types';

const Button = ({text, onToggle}) => {
    return (
        <button onClick={onToggle} className="btn">{text}</button>
    )
}

Button.defaultProps = {
    text: "Add"
}
Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
