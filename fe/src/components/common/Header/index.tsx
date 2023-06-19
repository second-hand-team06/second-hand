import HomeHeader from './HomeHeader';

interface HeaderProps {
  type: 'home' | 'sales' | 'search';
}

const Header = ({ type }: HeaderProps) => {
  if (type === 'home') return <HomeHeader />;

  return null;
};

export default Header;
