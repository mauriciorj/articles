import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { ColorsPalette, ColorsPaletteProps } from './ColorsPalette';

export default {
	title: 'Basic/Colors Palette',
	component: ColorsPalette,
} as Meta;

const Template: Story<ColorsPaletteProps> = (args) => <ColorsPalette {...args} />;

export const MainPalette = Template.bind({});
MainPalette.args = {
	color: 'blue',
};
