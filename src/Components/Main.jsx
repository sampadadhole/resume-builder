import React, { useState } from "react";
import CreateResume from "./CreateResume";
import Preview from "./Preview";
import styled from "styled-components";

function Main(props) {
  const { setResumeData } = props;
  const [isResumeCreated, setIsResumeCreated] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    links: [""]
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
    setUserDetails({ ...userDetails, firstName: e.target.value });
  }
  function handleLastName(e) {
    setUserDetails({ ...userDetails, lastName: e.target.value });
  }
  function handleAge(e) {
    setUserDetails({ ...userDetails, age: e.target.value });
  }
  function handleAddress(e) {
    setUserDetails({ ...userDetails, address: e.target.value });
  }
  function handlelink(e) {
    // console.log(e.target.value);
    setUserDetails({ ...userDetails, links: e.target.value });
    // console.log(userDetails);
  }
  function AddLinks() {
    setUserDetails((prevState) => ({
      links: [...prevState, userDetails.links]
    }));
    console.log(userDetails.links);
  }
  // function resume(e) {
  //   console.log("clicked");
  //   setIsResumeCreated(true);

  //   if (isResumeCreated === true) {
  //     console.log(isResumeCreated);
  //     return (
  //       <div>
  //         <CreateResume />
  //       </div>
  //     );
  //   }
  //   e.preventDefault();
  // }

  return (
    <Container>
      {isResumeCreated && (
        <CreateResume
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          setResumeData={setResumeData}
        />
      )}
      <div>
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
          <br />
          Add links:
          <input
            type="text"
            value={userDetails.links}
            placeholder="Add link"
            onChange={handlelink}
          />
          <button type="submit" onClick={AddLinks}>
            +
          </button>
          <hr />
          <button onClick={() => setIsResumeCreated(!isResumeCreated)}>
            submit
          </button>
        </label>
      </div>
      <div>
        <Preview
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          setResumeData={setResumeData}
        />
      </div>
    </Container>
  );
}
export default Main;

const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
