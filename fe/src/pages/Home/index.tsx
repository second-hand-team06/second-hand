import { ICON_NAME } from '@constants/index';

import TabBar from '@components/TabBar';

const Home = () => {
  return (
    <div>
      <span>Home</span>
      <TabBar activeTab="home" />
    </div>
  );
};

export default Home;
