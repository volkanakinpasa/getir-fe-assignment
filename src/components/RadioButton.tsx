import IconChecked from './styles/IconChecked';
import Style from './styles/RadioButton.styled';

function RadioButton({
  selected,
  onClick,
}: {
  selected?: boolean;
  onClick: any;
}) {
  return (
    <Style onClick={onClick} selected={selected}>
      {selected && <IconChecked iconName={'checked'} />}
    </Style>
  );
}

export default RadioButton;
