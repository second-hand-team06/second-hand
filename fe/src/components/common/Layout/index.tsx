import { ReactNode } from 'react';

import * as S from './style';
import logo from '@assets/logo.png';
import background from '@assets/background.png';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Layout>
      <S.DesktopView>
        <S.Background src={background} />
      </S.DesktopView>
      <S.TitleLayout>
        <S.Logo src={logo} />
        <S.TitleBox>
          <S.Title>
            우리 동네 중고
            <br />
            직거래 마켓
          </S.Title>
          <S.Description>
            동네 주민들과 가깝고
            <br />
            따뜻한 거래를 지금 경험해보세요.
          </S.Description>
        </S.TitleBox>
      </S.TitleLayout>
      <S.MobileView>
        <div id="modal-root"></div>
        {children}
      </S.MobileView>
    </S.Layout>
  );
};

export default Layout;
