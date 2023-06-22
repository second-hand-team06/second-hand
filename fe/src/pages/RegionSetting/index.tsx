import { useCallback } from 'react';

import { ICON_NAME, REQUEST_METHOD } from '@constants/index';
import { getRegion } from '@utils/index';

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

  const validateSelectedRegion = useCallback((idx: number) => idx === 0, []);

  return (
    <>
      <S.Header>
        <S.CloseButton>닫기</S.CloseButton>
        <S.HeaderTitle>동네 설정</S.HeaderTitle>
        <S.EmptyTag />
      </S.Header>
      <S.RegionCountLimitMessage>
        <span>지역은 최소 1개,</span>
        <span>최대 2개까지 설정 가능해요.</span>
      </S.RegionCountLimitMessage>
      <S.RegionButtonsLayout>
        {data?.regions.map(({ id, name }, idx) => (
          <Button
            key={id}
            buttonType="rectangle"
            buttonState={validateSelectedRegion(idx) ? 'active' : 'default'}
          >
            <span>{getRegion(name)}</span>
            <Icon name={ICON_NAME.MULTIPLY} />
          </Button>
        ))}
        <Button buttonType="rectangle" buttonState="default">
          <Icon name={ICON_NAME.PLUS} />
        </Button>
      </S.RegionButtonsLayout>
    </>
  );
};

export default RegionSetting;
