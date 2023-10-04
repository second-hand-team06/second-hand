import styled from 'styled-components';
import { PALETTE } from '@styles/color';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff8df;

  @media screen and (min-width: 1024px) {
    padding: 0 16px;
  }
`;

const Background = styled.img`
  position: absolute;
  bottom: 0;
`;

const DesktopView = styled.div`
  display: none;
  width: 100vw;
  height: 100vh;
  position: fixed;

  @media screen and (min-width: 950px) {
    display: block;
  }
`;

const TitleLayout = styled.div`
  display: none;

  @media screen and (min-width: 950px) {
    display: flex;
    flex-direction: column;

    width: 400px;
    height: 100vh;
    padding: 80px 0;

    z-index: 100;
  }
`;

const MobileView = styled.div`
  position: relative;
  width: 440px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.neutral.background.default};

  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 8px;
`;

const Image = styled.img`
  width: 100%;
  backgroundsize: cover;
`;

const Logo = styled.img`
  width: 180px;
  margin-bottom: 130px;
`;

const Title = styled.span`
  margin-bottom: 15px;

  font-size: ${({ theme }) => theme.fonts.largeTitle.fontSize};
  font-weight: ${({ theme }) => theme.fonts.largeTitle.fontWeight};
  line-height: ${({ theme }) => theme.fonts.largeTitle.lineHeight};
`;

const Description = styled.span`
  color: ${PALETTE.GRAY_800};
  font-size: ${({ theme }) => theme.fonts.title2.fontSize};
  font-weight: ${({ theme }) => theme.fonts.title2.fontWeight};
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  Layout,
  Background,
  DesktopView,
  MobileView,
  Image,
  Logo,
  Title,
  Description,
  TitleBox,
  TitleLayout,
};
