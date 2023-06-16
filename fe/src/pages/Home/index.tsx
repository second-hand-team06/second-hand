import Header from '@components/common/Header';
import ProductList from '@components/ProductList';
import TabBar from '@components/TabBar';

const Home = () => {
  return (
    <>
      <Header />
      <ProductList />
      <TabBar activeTab="home" />
    </>
  );
};

export default Home;
