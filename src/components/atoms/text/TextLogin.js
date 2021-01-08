import React from 'react';
import styled from "styled-components"
import {theme} from "../../../data/theme"

export const StyledTextLogin = styled.p`
  color: ${(p) =>
    p.color === "primary"
      ? theme.colors.primary
      : p.color === "light"
      ? theme.colors.light
      : theme.colors.dark};
  font-size: ${(p) =>
    p.size === "S"
      ? theme.fonts.sizes.S
      : p.size === "M"
      ? theme.fonts.sizes.M
      : p.size === "L"
      ? theme.fonts.sizes.L
      : theme.fonts.sizes.XL};
  :hover {
    cursor: pointer;
  }
  /* animation */
  transition: ${theme.transition};
  :hover {
    transform: ${theme.scale};
    color: ${theme.colors.primary};
  }
`;

const TextLogin = (props) => <StyledTextLogin color={props.color} size={props.size} onClick={props.action}>{props.text}</StyledTextLogin>

export default TextLogin;