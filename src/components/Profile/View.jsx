import React from "react";

function View(props) {
  return (
    <>
      <p>{props.lastname}</p>
      <p>{props.firstname}</p>
      <p>{props.email}</p>
    </>
  );
}

export default View;
