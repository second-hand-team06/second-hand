import styled from 'styled-components';

import Button from '@components/common/Button';

const Layout = styled.div`
  max-width: 393px;
  height: 853px;
  position: relative;
`;

const GoToTopButton = styled.button`
  position: fixed;
  bottom: 176px;
  right: 30px;

  width: 45px;
  height: 45px;

  background-color: ${({ theme }) => theme.colors.neutral.background.default};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 8px;

  & > svg {
    fill: ${({ theme }) => theme.colors.neutral.text.strong};
  }
`;

const NewProductButton = styled(Button)`
  position: fixed;
  bottom: 107px;
  right: 24px;
`;

const ProductListLayout = styled.div`
  margin-bottom: 65px;
  height: calc(100vh - 48px - 65px);
  overflow-y: scroll;

  background-color: ${({ theme }) => theme.colors.neutral.background.default};

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent.background.primary};
    border-radius: 12px;
  }
`;

export { Layout, GoToTopButton, NewProductButton, ProductListLayout };
