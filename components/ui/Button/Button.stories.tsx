import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { within, userEvent } from '@storybook/testing-library';

import Button from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const NormalButton: ComponentStory<typeof Button> = () => (
  <Button variant="primary">Button</Button>
);

export const DisabledButton: ComponentStory<typeof Button> = () => (
  <Button disabled variant="primary">Button</Button>
);

DisabledButton.play = async ({ canvasElement }) => {
  const button = within(canvasElement).getByText('Button');
  userEvent.click(button);
  // expect(button).toHaveAttribute('disabled');
};
