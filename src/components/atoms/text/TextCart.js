import React from 'react';
import styled from "styled-components"
import {theme} from "../../../data/theme"

const StyledTextCart = styled.p`
  color: ${(p) =>
    p.color === "primary"
      ? theme.colors.primary
      : p.color === "light"
      ? theme.colors.light
      : theme.colors.dark};
  font-size: ${(p) =>
    p.size === "S"
      ? theme.sizes.S
      : p.size === "M"
      ? theme.sizes.M
      : p.size === "L"
      ? theme.sizes.L
      : theme.sizes.XL};
  background-color: ${theme.colors.red};
  border-radius: 50%;
  text-align: center;
  width: 24px;
  height: 24px;
  /* animation */
  transition: ${theme.transition};
  :hover {
    transform: ${theme.scale};
    color: ${theme.colors.light};
  }
`;

const TextCart = (props) => <StyledTextCart color={props.color} size={props.size} onClick={props.action}>{props.text}</StyledTextCart>

export default TextCart;