import { RFFontSize, RFLineHeight, RegularText, fontSize, lineHeight } from "components/text";
import styled from "@emotion/native";
import { font, heightPixel, widthPixel } from "utils";
import { Platform } from "react-native";
import { TextBoxProps } from "./interface";
import { RFSpacingSize, spacingSize } from "@components/views";


export const InputBox = styled.TextInput<TextBoxProps>(({
  theme,
  color,
  hasIcon = false,
  fontSize = RFFontSize.sm,
  lineHeight = fontSize * 1.2,
  fontFamily = font.medium,
}) => ({
  paddingLeft: widthPixel((!hasIcon) ? 0 : spacingSize.i10),
  fontSize: fontSize,
  fontFamily: fontFamily,
  borderWidth: 0,
  flexGrow: 1,
  lineHeight: lineHeight,
  backgroundColor: "transparent",
  color: color 
}));

export const InputWrapper = styled.View<{

}>(({

}) => ({
  paddingHorizontal: widthPixel(spacingSize.i14),
  paddingVertical: heightPixel(Platform.OS == "android" ? spacingSize.i12 : spacingSize.i14),
  marginBottom: heightPixel(spacingSize.i4),
  borderWidth: 1,
  borderRadius: 8,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const BottomText = styled(RegularText)({
  paddingLeft: 10,
  paddingBottom: 10,
  fontSize: RFFontSize.xs - 1.5
});

export const Label = styled(RegularText)(({
  color,
  theme
}) => ({
  fontFamily: font.medium,
  fontSize: RFFontSize.xs,
  lineHeight: RFLineHeight.xs,
  paddingBottom: heightPixel(spacingSize.i10),
  color,
  // paddingLeft: widthPixel(15),
}));

export const InputIconBox = styled.View({
  paddingHorizontal: widthPixel(spacingSize.i10)
})

export const InputPlaceholderTextSection = styled.View({
  flexGrow: 1,
})

export const InputPlaceholderPressable = styled.Pressable<{

}>(({

}) => ({
  paddingHorizontal: widthPixel(spacingSize.i5),
  paddingVertical: Platform.OS == "android" ? widthPixel(12) : widthPixel(15),
  marginBottom: heightPixel(spacingSize.i14),
  borderBottomWidth: 1,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
}))