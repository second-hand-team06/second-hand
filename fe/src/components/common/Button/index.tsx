import * as S from './style';

interface ButtonProps {
  buttonType?: 'circle' | 'rectangle' | 'category';
  buttonState?: 'default' | 'active';
  justifyContent?: 'center' | 'between';
  children: React.ReactNode;
}

const Button = ({
  buttonType = 'circle',
  buttonState = 'default',
  justifyContent = 'center',
  children,
}: ButtonProps) => {
  return (
    <S.Button buttontype={buttonType} buttonstate={buttonState} justifycontent={justifyContent}>
      {children}
    </S.Button>
  );
};

export default Button;
