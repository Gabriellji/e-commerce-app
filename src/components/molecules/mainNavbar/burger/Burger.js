import React from "react";
import styled from "styled-components";
import { theme } from"../../../../data/theme";

const StyledBurger = styled.button`
  height: calc(4 * ${theme.spacer});
  width: calc(4 * ${theme.spacer});
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  border-radius: ${theme.spacer};
  cursor: pointer;
  background: transparent;
  margin-right: calc(2 * ${theme.spacer});
  margin-right: ${theme.spacer};
  /* animation */
  transition: ${theme.transition};
  :hover {
    background-color: ${theme.colors.primary};
    transform: ${theme.scale};
  }
  div {
    width: 80%;
    height: calc(0.5 * ${theme.spacer});
    background-color: ${theme.colors.dark};
    border-radius: calc(1.5 * ${theme.spacer});
  }
`;

const Burger = ({action}) => {
  return (
    <StyledBurger onClick={action}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
