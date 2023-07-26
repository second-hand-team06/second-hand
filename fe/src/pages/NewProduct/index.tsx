import { useState, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { REQUEST_URL } from '@constants/index';
import { ICON_NAME, PATH } from '@constants/index';

import useFetch, { REQUEST_METHOD } from '@hooks/useFetch';

import Icon from '@components/common/Icon';
import ImageInput from '@components/ImageInput';
import TitleInput from '@components/TitleInput';
import CategoryList from '@components/CategoryList';
import ModalPortal from '@components/ModalPortal';
import * as S from './style';

export interface Category {
  id: number;
  name: string;
}

interface UseFetchProps {
  id: number;
}

interface Region {
  id: number;
  name: string;
}

interface regionData {
  regions: Region[];
}

const NewProduct = () => {
  const token = localStorage.getItem('Token');
  const options: RequestInit = {
    method: REQUEST_METHOD.GET,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  };

  const { responseState: getRegionState, data: regionData } = useFetch<regionData>({
    url: REQUEST_URL.USER_REGIONS,
    options,
  });

  console.log(regionData?.regions[0].name.split(' ')[2]);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [category, setCategory] = useState({
    id: 0,
    name: '',
  });

  const categoryToggleClickHandler = () => {
    setIsOpenCategory((prev) => !prev);
  };

  const categorySelectClickHandler = ({ id, name }: Category) => {
    setCategory({
      id,
      name,
    });
  };

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const [region, setRegion] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const { responseState, fetchData, data } = useFetch<UseFetchProps>({
    url: REQUEST_URL.POSTS,
    options: {
      method: REQUEST_METHOD.POST,
      headers: { Authorization: `Bearer ${localStorage.getItem('Token')}` },
    },
    skip: true,
  });

  const submitHandler = async () => {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('regionId', `${1}`);
    formData.append('categoryId', category.id.toString());
    formData.append('price', price);
    formData.append('badgeId', `${1}`);
    formData.append('content', content);

    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        formData.append('photos', images[i]);
      }
    }

    if (responseState === 'IDLE') {
      await fetchData(formData);
    }

    if (responseState === 'SUCCESS') {
      navigate(`${PATH.PRODUCT_DETAIL}/${data?.id}`, { state: { beforePage: PATH.NEW_PRODUCT } });
    }

    if (responseState === 'ERROR') {
      alert('상품 상태 수정에 실패했습니다.');
      return;
    }
  };

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

  return (
    <>
      {isOpenCategory && (
        <ModalPortal>
          <CategoryList
            category={category}
            onCategoryToggleClick={categoryToggleClickHandler}
            onCategorySelectClick={categorySelectClickHandler}
          />
        </ModalPortal>
      )}
      <S.Header>
        <Link to={PATH.HOME}>
          <S.CloseButton>닫기</S.CloseButton>
        </Link>
        <span>내 물건 팔기</span>
        <S.CompleteButton onClick={submitHandler}>완료</S.CompleteButton>
      </S.Header>
      <S.LayoutContent>
        <ImageInput onChange={imageUploadHandler} onDelete={deleteImageHandler} images={images} />
        <TitleInput
          title={title}
          category={category}
          onChange={titleChangeHandler}
          onCategoryToggleClick={categoryToggleClickHandler}
          onCategorySelectClick={categorySelectClickHandler}
        />
        <S.TextInput onChange={priceChangeHandler} placeholder="₩ 가격 (선택사항)" />
        <S.TextArea
          onChange={contentChangeHandler}
          placeholder={`${
            getRegionState === 'SUCCESS' ? regionData?.regions[0].name.split(' ')[2] : ''
          }에 올릴 게시물 내용을 작성해주세요.(판매금지 물품은 게시가 제한될 수 있어요.)`}
        />
      </S.LayoutContent>
      <S.TabBar>
        <S.RegionSettingButton>
          <Icon name={ICON_NAME.REGION_SETTING} fill="black" />
          <span>{getRegionState === 'SUCCESS' ? regionData?.regions[0].name.split(' ')[2] : ''}</span>
        </S.RegionSettingButton>
        <S.Keyboard>
          <Icon name={ICON_NAME.KEYBOARD} fill="black" />
        </S.Keyboard>
      </S.TabBar>
    </>
  );
};

export default NewProduct;
