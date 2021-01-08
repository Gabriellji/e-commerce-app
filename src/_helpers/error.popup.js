import React, { useContext } from "react";
import styled from "styled-components";
import errorHandler from "../data/images/errorHandler.png";
import ErrorPopUp from "./error.interceptors";
import { ShopContext } from "../context/ShopContext";

export const StyledErrorService = styled.img`
  z-index: 10; 
  display: none;
`;

const ErrorService = () => {
  const context = useContext(ShopContext);

  return (
    <>
      {/* {context.state.isLoggedIn && <ErrorPopUp />} */}
      <ErrorPopUp />
      <StyledErrorService src={errorHandler} />
    </>
  );
};

export default ErrorService;
