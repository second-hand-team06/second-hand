import * as S from './style';

interface Option {
  id: number | string;
  value: string;
  handler?: () => void;
}

interface DropdownProps {
  children: React.ReactNode;
  selectedValue: string;
  options: Option[];
  isDropdownOpen: boolean;
  openDropdownHandler: () => void;
}

const Dropdown = ({
  children,
  selectedValue,
  options,
  isDropdownOpen,
  openDropdownHandler,
}: DropdownProps) => {
  return (
    <S.DropdownLayout onClick={openDropdownHandler}>
      {children}
      {isDropdownOpen && (
        <S.Dropdown>
          {options.map(({ id, value, handler }) => (
            <S.Option key={id} selectedvalue={selectedValue} value={value} onClick={handler}>
              {value}
            </S.Option>
          ))}
        </S.Dropdown>
      )}
    </S.DropdownLayout>
  );
};

export default Dropdown;
