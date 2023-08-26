import React from "react";
import "./widget.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { DatePicker } from 'antd';
import { useState } from 'react';
import moment from 'moment';
const { RangePicker } = DatePicker;
const Widget = ({ type }) => {
const [dates, setDates] = useState([])
  let data;
  //temporary
  const amount = 50;

  switch (type) {
    case "student":
      data = {
        title: "الطــلاب",
        link: "اطلع على قائمة الطلاب",
        icon: (
          <PersonOutlinedIcon
            className="wi-icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "teacher":
      data = {
        title: "المعلمين",
        link: "اطلع على قائمة المعلمين",
        icon: (
          <PersonOutlinedIcon
            className="wi-icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="wi-icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "admin":
      data = {
        title: "المسئولون",
        link: "اطلع على قائمة المسئولين",
        icon: (
          <PersonOutlinedIcon
            className="wi-icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="wi-widget">

      <div className="wi-right">
        <div className="wi-percentage positive">
          <div style={{ margin: 20 }}>
      < RangePicker
        onChange={(values) => {
          setDates(values.map(item=>{
            return  moment(item).format('YYYY-DD-MM')
          }))
        }}
      />
    </div>
        </div>
        
      </div>
      <div className="wi-left">
        <span className="wi-title">{data.title}</span>
        <span className="wi-counter">
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
    </div>
  );
};

export default Widget;
