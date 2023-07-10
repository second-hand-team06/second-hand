import * as S from './style';

interface Option {
  id: number | string;
  value: string;
}

interface DropdownProps {
  selectedValue: string;
  options: Option[];
  selectHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Dropdown = ({ selectedValue, options, selectHandler }: DropdownProps) => {
  return (
    <S.Dropdown onClick={selectHandler}>
      {options.map(({ id, value }) => (
        <S.Option key={id} id={value} selectedvalue={selectedValue} value={value}>
          {value}
        </S.Option>
      ))}
    </S.Dropdown>
  );
};

export default Dropdown;
