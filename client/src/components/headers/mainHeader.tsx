import React from 'react';
import { Header } from './css'
import { ButtonLogin } from '../buttonLogin/buttonLogin';
import { colors } from '../../styles/theme';

export const MainHeader = () => {
    return(
        <Header width={1} background={colors.themeYellow}>
            <ButtonLogin variant="contained" color="primary" label="Log In"/>
        </Header>
    )
}

