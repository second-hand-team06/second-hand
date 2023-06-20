import * as S from './style';

interface ButtonProps {
  className?: string;
  buttonType: 'circle' | 'rectangle' | 'category';
  buttonState?: 'default' | 'active';
  children: React.ReactNode;
}

const Button = ({ className, buttonType, buttonState = 'default', children }: ButtonProps) => {
  return (
    <S.Button className={className} buttontype={buttonType} buttonstate={buttonState}>
      {children}
    </S.Button>
  );
};

export default Button;
