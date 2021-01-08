import { theme } from "../../../data/theme";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
margin: ${theme.spacer} 0 0 0;
padding: ${theme.spacer};
margin-bottom: calc(2 * ${theme.spacer});
@media (min-width: ${theme.viewport.tablet}) {
    max-width: 100%;
    border: 1px solid ${theme.colors.dark};
    border-radius: calc(0.5 * ${theme.spacer});
    resize: none;
    width: 100%;
  }
`;

const TextArea = (props) => (
  <StyledTextArea placeholder={props.placeholder} rows="4" cols="45" required/>
);

export default TextArea;
