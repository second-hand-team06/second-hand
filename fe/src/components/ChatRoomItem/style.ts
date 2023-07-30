import styled from 'styled-components';

const SenderImg = styled.img`
  width: 48px;
  height: 48px;

  border-radius: 50%;
`;

const SenderName = styled.span`
  font-size: ${({ theme }) => theme.fonts.subhead.fontSize};
  font-weight: ${({ theme }) => theme.fonts.subhead.fontWeight};
  line-height: ${({ theme }) => theme.fonts.subhead.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

const SendedTime = styled.span`
  font-size: ${({ theme }) => theme.fonts.footnote.fontSize};
  font-weight: ${({ theme }) => theme.fonts.footnote.fontWeight};
  line-height: ${({ theme }) => theme.fonts.footnote.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
`;

const LastMessageContent = styled.span`
  font-size: ${({ theme }) => theme.fonts.footnote.fontSize};
  font-weight: ${({ theme }) => theme.fonts.footnote.fontWeight};
  line-height: ${({ theme }) => theme.fonts.footnote.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const UnreadCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  background-color: ${({ theme }) => theme.colors.accent.background.primary};
  border-radius: 50%;

  font-size: ${({ theme }) => theme.fonts.caption2.fontSize};
  font-weight: ${({ theme }) => theme.fonts.caption2.fontWeight};
  line-height: ${({ theme }) => theme.fonts.caption2.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.background.default};
`;

const ProductPhotoUrl = styled.img`
  width: 48px;
  height: 48px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const NameAndTime = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const CountAndPhoto = styled.div`
  display: flex;
  gap: 8px;
`;

const ChatRoomItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 16px;
`;

export {
  SenderImg,
  SenderName,
  SendedTime,
  LastMessageContent,
  UnreadCount,
  ProductPhotoUrl,
  NameAndTime,
  CountAndPhoto,
  ChatRoomItem,
};
