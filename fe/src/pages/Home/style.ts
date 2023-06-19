import styled from 'styled-components';

import Button from '@components/common/Button';

const NewProductButton = styled(Button)`
  position: fixed;
  bottom: 107px;
  right: 24px;
`;

const ProductListLayout = styled.div`
  margin-top: 44px;
  margin-bottom: 83px;
  height: calc(100vh - 44px - 83px);
  overflow-y: scroll;
`;

export { NewProductButton, ProductListLayout };
