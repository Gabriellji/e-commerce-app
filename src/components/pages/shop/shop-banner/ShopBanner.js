import { theme } from "../../../../data/theme";
import styled from "styled-components";

import Text from "./../../../atoms/text/Text";
import ShopBannerImage from "../../../molecules/images/ShopBannerImage";

const StyledShopBanner = styled.div`
  background-color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacer};
  gap: ${theme.spacer};
  @media (min-width: ${theme.viewport.tablet}) {
      flex-direction: row;
      justify-content: space-evenly;
  }
`;

const StyledShopBannerTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ShopBanner = ({ title, text, image }) => (
  <StyledShopBanner>
    <StyledShopBannerTexts>
      <Text color="light" size="L" text={title} align="center" />
      <Text color="light" size="S" text={text} align="center" />
    </StyledShopBannerTexts>
    <ShopBannerImage image={image} alt={title} />
  </StyledShopBanner>
);

export default ShopBanner;