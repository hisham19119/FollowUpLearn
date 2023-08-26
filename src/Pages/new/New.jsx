import "./new.css";
import React from "react";

import Sidebar from "../../Components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import {userInputs} from "../../formSource"
const New = () => {
  const [file, setFile] = useState("");

  return (
    <div className="ne-new">
      <div className="ne-newContainer">
        <div className="ne-top">
          <h1 style={{textAlign:"end", width:"100%"}}>أضف طالب جديد</h1>
        </div>
        <div className="ne-bottom">
          <div className="ne-left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="ne-right">
            <form>
              <div className="ne-formInput">
                <label htmlFor="file">
                  صورة: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {userInputs.map((input) => (
                <div className="ne-formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>أضف</button>
            </form>
          </div>
        </div>
      </div>
      <Sidebar />

    </div>
  );
};

export default New;
