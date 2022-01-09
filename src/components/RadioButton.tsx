import tw, { css, styled } from 'twin.macro';

import IconChecked from './styles/IconChecked';

const RadioButtonStyle = styled.div`
  width: 22px;
  height: 22px;
  background: #ffffff;

  box-sizing: border-box;
  border-radius: 17.5px;

  ${({ selected }: { selected?: boolean }) =>
    selected ? `border: 2px solid #1ea4ce;` : `border: 2px solid #dfdee2;`}

  &:hover {
    border: 2px solid #1ea4ce;
  }
  cursor: pointer;
`;

function RadioButton({
  selected,
  onClick,
}: {
  selected?: boolean;
  onClick: any;
}) {
  return (
    <RadioButtonStyle onClick={onClick} selected={selected}>
      {selected && <IconChecked />}
    </RadioButtonStyle>
  );
}

export default RadioButton;
