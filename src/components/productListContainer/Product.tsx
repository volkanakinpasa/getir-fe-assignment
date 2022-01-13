import { fontSize12, fontSize14, lineHeight20 } from '../styles/common.styled';
import tw, { css, styled } from 'twin.macro';

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
  ${lineHeight20}
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  ${tw`mt-2 text-primaryBlue`}
`;
const productName = css`
  height: 40px;
  font-weight: 600;
  ${fontSize14}
  ${lineHeight20}

  color: #191919;
`;
const addButton = css`
  width: 100%;
  height: 22px;
  text-align: center;
  ${fontSize12}
  ${tw`mt-2 flex items-center justify-center text-primaryWhite bg-primaryBlue`}
`;
interface IProductProps {
  imageUrl?: string;
  price: number;
  name: string;
}

function Product(props: IProductProps) {
  return (
    <ProductContainer2>
      <ProductContainer>
        <ProductImage
          src="https://getir.com/_next/image?url=https%3A%2F%2Flanding-strapi-images-development.s3.eu-west-1.amazonaws.com%2Fgetir_groceries_342882c582.svg&w=3840&q=75"
          title="title"
        ></ProductImage>
        <div css={[price]}>₺ {props.price}</div>
        <div css={[productName]}>{props.name}</div>
        <button css={[addButton]}>Add</button>
      </ProductContainer>
    </ProductContainer2>
  );
}

export default Product;
