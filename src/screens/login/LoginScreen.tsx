import React, { useContext, useEffect } from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, Keyboard, Alert, TouchableOpacity } from 'react-native';
import { Logo } from '../../components/Logo';
import { styles } from '../../theme/AppTheme'; 
import { useForm } from '../../hooks/useForm'; 
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../../context/AuthContext';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props) => {

    const { signIn, errorMessage, removeError } = useContext( AuthContext );

    const { username, password, onChange } = useForm({
       username: '',
       password: ''
    });

    useEffect(() => {
        if( errorMessage.length === 0 ) return;

        Alert.alert( 'Login incorrecto', errorMessage,[{
            text: 'Ok',
            onPress: removeError,
        }]);

    }, [ errorMessage ]);

    const onLogin = () => {
        Keyboard.dismiss();
        signIn({ username: username, password });
    };

    return (
        <>
            <KeyboardAvoidingView
                style={{flex:1}}
                behavior={ 'height' }
            >


                <View style={ styles.formContainer }>
                    <Logo />

                    <Text style={ styles.title }>Iniciar Sesión</Text>

                    <Text style={ styles.label }>Usuario:</Text>
                    <TextInput 
                        placeholder="Ingrese su nombre de usuario:"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        style={[ 
                            styles.inputField,
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange(value, 'username') }
                        value={ username }
                        onSubmitEditing={ onLogin }


                        autoCapitalize="none"
                        autoCorrect={ false }
                    />


                    <Text style={ styles.label }>Contraseña:</Text>
                    <TextInput 
                        placeholder="Ingrese su contraseña"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        secureTextEntry
                        style={[ 
                            styles.inputField,
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange(value, 'password') }
                        value={ password }
                        onSubmitEditing={ onLogin }

                        autoCapitalize="none"
                        autoCorrect={ false }
                    />
                    <View style={ styles.buttonContainer }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={ styles.button }
                            onPress={ onLogin }
                        >
                            <Text style={ styles.buttonText } >Iniciar Sesión</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={ styles.newUserContainer  }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            onPress={ () => navigation.replace('RegisterScreen') }
                        >
                            <Text style={ styles.buttonText }>Nueva cuenta </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};
