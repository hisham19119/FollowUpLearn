import "./datatable.css";
import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router-dom";
import {userColumns , userRows} from "../../datatablesource"
import { useState } from "react";

const Datatable = () => {

  
    const navigate = useNavigate();
  
    const handlesingle = () => {
      navigate('/single');
    };
  

    const handleNew = ()=>{
      navigate("/new")
    }

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "اختار",
      headerAlign: 'end',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction" >
            <a onClick={handlesingle} style={{ textDecoration: "none" }}>
              <div className="viewButton" onClick={handlesingle}>عرض</div>
            </a>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              حذف
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <a onClick={handleNew} className="link">
          أضف
        </a>
        إضافة معلم جديد
      </div>

<DataGrid
        className="datagrid"
        // style={{textAlign : "center"}  }
        rows={data} 
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getCellClassName={() => "center-align"}
      />
</div>
  );
};

export default Datatable;





