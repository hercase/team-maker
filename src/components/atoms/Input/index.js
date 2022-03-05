import PropTypes from "prop-types";
import { StyledInput } from "./Input.styled";

const Input = ({ label, ...props }) => {
  return (
    <StyledInput>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input {...props} />
      </div>
    </StyledInput>
  );
};

Input.propTypes = {
  label: PropTypes.any,
};

export default Input;
