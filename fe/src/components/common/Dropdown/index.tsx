import { useState } from 'react';
import * as S from './style';

interface Option {
  id: number | string;
  value: string;
}

interface DropdownProps {
  DropdownButton: React.ReactNode;
  selectedValue: string;
  options: Option[];
  clickOptionHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Dropdown = ({ DropdownButton, selectedValue, options, clickOptionHandler }: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const clickButtonHandler = () => setIsDropdownOpen(!isDropdownOpen);

  const clickDropdownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    clickOptionHandler(e);
    setIsDropdownOpen(false);
  };

  return (
    <S.DropdownLayout>
      <button onClick={clickButtonHandler}>{DropdownButton}</button>

      {isDropdownOpen && (
        <S.Dropdown onClick={clickDropdownHandler}>
          {options.map(({ id, value }) => (
            <S.Option key={id} selectedvalue={selectedValue} value={value}>
              {value}
            </S.Option>
          ))}
        </S.Dropdown>
      )}
    </S.DropdownLayout>
  );
};

export default Dropdown;
