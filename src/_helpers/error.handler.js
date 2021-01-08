import React, { useContext } from "react";
import { textData } from "../data/textData";
import useSound from "use-sound";
import error from "../data/images/error.mp3";
import bug from "../data/images/bug.mp3";
import styled from "styled-components";
import { theme } from "../data/theme";
import { StyledErrorService } from "./error.popup";
import { StyledErrorPopUp } from "./error.interceptors";
import { ShopContext } from "../context/ShopContext";

const rnmcl1 = Math.floor(Math.random() * 255);
const rnmcl2 = Math.floor(Math.random() * 255);
const rnmcl3 = Math.floor(Math.random() * 255);
const rnmrgb1 = `rgb(${rnmcl1}, ${rnmcl2}, ${rnmcl3}, 0.8)`;
const rnmrgb2 = `rgb(${rnmcl3}, ${rnmcl1}, ${rnmcl2}, 0.8)`;
const rnmrgb3 = `rgb(${rnmcl2}, ${rnmcl1}, ${rnmcl3}, 0.8)`;
const rnmrgb4 = `rgb(${rnmcl3}, ${rnmcl2}, ${rnmcl1}, 0.8)`;

const StyledErrorHandler = styled.p`
  color: ${theme.colors.dark};
  font-size: ${theme.fonts.sizes.S};
  text-align: center;
  background-color: ${theme.colors.secondary};

  z-index: 11;

  ~ ${StyledErrorService} {
    display: none;
    width: 100vh;
    height: 100vh;
    border-radius: 50%;
    border: ${theme.spacer} solid ${theme.colors.primary};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 40px 5000px rgba(0, 0, 0, 0.1);
    background-color: ${rnmrgb1};
    opacity: 0;
    /* animation */
    animation: tuttifrutti 1.75s infinite alternate;
  }

  :hover {
    ~ ${StyledErrorService} {
      display: block;
    }
    /* confetti */
    ~ ${StyledErrorPopUp} {
      display: block;
    }
  }

  @keyframes tuttifrutti {
    0% {
      background-color: ${rnmrgb1};
      transform: translate(-50%, -50%) scale(0.2);
      box-shadow: 0px 0px 50px 5000px rgba(0, 0, 0, 0.1);
      opacity: 0;
    }
    25% {
      background-color: ${rnmrgb2};
    }
    50% {
      background-color: ${rnmrgb3};
    }
    75% {
      background-color: ${rnmrgb4};
    }
    100% {
      background-color: ${rnmrgb1};
      transform: translate(-50%, -50%) scale(1);
      box-shadow: 0px 0px 40px 5000px rgba(0, 0, 0, 1);
      opacity: 1;
    }
  }
`;

const ErrorHandler = () => {
  const [errorHandling, { stop }] = useSound(error, { volume: 0.5 });
  const [bugHandling] = useSound(bug, { volume: 2.5 });
  const [accessDenied, accessError] = React.useState(true);
  const context = useContext(ShopContext);

  return (
    <StyledErrorHandler
      onMouseEnter={() => {
        accessError(false);
        errorHandling();
       context.state.isLoggedIn && bugHandling();
      }}
      onMouseLeave={() => {
        accessError(true);
        stop();
      }}
    >
      <span isHovering={accessDenied}>{textData.closing}</span>
    </StyledErrorHandler>
  );
};

export default ErrorHandler;
