import { Button } from '.';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    children: 'Button',
    onClick: () => { }
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
    onClick: () => { }
  },
};