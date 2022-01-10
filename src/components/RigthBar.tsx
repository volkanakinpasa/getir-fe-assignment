import ProductItemType from './productListContainer/ProductItemType';
import ProductList from './productListContainer/ProductList';
import { ProductTitle } from './styles/Title.styled';
import RigthBarStyle from './styles/RightBar.styled';

/** @jsxImportSource @emotion/react */

function RigthBar() {
  return (
    <RigthBarStyle>
      <ProductTitle>Products</ProductTitle>
      <ProductItemType />
      <ProductList />
    </RigthBarStyle>
  );
}

export default RigthBar;
