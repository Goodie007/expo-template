import styled from '@emotion/native';
import { font } from 'utils/fonts';
import { ColorValue, TextProps, TextStyle, ViewStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { fontSize as fSize } from './sizes';

export interface ThemeTextProps extends TextProps {
  fontSize?: TextStyle['fontSize'];
  lineHeight?: TextStyle['lineHeight'];
  color?: string | ColorValue;
  marginTop?: ViewStyle['marginTop'];
  textAlign?: TextStyle['textAlign'];
  textTransform?: TextStyle['textTransform'];
  marginBottom?: ViewStyle['marginBottom'];
}

export const RegularText = styled.Text<ThemeTextProps>(
  ({
    fontSize = fSize.xs,
    lineHeight = fontSize * 1.6,
    color,
    marginTop,
    textAlign,
    theme,
    marginBottom,
    textTransform
  }) => ({
    fontFamily: font.regular,
    fontSize: RFValue(fontSize),
    lineHeight: RFValue(lineHeight),
    color: color,
    marginTop,
    textAlign,
    marginBottom,
    textTransform
  })
);

export const BoldText = styled(RegularText)({
  fontFamily: font.bold
});

export const SemiBoldText = styled(RegularText)({
  fontFamily: font.bold
});

export const ExtraBoldText = styled(RegularText)({
  fontFamily: font.extraBold
});

export const MediumText = styled(RegularText)({
  fontFamily: font.medium
});

export const BlackText = styled(RegularText)({
  fontFamily: font.black
});

export const LightText = styled(RegularText)({
  fontFamily: font.light
});


