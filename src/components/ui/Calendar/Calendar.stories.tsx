/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Props } from './Calendar.types';
import Calendar from './index';

export default {
  title: 'UI components/Calendar',
  component: Calendar,
} as Meta;

const Template: Story<Props> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {};
