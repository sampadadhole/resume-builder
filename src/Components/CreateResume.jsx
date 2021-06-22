// import React from "react";

function CreateResume(props) {
  const { userDetails } = props;
  console.log(userDetails);

  return <div>{userDetails.firstName}</div>;
  // e.preventDefault();
}

export default CreateResume;
