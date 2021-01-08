import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../data/theme";
import { ShopContext } from "../../../../context/ShopContext";
import ButtonX from "../../../atoms/button/ButtonX";
import { LogoImg } from "../../mainNavbar/navbar/Navbar";
import logo from "./../../../../data/images/logonorris.png";
import { textData } from "../../../../data/textData";
import GoogleLogout from "../googleLogout/GoogleLogout";
import FacebookLogout from "../logout-fb/FacebookLogout";

const LogoutPopUp = styled.div`
  background-color: ${theme.colors.primary};
  width: ${theme.sizes.modals.mobile.width};
  height: ${theme.sizes.modals.mobile.height};
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
  top: ${(p) => p.type === "home" && `-${theme.spacer}`};
  left: ${(p) => p.type === "home" && `calc(-100vw + 3 * ${theme.spacer})`};
  @media (min-width: ${theme.viewport.tablet}) {
    width: ${theme.sizes.modals.login.width};
    height: ${theme.sizes.modals.login.height};
    position: sticky;
    right: 0px;
    position: ${(p) => p.type !== "home" && "absolute"};
    left: ${(p) => p.type !== "home" && "auto"};
    right: ${(p) => p.type !== "home" && "0"};
    top: ${(p) => p.type !== "home" && `calc(14 * ${theme.spacer})`};
    box-sizing: border-box;
    border: 4px solid ${theme.colors.dark};
    border-radius: ${theme.spacer};
  }
  @media screen and (max-height: 700px) and (min-width: ${theme.viewport.tablet}) {
    height:500px;
  }
`;
const LogoutLogoContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${theme.spacer};
  @media (min-width: ${theme.viewport.tablet}) {
    width: ${theme.sizes.modals.login.width};
    height: ${theme.spacer};
    position:relative;
    top:48px
  }
`;
const LogoutTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: ${theme.sizes.modals.mobile.width};
  height: ${theme.sizes.modals.mobile.height};
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  top: ${(p) => p.type === "home" && `-${theme.spacer}`};
  left: ${(p) => p.type === "home" && `calc(-100vw + 3 * ${theme.spacer})`};
  @media (min-width: ${theme.viewport.tablet}) {
    width: ${theme.sizes.modals.login.width};
    height: ${theme.sizes.modals.login.height};
    position: sticky;
    right: 0px;
    position: ${(p) => p.type !== "home" && "absolute"};
    left: ${(p) => p.type !== "home" && "auto"};
    right: ${(p) => p.type !== "home" && "0"};
    top: ${(p) => p.type !== "home" && `0`};
    box-sizing: border-box;
  }
  @media screen and (max-height: 700px) and (min-width: ${theme.viewport.tablet}) {
    height:500px
  }
`;

const LogoutModal = (props) => {
  const context = useContext(ShopContext);

  return (
    <LogoutPopUp type={props.type}>
      <LogoutLogoContainer>
        <LogoImg src={logo} alt="Norris Inc. logo" />
        <ButtonX
          action={context.loginIconToggle}
          size="XL"
          text="X"
          color="light"
          index="3"
        />
      </LogoutLogoContainer>
      <LogoutTextContainer>
        {context.state.signByGoogle && <GoogleLogout />}
        {context.state.signByFB && <FacebookLogout/>}
        {!context.state.signByGoogle && !context.state.signByFB && (
          <ButtonX
            action={context.logout}
            size="XL"
            text={textData.logout.button}
            color="light"
          />
        )}
      </LogoutTextContainer>
    </LogoutPopUp>
  );
};

export default LogoutModal;
