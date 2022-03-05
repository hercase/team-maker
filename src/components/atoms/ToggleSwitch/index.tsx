import { Input, Label, Slider } from "./ToggleSwitch.styled";

interface Props {
  value: string;
  checked: boolean;
  onChange: () => void;
  name: string;
  id: string;
  disabled?: boolean;
  title: string;
  size: string;
}

const ToggleSwitch = ({ value, checked, onChange, name, id, disabled, title, size = "lg" }: Props) => {
  return (
    <Label htmlFor={id} title={title} size={size} disabled={disabled}>
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

export default ToggleSwitch;
