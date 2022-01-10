import tw, { styled, theme } from 'twin.macro';

const Header = styled.header`
  background: ${theme`colors.primaryBlue`};
  position: relative;
  width: 100%;
  height: 76px;

  img {
    width: 141px;
    height: 40px;
    align-self: center;
    justify-self: center;
  }

  div {
    align-self: center;
    justify-self: center;
  }

  ${tw`grid grid-cols-3 items-center justify-center w-full px-6`}
`;

export default Header;
