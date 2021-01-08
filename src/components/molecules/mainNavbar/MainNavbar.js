import React, { useContext } from "react";
import MobileLogo from "../../atoms/logo/MobileLogo";
import SuperNav from "./SuperNav/SuperNav";
import Burger from "./burger/Burger";
import MobileMenu from "./mobileMenu/MobileMenu";
import Hr from "../../atoms/hr/Hr";
import Navbar from "./navbar/Navbar";
import { ShopContext } from "../../../context/ShopContext";
import styled from "styled-components";
import { theme } from "../../../data/theme";

const MobileMainNavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${theme.colors.light};
  z-index: 6;
  @media (min-width: ${theme.viewport.tablet}) {
    display: none;
    padding: 0 ${theme.spacer};
  }
`;

const SuperNavToggleContainer = styled.div`
  display: none;
  @media (min-width: ${theme.viewport.tablet}) {
    position: sticky;
    top: 0;
    z-index: 6;
    background-color: ${theme.colors.light};
    padding: 0 ${theme.spacer};
    display: block;
  }
`;
const NavContainer = styled.div`
  display: none;
  @media (min-width: ${theme.viewport.tablet}) {
    z-index: 6;
    position: sticky;
    top: calc(4 * ${theme.spacer});
    display: block;
  }
`;

const MainNavbar = () => {
  const context = useContext(ShopContext);

  return (
    <>
      {!context.state.paymentOpen && (
        <>
          <MobileMainNavContainer>
            <MobileLogo path="/home" action={context.closeLogin} />
            <SuperNav type="mobile" />
            <Burger action={context.toggleMobileMenu} />
            {context.state.mobileMenu && (
              <MobileMenu path="/home" action={context.closeLogin} />
            )}
          </MobileMainNavContainer>

          <SuperNavToggleContainer>
            <SuperNav />
            <Hr />
          </SuperNavToggleContainer>

          <NavContainer>
            <Navbar />
          </NavContainer>
        </>
      )}
    </>
  );
};

export default MainNavbar;
