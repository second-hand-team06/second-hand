import HomeHeader from './HomeHeader';
import SearchHeader from './SearchHeader';

interface HeaderProps {
  type: 'home' | 'sales' | 'search';
}

const Header = ({ type }: HeaderProps) => {
  if (type === 'home') return <HomeHeader />;
  if (type === 'search') return <SearchHeader />;

  return null;
};

export default Header;
