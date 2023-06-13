import styled, { css } from 'styled-components';

interface ButtonProps {
  buttontype: 'circle' | 'rectangle' | 'category';
  buttonstate: 'default' | 'active';
  justifycontent: 'center' | 'between';
}

const Button = styled.button<ButtonProps>`
  ${({ buttontype }) => typeStyles[buttontype]}
  ${({ buttonstate }) => buttonStateStyles[buttonstate]}
  ${({ justifycontent }) => justifycontentStyles[justifycontent]}

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const typeStyles = {
  circle: css`
    width: 56px;
    height: 56px;
    padding: 10px;

    border-radius: 56px;
    background-color: ${({ theme }) => theme.colors.accent.background.primary};

    color: ${({ theme }) => theme.colors.accent.text.default};
  `,

  rectangle: css`
    width: 178px;
    height: 52px;
    padding: 16px 20px;

    border-radius: 8px;

    font-size: 15px;
  `,

  category: css`
    width: 63px;
    height: 32px;
    padding: 0px 16px;

    border-radius: 50px;

    font-size: 12px;
  `,
};

const buttonStateStyles = {
  default: css`
    background-color: ${({ theme }) => theme.colors.neutral.background.default};

    color: ${({ theme }) => theme.colors.neutral.text.strong};
  `,
  active: css`
    background-color: ${({ theme }) => theme.colors.accent.background.primary};

    color: ${({ theme }) => theme.colors.accent.text.default};
  `,
};

const justifycontentStyles = {
  center: css`
    justify-content: center;
  `,
  between: css`
    justify-content: space-between;
  `,
};

export { Button };