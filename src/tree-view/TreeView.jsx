import MenuList from "./MenuList";
import "./TreeView.css";
import React from "react";

function TreeView({menus=[]}) {
  return <div>
    <MenuList list={menus} />
  </div>;
}

export default TreeView;
