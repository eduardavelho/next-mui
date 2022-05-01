import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MuiCheckbox from "@material-ui/core/Checkbox";

export interface CheckboxProps {
  checked: boolean;
  label: string;
  disabled?: boolean;
  onChange?: (checked: boolean) => Promise<void>;
}

export function Checkbox({
  checked,
  disabled,
  label,
  onChange,
}: CheckboxProps) {
  return (
    <FormControlLabel
      disabled={disabled}
      checked={checked}
      label={label}
      control={
        <MuiCheckbox
          onChange={onChange && ((event) => onChange(event.target.checked))}
        />
      }
    />
  );
}
