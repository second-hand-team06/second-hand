import styled, { css } from 'styled-components';

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

const NeighborhoodDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;

  color: ${({ theme }) => theme.colors.neutral.text.strong};
  font-size: ${({ theme }) => theme.fonts.headline.fontSize};
  font-weight: ${({ theme }) => theme.fonts.headline.fontWeight};
  line-height: ${({ theme }) => theme.fonts.headline.lineHeight};
`;

const Menu = styled.div<{ selectedregion?: string; region?: string }>`
  display: flex;
  align-items: center;

  height: 45px;
  padding: 0 10px;

  font-size: ${({ theme }) => theme.fonts.callout.fontSize};
  font-weight: ${({ selectedregion, region }) => (region && selectedregion === region ? 590 : 400)};
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

  width: 240px;

  background-color: ${({ theme }) => theme.colors.system.background.default};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.strong};
  border-radius: 12px;

  ${MenuBorderStyles}
`;

export { HomeHeader, NeighborhoodDropdown, Modal, Menu };
