/// <reference types="react" />
export interface SearchHeaderProps {
    title?: string;
    titleColor?: string;
    background?: string;
    options: string[];
    value: string[];
    placeholder: string;
    noOptionsText: string;
    disabled: boolean;
    loading: boolean;
    onChange?: (value: string[]) => Promise<void>;
}
export declare function SearchHeader({ title, titleColor, background, options, value, placeholder, noOptionsText, disabled, loading, onChange, }: SearchHeaderProps): JSX.Element;
