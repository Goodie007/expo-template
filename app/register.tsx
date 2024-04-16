import { Link } from "expo-router";
import React from "react";
import {View, Text} from 'react-native'

export default function Register(){
    return (
        <View style={{paddingTop: 50, paddingLeft: 40}}>
            <Text>Hello</Text>
            <Link href={"/(auth)/login"} >Login</Link>
        </View>
    )
}