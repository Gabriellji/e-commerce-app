import React from "react";
import styled from "styled-components";
import Confetti from "react-confetti";

export const StyledErrorPopUp = styled.div`
  display: none;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

const ErrorPopUp = () => (
  <StyledErrorPopUp>
    <Confetti />
  </StyledErrorPopUp>
);

export default ErrorPopUp;
