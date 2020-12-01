import React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { ColorPalette as ColorPaletteTest } from './ColorPalette';

export default {
	title: 'Basic/Color Palette',
	component: ColorPaletteTest,
} as Meta;

const ColorPaletteTemplate = () => <ColorPaletteTest />;

export const ColorPalette = ColorPaletteTemplate.bind({});
