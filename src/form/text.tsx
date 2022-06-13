import React from "react";
import InputMask from "react-input-mask";
import TextField from "@material-ui/core/TextField";

export interface TextProps {
  label: string;
  placeholder: string;
  type?: React.InputHTMLAttributes<unknown>["type"];
  disabled?: boolean;
  error?: boolean;
  mask?: string;
  helperText?: string;
  value: string;
  rows?: number;
  onChange?: (selected: string | undefined) => Promise<void>;
  onFocus?: () => void;
  onBlur?: () => void;
}

export function Text({
  label,
  placeholder,
  disabled,
  error,
  mask,
  value,
  type,
  rows,
  helperText,
  onChange,
  onFocus,
  onBlur,
}: TextProps) {
  if (mask) {
    return (
      <InputMask
        placeholder={placeholder}
        type={type}
        mask={mask}
        value={value}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange && ((event) => onChange(event.target.value))}
      >
        {() => (
          <TextField
            autoComplete="off"
            label={label}
            multiline={rows !== undefined}
            rows={rows}
            variant="outlined"
            fullWidth
            disabled={disabled}
            error={error}
            helperText={helperText}
          />
        )}
      </InputMask>
    );
  } else {
    return (
      <TextField
        type={type}
        multiline={rows !== undefined}
        rows={rows}
        label={label}
        placeholder={placeholder}
        autoComplete="off"
        variant="outlined"
        fullWidth
        disabled={disabled}
        error={error}
        helperText={helperText}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange && ((event) => onChange(event.target.value))}
      />
    );
  }
}
