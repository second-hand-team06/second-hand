import type { Meta, StoryObj } from '@storybook/react';

import ChatRoomItem from '.';

const chatRoomItemMeta: Meta<typeof ChatRoomItem> = {
  title: 'ChatRoomItem',
  component: ChatRoomItem,
};

export default chatRoomItemMeta;

type ChatRoomItemStory = StoryObj<typeof ChatRoomItem>;

export const Primary: ChatRoomItemStory = {
  args: {
    lastMessage: {
      roomId: '12341324',
      sender: {
        name: 'Daon',
        url: 'https://avatars.githubusercontent.com/u/115215178?v=4',
      },
      content: '아직 살 수 있나요?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    productPhotoUrl: 'https://codesquad-s3.s3.ap-northeast-2.amazonaws.com/img/second-hand.pngebd33b68-f',
    unreadCount: 1,
  },
};
