import React from "react";
import { Link } from "react-router-dom";
import { shopData } from "../../../../data/shopData";
import Text from "./../../../subatoms/text/Text";
import styled from "styled-components";

const StyledHoverWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
const StyledHoverItems = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    height: 80%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

const HoverMenuContent = (props) => (
  <>
    {shopData.map((category, categoryIndex) => (
      <StyledHoverWrapper key={categoryIndex}>
        <Text
          color="light"
          size="M"
          text={category.category}
          type={props.type}
        />
        <StyledHoverItems key={categoryIndex}>
          {category.shops.map((shop, shopIndex) => (
            <Link
              key={shopIndex}
              to={`/shop/category${categoryIndex + 1}/${shopIndex}`}
              onClick={props.action}
            >
              <Text
                color="dark"
                size="S"
                key={shopIndex}
                text={shop.name}
                type={props.type}
              />
            </Link>
          ))}
        </StyledHoverItems>
      </StyledHoverWrapper>
    ))}
  </>
);

export default HoverMenuContent;
