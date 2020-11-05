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
    footerLinks: [{
		title: 'Artciles',
        links: ['Contact Us']
    },
    {
        title: 'FOLLOW US',
        social: ['Facebook', 'Instagram']
    },
],
	copyrightLabel: 'Copyright © 2020 Artciles. All Rights Reserved'
}