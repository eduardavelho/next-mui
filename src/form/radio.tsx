import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import MuiRadio from "@material-ui/core/Radio";

export interface RadioProps {
  options: {
    label: string;
    value: string | number;
    disabled?: boolean;
  }[];
  checked?: string | number;
  disabled?: boolean;
  row?: boolean;
  onChange?: (checked: string | number) => Promise<void>;
  ariaLabelledBy?: string;
}

export function Radio({
  row,
  checked,
  disabled,
  options,
  onChange,
  ariaLabelledBy,
}: RadioProps) {
  return (
    <RadioGroup
      row={row}
      aria-labelledby={ariaLabelledBy}
      value={checked}
      onChange={onChange && ((event) => onChange(event.target.value))}
    >
      {options.map((option) => (
        <FormControlLabel
          value={option.value}
          disabled={option.disabled || disabled}
          label={option.label}
          control={<MuiRadio />}
        />
      ))}
    </RadioGroup>
  );
}
