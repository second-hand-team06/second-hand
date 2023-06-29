import styled from 'styled-components';

const InputTitleLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const InputTitle = styled.input`
  width: 100%;
  height: 22px;

  font-size: ${({ theme }) => theme.fonts.subhead.fontSize};
  font-weight: ${({ theme }) => theme.fonts.subhead.fontWeight};
  line-height: ${({ theme }) => theme.fonts.subhead.lineHeight};
`;

const CategoryList = styled.li`
  display: flex;
  gap: 5px;

  height: 22px;
`;

const CategoryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: 32px;
  padding: 0 16px;

  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};

  font-size: ${({ theme }) => theme.fonts.caption1.fontSize};
  font-weight: ${({ theme }) => theme.fonts.caption1.fontWeight};
  line-height: ${({ theme }) => theme.fonts.caption1.lineHeight};
`;

const CategoryLayout = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export { InputTitleLayout, InputTitle, CategoryList, CategoryItem, CategoryLayout };