import React from "react";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";

export interface TagsProps {
  options: string[];
  selected: string[];
  placeholder: string;
  noOptionsText: string;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  helperText?: string;
  onChange?: (value: string[]) => Promise<void>;
}

export function Tags({
  options,
  selected,
  placeholder,
  noOptionsText,
  disabled,
  loading,
  error,
  helperText,
  onChange,
}: TagsProps) {
  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      blurOnSelect
      fullWidth
      openText=""
      clearText=""
      closeText=""
      loadingText=""
      style={{
        borderColor: "red",
      }}
      options={options}
      value={selected}
      getOptionLabel={(option) => option}
      loading={loading}
      disabled={loading || disabled}
      noOptionsText={noOptionsText}
      popupIcon={
        loading ? (
          <CircularProgress color="inherit" size="1em" />
        ) : (
          <SearchIcon color="inherit" />
        )
      }
      onChange={
        onChange &&
        ((_, value) => {
          if (value === null) {
            onChange([]);
          } else if (Array.isArray(value)) {
            onChange(value);
          } else {
            onChange([value]);
          }
        })
      }
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder={placeholder}
          error={error}
          helperText={helperText}
        />
      )}
    />
  );
}
