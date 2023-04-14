import { Input } from '.';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof Input> = {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Base: Story = {
    args: {
        displayValue: 'Input'
    },
};
