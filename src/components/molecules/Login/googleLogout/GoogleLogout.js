import React, { useContext } from "react";
import { ShopContext } from "../../../../context/ShopContext";
import { useGoogleLogout } from "react-google-login";
import { textData } from "../../../../data/textData";

import styled from "styled-components";
import { theme } from "../../../../data/theme";

import ButtonX from "../../../atoms/button/ButtonX";

const clientId =
  "589936013492-o5h98211ljn5r09rn4ih54203k4973fm.apps.googleusercontent.com";

const StyledGoogleLogout = styled.div`
  display: flex;
  gap: ${theme.spacer};
  justify-content: center;
  :hover {
    cursor: pointer;
  }
  img {
    width: ${theme.sizes.buttons.M};
    height: ${theme.sizes.buttons.M};
    background-color: ${theme.colors.light};
    border-radius: 50%;
  }
`;

const GoogleLogout = () => {
  const context = useContext(ShopContext);

  const onLogoutSuccess = (res) => {
    context.setState({
      ...context.state,
      googleUser: "",
      signByGoogle: false,
      isLoggedIn: !context.state.isLoggedIn,
      loginIconClicked: !context.state.loginIconClicked,
    });
  };


  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
  });

  return (
    <StyledGoogleLogout>
      <img
        src="https://raw.githubusercontent.com/Sivanesh-S/react-google-authentication/9835990bfe7f45a1a14e5854cd57ab715d776b0e/public/icons/google.svg"
        alt="google login"
        onClick={signOut}
      />
      <ButtonX
        action={signOut}
        size="M"
        color="light"
        text={textData.logout.button}
      />
    </StyledGoogleLogout>
  );
};

export default GoogleLogout;
