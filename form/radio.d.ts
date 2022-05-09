/// <reference types="react" />
export interface RadioProps {
    options: {
        label: string;
        value: string | number;
        disabled?: boolean;
    }[];
    error?: boolean;
    helperText?: string;
    checked?: string | number;
    disabled?: boolean;
    row?: boolean;
    onChange?: (checked: string | number) => Promise<void>;
    ariaLabelledBy?: string;
}
export declare function Radio({ row, checked, disabled, options, onChange, error, helperText, ariaLabelledBy, }: RadioProps): JSX.Element;
