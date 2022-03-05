import PropTypes from "prop-types";
import Image from "next/image";
import { StyledAlert } from "./Alert.styled";

const Alert = ({ text }) => {
  return (
    <StyledAlert>
      <Image alt="exclamation icon" src="/img/exclamation.svg" width={20} height={20} />
      <span className="text">{text}</span>
    </StyledAlert>
  );
};

Alert.propTypes = {
  text: PropTypes.any,
};

export default Alert;
