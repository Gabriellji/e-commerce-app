import React from "react";
import styled from "styled-components";
import { theme } from "../../../data/theme";
import Text from "../../atoms/text/Text";
import Hr from "../../atoms/hr/Hr";
import { textData } from "../../../data/textData";
import ErrorService from "../../../_helpers/error.handler.js";
import ErrorHandler from "../../../_helpers/error.popup";
import FooterHeader from "./FooterHeader";

const StyledFooter = styled.div`
  background-color: ${theme.colors.light};
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: ${theme.viewport.tablet}) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
`;

const FooterTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${theme.sizes.buttons.M};
  background-color: ${theme.colors.secondary};
  @media (min-width: ${theme.viewport.tablet}) {
    flex-direction: row;
    align-items:flex-start
  }
`;

const StyledFooterColumn = styled.div`
  width: 80vw;
  margin: ${theme.spacer};
  /* :nth-child(2) {
    align-self: flex-end;
  } */
  @media (min-width: ${theme.viewport.tablet}) {
    width: 40vw;
    /* :nth-child(2) {
      align-self: auto;
    } */
  }
`;

const FooterLink = styled.a`
  a {
    color: inherit;
    text-decoration: none;
  }
  :link,
  :visited,
  :link:active,
  :visited:active {
    color: inherit;
    text-decoration: none;
  }
  :hover {
    cursor: pointer;
  }
`;

const Footer = () => 
    <>
      <Hr type="footer" />
      <FooterHeader />
      <Hr type="footer" />
      <StyledFooter>
        <FooterTextContainer>
          {textData.footer.map((column, index) => (
            <StyledFooterColumn key={index}>
              {column.icon}
              <Text
                key={index}
                color="dark"
                size="M"
                align="center"
                text={column.title}
              />
              {column.links.map((line, index) => (
                <FooterLink key={index} href={line.link} target="_blank">
                  <Text
                    key={index}
                    color="dark"
                    size="S"
                    align="center"
                    text={line.name}
                    type="link"
                  />
                </FooterLink>
              ))}
            </StyledFooterColumn>
          ))}
        </FooterTextContainer>
        <ErrorService />
        <ErrorHandler />
      </StyledFooter>
    </>;
export default Footer;
