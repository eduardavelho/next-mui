import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

export interface SelectProps {
  options: {
    label: string;
    value: string | number;
  }[];
  label: string;
  placeholder: string;
  selected?: string | number;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  onChange?: (selected: string | number | undefined) => Promise<void>;
}

export function Select({
  label,
  placeholder,
  selected,
  disabled,
  error,
  helperText,
  options,
  onChange,
}: SelectProps) {
  return (
    <TextField
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      label={label}
      select
      fullWidth
      variant="outlined"
      disabled={disabled}
      value={selected ? selected : undefined}
      onChange={
        onChange && ((event) => onChange(event.target.value as string | number))
      }
    >
      {options.map((option) => (
        <MenuItem value={option.value}>{option.label}</MenuItem>
      ))}
    </TextField>
  );
}
