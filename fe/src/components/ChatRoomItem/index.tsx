import { getTimeStamp } from '@utils/index';
import * as S from './style';

type LastMessage = {
  roomId: string;
  sender: { name: string; url: string };
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

interface ChatRoomItemProps {
  lastMessage: LastMessage;
  productPhotoUrl: string;
  unreadCount: number;
}

const ChatRoomItem = ({ lastMessage, productPhotoUrl, unreadCount }: ChatRoomItemProps) => {
  return (
    <S.ChatRoomItem>
      <S.SenderImg src={lastMessage.sender.url} alt="sender image" />
      <div>
        <S.NameAndTime>
          <S.SenderName>{lastMessage.sender.name}</S.SenderName>
          <S.SendedTime>{getTimeStamp(lastMessage.createdAt)}</S.SendedTime>
        </S.NameAndTime>
        <S.LastMessageContent>{lastMessage.content}</S.LastMessageContent>
      </div>
      <S.CountAndPhoto>
        <S.UnreadCount>{unreadCount}</S.UnreadCount>
        <S.ProductPhotoUrl src={productPhotoUrl} alt="product-thumbnail" />
      </S.CountAndPhoto>
    </S.ChatRoomItem>
  );
};

export default ChatRoomItem;
