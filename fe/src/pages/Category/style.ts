import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 45px;

  height: 44px;
  padding: 0 9px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const HeaderTitle = styled.span`
  font-size: ${({ theme }) => theme.fonts.body.bold.fontSize};
  font-weight: ${({ theme }) => theme.fonts.body.bold.fontWeight};
  line-height: ${({ theme }) => theme.fonts.body.bold.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

const BackButton = styled.button`
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

const CategoryImg = styled.img`
  width: 44px;
  height: 44px;

  border-radius: 8px;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 80px;
  height: 68px;

  font-size: ${({ theme }) => theme.fonts.fontnote.fontSize};
  font-weight: ${({ theme }) => theme.fonts.fontnote.fontWeight};
  line-height: ${({ theme }) => theme.fonts.fontnote.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

export { Header, BackButton, HeaderTitle, EmptyTag, CategoryImg, CategoryItem };
