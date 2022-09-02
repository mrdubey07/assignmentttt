import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import FormCtx from '../context/FormCtx';
import InputRadio from '../Reusable/InputRadio';
import InputSelect from '../Reusable/InputSelect';
import InputText from '../Reusable/InputText';

function Inputs() {

    const [count, setCount] = useState(0);
    const ctx = useContext(FormCtx);


    useEffect(()=>{
        let input = document.querySelector('#form').getElementsByTagName('input').length;
        let select = document.querySelector('#form').getElementsByTagName('select').length;
        let count = input + select;
        ctx.count = count;
   
    },[])

    function onSubmitHandler(e){
        e.preventDefault();
    }

  return (
    <form onSubmit={onSubmitHandler} id="form" className="container" >
        <InputText htmlFor="name" label="Name" name="name" id="id" />

        <InputRadio htmlFor="natureofDL" label="Nature of Driving License" htmlFor1="nature" label1="Private" label2="Commercial"  name="nature" id="natureofDL"/>
        <InputRadio htmlFor="previousDL" label="Type of Previous Driving License" htmlFor1="previous" name="previous" id="previousDL" label1="Paper Driving License" label2="Smart Driving License" />
        <InputText htmlFor="placename" type="text" name="placename" id="placename" label="Place Where Driving License was Issued" />
        <InputSelect htmlFor="yodl" label="Issued Year of License" name="yodl" option="Choose Issued Year of License" value="default" value1="2020" value2="2021" value3="2022" />
        <InputSelect htmlFor="previousDL" label="Issued Year of License" name="previousDL" option="Choose Expired Year of License" value="default" value1="2020" value2="2021" value3="2022" />
        <input type="submit" />
    </form>
  )
}

export default Inputs;