import React from "react";
import "./Column.css";

const Column = props => {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");
  return (
    <div id="spacing" className= {size}>
      {props.children}
    </div>
  );
};

export default Column;