import styled from "styled-components";
import { theme } from "../../../data/theme";
import mapimg from "../../../data/images/mapimg.jpg";

const StyledMapImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  opacity: ${theme.opacity.eigthy};
  @media (min-width: ${theme.viewport.tablet}) {
    height: 600px;
  }
`;

const MapImage = () => (
  <StyledMapImage src={mapimg} alt="View from a London bridge" />
);

export default MapImage;
