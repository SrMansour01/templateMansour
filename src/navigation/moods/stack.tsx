import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

import Test from "../../Pages/Test";

export default function StackNav () {
    return (
        <Stack.Navigator>
            <Stack.Screen name="test" component={Test}/>
        </Stack.Navigator>
    )
}