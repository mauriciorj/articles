import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const ButtonType: Story<ButtonProps> = () => {
  return(
    <>
    <Button type="primary" label="Primary"/>{' '}
    <Button type="ghost" label="Ghost"/>{' '}
    <Button type="dashed" label="Dashed"/>{' '}
    <Button type="link" label="Link"/>{' '}
    <Button type="text" label="Text"/>{' '}
    <Button disabled={true} label="Disabled"/>{' '}
    <Button danger={true} label="Danger"/>{' '}
    <Button label="Default"/>
    </>
  )
}

export const ButtonSize: Story<ButtonProps> = () => {
  return(
    <>
    <Button size="small" label="Small"/>{' '}
    <Button size="middle" label="Middle"/>{' '}
    <Button size="large" label="Large"/>
    </>
  )
}

export const ButtonShape: Story<ButtonProps> = () => {
  return(
    <>
    <Button shape="circle" label="Circle"/>{' '}
    <Button shape="round" label="Round"/>{' '}
    <Button label="Default"/>
    </>
  )
}