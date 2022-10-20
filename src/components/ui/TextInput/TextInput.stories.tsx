/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Props } from './TextInput.types';
import TextInput from './index';

export default {
  title: 'UI components/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<Props> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter value',
};
