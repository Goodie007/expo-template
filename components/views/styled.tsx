import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import { Animated, ColorValue, DimensionValue, Platform, TouchableOpacity, ViewStyle } from "react-native";
import { wp, heightPixel, widthPixel } from 'utils'
import { RFSpacingSize, spacingSize } from "./sizes";

export interface StyledViewProps extends ViewStyle {
    backgroundColor?: ColorValue,
    paddingHorizontal?: number,
    paddingVertical?: number,
}

export const Row = styled.TouchableOpacity<StyledViewProps>(({
    justifyContent,
    alignItems,
    flexGrow,
    flexDirection = "row",
    flex,
    paddingVertical = 0,
    paddingHorizontal = 0,
    backgroundColor,
    rowGap,
    columnGap
}) => ({
    flex,
    flexDirection,
    position: "relative",
    justifyContent,
    alignItems,
    flexGrow,
    paddingHorizontal,
    paddingVertical,
    backgroundColor,
    rowGap,
    columnGap

}))

export const Card = styled.Pressable<{
    backgroundColor?: ColorValue
    paddingVertical?: number
    paddingHorizontal?: number,
    borderRadius?: number,
    width?: DimensionValue
}>(({
    theme,
    width = "100%",
    backgroundColor,
    paddingVertical = 15,
    paddingHorizontal = 15,
    borderRadius = 12
}) => ({
    width,
    backgroundColor: backgroundColor ?? "#fff",
    borderWidth: 0,
    borderColor: "transparent",
    shadowColor: "transparent",
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    borderRadius: borderRadius,
    position: "relative",
    display: "flex"
}))

export const ViewContainer = styled(Animated.View)<{
    paddingHorizontal?: number,
    paddingVertical?: number,
    backgroundColor?: ColorValue
}>(({
    paddingVertical = 0,
    paddingHorizontal = RFSpacingSize.i20,
    backgroundColor
}) => ({
    paddingHorizontal,
    paddingVertical,
    backgroundColor
}));

export const ActionSheetViewContainer = styled.View({
    paddingHorizontal: widthPixel(20),
    paddingTop: heightPixel(25),
    paddingBottom: heightPixel(50),
});

export const BaseViewContainer = styled.KeyboardAvoidingView<{
    backgroundColor?: string | ColorValue;
}>(({ backgroundColor }) => ({
    backgroundColor,
    flex: 1,
}));

export const CenterViewContainer = styled.KeyboardAvoidingView<{
    backgroundColor?: string;
}>(({ backgroundColor }) => ({
    backgroundColor,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
}));

export const BaseLGView = styled(LinearGradient)({
    flex: 1,
});

export const RoundedActionSheet = {
    borderTopLeftRadius: widthPixel(30),
    borderTopRightRadius: widthPixel(30),
};

export const Divider = styled.View<ViewStyle>(({
    height = spacingSize.i20,
    backgroundColor = "#b5b6b7",
    ...rest
}) => ({
    height: (typeof height  === "number") ? heightPixel(height) : height,
    backgroundColor,
    ...rest
}));

export const Spacer = styled.View<{
    height?: number
}>(({
    height = spacingSize.i20
}) => ({
    height: heightPixel(height),
}));

export const HSpacer = styled.View<{
    width?: number
}>(({
    width = spacingSize.i20
}) => ({
    width: widthPixel(width),
}));

export const BottomContainer = styled(ViewContainer)<{
    relative?: boolean,
    display?: boolean,
    backgroundColor?: ColorValue
}>(({
    relative,
    display = true,
    backgroundColor
}) => ({
    paddingTop: heightPixel(spacingSize.i10),
    paddingBottom: heightPixel(Platform.OS === "android" ? spacingSize.i40 : spacingSize.i32),
    bottom: 0,
    position: relative ? 'relative' : 'absolute',
    display: display ? 'flex' : 'none',
    width: wp('100'),
    backgroundColor
}));


