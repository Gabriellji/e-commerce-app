import styled from "styled-components";
import { theme } from "../../../../../data/theme";

import Text from "../../../../atoms/text/Text";
import Button from "../../../../atoms/button/Button";

const StyledPopup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: ${theme.spacer};
`;

const Popup = ({ feature, router }) => {
  const { category, id, name, address } = feature.properties;
  const handleClick = () =>
    {
      router.history.push(`/shop/category${category + 1}/${id}`)
      window.scrollTo(0,0)
    };
  return (
    <StyledPopup id={`popup-${id}`}>
      <Text size="M" text={name} type="map" align="center" color="light" />
      <Text size="S" text={address} align="center" color="dark" />
      <Button
        action={handleClick}
        size="S"
        color="primary"
        text="GO SHOPPING!"
        width="parent"
      />
    </StyledPopup>
  );
};

export default Popup;
