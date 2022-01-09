import tw, { css, styled } from 'twin.macro';

import ProductList from './productListContainer/ProductList';

const ProductListContainerStyle = styled.div`
  ${tw`w-full h-full`}
  max-width: 608px;
`;

const ProductListStyle = styled.div`
  ${tw`w-full mt-4`}
  background: #FFFFFF;
  border-radius: 2px;
  box-shadow: 0px 4px 24px 0px #5d3ebc0a;
  padding: 20px;
`;

function ProductListContainer() {
  return (
    <ProductListContainerStyle>
      <ProductListStyle>
        <ProductList />
      </ProductListStyle>
    </ProductListContainerStyle>
  );
}

export default ProductListContainer;
