import { Loading } from '.';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof Loading> = {
    title: 'Example/Loading',
    component: Loading,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Base: Story = {
    args: {},
};
