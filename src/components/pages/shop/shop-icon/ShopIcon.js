import { Link } from "react-router-dom";
import { theme } from "../../../../data/theme";
import styled from "styled-components";

import Text from "./../../../atoms/text/Text";

const StyledShopLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const StyledShopLogo = styled.img`
  height: 50px;
  width: 50px;
`;

const StyledShopCard = styled.div`
  background-color: ${theme.colors.grey};
  border-radius: ${theme.spacer};
  display: flex;
  gap: ${theme.spacer};
  align-items: center;
  padding: ${theme.spacer};
  /* animation */
  transition: ${theme.transition};
  @media (min-width: ${theme.viewport.tablet}) {
    height: 100px;
    justify-content: space-evenly;
  }
  :hover {
    background-color: ${theme.colors.secondary};
    box-shadow: 0px 0px ${theme.spacer} 0px ${theme.colors.shadow};
  }
`;

const ShopIcon = ({ path, icon, title, text, action }) => (
  <StyledShopLink to={path} onClick={action}>
    <StyledShopCard>
      <StyledShopLogo src={icon} alt={title} />
      <div>
        <Text color="primary" size="M" text={title} />
        <Text color="dark" size="S" text={text} />
      </div>
    </StyledShopCard>
  </StyledShopLink>
);

export default ShopIcon;
