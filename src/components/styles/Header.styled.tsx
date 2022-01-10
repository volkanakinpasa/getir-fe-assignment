import tw, { styled, theme } from 'twin.macro';

const Header = styled.header`
  background: ${theme`colors.primaryBlue`};
  width: 100%;
  height: 76px;

  img {
    width: 141px;
    height: 40px;
  }
  ${tw`flex items-center justify-center w-full`}
`;

export default Header;
