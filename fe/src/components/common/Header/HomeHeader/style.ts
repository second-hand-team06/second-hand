import styled from 'styled-components';

const HomeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;

  width: 100%;
  height: 44px;
  padding: 11px 16px;

  background-color: ${({ theme }) => theme.colors.neutral.background.blur};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

export { HomeHeader };
