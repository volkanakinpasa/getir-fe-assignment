import IconChecked from './styles/IconChecked';
import Style from './styles/Checkbox.styled';

function Checkbox({ selected, onClick }: { selected?: boolean; onClick: any }) {
  return (
    <Style onClick={onClick} selected={selected}>
      {selected && <IconChecked iconName={'checked2'}></IconChecked>}
    </Style>
  );
}

export default Checkbox;
