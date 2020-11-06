import styled from 'styled-components';
import { Card } from 'antd';
import { BoxTestProps } from './Box';

export const BoxTestComponent = styled(Card.Grid)`
    background-color: ${({backgroundColor}: BoxTestProps) => backgroundColor};
`;