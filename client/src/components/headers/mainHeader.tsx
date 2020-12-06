import React from 'react';
import { Header } from './css'
import { Button } from 'wcl_articles/src/components/Button/Button';
import { colors } from '../../styles/theme';

export const MainHeader = () => {
    return(
        <Header width={1} background={colors.themeYellow}>
            <Button label="component test" />
        </Header>
    )
}

