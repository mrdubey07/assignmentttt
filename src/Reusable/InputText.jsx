import React from 'react'
import InputCss from '../css/InputsCss.module.css'

function InputText(props) {
  return (
    <div className={InputCss.inputContainer}>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input type="text" name={props.name} id={props.id} />
        </div>
  )
}

export default InputText;