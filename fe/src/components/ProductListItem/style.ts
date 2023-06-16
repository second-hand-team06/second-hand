import styled from 'styled-components';

const Title = styled.header`
  font-size: ${({ theme }) => theme.fonts.subhead.fontSize};
  font-weight: ${({ theme }) => theme.fonts.subhead.fontWeight};
  line-height: ${({ theme }) => theme.fonts.subhead.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const LocationAndTime = styled.span`
  font-size: ${({ theme }) => theme.fonts.fontnote.fontSize};
  font-weight: ${({ theme }) => theme.fonts.fontnote.fontWeight};
  line-height: ${({ theme }) => theme.fonts.fontnote.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
`;

const StateBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 22px;

  background-color: ${({ theme }) => theme.colors.accent.background.secondary};
  border-radius: 8px;

  font-size: ${({ theme }) => theme.fonts.caption1.fontSize};
  font-weight: ${({ theme }) => theme.fonts.caption1.fontWeight};
  line-height: ${({ theme }) => theme.fonts.caption1.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const Price = styled.span`
  font-size: ${({ theme }) => theme.fonts.headline.fontSize};
  font-weight: ${({ theme }) => theme.fonts.headline.fontWeight};
  line-height: ${({ theme }) => theme.fonts.headline.lineHeight};
  color: ${({ theme }) => theme.colors.accent.text.strong};
`;

const StateAndPrice = styled.div`
  display: flex;
  gap: 4px;
`;

const ChatAndLike = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;

  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const IconTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ItemInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;

  height: 68px;
`;

const ProductListItem = styled.div`
  display: flex;
  gap: 15px;

  width: 100%;
  height: 150px;
  padding: 15px 0px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

export {
  Title,
  LocationAndTime,
  StateBadge,
  Price,
  StateAndPrice,
  ChatAndLike,
  IconTextBox,
  ItemInformation,
  ProductListItem,
};