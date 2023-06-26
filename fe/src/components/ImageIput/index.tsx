import { useState } from 'react';

import { ICON_NAME } from '@constants/index';

import Icon from '@components/common/Icon';
import * as S from './style';

const ImageInput = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const MAX_IMAGE_LENGTH = 10;

  const imageUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files as FileList;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray: string[] = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    e.target.value = '';
  };

  const deleteImageHandler = (image: string) => {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  };

  return (
    <S.ImageInputLayout>
      <S.ImageInput>
        <S.Label htmlFor="ImageUpload">
          <Icon name={ICON_NAME.CAMERA} />
          <span>
            <S.CurrentCount>{selectedImages.length}</S.CurrentCount>/{MAX_IMAGE_LENGTH}
          </span>
        </S.Label>
        <S.Input type="file" id="ImageUpload" accept="image/*" multiple onChange={imageUploadHandler} />
        {selectedImages.map((image, idx) => (
          <S.ImageLayout key={idx}>
            <S.Image src={image} />
            <S.DeleteImageButton onClick={() => deleteImageHandler(image)}>
              <Icon name={ICON_NAME.MULTIPLY} fill="WHITE" />
            </S.DeleteImageButton>
          </S.ImageLayout>
        ))}
      </S.ImageInput>
    </S.ImageInputLayout>
  );
};

export default ImageInput;
