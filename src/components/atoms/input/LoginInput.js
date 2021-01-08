import { theme } from '../../../data/theme';
import styled from "styled-components";

const StyledLoginInput = styled.input`
  height: calc(1.5 * ${theme.sizes.buttons.S});
  width: 120%;
  padding: ${theme.spacer};
  margin-top: ${theme.spacer};
  @media (min-width: ${theme.viewport.tablet}) {
    height: ${theme.sizes.buttons.S};
  }
`;

const LoginInput = props => (
    <StyledLoginInput type={props.type} onChange={props.action} value={props.value} required />
)

export default LoginInput;