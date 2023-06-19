import HomeHeader from './HomeHeader';
import SalesHeader from './SalesHeader';
import SearchHeader from './SearchHeader';

interface HeaderProps {
  type: 'home' | 'sales' | 'search';
}

const Header = ({ type }: HeaderProps) => {
  if (type === 'home') return <HomeHeader />;
  if (type === 'search') return <SearchHeader />;
  if (type === 'sales') return <SalesHeader />;

  return null;
};

export default Header;
