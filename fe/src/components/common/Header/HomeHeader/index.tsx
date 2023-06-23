import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { ICON_NAME, PATH, REQUEST_URL } from '@constants/index';
import { getRegion } from '@utils/index';

import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

import Icon from '@components/common/Icon';
import * as S from './style';

interface Region {
  id: number;
  name: string;
}

interface RegionsData {
  regions: Region[];
}

const HomeHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useFetch<RegionsData>({
    url: REQUEST_URL.USER_REGIONS,
    method: REQUEST_METHOD.GET,
  });
  const isLoggedIn = localStorage.getItem('Token');

  const selectedRegion = useMemo(() => {
    if (!isLoggedIn) return '역삼 1동';
    if (!data) return;

    const address = data.regions[0].name;
    const region = getRegion(address);

    return region;
  }, [data]);

  const getDropDownMenuTemplate = () => {
    if (!isLoggedIn) {
      return (
        <S.Menu selectedregion={selectedRegion} region={selectedRegion}>
          {selectedRegion}
        </S.Menu>
      );
    }

    return (
      <>
        {data?.regions.map(({ id, name }) => (
          <S.Menu key={id} selectedregion={selectedRegion} region={getRegion(name)}>
            {getRegion(name)}
          </S.Menu>
        ))}
        <Link to={PATH.REGION_SETTING}>
          <S.Menu>내 동네 설정하기</S.Menu>
        </Link>
      </>
    );
  };

  return (
    <S.HomeHeader>
      <S.NeighborhoodDropdown onClick={() => setIsModalOpen(!isModalOpen)}>
        <span>{selectedRegion}</span>
        <Icon name={ICON_NAME.CHEVRON_DOWN} />
        {isModalOpen && <S.Modal>{getDropDownMenuTemplate()}</S.Modal>}
      </S.NeighborhoodDropdown>
      <Link to={PATH.CATEGORY}>
        <Icon name={ICON_NAME.HAMBURGER} />
      </Link>
    </S.HomeHeader>
  );
};

export default HomeHeader;
