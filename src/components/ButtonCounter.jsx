import React from 'react'
import './buttonCounter.css'

export const ButtonCounter = ({label, onClick, size, backgroundColor, buttonStyle}) => {
  return (
    <div>
        <button 
            className={[buttonStyle, `counter-button--${size}`].join(' ')}
            style={backgroundColor && {backgroundColor}}
            onClick={onClick}
        >{label}
        </button>
    </div>
  )
}
