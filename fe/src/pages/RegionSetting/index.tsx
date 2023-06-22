import { ICON_NAME, REQUEST_METHOD } from '@constants/index';

import useFetch from '@hooks/useFetch';

import Icon from '@components/common/Icon';
import Button from '@components/common/Button';
import * as S from './style';

interface Region {
  id: number;
  name: string;
}

interface RegionsData {
  regions: Region[];
}

const RegionSetting = () => {
  const { data } = useFetch<RegionsData>({
    url: 'http://13.124.150.120:8080/users/regions',
    method: REQUEST_METHOD.GET,
  });

  return (
    <>
      <S.Header>
        <S.CloseButton>닫기</S.CloseButton>
        <S.HeaderTitle>동네 설정</S.HeaderTitle>
        <S.EmptyTag />
      </S.Header>
      {data?.regions.map(({ id, name }, idx) => (
        <Button key={id} buttonType="rectangle" buttonState={idx === 0 ? 'active' : 'default'}>
          <span>{name}</span>
          <Icon name={ICON_NAME.MULTIPLY} />
        </Button>
      ))}
      <Button buttonType="rectangle" buttonState="default">
        <Icon name={ICON_NAME.PLUS} />
      </Button>
    </>
  );
};

export default RegionSetting;
