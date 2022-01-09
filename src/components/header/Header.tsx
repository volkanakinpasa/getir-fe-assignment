import tw, { styled, theme } from 'twin.macro';

import logo from '../../assets/logo.png';

const HeaderStyle = styled.header`
  background: ${theme`colors.primaryBlue`};
  width: 100%;
  height: 76px;

  img {
    width: 141px;
    height: 40px;
  }
  ${tw`flex items-center justify-center w-full`}
`;

function Header() {
  return (
    <HeaderStyle>
      <img src={logo} alt="getir" />

      {/* 
      <div>
        <BasketSummary />
      </div>
      <div>
        <BasketPopoutContainer />
      </div> */}
    </HeaderStyle>
  );
}

export default Header;
