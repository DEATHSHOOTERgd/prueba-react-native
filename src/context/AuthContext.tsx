import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Usuario, LoginResponse, LoginData, RegisterData  } from '../interface/AuthInterface';
import { AuthReducer, AuthState } from './AuthReducer';
import authApi from '../api/AuthApi';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: ( registerData: RegisterData ) => void;
    signIn: ( loginData: LoginData ) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage:'',
}



export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any)=> {

    const [ state, dispatch ] = useReducer( AuthReducer, authInicialState);

    useEffect(() => {
        checkToken();
    }, [])

    const checkToken = async() => {
        const token = JSON.parse(await AsyncStorage.getItem('token')??'null');

        if ( !token ) return dispatch({ type: 'notAuthenticated' });

        dispatch({ 
            type: 'signUp',
            payload: {
                token: token.token,
                user: {username:token.username, id:token.id}
            }
        });
    }


    const signIn = async({ username, password }: LoginData ) => {

        try {
            const { data } = await authApi.post<LoginResponse>('/usuario/login', { username, password } );
            dispatch({ 
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: {
                        username:data.username,
                        id:data.id,
                    }
                }
            });

            await AsyncStorage.setItem('token', JSON.stringify({token:data.token, id:data.id, username:data.username}) );

        } catch (error) {
            dispatch({ 
                type: 'addError', 
                payload: error.response.data.msg || 'Información incorrecta'
            })
        }
    };
    
    const signUp = async( { username,  password }: RegisterData ) => {
console.log('Hola')
        try {
            const { data } = await authApi.post<LoginResponse>('/usuario/', { username, password } );
            dispatch({ 
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: {username:data.username,id:data.id},
                }
            });

            await AsyncStorage.setItem('token', JSON.stringify({token:data.token, id:data.id, username:data.username}) );

        } catch (error) {
            dispatch({ 
                type: 'addError', 
                payload: error.response.data.errors[0].msg || 'Revise la información'
            });
        }

    };

    const logOut = async() => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' });
    };

    const removeError = () => {
        dispatch({ type: 'removeError' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError,
        }}>
            { children }
        </AuthContext.Provider>
    )

}