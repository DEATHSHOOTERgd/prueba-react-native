import React from 'react';
import { DrawerContentScrollView, createDrawerNavigator, DrawerContentComponentProps} from '@react-navigation/drawer';
import { TouchableOpacity, useWindowDimensions, View, Text, Image } from 'react-native';
import {styles} from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { LoginStackNav } from './LoginStackNav';

const Drawer = createDrawerNavigator();

export const  MenuDrawer = ()=>{
    const {width} = useWindowDimensions();

    return (
        <Drawer.Navigator screenOptions={{
            drawerType:width >= 1200 ? 'permanent' : 'front',
            title:'',
        } }

        drawerContent={(props)=><MenuInterno {...props}/>}
        >
            <Drawer.Screen name="DepaStackNav" component={LoginStackNav}/>
            <Drawer.Screen name="ClienteStackNav" component={LoginStackNav}/>
        </Drawer.Navigator>
    );
}

const MenuInterno = ({navigation}:DrawerContentComponentProps<any>)=>{

    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image 
                source={require('../assets/user.png')}
                style={styles.avatar}
                />
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity 
                    style={{
                        ...styles.menuBoton,
                        flexDirection:'row',
                    }}
                    onPress={()=>navigation.navigate('ClienteStackNav')}
                >
                    <Icon name='compass-outline' size={23} style={{paddingEnd:10}} color='black' />
                    <Text style={styles.menuTexto}>Cliente</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        ...styles.menuBoton,
                        flexDirection:'row',
                    }}
                    onPress={()=>navigation.navigate('LoginStackNav')}
                >
                    <Icon name='log-in-outline' size={23} style={{paddingEnd:10}} color='black' />
                    <Text style={styles.menuTexto}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};