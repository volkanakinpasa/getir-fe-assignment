import tw, { styled } from 'twin.macro';

import Product from './Product';

const ProductListContainer = styled.div`
  ${tw`w-full mt-4`}
  background: #FFFFFF;
  border-radius: 2px;
  box-shadow: 0px 4px 24px 0px #5d3ebc0a;
  padding: 20px;
`;

const ProductListStyle = styled.div`
  ${tw`w-full flex items-center justify-center h-full grid gap-5 grid-cols-2 sm:grid-cols-4`}
`;

function ProductList() {
  return (
    <ProductListContainer>
      <ProductListStyle>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductListStyle>
    </ProductListContainer>
  );
}

export default ProductList;
