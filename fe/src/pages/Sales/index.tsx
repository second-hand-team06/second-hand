import TabBar from '@components/TabBar';
import Layout from '@components/common/Layout';

const Sales = () => {
  return (
    <Layout>
      <span>Sales</span>
      <TabBar activeTab="sales" />
    </Layout>
  );
};

export default Sales;
