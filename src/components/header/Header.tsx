import BasketSummary from './BasketSummary';
import HeaderStyle from '../styles/Header.styled';
import logo from '../../assets/logo.png';

function Header() {
  return (
    <HeaderStyle>
      <div></div>
      <img src={logo} alt="getir" />
      <BasketSummary />
      {/* 
      <div>
       
      </div>
      <div>
        <BasketPopoutContainer />
      </div> */}
    </HeaderStyle>
  );
}

export default Header;
