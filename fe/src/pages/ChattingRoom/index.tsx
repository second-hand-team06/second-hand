import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import * as S from './style';

const ChattingRoom = () => {
  return (
    <>
      <S.Header>
        <Icon name={ICON_NAME.CHEVRON_LEFT} />
        <S.SenderName>{}</S.SenderName>
        <Icon name={ICON_NAME.ELLIPSIS} />
      </S.Header>
    </>
  );
};

export default ChattingRoom;
