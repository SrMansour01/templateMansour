import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./moods/stack";

export default function Navigation () {
    return (
        <NavigationContainer>
            <StackNav/>
        </NavigationContainer>
    )
}