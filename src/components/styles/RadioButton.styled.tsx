import { styled, theme } from 'twin.macro';

const RadioButton = styled.div`
  width: 22px;
  height: 22px;
  background-color: ${theme`colors.white`};

  box-sizing: border-box;
  border-radius: 17.5px;

  ${({ selected }: { selected?: boolean }) =>
    selected
      ? `border: 2px solid ${theme`colors.primaryBlue`};`
      : `border: 2px solid #dfdee2;`}

  &:hover {
    border: 2px solid ${theme`colors.primaryBlue`};
  }
  cursor: pointer;
`;

export default RadioButton;
