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
    signUp: ( registerData: RegisterData ) => Usuario;
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
        const token = await AsyncStorage.getItem('token');

        console.log(token);
        if ( !token ) return dispatch({ type: 'notAuthenticated' });

        const resp = await authApi.get('/auth');
        if ( resp.status !== 200 ) {
            return dispatch({ type: 'notAuthenticated' });
        }
        await AsyncStorage.setItem('token', resp.data.token );
        dispatch({ 
            type: 'signUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario
            }
        });
    }


    const signIn = async({ email, password }: LoginData ) => {

        try {
            const { data } = await authApi.post<LoginResponse>('/auth/login', { email, password } );
            dispatch({ 
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            });

            await AsyncStorage.setItem('token', data.token );

        } catch (error) {
            dispatch({ 
                type: 'addError', 
                payload: error.response.data.msg || 'Información incorrecta'
            })
        }
    };
    
    const signUp = async( { nombre, email, password }: RegisterData ) => {

        try {
            await authApi.post<LoginResponse>('/usuarios', { email, password, nombre } );
            const { data } = await authApi.post<LoginResponse>('/auth/login', { email, password } );
            dispatch({ 
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario,
                }
            });

            await AsyncStorage.setItem('token', data.token );

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