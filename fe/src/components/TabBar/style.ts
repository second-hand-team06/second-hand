import styled, { css } from 'styled-components';

interface TabProps {
  name: 'home' | 'sales' | 'interests' | 'chatting' | 'myAccount';
  activetab: 'home' | 'sales' | 'interests' | 'chatting' | 'myAccount';
}

const IconColorStyles = css<TabProps>`
  & > svg {
    fill: ${({ name, activetab, theme }) =>
      theme.colors.neutral.text[name === activetab ? 'strong' : 'weak']};
  }
`;

const Tab = styled.nav<TabProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;

  font-size: ${({ theme }) => theme.fonts.fontnote.fontSize};
  line-height: ${({ theme }) => theme.fonts.fontnote.lineHeight};
  font-weight: ${({ theme }) => theme.fonts.fontnote.fontWeight};
  color: ${({ name, activetab, theme }) => theme.colors.neutral.text[name === activetab ? 'strong' : 'weak']};

  ${IconColorStyles}
`;

const TabBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 83px;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.neutral.background.weak};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

export { TabBar, Tab };
