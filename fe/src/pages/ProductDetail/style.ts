import styled from 'styled-components';

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
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 106px;
  height: 32px;
  margin: 16px 0;
  padding: 0px 16px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 8px;

  font-size: ${({ theme }) => theme.fonts.caption1.fontSize};
  font-weight: ${({ theme }) => theme.fonts.caption1.fontWeight};
  line-height: ${({ theme }) => theme.fonts.caption1.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};

  & svg {
    fill: ${({ theme }) => theme.colors.neutral.text.strong};
  }
`;

const Title = styled.div`
  margin-bottom: 8px;

  font-size: ${({ theme }) => theme.fonts.headline.fontSize};
  font-weight: ${({ theme }) => theme.fonts.headline.fontWeight};
  line-height: ${({ theme }) => theme.fonts.headline.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

const CategoryAndTime = styled.span`
  font-size: ${({ theme }) => theme.fonts.footnote.fontSize};
  font-weight: ${({ theme }) => theme.fonts.footnote.fontWeight};
  line-height: ${({ theme }) => theme.fonts.footnote.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
`;

const Content = styled.div`
  margin: 16px 0;

  font-size: ${({ theme }) => theme.fonts.body.regular.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.regular.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.regular.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};

  white-space: pre-line;
`;

export { Header, ProductInfo, SellerInfo, PostStateDropDown, Title, CategoryAndTime, Content };
