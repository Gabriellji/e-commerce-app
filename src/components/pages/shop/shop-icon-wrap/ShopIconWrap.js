import React, { useContext } from "react";
import { MyContext } from "../../../../context/APIContext";
import { shopData } from "../../../../data/shopData";
import { theme } from "../../../../data/theme";
import styled from "styled-components";
import {ShopContext} from '../../../../context/ShopContext'

import ShopIcon from "../shop-icon/ShopIcon";

const StyledIconCardRenderer = styled.div`
  margin: ${theme.spacer};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacer};
  @media (min-width: ${theme.viewport.tablet}) {
    flex-direction: row;
  }
`;

const ShopIconWrap = ({ category }) => 
{
  const context = useContext(MyContext);
  const shopContext = useContext(ShopContext);

  const shopNames = shopData.map((el) => el.shops.map((elem) => elem.name));
  const shopAdress = shopData.map((el) => el.shops.map((elem) => elem.address));
  const shopIcons = shopData.map((el) => el.shops.map((elem) => elem.icon));
  return (
    <StyledIconCardRenderer>
      {context.state.items[0].shops.map((el, index) => (
        <ShopIcon
          path={`/shop/${category}/${index}`}
          key={index}
          icon={shopIcons[category.slice(-1) - 1][index]}
          title={shopNames[category.slice(-1) - 1][index]}
          text={shopAdress[category.slice(-1) - 1][index]}
          action={shopContext.closeLogin}
        />
      ))}
    </StyledIconCardRenderer>
  );
};
export default ShopIconWrap;
