import React from 'react';

import { Card } from 'antd';
import {
	ColorPaletteComponentBlack,
	ColorPaletteComponenBlue,
	ColorPaletteComponentGray,
	ColorPaletteComponentWhite,
	ColorPaletteComponentRed,
	ColorPaletteComponentYellow,
} from './styled-component';

//This is the only component that I'm using styled component system

export const ColorPalette = () => (
	<Card title="Color Palette" bordered={false}>
		<ColorPaletteComponentBlack>
			<strong>Black</strong>
		</ColorPaletteComponentBlack>{' '}
		<ColorPaletteComponenBlue>
			<strong>Blue</strong>
		</ColorPaletteComponenBlue>{' '}
		<ColorPaletteComponentGray>
			<strong>Gray</strong>
		</ColorPaletteComponentGray>{' '}
		<ColorPaletteComponentWhite>
			<strong>White</strong>
		</ColorPaletteComponentWhite>{' '}
		<ColorPaletteComponentRed>
			<strong>Red</strong>
		</ColorPaletteComponentRed>{' '}
		<ColorPaletteComponentYellow>
			<strong>Yellow</strong>
		</ColorPaletteComponentYellow>{' '}
	</Card>
);
