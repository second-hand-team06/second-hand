import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ICON_NAME, PATH } from '@constants/index';
import { getRegion } from '@utils/index';

import { useUserContext } from '@context/userContext';

import Icon from '@components/common/Icon';
import Dropdown from '@components/common/Dropdown';
import * as S from './style';

interface Region {
  id: number;
  name: string;
}

interface HomeHeaderProps {
  regions: Region[];
  changeUserRegions: (region: Region[]) => void;
}

const HomeHeader = ({ regions, changeUserRegions }: HomeHeaderProps) => {
  const { isLoggedIn } = useUserContext();

  const navigate = useNavigate();

  const selectedRegion = useMemo(() => {
    const SELECTED_REGION_IDX = 0;

    return regions[SELECTED_REGION_IDX];
  }, [regions]);

  const regionOptions = useMemo(() => {
    const regionOptions = regions.map(({ id, name }) => ({ id, value: getRegion(name) }));

    if (isLoggedIn) {
      return [
        ...regionOptions,
        {
          id: 'region-setting-button',
          value: '내 동네 설정하기',
        },
      ];
    }

    return regionOptions;
  }, [isLoggedIn, regions]);

  const clickRegionHandler = async ({ target }: React.MouseEvent<HTMLDivElement>) => {
    if (!(target instanceof HTMLDivElement)) return;

    const clickedOption = target.textContent;

    if (clickedOption === '내 동네 설정하기') {
      navigate(PATH.REGION_SETTING);
      return;
    }
    if (clickedOption === getRegion(selectedRegion.name)) return;

    const clickedRegion = regions.find(({ name }) => clickedOption === getRegion(name));
    const notClickedRegions = regions.filter(({ name }) => clickedOption !== getRegion(name));

    if (clickedRegion) changeUserRegions([clickedRegion, ...notClickedRegions]);
  };

  return (
    <S.HomeHeader>
      <Dropdown
        DropdownButton={
          <S.DropdownToggleButton>
            <span>{getRegion(selectedRegion.name)}</span>
            <Icon name={ICON_NAME.CHEVRON_DOWN} />
          </S.DropdownToggleButton>
        }
        selectedValue={getRegion(selectedRegion.name)}
        options={regionOptions}
        clickOptionHandler={clickRegionHandler}
      />

      <Link to={PATH.CATEGORY}>
        <Icon name={ICON_NAME.HAMBURGER} />
      </Link>
    </S.HomeHeader>
  );
};

export default HomeHeader;
