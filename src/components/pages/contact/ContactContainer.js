import React, { useState, useContext} from "react";
import { theme } from "../../../data/theme";
import styled from "styled-components";
import { textData } from "../../../data/textData";
import { ShopContext } from "../../../context/ShopContext";
import Text from "../../atoms/text/Text";
import ContactForm from "./ContactForm";
import ContactImage from "../../molecules/images/ContactImage";
import ContactTitleButton from "./ContactTitleButton";
import Submitted from "./Submitted";

const StyledContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: calc(2 * ${theme.spacer});
  margin: 0 calc(2 * ${theme.spacer});
  min-height: 70vh;
  flex-direction: column;
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(2 * ${theme.spacer});
    justify-content: center;
  }
  @media (min-width: ${theme.viewport.tablet}) {
    flex-direction: row;
    section {
      width: 50%;
    }
  }
  @media (max-width: ${theme.viewport.mobile}) {
    button {
      font-size: ${theme.fonts.sizes.S};
    }
  }
`;

const ContactContainer = () => {
  const context = useContext(ShopContext);
  const [buyerClicked, setBuyerClicked] = useState(false);
  const [sellerClicked, setSellerClicked] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const handleBuyerClicked = () => {
    setBuyerClicked(!buyerClicked);
    setSellerClicked(false);
    context.closeLogin()
  };

  const handleSellerClicked = () => {
    setBuyerClicked(false);
    setSellerClicked(!sellerClicked);
    context.closeLogin()
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    context.closeLogin();
    let responses = [];
    const RegExp = [
      {
        client: {
          check: (value) =>
            /^[a-z *]{1,30}$/gim.test(
              value
            ) /* NAME from 3 to 20 letters accepts space */,
          error: "Type your name!",
        },
        seller: {
          check: (value) =>
            /^[a-z]{5}\d{5}$/gm.test(value) /* shop id 5letters+5numbers */,
          error: "Type your shop ID! (5letters and 5 numbers)",
        },
      },
      {
        check: (value) =>
          /[\w . -]{3,30}@[\w]{3,20}.[\w]{2,5}/gm.test(
            value
          ) /* email address */,
        error: "Type a correct email",
      },
      {
        check: (value) => /^\d{16}$$/gm.test(value) /* ID 16 numbers */,
        error: "Type a correct ID (16numbers)",
      },
      {
        check: (value) =>
          /^\d{8,15}$$/gm.test(value) /*phone number from 8 to 15 numbers */,
        error: "Type a correct Phone Number!",
      },
    ];
    let inputs = Array.prototype.slice.call(document.querySelectorAll("input"));
    for (let i = 0; i <= inputs.length; i++) {
      i === 0
        ? buyerClicked
          ? RegExp[i].client.check(inputs[i].value)
            ? responses.push(true)
            : alert(RegExp[i].client.error)
          : RegExp[i].seller.check(inputs[i].value)
          ? responses.push(true)
          : alert(RegExp[i].seller.error)
        : i === 4
        ? document.querySelectorAll("textArea")[0].value.length > 15
          ? responses.push(true)
          : alert("Type a longer message")
        : RegExp[i].check(inputs[i].value)
        ? responses.push(true)
        : alert(RegExp[i].error);
      responses.length === 5 && setDidSubmit(true);
    }
  };

  return (
    <StyledContactContainer>
      {didSubmit ? (
        <Submitted />
      ) : (
        <>
          <section>
            <Text color="primary" size="L" text={textData.contact.title} />
<br/>
            <ContactTitleButton
              text={textData.contact.button}
              heading={textData.contact.client}
              action={handleBuyerClicked}
              secondaryAction= {context.closeLogin}
            />
            <br/>
            <ContactTitleButton
              text={textData.contact.button}
              heading={textData.contact.seller}
              action={handleSellerClicked}
              secondaryAction = {context.closeLogin}
            />
          </section>
          <section>
            {sellerClicked || buyerClicked || didSubmit ? (
              <>
                {buyerClicked && !didSubmit && (
                  <ContactForm
                    name={textData.contact.form.first}
                    id={textData.contact.form.second}
                    action={handleSubmit}
                  />
                )}
                {sellerClicked && !didSubmit && (
                  <ContactForm
                    name={textData.contact.form.sixth}
                    id={textData.contact.form.seventh}
                    action={handleSubmit}
                  />
                )}
              </>
            ) : (
              <ContactImage />
            )}
          </section>
        </>
      )}
    </StyledContactContainer>
  );
};

export default ContactContainer;
