import * as S from './style';

interface MessageProps {
  type: 'me' | 'you';
  content: string;
}

const Message = ({ type, content }: MessageProps) => {
  return <S.Message type={type}>{content}</S.Message>;
};

export default Message;
