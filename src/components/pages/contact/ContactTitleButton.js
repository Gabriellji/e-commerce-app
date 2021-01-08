import Button from "../../atoms/button/Button";
import Text from "../../atoms/text/Text";

const ContactTitleButton = (props) => (
  <>
    <Text color="dark" size="M" text={props.heading} align="center" />
    <Button
      action={props.action}
      size="M"
      text={props.text}
      color="primary"
    />
  </>
);

export default ContactTitleButton;
