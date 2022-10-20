/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import Textarea from './index';
import { Props } from './Textarea.types';

export default {
  title: 'UI components/Textarea',
  component: Textarea,
} as Meta;

const Template: Story<Props> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter value',
};
