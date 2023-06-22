import styled from 'styled-components';

const ProductList = styled.div`
  height: 100%;
  padding: 0 16px;
`;

const Target = styled.div`
  height: 1px;
`;

const ProductNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme }) => theme.fonts.callout.fontSize};
  font-weight: ${({ theme }) => theme.fonts.callout.fontWeight};
  line-height: ${({ theme }) => theme.fonts.callout.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

export { ProductList, Target, ProductNotFound };
