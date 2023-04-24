import React, {useContext} from 'react';
import { DrawerContentScrollView, createDrawerNavigator, DrawerContentComponentProps} from '@react-navigation/drawer';
import { TouchableOpacity, useWindowDimensions, View, Text, Image } from 'react-native';
import {styles} from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { CuestionarioStackNav } from './CuestionarioStackNav';

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
            <Drawer.Screen name="CuestionarioStackNav" component={CuestionarioStackNav}/>
        </Drawer.Navigator>
    );
}

const MenuInterno = ({navigation}:DrawerContentComponentProps<any>)=>{
    const {logOut} = useContext( AuthContext );

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
                    <Icon name='book-outline' size={23} style={{paddingEnd:10}} color='black' />
                    <Text style={styles.menuTexto}>Cuestionarios</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        ...styles.menuBoton,
                        flexDirection:'row',
                    }}
                    onPress={logOut}
                >
                    <Icon name='log-in-outline' size={23} style={{paddingEnd:10}} color='black' />
                    <Text style={styles.menuTexto}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};