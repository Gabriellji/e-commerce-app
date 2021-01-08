import Text from "./../../../atoms/text/Text";
import Button from "../../../atoms/button/Button";
import { textData } from "../../../../data/textData";
import { theme } from "../../../../data/theme";
import styled from "styled-components";

import "./SingleCard.css";

const StyledSingleShopCard = styled.div`
  width: 350px;
  height: 800px;
  background-color: ${theme.colors.grey};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${theme.spacer};
  padding: ${theme.spacer};
  margin: auto;
  margin-top: ${theme.spacer};
  border-radius: ${theme.spacer};
  /* animation */
  transition: ${theme.transition};
  img {
    width: 100%;
    height: 400px;
    border-radius: ${theme.spacer};
  }
  :hover {
    box-shadow: 0px 0px ${theme.spacer} 0px ${theme.colors.shadow};
  }
`;

const SingleShopCard = ({
  imageS,
  name,
  price,
  onClick,
  id,
  onAddItemClick,
  index,
}) => {
  return (
    <StyledSingleShopCard>
      <img src={imageS} alt={name} />  {/* name.substr(0, 47) */}
      <Text color="primary" align="center" size="M" text={name.split(" ").slice(0,6).join(" ")} />
      <Text
        color="dark"
        align="center"
        size="S"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, obcaecati,
        porro hic magni aliquid error natus velit, nostrum maxime eligendi
        incidunt illo expedita? Recusandae obcaecati illum eum sequi."
      />
      <Button
        id={id}
        action={(e) => onClick(e)}
        size="M"
        color="primary"
        text={textData.shop.single.details}
      />
      <Button
        id={id}
        action={(e) => onAddItemClick(e)}
        size="M"
        color="primary"
        text={textData.shop.single.add}
      />
      <Text color="primary" size="M" text={price} align="center" />
    </StyledSingleShopCard>
  );
};

export default SingleShopCard;
