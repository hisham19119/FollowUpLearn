import "./single.css";
import React from "react";

import Sidebar from "../../Components/sidebar/Sidebar";
import Chart from "../../Components/chart/Chart";
import Section from "../../Components/section/Section.js"
const Single = () => {
  return (
    <div className="single">
      <div className="sin-singleContainer">
        <div className="sin-top">
          <div className="sin-left">
            <div className="sin-editButton" >تعديل</div>
            <h1 className="sin-title" style={{direction:"rtl",  textAlign:"start" , width:"100%"}}>معلومات</h1>
            <div className="sin-item">
              <img
                src="https://m.media-amazon.com/images/M/MV5BOWM2ZDNlMzMtZDkyZC00NGFiLTliYmQtNjc3NDE2YmQyNzk0XkEyXkFqcGdeQXVyMTI2MDc4MTYz._V1_FMjpg_UX1000_.jpg"
                alt=""
                className="sin-itemImg"
              />
              <div className="sin-details">
                <h1 className="sin-itemTitle" style={{direction:"rtl"}}>هشام </h1>
                <div className="sin-detailItem" style={{direction:"rtl"}}>
                  <span className="sin-itemKey">البريد الإليكتروني:</span>
                  <span className="sin-itemValue">hishamtaha047@gmail.com  </span>
                </div>
                <div className="sin-detailItem" style={{direction:"rtl"}}>
                  <span className="sin-itemKey">الهاتف المحمول:</span>
                  <span className="sin-itemValue">+20 102 8858 104</span>
                </div>
                <div className="sin-detailItem" style={{direction:"rtl"}}>
                <span className="sin-itemKey">العنوان:</span>
                  <span className="sin-itemValue">
                    حدائق حلوان - القاهرة 
                  </span>
                  
                </div>
                <div className="sin-detailItem" style={{direction:"rtl"}}>
                  <span className="sin-itemKey">الدولة:</span>
                  <span className="sin-itemValue">مصر</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sin-right">
            <Chart aspect={3 / 1} title="إحصائيات المعلم آخر 12 شهر" />
          </div>
        </div>
        <div className="sin-bottom">
          <Section/>
        </div>
      </div>
      <Sidebar />


    </div>
  );
};

export default Single;
