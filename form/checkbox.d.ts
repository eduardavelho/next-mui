/// <reference types="react" />
export interface CheckboxProps {
    checked: boolean;
    label: string;
    disabled?: boolean;
    onChange?: (checked: boolean) => Promise<void>;
}
export declare function Checkbox({ checked, disabled, label, onChange, }: CheckboxProps): JSX.Element;
