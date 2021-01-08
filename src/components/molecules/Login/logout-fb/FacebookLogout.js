import React, { useContext } from "react";
import { ShopContext } from "../../../../context/ShopContext";
import { textData } from "../../../../data/textData";
import styled from "styled-components";
import { theme } from "../../../../data/theme";
import ButtonX from "../../../atoms/button/ButtonX";
import { accountService } from "../../../../_services/account.service";

const StyledFacebookLogout = styled.div`
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

const FacebookLogout = () => {
  const context = useContext(ShopContext);

  const logout = () => {
    accountService.logout();
    context.setState({
      ...context.state,
      isLoggedIn: !context.state.isLoggedIn,
      user: "",
      loginIconClicked: !context.state.loginIconClicked,
      signByFB: false,
    });
  };

  return (
    <StyledFacebookLogout>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png"
        alt="facebook login"
        className="icon"
      />
      <ButtonX
        action={logout}
        size="M"
        color="light"
        text={textData.logout.button}
      />
    </StyledFacebookLogout>
  );
};

export default FacebookLogout;
