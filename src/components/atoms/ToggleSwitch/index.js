import PropTypes from "prop-types";
import { Input, Label, Slider } from "./ToggleSwitch.styled";

const ToggleSwitch = ({ value, checked, onChange, name, id, disabled, title, size }) => {
  return (
    <Label htmlFor={id} disabled={disabled} title={title} size={size}>
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Slider />
    </Label>
  );
};

ToggleSwitch.propTypes = {
  checked: PropTypes.any,
  disabled: PropTypes.any,
  id: PropTypes.any,
  name: PropTypes.any,
  onChange: PropTypes.any,
  size: PropTypes.any,
  title: PropTypes.any,
  value: PropTypes.any,
};

export default ToggleSwitch;
