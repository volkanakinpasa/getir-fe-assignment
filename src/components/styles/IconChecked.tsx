import { styled } from 'twin.macro';

const IconChecked = styled.div`
  width: 100%;
  height: 100%;

  ${({ iconName }: { iconName: string }) =>
    `background: url(./${iconName}.svg) no-repeat center center;`}
`;

export default IconChecked;
