import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 44px;
  padding: 0 9px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;

  width: 105px;
  height: 42px;

  font-size: ${({ theme }) => theme.fonts.body.regular.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.regular.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.regular.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const SenderName = styled.span`
  font-size: ${({ theme }) => theme.fonts.body.bold.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.bold.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.bold.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 16px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};

  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

const ProductPhotoUrl = styled.img`
  width: 48px;
  height: 48px;

  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 8px;

  object-fit: cover;
`;

const ProductTitle = styled.span`
  font-size: ${({ theme }) => theme.fonts.subhead.fontSize};
  font-weight: ${({ theme }) => theme.fonts.subhead.fontWeight};
  line-height: ${({ theme }) => theme.fonts.subhead.lineHeight};
`;

const ProductPrice = styled.span`
  font-size: 15px;
  font-style: normal;
  font-weight: 510;
  line-height: 22px;
`;

const TitleAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 83px;
  padding: 4px 16px;

  background-color: ${({ theme }) => theme.colors.neutral.background.weak};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const Input = styled.input`
  width: 100%;
  height: 36px;
  padding: 4px 12px;

  background-color: ${({ theme }) => theme.colors.neutral.background.default};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 18px;

  font-size: ${({ theme }) => theme.fonts.body.regular.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.regular.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.regular.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
`;

const SendMessageButton = styled.button`
  width: 28px;
  height: 28px;

  background-color: ${({ theme }) => theme.colors.accent.background.primary};
  border-radius: 50%;

  & > svg {
    fill: ${({ theme }) => theme.colors.accent.text.default};
  }
`;

export {
  Header,
  BackButton,
  SenderName,
  Product,
  ProductPhotoUrl,
  ProductTitle,
  ProductPrice,
  TitleAndPrice,
  ToolBar,
  Input,
  SendMessageButton,
};
