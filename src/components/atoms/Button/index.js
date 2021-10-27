import PropTypes from "prop-types";
import classNames from "classnames";
import { StyledButton } from "./Button.styled";

const Button = ({ children, variant = "primary", ...props }) => {
  const btnClasses = classNames("button", {
    primary: variant === "primary",
    secondary: variant === "secondary",
  });

  return (
    <StyledButton className={btnClasses} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  action: PropTypes.func,
  children: PropTypes.any,
  variant: PropTypes.string,
};

export default Button;
