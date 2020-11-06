import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { BoxTest, BoxTestProps } from './Box';

export default {
	title: 'Basic/BoxTest',
	component: BoxTest,
} as Meta;

const Template: Story<BoxTestProps> = (args) => <BoxTest {...args} />;

export const MainBoxTest = Template.bind({});
MainBoxTest.args = {
    label: 'ok',
    backgroundColor: 'blue'
};