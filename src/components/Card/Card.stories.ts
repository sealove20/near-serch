import { Card } from '.';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof Card> = {
    title: 'Example/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Base: Story = {
    args: {
        children: 'Card',
        onClick: () => { }
    },
};
