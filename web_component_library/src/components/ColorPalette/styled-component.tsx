import styled from 'styled-components';
import { Card } from 'antd';

export const ColorPaletteComponentBlack = styled(Card.Grid)`
	background: ${(props) => props.theme.colors.themeBlack};
	color: ${(props) => props.theme.colors.themeWhite};
`;

export const ColorPaletteComponenBlue = styled(Card.Grid)`
	background: ${(props) => props.theme.colors.themeBlue};
	color: ${(props) => props.theme.colors.themeWhite};
`;

export const ColorPaletteComponentGray = styled(Card.Grid)`
	background: ${(props) => props.theme.colors.themeGray};
	color: ${(props) => props.theme.colors.themeWhite};
`;

export const ColorPaletteComponentWhite = styled(Card.Grid)`
	background: ${(props) => props.theme.colors.themeWhite};
`;

export const ColorPaletteComponentRed = styled(Card.Grid)`
	background: ${(props) => props.theme.colors.themeRed};
	color: ${(props) => props.theme.colors.themeWhite};
`;

export const ColorPaletteComponentYellow = styled(Card.Grid)`
	background: ${(props) => props.theme.colors.themeYellow};
`;
