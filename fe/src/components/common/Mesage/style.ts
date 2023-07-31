import styled, { css } from 'styled-components';

const MessageTypeStyles = {
  you: css`
    background-color: #d9d9d9;
    color: ${({ theme }) => theme.colors.neutral.text.strong};
  `,
  me: css`
    background-color: ${({ theme }) => theme.colors.accent.background.primary};
    color: ${({ theme }) => theme.colors.accent.text.default};
  `,
};

const Message = styled.div<{ type: 'me' | 'you' }>`
  width: 267px;
  padding: 6px 12px;

  border-radius: 18px;

  white-space: pre-wrap;
  ${({ type }) => MessageTypeStyles[type]}
`;

export { Message };
