import React, { useState } from "react";
import {
  ActivityIndicator,
  ColorValue, StyleProp,
  TextStyle, TouchableOpacityProps
} from "react-native";
import { ButtonOutlineView, ButtonSolidView, ButtonText } from "./styled";
import { useThemeMode } from "providers";


export interface ButtonProps extends TouchableOpacityProps{
  text?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
  textStyle?: StyleProp<TextStyle>;
  width?: number;
  isTransparent?: boolean;
  loadColor?: ColorValue;
  icon?: React.ReactElement;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  loadColor = "#fff",
  children,
  isLoading,
  text,
  onPress,
  style,
  textStyle,
  disabled,
  width,
  icon,
  ...rest
}) => {
  const { colors } = useThemeMode();
  const [pressed, setPressed] = useState(false)
  const activeBackgroundColor = (isLoading || pressed) ? colors.grey : colors.green;

  return (
    <ButtonSolidView
      activeOpacity={0.7}
      onPress={onPress}
      disabled={isLoading || disabled}
      backgroundColor={activeBackgroundColor}
      borderColor={activeBackgroundColor}
      borderWidth={1}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      {...rest}
    >
      {!isLoading ? (
        (children) ? (children) : (
          <>
            {icon}
            <ButtonText color={colors.white} style={textStyle}>
              {text}
            </ButtonText>
          </>
        )
      ) : (
        <ActivityIndicator
          color={loadColor ?? colors.white}
          animating={isLoading}
          size="small"
          style={{ paddingVertical: 5 }}
        />
      )}
    </ButtonSolidView>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  isLoading,
  text,
  onPress,
  style,
  textStyle,
  icon,
  ...rest
}) => {
  const { colors } = useThemeMode();

  return (
    <ButtonOutlineView
      backgroundColor={colors.white}
      borderColor={colors.black}
      style={style}
      activeOpacity={0.7}
      onPress={onPress}
      borderWidth={3}
      {...rest}
    >
      {!isLoading ? (
        (children) ? (children) : (
          <>
            {icon}
            <ButtonText color={colors.black} style={textStyle}>
              {text}
            </ButtonText>
          </>
        )
      ) : (
        <ActivityIndicator animating={isLoading} size="small" />
      )}
    </ButtonOutlineView>
  );
};
