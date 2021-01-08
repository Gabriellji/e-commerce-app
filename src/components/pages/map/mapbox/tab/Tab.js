import styled from "styled-components";
import { theme } from "../../../../../data/theme";

import Text from "../../../../atoms/text/Text";

const StyledListing = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  margin: 0 ${theme.spacer};
  overflow: auto;
  /* animation */
  transition: ${theme.transition};
  :hover {
    background-color: ${theme.colors.secondary};
  }
`;

const StyledAddress = styled.div`
  display: flex;
  justify-content: flex-start;
  gap:${theme.spacer};
  border-bottom: 1px solid ${theme.colors.primary};
  padding-bottom: ${theme.spacer};
`;

const Tab = ({ id, name, address, onClick, city, phone }) => {
  return (
    <StyledListing id={`listing-${id}`} onClick={(e) => onClick(e)}>
      <Text
        id={`listing-${id}`}
        onClick={(e) => onClick(e)}
        text={name}
        size="M"
        color="primary"
      />
      <Text text={address} size="S" color="dark" id={`listing-${id}`}/>
      <StyledAddress id={`listing-${id}`}>
        <Text text={city} size="XS" color="dark" id={`listing-${id}`}/>
        <Text text={phone} size="XS" color="dark" id={`listing-${id}`}/>
      </StyledAddress>
    </StyledListing>
  );
};

export default Tab;
