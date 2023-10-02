import styled from 'styled-components';

const HomeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;

  width: 100%;
  max-width: 440px;
  height: 48px;
  padding: 11px 16px;

  background-color: ${({ theme }) => theme.colors.neutral.background.default};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const DropdownToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 4px;
`;

export { HomeHeader, DropdownToggleButton };
