import PropTypes from "prop-types";
import { StyledLabel } from "./CheckBoxStyled";

/** Checkbox:
 * --------------------------
 * @param name element identification
 * @param label text for describe the input element
 * @param disable disable the element but it's displayed with less opacity.
 * @return Checkbox
 */

function Checkbox({ label, hidden = false, disabled = false, ...props }) {
  return (
    <StyledLabel disabled={disabled} hidden={hidden}>
      <input disabled={disabled} type="checkbox" hidden={hidden} {...props} />
      <span>{label && label}</span>
    </StyledLabel>
  );
}

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  hidden: PropTypes.bool,
};

export default Checkbox;
