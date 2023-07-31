import { useParams } from 'react-router-dom';

import { useUserContext } from '@context/userContext';
import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

import { REQUEST_URL, ICON_NAME } from '@constants/index';
import { formatMoney } from '@utils/index';

import Icon from '@components/common/Icon';
import * as S from './style';

type Participant = {
  id: number;
  name: string;
  url: string;
};

type Message = {
  roomId: string;
  senderId: number;
  content: string;
  createdAt: Date;
};

interface ChatRoomData {
  participants: Participant[];
  product: {
    id: number;
    title: string;
    price: number;

    photoUrl: string;
  };
  unreadCount: number;
  lastMessage: Message;
  createdAt: Date;
}

const ChattingRoom = () => {
  const { id: roomId } = useParams();
  const { user } = useUserContext();

  const { data } = useFetch<ChatRoomData>({
    url: `${REQUEST_URL.CHAT_ROOMS}/${roomId}`,
    options: {
      method: REQUEST_METHOD.GET,
      headers: { Authorization: `Bearer ${localStorage.getItem('Token')}` },
    },
  });

  return (
    <>
      <S.Header>
        <Icon name={ICON_NAME.CHEVRON_LEFT} />
        <S.SenderName>{data?.participants.find(({ id }) => id !== user?.id)?.name}</S.SenderName>
        <Icon name={ICON_NAME.ELLIPSIS} />
      </S.Header>
      <S.Product>
        <S.ProductPhotoUrl src={data?.product.photoUrl} alt="product-thumbnail" />
        <S.TitleAndPrice>
          <S.ProductTitle>{data?.product.title}</S.ProductTitle>
          <S.ProductPrice>{formatMoney(data?.product.price ?? 0)}</S.ProductPrice>
        </S.TitleAndPrice>
      </S.Product>
    </>
  );
};

export default ChattingRoom;
