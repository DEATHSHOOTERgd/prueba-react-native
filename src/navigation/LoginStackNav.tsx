
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { LoginScreen } from '../screens/login/LoginScreen';
import { RegisterScreen } from '../screens/login/RegisterScreen';

export type RootStackParams = {
    LoginScreen:undefined,
    RegisterScreen:undefined,
    MenuDrawer:undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const LoginStackNav = () =>{

    return (
        <Stack.Navigator 
        screenOptions={{
            headerShown:false,
            headerStyle:{
                elevation:0,
            },
            title:'',
            cardStyle:{
                backgroundColor:'#2b3e51',
            },
        }}
        >
            <Stack.Screen name="LoginScreen" component={ LoginScreen } />
            <Stack.Screen name="RegisterScreen" component={ RegisterScreen } />
        </Stack.Navigator>
    );
};

