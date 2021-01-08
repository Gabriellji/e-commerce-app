import { theme } from "../../../data/theme";
import styled from "styled-components";

const StyledContactInput = styled.input`
  height: ${theme.sizes.buttons.M};
  width: 50%;
  padding: ${theme.spacer};
  margin-top: ${theme.spacer};
  border: 1px solid ${theme.colors.dark};
  border-radius: calc(0.5 * ${theme.spacer});
  @media (min-width: ${theme.viewport.tablet}) {
    width: 100%;
  }
`;

const ContactInput = ({ type, action, value, name }) => (
  <StyledContactInput
    {...[type, action, value, name]}
    type={type}
    onChange={action}
    value={value}
    name={name}
    required
  />
);

export default ContactInput;
