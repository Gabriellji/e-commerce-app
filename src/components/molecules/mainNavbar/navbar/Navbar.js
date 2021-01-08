import React, { useContext, useState } from "react";
import { ShopContext } from "../../../../context/ShopContext";
import { textData } from "../../../../data/textData";
import { NavLink } from "react-router-dom";
import { SubMenu } from "./HoverMenu";
import logo from "./../../../../data/images/logonorris.png";
import HoverMenu from "./HoverMenu";
import styled from "styled-components";
import { theme } from "../../../../data/theme";

export const LogoLink = styled(NavLink)`
  margin-right: auto;
  /* animation */
  transition: ${theme.transition};
  :hover {
    transform: ${theme.scale};
  }
`;

export const LogoImg = styled.img`
  width: auto;
  height: ${theme.sizes.navbar};
  @media (min-width: ${theme.viewport.tablet}) {
    padding: 0 8px;
  }
`;

const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: calc(4 * ${theme.spacer});
  height: calc(100vh - 3 * ${theme.sizes.navbar});
  background-color: ${theme.colors.primary};
  z-index: 6;
  margin-top: calc(4 * ${theme.spacer});
  ${LogoLink} {
    display: none;
  }
  @media (min-width: ${theme.viewport.tablet}) {
    background-color: ${theme.colors.light};
    height: ${theme.sizes.navbar};
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: none;
    margin-top: 0;
    padding-right: calc(5 * ${theme.spacer});
    ${LogoLink} {
      display: block;
    }
  }
`;

const StyledLink = styled(NavLink)`
  color: ${theme.colors.light};
  box-sizing: border-box;
  font-size: ${theme.fonts.sizes.XL};
  width: 100vw;
  text-align: center;
  line-height: calc(9 * ${theme.spacer});
  text-decoration: none;
  @media (min-width: ${theme.viewport.tablet}) {
    color: ${theme.colors.dark};
    font-size: ${theme.fonts.sizes.M};
    line-height: ${theme.sizes.navbar};
    width: 10%;
    &.active {
      color: ${theme.colors.primary};
    }
    /* animation */
    transition: ${theme.transition};
    :hover {
      color: ${theme.colors.light};
      background-color: ${theme.colors.primary};
    }
  }
`;

const HoverLink = styled(StyledLink)`
  background-color: ${(p) => p.hovered && theme.colors.primary};
  color: ${(p) => p.hovered && theme.colors.light};
  &.active {
    color: ${(p) => p.hovered && theme.colors.light};
  }
  :hover {
    ~ ${SubMenu} {
      display: block;
      display: flex;
      justify-content: space-around;
      padding: calc(6 * ${theme.spacer});
    }
  }
`;

const Navbar = () => {
  const context = useContext(ShopContext);

  const [hover, setHover] = useState(false);

  const hovering = () => setHover(true);
  const notHovering = () => setHover(false);

  return (
    <>
      <StyledNav onLoad={context.navbarToggle}>
        <LogoLink to="/home" onClick={context.closeLogin}>
          <LogoImg src={logo} alt="logo" />
        </LogoLink>
        <StyledLink to="/home" onClick={context.closeLogin}>
          {textData.navbar.home}
        </StyledLink>
        <HoverLink hovered={hover} to="/shop" onClick={context.closeLogin}>
          {textData.navbar.first}
        </HoverLink>
        <HoverMenu
          over={hovering}
          out={notHovering}
          action={context.closeLogin}
        />
        <StyledLink to="/map" onClick={context.closeLogin}>
          {textData.navbar.second}
        </StyledLink>
        <StyledLink to="/contact" onClick={context.closeLogin}>
          {textData.navbar.third}
        </StyledLink>
      </StyledNav>
    </>
  );
};

export default Navbar;
