import React from 'react';

import Button from './index';

import '../../scss/app.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Button',
  component: Button,
};


const Template = (args) => <Button {...args} >Hello</Button>;

export const Primary = Template.bind({});

Primary.args = {
  classNames: "button_wtf"
}
