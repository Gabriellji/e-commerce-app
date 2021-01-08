import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";
import styled from "styled-components";
import { MyContext } from "./../../../../context/APIContext";
import { ShopContext } from "./../../../../context/ShopContext";
import { theme } from "../../../../data/theme";
import { textData } from "../../../../data/textData";
import SingleShopCard from "./SingleShopCard";
import Button from "../../../atoms/button/Button";
import Text from "./../../../atoms/text/Text";
import Hr from "../../../atoms/hr/Hr";
import StripeCheckoutButton from "../stripe-button/StripeCheckoutButton";

Modal.setAppElement("#root");

const StyledSingleShopGrid = styled.div`
  display: grid;
  gap: ${theme.spacer};
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;
const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledModal = styled(Modal)`
  width: 80%;
  height: 80%;
  border: ${theme.spacer} solid ${theme.colors.primary};
  background: ${theme.colors.light};
  overflow: auto;
  border-radius: ${theme.spacer};
  padding: ${theme.spacer};
  position: fixed;
  left: 10%;
  top: 10%;
  z-index: 7;
  img {
    width: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacer};
  }
  @media (min-width: ${theme.viewport.tablet}) {
    img {
      max-width: ${theme.viewport.mobile};
    }
    div:nth-child(2) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
const SingleShop = ({ category, shop }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [item, setItem] = useState("");

  const context = useContext(MyContext);

  const shopContext = useContext(ShopContext);

  const toggleModal = (e) => {
    const item = context.state.items[category - 1].shops[shop][e.target.id];
    setItem(item);
    setIsOpen(!isOpen);
  };
  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  const onAddToCartClick = (e) => {
    let itemSelected =
      context.state.items[category - 1].shops[shop][e.target.id];
    let copyOfItems = [...shopContext.cart];
    copyOfItems.push(itemSelected);
    shopContext.setCart(copyOfItems);
  };

  return (
    <>
      <StyledSingleShopGrid>
        {!context.loading &&
          context.state.items[category - 1].shops[shop].map((shop, index) => (
            <>
              <SingleShopCard
                id={shop.id}
                path={`/shop/category${category}/${shop}/${index}`}
                key={index}
                imageS={shop.imageL}
                name={shop.name}
                price={`${shop.price.toFixed(2)} £`}
                onClick={toggleModal}
                onAddItemClick={onAddToCartClick}
              />
            </>
          ))}
      </StyledSingleShopGrid>
      <StyledModal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Item"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <Text
          color="primary"
          size="M"
          text={item && item.name}
          align="center"
        />
        <div>
          <img
            className="modal_img"
            src={item && item.imageL}
            alt={item && item.name}
          />
          <Text
            color="dark"
            size="S"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, obcaecati, porro hic magni aliquid error natus velit, nostrum maxime eligendi incidunt illo expedita? Recusandae obcaecati illum eum sequi, ullam veniam vel possimus totam omnis non vitae iste soluta nulla nesciunt autem aliquid maiores ad laborum at sed, laudantium rem cum."
          />
        </div>
        <Hr />
        <StyledButtonContainer>
          <Text
            color="primary"
            size="M"
            text={`Price ${item && item.price} £`}
            align="center"
          />
          <Button
            key={uuidv4()}
            id={item && item.id}
            size="M"
            text={textData.shop.single.add}
            color="primary"
            action={onAddToCartClick}
            width="auto"
          />
          <Button
            key={uuidv4()}
            size="M"
            text={textData.shop.single.continue}
            color="primary"
            action={toggleModal}
            width="auto"
          />
        </StyledButtonContainer>
        <Hr />
        <StyledButtonContainer>
          <Text color="primary" size="M" text="BUY NOW:" align="center" />
          {shopContext.state.isLoggedIn ? (
            <StripeCheckoutButton price={item && item.price} />
          ) : (
            <Button
              align="center"
              size="M"
              color="primary"
              width="auto"
              text={textData.shop.checkout.notLogged}
              action={() => {
                closeModal();
                shopContext.loginIconToggle();
              }}
            />
          )}
        </StyledButtonContainer>
      </StyledModal>
    </>
  );
};

export default SingleShop;
