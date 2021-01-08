import styled from "styled-components";
import { theme } from "../../../data/theme";
import contactimg from "../../../data/images/contactimg.jpg";

const StyledContactImage = styled.img`
  height: 80%;
  width: 80%;
  @media (min-width: ${theme.viewport.tablet}) {
    width: 100%;
    height: auto;
  }
`;

const ContactImage = () => (
  <StyledContactImage src={contactimg} alt="Norris Inc. customer service" />
);

export default ContactImage;
