import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Header as HeaderComponent, HeaderProps } from './Header';

export default {
	title: 'Components/Header',
	component: HeaderComponent,
} as Meta;

const HeaderTemplate: Story<HeaderProps> = (args) => <HeaderComponent {...args} />;

export const Header = HeaderTemplate.bind({});
Header.args = {
	logoInfo: [
		{
			type: 'Text',
			title: 'Articles',
            altText: 'Pyschy, the best solution',
            link: '#home'
		},
	],
	headerLinks: [
		{
			headerTitle: 'Default',
			type: 'Default',
			link: '#default',
		},
		{
			headerTitle: 'Highlight',
			type: 'Highlight',
			link: '#Highlight',
		},
		{
			headerTitle: 'Button',
			type: 'Button',
			link: '#button',
		},
	],
};
