import TabBar from '@components/TabBar';
import ProductList from '@components/ProductList';

const Home = () => {
  return (
    <div>
      <span>Home</span>
      <ProductList />;
      <TabBar activeTab="home" />
    </div>
  );
};

export default Home;
