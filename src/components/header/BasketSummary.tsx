import { ReactComponent as BasketLogo } from '../../assets/basket.svg';
import BasketSummaryStyle from '../styles/BasketSummary.styled';

function BasketSummary() {
  return (
    <BasketSummaryStyle>
      <span>
        <BasketLogo />
      </span>
      <span>price</span>
    </BasketSummaryStyle>
  );
}

export default BasketSummary;
