import * as S from './style';

interface ButtonProps {
  className?: string;
  buttonType: 'circle' | 'rectangle' | 'category';
  buttonState?: 'default' | 'active';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ className, buttonType, buttonState = 'default', children, onClick }: ButtonProps) => {
  return (
    <S.Button className={className} buttontype={buttonType} buttonstate={buttonState} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
