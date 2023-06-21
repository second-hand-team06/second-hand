import * as S from './style';

const NotFound = () => {
  return (
    <S.NotFound>
      <S.ErrorMessage>404 Page Not Found</S.ErrorMessage>
      <S.PageButton>Home 페이지로 이동</S.PageButton>
      <S.PageButton>이전 페이지로 이동</S.PageButton>
    </S.NotFound>
  );
};

export default NotFound;
