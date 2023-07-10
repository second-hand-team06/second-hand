import * as S from './style';

interface Option {
  id: number | string;
  value: string;
}

interface DropdownProps {
  selectedValue: string;
  options: Option[];
  clickHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Dropdown = ({ selectedValue, options, clickHandler }: DropdownProps) => {
  return (
    <S.Dropdown onClick={clickHandler}>
      {options.map(({ id, value }) => (
        <S.Option key={id} id={value} selectedvalue={selectedValue} value={value}>
          {value}
        </S.Option>
      ))}
    </S.Dropdown>
  );
};

export default Dropdown;
