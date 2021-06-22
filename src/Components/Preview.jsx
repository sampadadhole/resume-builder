import React from "react";
import styled from "styled-components";

function Preview(props) {
  const { userDetails } = props;
  console.log(userDetails);

  return (
    <>
      {userDetails.firstName && (
        <PreviewWrapper>
          <p>
            {" "}
            {userDetails.firstName}&nbsp;
            {userDetails.lastName}
          </p>
          <hr />
          <p>{userDetails.age}</p>
          <p>{userDetails.address}</p>
        </PreviewWrapper>
      )}
    </>
  );
}

export default Preview;

const PreviewWrapper = styled.div`
  border: 0.1rem black solid;
  width: auto;
  height: auto;
`;
