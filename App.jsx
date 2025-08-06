import React from "react";
import { View,Text } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Screen } from "react-native-screens";

let Stack = createNativeStackNavigator();
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log" component={Log} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

function Log(){
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
      <Text>Welcome</Text>
    </View>
  )
}

export default App;