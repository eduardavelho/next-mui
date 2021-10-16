declare const tag: unique symbol;
export type Theme = { readonly [tag]: "THEME" };

export interface FormInput<Value> {
  value: Value;
  label: string;
  helperText: string;
  error: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (value: Value) => void;
}
