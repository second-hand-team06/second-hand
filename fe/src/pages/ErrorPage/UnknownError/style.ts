import styled from 'styled-components';

const LogoImg = styled.img`
  width: 200px;
  height: 200px;
`;

const Message = styled.span`
  font-size: ${({ theme }) => theme.fonts.title3.regular.fontSize};
  font-weight: ${({ theme }) => theme.fonts.title3.regular.fontWeight};
  line-height: ${({ theme }) => theme.fonts.title3.regular.lineHeight};
`;

const HomeButton = styled.button`
  width: 80%;
  height: 52px;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.accent.background.primary};

  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent.text.default};
`;

const UnknownError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 100%;
  height: 100%;
`;

export { LogoImg, Message, HomeButton, UnknownError };
