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
  const [isOpen, setIsOpen] = useState(false);

  const clickButtonHandler = () => setIsOpen(!isOpen);

  const clickDropdownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    clickOptionHandler(e);
    setIsOpen(false);
  };

  return (
    <S.DropdownLayout>
      <button onClick={clickButtonHandler}>{DropdownButton}</button>

      {isOpen && (
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
