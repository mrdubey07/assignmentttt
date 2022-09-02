import React from 'react'
import InputCss from '../css/InputsCss.module.css'


function InputSelect(props) {
  return (
    <div className={InputCss.inputContainer}>
            <label htmlFor={props.htmlfor}>Issued Year of License</label>
            <select name={props.name} id={props.id}>
                <option value={props.value} disabled>{props.option}</option>
                <option value={props.value1}>{props.value1}</option>
                <option value={props.value2}>{props.value2}</option>
                <option value={props.value3}>{props.value3}</option>
            </select>
        </div>
  )
}

export default InputSelect;