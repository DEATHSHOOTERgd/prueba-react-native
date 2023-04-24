
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LoginStackNav } from './LoginStackNav';
import { MenuDrawer } from './MenuDrawer';
import { LoadingScreen } from '../screens/util/LoadingScreen';


export const AppNavigation = () =>{
    const {status} = useContext( AuthContext );

    if(status === 'checking') return <LoadingScreen/>

    return (
        <>
            {status === 'authenticated' ? <MenuDrawer/> : <LoginStackNav/>}
        </>
    );
};
