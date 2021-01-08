import styled from "styled-components";
import { theme } from "../../../data/theme";

const StyledShopBannerImage = styled.img`
  height: 200px;
  width: 250px;
  @media (min-width: ${theme.viewport.mobile}) {
    height: 250px;
    width: 375px;
  }
`;

const ShopBannerImage = ({ image, alt }) => (
  <StyledShopBannerImage {...[image, alt]} src={image} alt={alt} />
);

export default ShopBannerImage;
