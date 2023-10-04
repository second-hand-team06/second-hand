import styled, { css } from 'styled-components';

import { PALETTE } from '@styles/color';

interface TabProps {
  name: 'home' | 'sales' | 'interests' | 'chatting' | 'myAccount';
  activetab: 'home' | 'sales' | 'interests' | 'chatting' | 'myAccount';
}

const IconColorStyles = css<TabProps>`
  & > svg {
    fill: ${({ name, activetab }) => (name === activetab ? PALETTE.ORANGE : PALETTE.GRAY_800)}
`;

const Tab = styled.div<TabProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  font-size: ${({ theme }) => theme.fonts.caption1.fontSize};
  line-height: ${({ theme }) => theme.fonts.footnote.lineHeight};
  font-weight: ${({ theme }) => theme.fonts.footnote.fontWeight};
  color: ${({ name, activetab, theme }) => (name === activetab ? PALETTE.ORANGE : PALETTE.GRAY_800)};

  ${IconColorStyles}
`;

const TabBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;

  width: 100%;
  max-width: 440px;
  height: 65px;
  padding: 16px 30px;

  background-color: ${({ theme }) => theme.colors.neutral.background.default};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

export { TabBar, Tab };
