import styled from 'styled-components';

const LoginPageButton = styled.button`
  height: 52px;
  padding: 16px 20px;

  background-color: ${({ theme }) => theme.colors.accent.background.primary};
  border-radius: 8px;

  font-size: ${({ theme }) => theme.fonts.subhead.fontSize};
  font-weight: ${({ theme }) => theme.fonts.subhead.fontWeight};
  line-height: ${({ theme }) => theme.fonts.subhead.lineHeight};
  color: ${({ theme }) => theme.colors.accent.text.default};
`;

export { LoginPageButton };
