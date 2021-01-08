import React from "react";
import { LogoImg } from "../../molecules/mainNavbar/navbar/Navbar";
import logo from "../../../data/images/logonorris.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../data/theme";

const StyledMobileLogo = styled(NavLink)`
  display: inline-block;
  margin-top: ${theme.spacer};
  margin-left: calc(2 * ${theme.spacer});
  margin-right: auto;
  @media (min-width: ${theme.viewport.tablet}) {
    display: none;
  }
  /* animation */
  transition: ${theme.transition};
  :hover {
    transform: ${theme.scale};
  }
`;

const MobileLogo = (props) => {
  return (
    <StyledMobileLogo to={props.path} onClick={props.action}>
      <LogoImg src={logo} alt="logo" />
    </StyledMobileLogo>
  );
};

export default MobileLogo;
