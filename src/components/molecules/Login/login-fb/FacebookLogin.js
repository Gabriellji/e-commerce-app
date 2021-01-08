import React, { useState, useEffect, useContext } from "react";
import { accountService } from "../../../../_services/account.service";
import { ShopContext } from "../../../../context/ShopContext";
import { textData } from "../../../../data/textData";

import styled from "styled-components";
import { theme } from "../../../../data/theme";

import ButtonX from "../../../atoms/button/ButtonX";

const StyledFacebookLogin = styled.div`
  display: flex;
  gap: ${theme.spacer};
  justify-content: center;
  :hover {
    cursor: pointer;
  }
  img {
    width: ${theme.sizes.buttons.M};
    height: ${theme.sizes.buttons.M};
    border-radius: 10%;
  }
`;

const FacebookLogin = () => {
  const context = useContext(ShopContext);

  const [account, setAccount] = useState(null);

  useEffect(() => {
    accountService.account.subscribe((x) => setAccount(x));
  }, []);

  if (account) {
    context.setState({
      ...context.state,
      signByFB: true,
      isLoggedIn: !context.state.isLoggedIn,
      user: account.name,
      loginIconClicked: !context.state.loginIconClicked,
    });
  }

  return (
    <StyledFacebookLogin>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png"
        alt="facebook login"
        onClick={accountService.login}
      />
      <ButtonX
        action={accountService.login}
        size="M"
        color="light"
        text={textData.login.text3}
      />
    </StyledFacebookLogin>
  );
};

export default FacebookLogin;
