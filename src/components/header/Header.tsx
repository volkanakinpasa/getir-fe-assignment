import HeaderStyle from '../styles/Header.styled';
import logo from '../../assets/logo.png';

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
