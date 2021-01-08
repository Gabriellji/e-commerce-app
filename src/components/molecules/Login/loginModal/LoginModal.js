import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../data/theme";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../../context/ShopContext";
import { textData } from "../../../../data/textData";
import { LogoImg } from "../../mainNavbar/navbar/Navbar";
import Text from "../../../atoms/text/Text";
import logo from "./../../../../data/images/logonorris.png";
import ButtonX from "../../../atoms/button/ButtonX";
import LoginInput from "../../../atoms/input/LoginInput";
import { CSSTransition } from 'react-transition-group';
import GoogleLogin from "../googleLogin/GoogleLogin";
import FacebookLogin from "../login-fb/FacebookLogin";
import './LoginModal.css'

const LoginPopUp = styled.div`
  background-color: ${theme.colors.primary};
  width: ${theme.sizes.modals.mobile.width};
  height: ${theme.sizes.modals.mobile.height};
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
  top: ${(p) => p.type === "home" && `-${theme.spacer}`};
  left: ${(p) => p.type === "home" && `calc(-100vw + 3 * ${theme.spacer})`};
  display: flex;
  justify-content: space-around;
  flex-direction: column;
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
    height: 500px;
  }
`;
const LoginLogoContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${theme.spacer};
  @media (min-width: ${theme.viewport.tablet}) {
    width: ${theme.sizes.modals.login.width};
    height: ${theme.spacer};
  }
  @media screen and (max-height: 700px) and (min-width: ${theme.viewport
      .tablet}) {
    position: relative;
    top: 24px;
  }
`;
const LoginTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - ${theme.sizes.buttons.XL});
  @media (min-width: ${theme.viewport.tablet}) {
    height: calc(${theme.sizes.modals.login.width} - ${theme.sizes.buttons.M});
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginLinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${theme.viewport.tablet}) {
    justify-content: space-between;
  }
`;
const LoginSpacer = styled.br`
  height: ${theme.spacer};
`;
const LoginLink = styled(Link)`
  text-decoration: none;
`;

const LoginModal = ({ type }) => {
  const context = useContext(ShopContext);

  return (
    <CSSTransition
        in={context.state.loginIconClicked}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => console.log("hi")}
        onExited={() => console.log("hi")}
      >
      <LoginPopUp {...type} type={type}>
        <LoginLogoContainer>
          <LogoImg src={logo} alt="Norris Inc. logo" />
          <ButtonX
            action={context.loginIconToggle}
            size="XL"
            text="X"
            color="light"
          />
        </LoginLogoContainer>
        <LoginTextContainer>
          <Text
            type="login"
            color="light"
            size="XL"
            text={textData.login.title}
          />
          <LoginSpacer />
          {context.state.loginFailed && (
            <Text color="light" size="M" text={textData.login.fail} />
          )}
          <LoginForm>
            <Text
              type="login"
              color="light"
              size="S"
              text={textData.login.user}
            />
            <LoginInput
              action={context.username}
              value={context.state.username}
            />
            <Text
              type="login"
              color="light"
              size="S"
              text={textData.login.password}
            />
            <LoginInput
              type="password"
              action={context.password}
              value={context.state.password}
            />
            <LoginSpacer />
            <ButtonX
              action={context.login}
              size="M"
              text={textData.login.submit}
              color="light"
            />
          </LoginForm>
          <LoginLinkContainer>
            <LoginLink to="/contact" onClick={context.closeLogin}>
              <Text
                type="login"
                color="light"
                size="M"
                text={textData.login.register}
              />
            </LoginLink>
            <LoginLink to="/contact" onClick={context.closeLogin}>
              <Text
                type="login"
                color="light"
                size="M"
                text={textData.login.text1}
              />
            </LoginLink>
            <LoginSpacer />
            <GoogleLogin />
            <LoginSpacer />
            <FacebookLogin />
          </LoginLinkContainer>
        </LoginTextContainer>
      </LoginPopUp>
    </CSSTransition>
  );
};

export default LoginModal;
