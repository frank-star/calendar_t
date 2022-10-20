/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Props } from './Button.types';
import Button from './index';

export default {
  title: 'UI components/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'children',
};
