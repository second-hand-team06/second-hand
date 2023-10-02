import styled from 'styled-components';

import imageSrc from '@assets/desktopBackground.jpg';

const Layout = styled.div``;

const DesktopView = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: blue;

  @media screen and (min-width: 1024px) {
    display: block;
    background-image: url(${imageSrc});
    background-size: cover;
  }
`;

const MobileView = styled.div`
  position: relative;
  width: 440px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.neutral.background.default};
`;

const Image = styled.img`
  width: 100%;
  backgroundsize: cover;
`;

export { Layout, DesktopView, MobileView, Image };
