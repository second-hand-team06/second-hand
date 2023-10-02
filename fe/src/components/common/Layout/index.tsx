import { ReactNode } from 'react';

import image from '@assets/desktopBackground.jpg';
import * as S from './style';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Layout>
      <S.DesktopView>
        {/* <S.Image src={image} alt="background-image" /> */}
      </S.DesktopView>
      <S.MobileView>{children}</S.MobileView>
    </S.Layout>
  );
};

export default Layout;
