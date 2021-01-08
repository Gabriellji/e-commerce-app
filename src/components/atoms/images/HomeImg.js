import styled from "styled-components";
import { theme } from "../../../data/theme";
import { textData } from "../../../data/textData";

import homeimg from "../../../data/images/homeimg.jpg";
import Text from "../../atoms/text/Text";

const StyledHomeImg = styled.div`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  opacity: ${theme.opacity.sixty};
  background-image: url(${homeimg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (min-width: ${theme.viewport.tablet}) {
    height: 80vh;
  } 
  div {
    background-color: ${theme.colors.dark};
    opacity: ${theme.opacity.eigthy};
    display: flex;
    flex-direction: column;
    margin-bottom: calc(2 * ${theme.spacer});
    padding: 0 ${theme.spacer};
  }
`;

const HomeImg = () => (
  <StyledHomeImg>
    <div>
      <Text color="light" size="XL" text={textData.homepage.title1} />
      <Text color="light" size="S" text={textData.homepage.title2} />
      <Text color="light" size="S" text={textData.homepage.title3} />
    </div>
  </StyledHomeImg>
);

export default HomeImg;
