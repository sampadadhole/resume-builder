import React, { useState } from "react";
import Preview from "./Preview";
// import { render } from "react-dom";

function Main(props) {
  const { setResumeData } = props;
  const [isResumeCreated, setIsResumeCreated] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: ""
  });

  // function createResume(e) {
  //   console.log(userDetails);
  //   setResumeData(userDetails);
  //   setUserDetails({
  //     firstName: "",
  //     lastName: "",
  //     age: "",
  //     address: ""
  //   });
  //   e.preventDefault();
  // }

  function handleFirstName(e) {
    // setFirstNameInputBx(e.target.value);
    setUserDetails({ ...userDetails, firstName: e.target.value });
  }
  function handleLastName(e) {
    // setLastNameInputBx(e.target.value);
    setUserDetails({ ...userDetails, lastName: e.target.value });
  }
  function handleAge(e) {
    // setAgeInputBx(e.target.value);
    setUserDetails({ ...userDetails, age: e.target.value });
  }
  function handleAddress(e) {
    // setAgeInputBx(e.target.value);
    setUserDetails({ ...userDetails, address: e.target.value });
  }
  // function resume(e) {
  //   console.log("clicked");
  //   setIsResumeCreated(true);

  //   if (isResumeCreated === true) {
  //     console.log(isResumeCreated);
  //     return (
  //       <div>
  //         <Preview />
  //       </div>
  //     );
  //   }
  //   e.preventDefault();
  // }
  return (
    <div>
      {isResumeCreated && (
        <Preview
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          setResumeData={setResumeData}
        />
      )}
      <label>
        First Name:
        <input
          type="text"
          value={userDetails.firstName}
          placeholder="Enter First Name"
          onChange={handleFirstName}
          // onKeyDown={handleFirstName}
        />
        <br />
        Last Name:
        <input
          type="text"
          value={userDetails.lastName}
          placeholder="Enter Last Name"
          onChange={handleLastName}
          // onKeyDown={handleLastName}
        />
        <br />
        Age:
        <input
          type="number"
          value={userDetails.age}
          placeholder="Enter your age"
          onChange={handleAge}
          // onKeyDown={handleLastName}
        />
        <br />
        Address:
        <input
          type="text"
          value={userDetails.address}
          placeholder="Enter Address"
          onChange={handleAddress}
          // onKeyDown={handleLastName}
        />
        <hr />
        <button onClick={() => setIsResumeCreated(!isResumeCreated)}>
          submit
        </button>
        {/* <button>
          <a href="#" target="_blank">
            submit
          </a>
        </button> */}
      </label>
    </div>
  );
}
export default Main;
