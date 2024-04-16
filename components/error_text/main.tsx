import React from "react";
import { RegularText, LightText } from "@components/text";
import { View } from "react-native";



interface ErrorTextProp {
    value: string
}
const ErrorText: React.FC<ErrorTextProp> = ({ value }) => {
    return (

        <View style={{ marginBottom: 2, marginTop: 0 }}>
            <LightText style={{ color: "red", fontSize: 14 }} >{value}</LightText>
        </View>
    )
}


export default ErrorText;