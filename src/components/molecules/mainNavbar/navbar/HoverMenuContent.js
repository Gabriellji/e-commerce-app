import React from "react";
import { Link } from "react-router-dom";
import { shopData } from "../../../../data/shopData";
import Text from "./../../../atoms/text/Text";
import styled from "styled-components";
import {theme} from '../../../../data/theme'

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

const HoverLink = styled(Link)`
  a {
    color: ${theme.colors.dark};
    text-decoration: none;
  }
  :link,
  :visited,
  :link:active,
  :visited:active {
    color: ${theme.colors.dark};
    text-decoration: none;
  }
  /* animation */
  transition: ${theme.transition};
  :hover {
    cursor: pointer;
    transform: ${theme.scale};
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
            <HoverLink
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
            </HoverLink>
          ))}
        </StyledHoverItems>
      </StyledHoverWrapper>
    ))}
  </>
);

export default HoverMenuContent;
