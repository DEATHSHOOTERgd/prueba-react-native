import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { CuestionarioListScreen } from '../screens/cuestionario/CuestionarioListScreen';

export type RootStackParams = {
    CuestionarioListScreen:undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const CuestionarioStackNav = () =>{

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
            <Stack.Screen name="CuestionarioListScreen" component={ CuestionarioListScreen } />
        </Stack.Navigator>
    );
};