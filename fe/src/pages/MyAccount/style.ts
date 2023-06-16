import styled from 'styled-components';

const MyAccount = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginButton = styled.button`
  position: absolute;
  bottom: 500px;
  
  width: 80%;
  height: 52px;

  border-radius: 16px;
  background-color: ${({ theme }) =>
    theme.colors.accent.text.weak}; // 로그인 버튼에 대한 theme지정해줘야할지 고민

  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent.text.default};
`;

export { MyAccount, LoginButton };
