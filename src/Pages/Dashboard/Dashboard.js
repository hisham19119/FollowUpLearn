import React from 'react'
import "./Dashboard.css"
import Sidebar from '../../Components/sidebar/Sidebar'
import Widget from '../../Components/widget/Widget'
import Featured from '../../Components/featured/Featured'
import Chart from '../../Components/chart/Chart'

const Dashboard = () => {
  return (
    
<div className="dash-home">

      <div className="dash-homeContainer">
        <div className="dash-widgets">
          <Widget type="student" />
          <Widget type="teacher" />
          <Widget type="admin" />
        </div>
        <div className="dash-charts">
          <Featured />
          <Chart title="آخر 12 شهر" aspect={2 / 1} />
        </div>
        <div className="dash-listContainer">
        </div>
      </div>
      <Sidebar />
      
    </div>
  )
}

export default Dashboard
