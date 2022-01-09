import tw, { css, styled } from 'twin.macro';

import Product from './Product';

const ProductListContainer = styled.div`
  ${tw`w-full flex items-center justify-center h-full grid gap-5 grid-cols-2 sm:grid-cols-4`}
`;

function ProductList() {
  return (
    <ProductListContainer>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </ProductListContainer>
  );
}

export default ProductList;
