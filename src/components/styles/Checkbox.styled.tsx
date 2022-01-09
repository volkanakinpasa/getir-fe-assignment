import { styled, theme } from 'twin.macro';

const Checkbox = styled.div`
  width: 22px;
  height: 22px;

  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
  border-radius: 2px;

  ${({ selected }: { selected?: boolean }) =>
    selected
      ? `background-color: ${theme`colors.primaryBlue`};color:${theme`colors.primaryWhite`};`
      : `background-color: ${theme`colors.primaryWhite`};color:${theme`colors.primaryBlue`};`}

  cursor: pointer;
`;

export default Checkbox;
