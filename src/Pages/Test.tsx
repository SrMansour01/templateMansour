import React from "react";
import { 
    SafeAreaView,
    StyleSheet,
 } from "react-native";

 export default function Test() {
    return (
        <SafeAreaView style={Style.Cont}></SafeAreaView>
    )
 }

 const Style = StyleSheet.create({
    Cont: {
        flex: 1
    }
 })