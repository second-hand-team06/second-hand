import { useState, ChangeEvent } from 'react';
import { REQUEST_URL } from '@constants/index';
import { Link } from 'react-router-dom';
import { ICON_NAME, PATH } from '@constants/index';
import Icon from '@components/common/Icon';
import ImageInput from '@components/ImageInput';
import * as S from './style';
import TitleInput from '@components/TitleInput';

const NewProduct = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [region, setRegion] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const titleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const priceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPrice(value);
  };

  const contentChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  const imageUploadHandler = (selectedFiles: FileList) => {
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray: File[] = selectedFilesArray.map((file: File) => {
      return file;
    });

    setImages((previousImages) => [...previousImages, ...imagesArray]);
  };

  const deleteImageHandler = (image: File) => {
    setImages((previousImages) => previousImages.filter((img) => img !== image));
  };

  const submitHandler = () => {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('regionId', `${1}`);
    formData.append('categoryId', `${1}`);
    formData.append('price', price);
    formData.append('badgeId', `${1}`);
    formData.append('content', content);

    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        formData.append('photos', images[i]);
      }
    }

    fetch(REQUEST_URL.POSTS, {
      method: 'post',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb2dpbl9tZW1iZXIiLCJ1c2VyUHJvZmlsZSI6eyJpZCI6MiwiZ2l0aHViSWQiOjcxMTYyMzkwLCJsb2dpbklkIjoia2ltIHNlb25nZ3l1IiwicHJvZmlsZVVybCI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS83MTE2MjM5MD92PTQifSwiZXhwIjoxNjg5NTgzNzAyfQ.tSyzbXZBhNl2aBj-s69WUNptiybtXF5TtROCGHoPc78',
      },
      body: formData,
    })
      .then((res) => {
        if (res.status === 200) {
          alert('저장 완료');
        } else if (res.status === 403) {
          return res.json();
        }
      })
      .then((res) => {
        console.log('에러 메시지 ->');
      });
  };

  return (
    <S.NewProduct>
      <S.Header>
        <Link to={PATH.HOME}>
          <S.CloseButton>닫기</S.CloseButton>
        </Link>
        <S.HeaderTitle>내 물건 팔기</S.HeaderTitle>
        <S.CompleteButton onClick={submitHandler}>완료</S.CompleteButton>
      </S.Header>
      <S.LayoutContent>
        <ImageInput onChange={imageUploadHandler} onDelete={deleteImageHandler} images={images} />
        <TitleInput onChange={titleChangeHandler} />
        <S.TextInput onChange={priceChangeHandler} placeholder="₩ 가격 (선택사항)" />
        <S.TextArea
          onChange={contentChangeHandler}
          placeholder="역삼1동에 올릴 게시물 내용을 작성해주세요.(판매금지 물품은 게시가 제한될 수 있어요.)"
        />
      </S.LayoutContent>
      <S.TabBar>
        <S.RegionSettingButton>
          <Icon name={ICON_NAME.REGION_SETTING} fill="black" />
          <span>역삼1동</span>
        </S.RegionSettingButton>
        <S.Keyboard>
          <Icon name={ICON_NAME.KEYBOARD} fill="black" />
        </S.Keyboard>
      </S.TabBar>
    </S.NewProduct>
  );
};

export default NewProduct;
