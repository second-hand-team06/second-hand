import styled, { css } from 'styled-components';

const Option = styled.div<{ selectedvalue?: string; value?: string }>`
  display: flex;
  align-items: center;

  height: 40px;
  padding: 0 10px;

  font-size: ${({ theme }) => theme.fonts.subhead.fontSize};
  font-weight: ${({ selectedvalue, value }) => (value && selectedvalue === value ? 590 : 400)};
  line-height: ${({ theme }) => theme.fonts.subhead.lineHeight};

  cursor: pointer;
`;

const MenuBorderStyles = css`
  & > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;

  width: 200px;

  background-color: ${({ theme }) => theme.colors.system.background.default};
  border: 1px solid  ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 10px;
  
  ${MenuBorderStyles}
`;

const DropdownLayout = styled.div`
  position: relative;
`;

export { Option, Dropdown, DropdownLayout };
