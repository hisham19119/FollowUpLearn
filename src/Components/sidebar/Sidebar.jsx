import React from "react";
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  const handlelist = () => {
    navigate('/list');
  };


  const handlehome = () => {
    navigate('/');
  };


  return (
    <div className="sidebar">
      <div className="si-top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="si-logo" onClick={handlehome}>Follow-Up Learn</span>
        </Link>
      </div>
      <hr style={{color:"#003173"}}/>
      <div className="si-center">
        <ul>
          <p className="si-title">الرئيسية</p>
          <li>
          <span>لوحه الإدارة</span>
            <DashboardIcon className="si-icon" />
            
          </li>
          <p className="si-title" >القوائم</p>
          <a onClick={handlelist}  style={{ textDecoration: "none" }}>
            <li >
              <span>المعلمين</span>
              <PersonOutlineIcon className="si-icon" />
            </li>
          </a>

          <li>
            <span>احصائيات</span>
            <InsertChartIcon className="si-icon" />
          </li>
          <li>
            <span>الإشعارات</span>
            <NotificationsNoneIcon className="si-icon" />
          </li>
          <p className="si-title">الخدمات</p>
          {/* <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="si-title">المستخدم</p>
          <li>
            <span>الملف الشخصي</span>
            <AccountCircleOutlinedIcon className="si-icon" />
          </li>
          <li>
            <span>تسجيل الخروج</span>
            <ExitToAppIcon className="si-icon" />
          </li>
        </ul>
      </div>
      {/* <div className="si-bottom">
        <div
          className="si-colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="si-colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
