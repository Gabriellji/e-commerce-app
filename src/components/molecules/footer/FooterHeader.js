import React from "react";
import styled from "styled-components";
import { theme } from "../../../data/theme";
import Text from "../../atoms/text/Text";
import Logo from "../../atoms/logo/Logo";
import { textData } from "../../../data/textData";

const StyledFooterHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${theme.fonts.sizes.S};
  gap: ${theme.spacer};
  div {
    display: flex;
    justify-content: center;
  }
`;

const FooterHeader = () => (
  <StyledFooterHeader>
    <div>
      <Logo type="footer" />
      <Text color="primary" size="XL" text={textData.homepage.title1} />
    </div>
    <div>
      <Text
        color="dark"
        align="center"
        size="S"
        text={textData.homepage.title4}
      />
    </div>
  </StyledFooterHeader>
);

export default FooterHeader;
