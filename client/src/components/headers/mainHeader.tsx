import React from 'react';
import { Header } from './css'
import { ButtonLogin } from '../buttonLogin/buttonLogin';

export const MainHeader = () => {
    return(
        <Header width={1}>
            <ButtonLogin variant="contained" color="primary" label="Log In"/>
        </Header>
    )
} 