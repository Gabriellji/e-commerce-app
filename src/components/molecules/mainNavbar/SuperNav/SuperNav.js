import React, { useContext } from "react";
import { ShopContext } from "../../../../context/ShopContext";

import TextLogin from "../../../atoms/text/TextLogin";
import Cart from "../../../pages/shop/cart";

import LoginModal from "../../Login/loginModal/LoginModal";
import LogoutModal from "../../Login/logoutModal/LogoutModal";
import userlogged from "./../../../../data/images/iconlogin.png";
import userunknown from "./../../../../data/images/iconlogout.png";

import styled from "styled-components";
import { theme } from "../../../../data/theme";
import {textData} from '../../../../data/textData'

const StyledSuperNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: ${(p) =>
    p.color === "primary" ? theme.colors.primary : theme.colors.light};
  gap: calc(2 * ${theme.spacer});
  padding: ${theme.spacer};
  /*homepage*/
  position: ${(p) => p.type === "home" && "absolute"};
  top: ${(p) => p.type === "home" && theme.spacer};
  right: ${(p) => p.type === "home" && theme.spacer};
  background-color: ${(p) => p.type === "home" && theme.colors.dark2};
`;

const SuperNavImg = styled.img`
  width: auto;
  height: ${theme.sizes.buttons.S};
  cursor: pointer;
  /* animation */
  transition: ${theme.transition};
  :hover {
    transform: ${theme.scale};
  }
`;

const SuperNav = ({ type, color, textColor }) => {

const context = useContext(ShopContext);

  return (
        <StyledSuperNav type={type} color={color}>
          {!context.state.loginIconClicked ? (
            <>
              <SuperNavImg
                type={type}
                src={context.state.isLoggedIn ? userlogged : userunknown}
                alt="icon"
                onClick={context.loginIconToggle}
              />
              {type !== "mobile" && (
                <TextLogin
                  action={context.loginIconToggle}
                  size="S"
                  color={textColor}
                  text={
                    context.state.isLoggedIn
                      ? `${textData.superNavbar.logged} ${context.state.user}`
                      : textData.superNavbar.notLogged
                  }
                />
              )}
            </>
          ) : (
            <>
              {!context.state.isLoggedIn ? (
                <LoginModal type={type} />
              ) : (
                <LogoutModal type={type} />
              )}
            </>
          )}
          {type !== "home" && <Cart type={type} />}
        </StyledSuperNav>
  );
};

export default SuperNav;
