import PropTypes from "prop-types";
import Image from "next/image";
import styled from "styled-components";

const StyledAlert = styled.div`
  align-items: center;
  background-color: var(--secondary);
  border-radius: 0.375rem;
  box-sizing: border-box;
  color: var(--headline);
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  width: 100%;

  .text {
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-right: 1rem;
  }
`;

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
