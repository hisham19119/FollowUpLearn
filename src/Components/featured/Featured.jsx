import React from "react";

import "./featured.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured-co">
      <div className="fe-top">
      <MoreVertIcon fontSize="small" />
        <h1 className="fe-title">مجموع الطـلاب</h1>
        
      </div>
      <div className="fe-bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="fe-title"> مجموع الطـلاب المنضمين في هذا الشهر</p>
        <p className="fe-amount">7352</p>
        <p className="fe-desc">
          عدد المساقات المسجل بها ، قد لا يتضمن العمليات الأخيرة
        </p>
        <div className="fe-summary">
          <div className="fe-item">
            <div className="fe-itemTitle">الطلاب المستهدفين</div>
            <div className="fe-itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="fe-resultAmount">20000 </div>
            </div>
          </div>
          <div className="fe-item">
            <div className="fe-itemTitle">الأسبوع الماضي</div>
            <div className="fe-itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="fe-resultAmount">1200</div>
            </div>
          </div>
          <div className="fe-item">
            <div className="fe-itemTitle">الشهر الماضي</div>
            <div className="fe-itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="fe-resultAmount">9500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
