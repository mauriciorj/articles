import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button Small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button Medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button Large',
};

