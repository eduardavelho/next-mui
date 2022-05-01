import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

// Suportar autocomplete

export interface RadioProps {
  options: {
    label: string;
    value: string | number;
  }[];
  label: string;
  selected?: string | number;
  disabled?: boolean;
  errorMessage?: string;
  onChange?: (selected: string | number | undefined) => Promise<void>;
}

export function Select({
  label,
  selected,
  disabled,
  errorMessage,
  options,
  onChange,
}: RadioProps) {
  return (
    <TextField
      error={errorMessage !== undefined}
      helperText={errorMessage}
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
