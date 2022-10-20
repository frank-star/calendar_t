/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Props } from './Form.types';
import Form from './index';

export default {
  title: 'UI components/Form',
  component: Form,
} as Meta;

const Template: Story<Props> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {};
