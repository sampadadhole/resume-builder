// import React from "react";

function Preview(props) {
  const { userDetails } = props;
  console.log(userDetails);

  return <div>{userDetails.firstName}</div>;
  // e.preventDefault();
}

export default Preview;
