import * as S from './style';

interface ButtonProps {
  buttonType?: 'circle' | 'rectangle' | 'category';
  buttonState?: 'default' | 'active';
  children: React.ReactNode;
}

const Button = ({ buttonType = 'circle', buttonState = 'default', children }: ButtonProps) => {
  return (
    <S.Button buttontype={buttonType} buttonstate={buttonState}>
      {children}
    </S.Button>
  );
};

export default Button;
