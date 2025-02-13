/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "Star 1"?: PrimitiveOverrideProps<IconProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32129767076"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4204060465"?: PrimitiveOverrideProps<FlexProps>;
    "Add Pet"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32129767081"?: PrimitiveOverrideProps<FlexProps>;
    "Slice 1"?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 42040841074"?: PrimitiveOverrideProps<FlexProps>;
    Jerin?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
