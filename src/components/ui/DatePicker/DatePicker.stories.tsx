/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Props } from './DatePicker.types';
import DatePicker from './index';

export default {
  title: 'UI components/DatePicker',
  component: DatePicker,
} as Meta;

const Template: Story<Props> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {};
