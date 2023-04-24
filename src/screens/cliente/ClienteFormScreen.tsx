import React, { useContext, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native'


import { AuthContext } from '../../context/AuthContext';
import { styles } from '../../theme/AppTheme'; 

import { useForm } from '../../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { Logo } from '../../components/Logo';


interface Props extends StackScreenProps<any,any>{}


export const ClienteFormScreen = ( { navigation }: Props ) => {

    const { signUp, errorMessage, removeError } = useContext( AuthContext );

    const { email, password, name, onChange } = useForm({
        name: '',
        email: '',
        password: '' 
     });

     useEffect(() => {
        if( errorMessage.length === 0 ) return;

        Alert.alert( 'Registro incorrecto', errorMessage,[{
            text: 'Ok',
            onPress: removeError
        }]);

    }, [ errorMessage ]);

    const onRegister = () => {
        console.log({email, password, name});
        Keyboard.dismiss();
        signUp({
            nombre: name,
            email,
            password,
        });
    };


    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1}}
                behavior={ ( Platform.OS === 'ios') ? 'padding': 'height' }
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
                            ( Platform.OS === 'ios' ) && styles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange(value, 'name') }
                        value={ name }
                        onSubmitEditing={ onRegister }

                        autoCapitalize="words"
                        autoCorrect={ false }
                    />


                    <Text style={ styles.label }>Email:</Text>
                    <TextInput 
                        placeholder="Ingrese su email:"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[ 
                            styles.inputField,
                            ( Platform.OS === 'ios' ) && styles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange(value, 'email') }
                        value={ email }
                        onSubmitEditing={ onRegister }


                        autoCapitalize="none"
                        autoCorrect={ false }
                    />


                    <Text style={ styles.label }>Contraseña:</Text>
                    <TextInput 
                        placeholder="******"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        secureTextEntry
                        style={[ 
                            styles.inputField,
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
                        <Text style={ styles.buttonText  }>Login</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </>
    );
};
