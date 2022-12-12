/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CategoriesCreateFormInputValues = {
    name?: string;
    icon?: string;
    colour?: string;
};
export declare type CategoriesCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    icon?: ValidationFunction<string>;
    colour?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CategoriesCreateFormOverridesProps = {
    CategoriesCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    icon?: FormProps<TextFieldProps>;
    colour?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CategoriesCreateFormProps = React.PropsWithChildren<{
    overrides?: CategoriesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CategoriesCreateFormInputValues) => CategoriesCreateFormInputValues;
    onSuccess?: (fields: CategoriesCreateFormInputValues) => void;
    onError?: (fields: CategoriesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CategoriesCreateFormInputValues) => CategoriesCreateFormInputValues;
    onValidate?: CategoriesCreateFormValidationValues;
} & React.CSSProperties>;
export default function CategoriesCreateForm(props: CategoriesCreateFormProps): React.ReactElement;
