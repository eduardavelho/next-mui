/// <reference types="react" />
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
export declare function Select({ label, placeholder, selected, disabled, error, helperText, options, onChange, }: SelectProps): JSX.Element;
