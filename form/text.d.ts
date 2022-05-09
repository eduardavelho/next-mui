import React from "react";
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
export declare function Text({ label, placeholder, disabled, error, mask, value, type, rows, helperText, onChange, onFocus, onBlur, }: TextProps): JSX.Element;
