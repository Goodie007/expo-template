import { BoldText, RegularText } from "@/components/text";
import { Link } from "expo-router";
import React from "react";
import {View, Text} from 'react-native'

export default function Register(){
    return (
        <View style={{paddingTop: 50, paddingLeft: 40}}>
            <RegularText fontSize={16}>Hello</RegularText>
            <BoldText>Hey</BoldText>
            <Link href={"/(auth)/login"} >Login</Link>
            <Text>Helli</Text>
        </View>
    )
}