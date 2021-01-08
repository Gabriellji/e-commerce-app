import { theme } from "../../../data/theme";
import styled from "styled-components";
import { textData } from "../../../data/textData";
import Text from "../../atoms/text/Text";

const StyledSubmitted = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: calc(2 * ${theme.spacer});
  min-height:70vh;
`;

const Submitted = () => (
  <StyledSubmitted>
    <Text color="primary" size="S" text={textData.contact.submitted.title} />
    <Text color="dark" size="M" text={textData.contact.submitted.text1} />
    <Text color="dark" size="M" text={textData.contact.submitted.text2} />
  </StyledSubmitted>
);

export default Submitted;
