import React from 'react';

import { Meta, Story } from '@storybook/react';

import Home from './Home';

export default {
  title: 'UI page/Home',
  component: Home,
} as Meta;

const Template: Story = () => <Home />;

export const Default = Template.bind({});
Default.args = {};
