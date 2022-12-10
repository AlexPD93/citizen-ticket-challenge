/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Categories } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CategoriesUpdateFormInputValues = {
    name?: string;
    icon?: string;
    colour?: string;
};
export declare type CategoriesUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    icon?: ValidationFunction<string>;
    colour?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CategoriesUpdateFormOverridesProps = {
    CategoriesUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    icon?: FormProps<TextFieldProps>;
    colour?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CategoriesUpdateFormProps = React.PropsWithChildren<{
    overrides?: CategoriesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    categories?: Categories;
    onSubmit?: (fields: CategoriesUpdateFormInputValues) => CategoriesUpdateFormInputValues;
    onSuccess?: (fields: CategoriesUpdateFormInputValues) => void;
    onError?: (fields: CategoriesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CategoriesUpdateFormInputValues) => CategoriesUpdateFormInputValues;
    onValidate?: CategoriesUpdateFormValidationValues;
}>;
export default function CategoriesUpdateForm(props: CategoriesUpdateFormProps): React.ReactElement;
