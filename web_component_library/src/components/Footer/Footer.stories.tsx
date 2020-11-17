import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Footer as FooterComponent, FooterProps } from './Footer';

export default {
	title: 'Components/Footer',
	component: FooterComponent,
} as Meta;

const FooterTemplate: Story<FooterProps> = (args) => <FooterComponent {...args} />;

export const Footer = FooterTemplate.bind({});
Footer.args = {
	footerLinks: [
		{
            title: 'Artciles',
            type: 'normal',
			subTitle: [{ name: 'Filters', link: '#test' }],
		},
		{
            title: 'FOLLOW US',
            type: 'social',
			subTitle: [{ name: 'Facebook', link: '#facebook' }, { name: 'Instagram', link: '#facebook' }],
		},
	],
	copyrightLabel: 'Copyright © 2020 Artciles. All Rights Reserved',
};
