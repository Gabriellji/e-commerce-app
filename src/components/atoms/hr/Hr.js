import React from "react";
import styled from "styled-components";
import { theme } from "../../../data/theme";

export const StyledHr = styled.hr`
  border-top: 2px solid
    ${(p) => (p.color === "light" ? theme.colors.light : theme.colors.primary)};
  margin: ${theme.spacer};
  width: ${(p) => (p.width === "parent" ? "100%" : "auto")};
`;

const Hr = ({ color, type, width }) => (
  <StyledHr {...[color, type]} color={color} type={type} width={width} />
);

export default Hr;
