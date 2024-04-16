import { ColorValue } from "react-native"

export type ActiveIconProp = {
    inActive: React.ReactElement
    active: React.ReactElement
}

export type TextBoxProps = {
    color?: ColorValue,
    hasIcon?: boolean,
    fontSize?: number,
    fontFamily?: string,
    lineHeight?: number,
}