import styled from 'styled-components';

const ImageInput = styled.div`
  width : 100%
  height: 110px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  width: 80px;
  height: 80px;
  border-radius: 12px;

  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const Input = styled.input`
  display: none;
`;

export { ImageInput, Label, Input };
