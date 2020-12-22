import React, { useContext, useState } from "react";
import SingleShopCard from "./SingleShopCard";
import { MyContext } from "./../../../../context/APIContext";
import Button from "../../../subatoms/button/Button";
import Modal from "react-modal";
import { textData } from "../../../../data/textData";

import { v4 as uuidv4 } from "uuid";
import StripeCheckoutButton from "../stripe-button";

Modal.setAppElement("#root");

const SingleShop = ({ category, shop }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [item, setItem] = useState("");

  const context = useContext(MyContext);

  const toggleModal = (e) => {
    const item = context.state.items[category - 1].shops[shop][e.target.id];
    setItem(item);
    setIsOpen(!isOpen);
  };

  const onAddToCartClick = (e) => {
    let itemSelected =
      context.state.items[category - 1].shops[shop][e.target.id];
    let copyOfItems = [...context.cart];
    copyOfItems.push(itemSelected);
    context.setCart(copyOfItems);
  };

  return (
    <>
      {!context.loading &&
        context.state.items[category - 1].shops[shop].map((shop, index) => {
          return (
            <>
              <SingleShopCard
                id={shop.id}
                path={`/shop/category${category}/${shop}/${index}`}
                key={index}
                imageS={shop.imageL}
                name={shop.name}
                price={`${shop.price} £`}
                onClick={toggleModal}
                onAddItemClick={onAddToCartClick}
              />
            </>
          );
        })}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Item"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>{item && item.name}</div>
        <img
          className="modal_img"
          src={item && item.imageL}
          alt={item && item.name}
        />
        <div>Price {item && item.price} £</div>
        <Button
          key={uuidv4()}
          id={item && item.id}
          size="S"
          text={textData.shop.single.add}
          color="primary"
          action={onAddToCartClick}
        />

        <Button
          key={uuidv4()}
          size="S"
          text={textData.shop.single.continue}
          color="primary"
          action={toggleModal}
        />
        <p>Pay Total of £ {item && item.price}</p>
        <p>
          <StripeCheckoutButton price={item && item.price} />
        </p>
      </Modal>
    </>
  );
};

export default SingleShop;
