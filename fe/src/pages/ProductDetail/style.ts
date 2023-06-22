import styled from 'styled-components';

import Button from '@components/common/Button';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;

  width: 100%;
  height: 44px;
  padding: 16px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
`;

const SellerInfo = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 16px;

  background-color: ${({ theme }) => theme.colors.neutral.background.weak};
  border-radius: 12px;

  font-size: ${({ theme }) => theme.fonts.body.regular.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.regular.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.regular.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const PostStateDropDown = styled.div`
  width: 106px;
`;

const OpenModalButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 106px;
  height: 32px;
  padding: 0px 16px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};

  font-size: ${({ theme }) => theme.fonts.caption1.fontSize};
  font-weight: ${({ theme }) => theme.fonts.caption1.fontWeight};
  line-height: ${({ theme }) => theme.fonts.caption1.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};

  & svg {
    fill: ${({ theme }) => theme.colors.neutral.text.strong};
  }
`;

export { Header, ProductInfo, SellerInfo, PostStateDropDown, OpenModalButton };
