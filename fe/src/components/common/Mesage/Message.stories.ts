import type { Meta, StoryObj } from '@storybook/react';

import Message from '.';

const messageMeta: Meta<typeof Message> = {
  title: 'common/Message',
  component: Message,
};

export default messageMeta;

type MessageStory = StoryObj<typeof Message>;

export const PrimaryMessage: MessageStory = {
  args: {
    type: 'you',
    content: '안녕하세요!\n\n궁금한 점이 있어서 챗 드려요',
  },
};
