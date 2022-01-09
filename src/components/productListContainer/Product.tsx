import tw, { css, styled, theme } from 'twin.macro';

import ProductImage from './ProductImage';

/** @jsxImportSource @emotion/react */

const ProductContainer2 = styled.div`
  ${tw`w-full flex justify-center`}
`;
const ProductContainer = styled.div`
  ${tw` w-full sm:(w-96)`}
  height: 225px;
  max-width: 124px;
`;

const price = css`
  height: 23px;
  line-height: 20px;
  color: ${theme`colors.primaryBlue`};

  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  ${tw`mt-2`}
`;
const productName = css`
  height: 40px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  color: #191919;
`;
const addButton = css`
  width: 100%;
  height: 22px;
  background: ${theme`colors.primaryBlue`};
  text-align: center;
  color: #ffffff;
  font-size: 12px;
  ${tw`mt-2 flex items-center justify-center`}
`;

function Product() {
  return (
    <ProductContainer2>
      <ProductContainer>
        <ProductImage
          src="https://getir.com/_next/image?url=https%3A%2F%2Flanding-strapi-images-development.s3.eu-west-1.amazonaws.com%2Feveryday_products_d57b2e0bc3.svg&w=256&q=75"
          title="title"
        ></ProductImage>
        <div css={[price]}>₺ 14,99</div>
        <div css={[productName]}>Gorgeous Office Mug</div>
        <button css={[addButton]}>Add</button>
      </ProductContainer>
    </ProductContainer2>
  );
}

export default Product;
