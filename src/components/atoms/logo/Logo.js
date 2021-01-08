import React from "react";
import styled from "styled-components";
import logo from "../../../data/images/logonorris.png";
import { theme } from "../../../data/theme";

export const LogoImg = styled.img`
  /* width: ${(p) => (p.type === "footer" ? "100px" : "auto")}; */
  width: auto;
  margin-top: ${theme.spacer};
  margin: ${(p) => p.type === "footer" && "0 0"};
  height: ${(p) => (p.type === "footer" ? "60px" : theme.sizes.navbar)};
  /* animation */
  transition: ${theme.transition};
  :hover {
    transform: ${theme.scale};
  }
`;

const Logo = ({type}) => (
  <LogoImg {...type} type={type} src={logo} alt="Norris Inc. logo" />
);

export default Logo;
