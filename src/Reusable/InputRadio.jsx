import React from 'react'
import InputCss from '../css/InputsCss.module.css'


function InputRadio(props) {
  return (
    <div className={InputCss.inputContainer}>
            <label htmlFor={props.htmlFor} >{props.label}</label>
            <br />
            <label htmlFor={props.htmlFor2} >{props.label1}</label>
            <input type="radio" name={props.name} id={props.id} />
            <label htmlFor={props.htmlFor2}>{props.label2}</label>
            <input type="radio" name={props.name} id={props.id}/>
        </div>
  )
}

export default InputRadio;