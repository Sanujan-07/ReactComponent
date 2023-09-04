import PropTypes from 'prop-types'
import React from 'react'
interface ButtonProps {
    color?: string; 
    text: string;
    onClick?: () => void;
  }
const Button : React.FC<ButtonProps>= ({ color='steelblue', text, onClick }) => {


    return (
        <button onClick={onClick} className='btn' style={{ backgroundColor: color }}>{text}</button>
    )
}

export default Button;
