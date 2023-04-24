import React, { useContext, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native'


import { AuthContext } from '../../context/AuthContext';
import { styles } from '../../theme/AppTheme'; 

import { useForm } from '../../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { Logo } from '../../components/Logo';


interface Props extends StackScreenProps<any,any>{}


export const RegisterScreen = ( { navigation }: Props ) => {

    const { signUp, errorMessage, removeError } = useContext( AuthContext );

    const { password, username, onChange } = useForm({
        username: '',
        password: '',
     });

     useEffect(() => {
        if( errorMessage.length === 0 ) return;

        Alert.alert( 'Registro incorrecto', errorMessage,[{
            text: 'Ok',
            onPress: removeError,
        }]);

    }, [ errorMessage ]);

    const onRegister = () => {
        Keyboard.dismiss();
        signUp({
            username: username,
            password,
        });
    };


    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1}}
                behavior={ 'height' }
            >


                <View style={ styles.formContainer }>
                    <Logo/>

                    <Text style={ styles.title }>Registro</Text>

                    <Text style={ styles.label }>Nombre:</Text>
                    <TextInput 
                        placeholder="Ingrese su nombre:"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        style={[ 
                            styles.inputField,
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange(value, 'username') }
                        value={ username }
                        onSubmitEditing={ onRegister }

                        autoCapitalize="words"
                        autoCorrect={ false }
                    />

                    <Text style={ styles.label }>Contraseña:</Text>
                    <TextInput 
                        placeholder="Ingrese su contraseña."
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        secureTextEntry
                        style={[ 
                            styles.inputField,
                            ( Platform.OS === 'ios' ) && styles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange(value, 'password') }
                        value={ password }
                        onSubmitEditing={ onRegister }

                        autoCapitalize="none"
                        autoCorrect={ false }
                    />
                    <View style={ styles.buttonContainer }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={ styles.button }
                            onPress={ onRegister }
                        >
                            <Text style={ styles.buttonText } >Crear cuenta</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={ () => navigation.replace('LoginScreen') }
                        activeOpacity={ 0.8 }
                        style={ styles.buttonReturn }
                    >
                        <Text style={ styles.buttonText  }>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};
