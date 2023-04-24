
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LoginStackNav } from './LoginStackNav';
import { MenuDrawer } from './MenuDrawer';


export const AppNavigation = () =>{
    const {status} = useContext( AuthContext );

    return (
        <>
            {status === 'authenticated' ? <MenuDrawer/> : <LoginStackNav/>}
        </>
    );
};
