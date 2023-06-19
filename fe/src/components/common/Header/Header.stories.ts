import type { Meta, StoryObj } from '@storybook/react';

import Header from '.';

const headerMeta: Meta<typeof Header> = {
  title: 'common/Header',
  component: Header,
};

export default headerMeta;

type HeaderStory = StoryObj<typeof Header>;

export const HomeHeader: HeaderStory = {
  args: {
    type: 'home',
  },
};
