import { useEffect, useRef, useState } from 'react';
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const clickButtonHandler = () => {
    setIsOpen(!isOpen);
  };

  const clickDropdownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    clickOptionHandler(e);
    setIsOpen(false);
  };

  const clickOutsideHandler = ({ target }: MouseEvent) => {
    const isOutsideClicked =
      buttonRef.current &&
      !buttonRef.current.contains(target as Node) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(target as Node);

    if (isOutsideClicked) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener('click', clickOutsideHandler);

    return () => window.removeEventListener('click', clickOutsideHandler);
  }, [isOpen]);

  return (
    <S.DropdownLayout>
      <button ref={buttonRef} onClick={clickButtonHandler}>
        {DropdownButton}
      </button>

      {isOpen && (
        <S.Dropdown ref={dropdownRef} onClick={clickDropdownHandler}>
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
