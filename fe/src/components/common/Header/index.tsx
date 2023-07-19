import HomeHeader from './HomeHeader';
import SalesHeader from './SalesHeader';
import SearchHeader from './SearchHeader';

interface Region {
  id: number;
  name: string;
}

interface HeaderProps {
  type: 'home' | 'sales' | 'search';
  regions?: Region[];
  changeUserRegions?: (region: Region[]) => void;
}

const Header = ({ type, regions, changeUserRegions }: HeaderProps) => {
  if (type === 'home' && regions && changeUserRegions)
    return <HomeHeader regions={regions} changeUserRegions={changeUserRegions} />;
  if (type === 'search') return <SearchHeader />;
  if (type === 'sales') return <SalesHeader />;

  return null;
};

export default Header;
