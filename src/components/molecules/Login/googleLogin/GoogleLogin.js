import React, { useContext } from "react";
import { useGoogleLogin } from "react-google-login";
import { textData } from "../../../../data/textData";
import { ShopContext } from "../../../../context/ShopContext";
// refresh token
import { refreshTokenSetup } from "../../../../utils/refreshToken";

import styled from "styled-components";
import { theme } from "../../../../data/theme";

import ButtonX from "../../../atoms/button/ButtonX";

const clientId =
  "589936013492-o5h98211ljn5r09rn4ih54203k4973fm.apps.googleusercontent.com";

const StyledGoogleLogin = styled.div`
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

const GoogleLogin = () => {
  const context = useContext(ShopContext);

  const onSuccess = (res) => {
    //alert(`Logged in successfully welcome ${res.profileObj.name} 😍.`);
    refreshTokenSetup(res);
    const name = res.profileObj.name;
    context.setState({
      ...context.state,
      googleUser: name,
      signByGoogle: true,
      isLoggedIn: true,
      user: name,
      loginIconClicked: !context.state.loginIconClicked,
    });
  };

  const onFailure = () => {
    /* alert(`Failed to login. 😢`) */
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <StyledGoogleLogin>
      <img
        src="https://raw.githubusercontent.com/Sivanesh-S/react-google-authentication/9835990bfe7f45a1a14e5854cd57ab715d776b0e/public/icons/google.svg"
        alt="google login"
        onClick={signIn}
      />
      <ButtonX
        action={signIn}
        size="M"
        color="light"
        text={textData.login.text2}
      />
    </StyledGoogleLogin>
  );
};

export default GoogleLogin;
