import React from 'react';
import { Heading, HeadingProps } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    title: 'Título do Post',
  } as HeadingProps,
} as Meta;

export const Primary: Story<HeadingProps> = (args) => <Heading {...args} />;
