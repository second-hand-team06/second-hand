import styled, { css } from 'styled-components';

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

const ProductImg = styled.img`
  object-fit: cover;
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
  position: relative;

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

const Menu = styled.div<{ selectedstate?: string; state?: string }>`
  display: flex;
  align-items: center;

  height: 45px;
  padding: 0 10px;

  font-size: ${({ theme }) => theme.fonts.callout.fontSize};
  font-weight: ${({ selectedstate, state }) => (state && selectedstate === state ? 590 : 400)};
  line-height: ${({ theme }) => theme.fonts.callout.lineHeight};
`;

const MenuBorderStyles = css`
  & > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  }
`;

const Modal = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;

  width: 240px;

  background-color: ${({ theme }) => theme.colors.system.background.default};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.strong};
  border-radius: 12px;

  ${MenuBorderStyles}
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

const Count = styled.span`
  font-size: ${({ theme }) => theme.fonts.footnote.fontSize};
  font-weight: ${({ theme }) => theme.fonts.footnote.fontWeight};
  line-height: ${({ theme }) => theme.fonts.footnote.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
`;

const CountLayout = styled.div`
  display: flex;
  gap: 8px;
`;

export {
  Header,
  ProductInfo,
  ProductImg,
  SellerInfo,
  PostStateDropDown,
  Menu,
  Modal,
  Title,
  CategoryAndTime,
  Content,
  Count,
  CountLayout,
};
