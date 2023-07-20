import styled from 'styled-components';

const CategoryList = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.neutral.background.default};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 44px;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.neutral.background.blur};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const HeaderTitle = styled.span`
  font-size: ${({ theme }) => theme.fonts.body.bold.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.bold.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.bold.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100px;

  font-size: ${({ theme }) => theme.fonts.body.regular.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.regular.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.regular.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

const EmptyTag = styled.div`
  width: 100px;
`;

const CategoryListLayout = styled.ul`
  margin: 0 16px;
`;

const CategoryItem = styled.li`
  padding: 16px 0px;

  font-size: ${({ theme }) => theme.fonts.subhead.fontSize};
  font-weight: ${({ theme }) => theme.fonts.subhead.fontWeight};
  line-height: ${({ theme }) => theme.fonts.subhead.lineHeight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

export { CategoryList, Header, HeaderTitle, CloseButton, EmptyTag, CategoryListLayout, CategoryItem };
