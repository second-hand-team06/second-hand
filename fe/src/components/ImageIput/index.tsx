import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import * as S from './style';

const ImageInput = () => {
  return (
    <S.ImageInput>
      <S.Label htmlFor="ImageUpload">
        <Icon name={ICON_NAME.CAMERA} />
        <span>2/10</span>
      </S.Label>
      <S.Input type="file" id="ImageUpload" accept="image/*" multiple />
    </S.ImageInput>
  );
};

export default ImageInput;
