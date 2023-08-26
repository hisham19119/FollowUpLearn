import "./list.css"
import Sidebar from "../../Components/sidebar/Sidebar"
import React from "react";
import Datatable from "../../Components/datatable/Datatable";

const List = () => {
  return (
    <div className="li-list">
            <div className="li-listContainer">
        <Datatable/>
      </div>
      <Sidebar/>

    </div>
  )
}

export default List