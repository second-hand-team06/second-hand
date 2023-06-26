import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { ICON_NAME, PATH } from '@constants/index';
import { getRegion } from '@utils/index';

import { useUserContext } from '@context/userContext';

import Icon from '@components/common/Icon';
import * as S from './style';

interface Region {
  id: number;
  name: string;
}

interface HomeHeaderProps {
  regions: Region[];
}

const HomeHeader = ({ regions }: HomeHeaderProps) => {
  const { isLoggedIn } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedRegion = useMemo(() => {
    const address = regions[0].name;
    const region = getRegion(address);

    return region;
  }, []);

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
        {regions.map(({ id, name }) => (
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
