import React from 'react'

import dashboardCss from '../Css/dashboardCss.module.css'
import HPanel from './HPanel';


function DashboardStats(props) {
  return (
    <div className={dashboardCss.container}>
      <HPanel statsdata={props.stats}/> 
    </div>
  )
}

export default DashboardStats