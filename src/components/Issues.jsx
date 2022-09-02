import React from 'react'
import Inputs from './Inputs';
import ProgressBar from './ProgressBar';
import IssuesCss from '../css/Issues.module.css'

function Issues() {
  return (
    <>
    
    <div className={IssuesCss.container}>
        <ProgressBar bgcolor="#99ccff" progress='95'  height={20}/>
        <Inputs />
    </div>
    </>
  )
}

export default Issues;