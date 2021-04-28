import React, { Component } from "react";

function Itab(props) {
  const addstyle = () => {
    if (props.out.id === props.activetab) {
      return { backgroundColor: "grey" };
    } if(props.out.id === props.hover){
      return { backgroundColor: "white"};
    }
    else {
      return { backgroundColor: "#000000" };
    }
  };
  console.log(props);
  return (
    <div className="nav_tag" style={addstyle()} onClick={props.ctab.bind(this, props.out.id)}>
      {props.out.title}
    </div>
  );
}

export default Itab;
