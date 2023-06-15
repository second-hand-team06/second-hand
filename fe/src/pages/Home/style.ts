import styled from 'styled-components';

const NavigationBar = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 44px;
  padding: 11px 16px;

  background-color: ${({ theme }) => theme.colors.neutral.background.blur};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const NeighborhoodSettingLink = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  color: ${({ theme }) => theme.colors.neutral.text.strong};
  font-size: ${({ theme }) => theme.fonts.headline.fontSize};
  font-weight: ${({ theme }) => theme.fonts.headline.fontWeight};
  line-height: ${({ theme }) => theme.fonts.headline.lineHeight};
`;

export { NavigationBar, NeighborhoodSettingLink };
